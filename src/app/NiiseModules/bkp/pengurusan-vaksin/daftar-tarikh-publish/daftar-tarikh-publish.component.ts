import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import {
  CardModule,
  ButtonModule,
  TableModule,
  ButtonDirective,
  TableDirective,
  ModalModule,
} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilEnvelopeClosed } from '@coreui/icons';
import { ContainerComponent, CardBodyComponent } from '@coreui/angular';
import { RouterModule } from '@angular/router';
//import { ModalSimpanComponent } from '../daftar-kemaskini-vaksin/daftar-vaksin/modal-simpan/modal-simpan.component';
//import { ModalHantarComponent } from '../daftar-kemaskini-vaksin/daftar-vaksin/modal-hantar/modal-hantar.component';
//import { ModalKemaskiniComponent } from '../daftar-kemaskini-vaksin/daftar-vaksin/modal-kemaskini/modal-kemaskini.component';
import { PublishTarikhPaparDTO, PublishTarikhPaparService } from './daftar-tarikh-publish.service';

@Component({
  selector: 'app-daftar-tarikh-publish',
  standalone: true,
  imports: [
    RouterModule,
    ContainerComponent,
    ModalModule,
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    ButtonDirective,
    //ModalHantarComponent,
    //ModalSimpanComponent,
    //ModalKemaskiniComponent,
    TableModule,
    TableDirective,
    IconModule,
    CardBodyComponent,
    
  ],
  templateUrl: './daftar-tarikh-publish.component.html',
  styleUrls: ['../../bkp.scss']
})
export class DaftarTarikhPublishComponent {
// showModalSimpan = false;
isSuccessModalVisible = false;
isHantarModalVisible = false;
isKemaskiniModalVisible = false;
//showModalHantar = false;
//showModalKemaskini = false;
isHantarDone = false;
showHantar = false;
showKemaskini = false;

@ViewChild('searchForm') searchForm!: NgForm;

constructor(
  private iconSet: IconSetService,
  private PublishService: PublishTarikhPaparService,) {
  this.iconSet.icons = { cilEnvelopeClosed };
}

  filters = {
    vaccName: '',
    vaccYear: ''
  };

  model: PublishTarikhPaparDTO = {
  vaccId: '',
  vaccYear: '',
  vaccName: '',
  pubDate: ''
  };

  //function untuk carian/refresh untuk mapping data dan handle error
  private processResults(res: any, forceYA: boolean = false) {
    this.searchResults = (res.result || []).map((v: any) => ({
      ...v,
      pubDate: v.pubDate ? v.pubDate.split('T')[0] : null,
      publishChoice: forceYA ? 'YA' : v.publishChoice // kalau refresh, paksa YA
    }));

    if (this.searchResults.length === 0) {
      this.showNoDataModal();
    }
  }

  selectedRow!: PublishTarikhPaparDTO;
  onSelectRow(row: PublishTarikhPaparDTO) {
    this.selectedRow = row;
  }

  searchResults: any[] = [];
  hasSearched = false; 
  isModalVisible = false;


  onSearch() {
    console.log('Search triggered with filters:', this.filters);

    const noFiltersApplied = !this.filters.vaccName && !this.filters.vaccYear;

    if (noFiltersApplied) {
      this.searchResults = [];
      this.hasSearched = false;
      this.showNoDataModal();
      return;
    }

    this.hasSearched = true;
    this.performSearch();
  }

   performSearch() {
    this.PublishService.getCarianPublish(
      this.filters.vaccName,
      this.filters.vaccYear
    ).subscribe({
      next: (res) => this.processResults(res, false),
      error: (err) => {
        console.error('Error fetching result:', err);
        this.searchResults = [];
        this.showNoDataModal();
      }
    });
  }

  refresh() {
    this.PublishService.getCarianPublish(
      this.filters.vaccName,
      this.filters.vaccYear
    ).subscribe({
      next: (res) => this.processResults(res, true), // paksa YA
      error: (err) => {
        console.error('Error fetching result:', err);
        this.searchResults = [];
      }
    });
  }

  onSimpan(row: any) {
    const payload: PublishTarikhPaparDTO = {
      vaccId: row.vaccId,  
      vaccYear: row.vaccYear,
      vaccName: row.vaccName,
      pubDate: row.publishChoice === 'YA' ? row.pubDate : null,
    };
    console.log("Payload to BE:", payload);
    this.PublishService.simpanPublish(payload).subscribe({
    next: (res) => {
      console.log("Simpan success:", res);
      this.isSuccessModalVisible = true;
    },
    error: (err) => console.error("Simpan error:", err),
    });
    }


  onHantar(selectedRow: PublishTarikhPaparDTO) {
    if (!selectedRow?.id) return;
    this.PublishService.hantarPublish(selectedRow.id).subscribe({
      next: (res) => {
        console.log("Hantar success:", res);
        this.isHantarModalVisible = true;
        this.isHantarDone = true;  
        // this.performSearch();
      },
      error: (err) => console.error("Hantar error", err)
    });
  }

  onKemaskini(row: any) {
  if (!row?.id || !row?.pubDate) {
    console.error("Row is missing id or pubDate");
    return;
  }
  this.PublishService.kemaskiniPublish(row.id, row.pubDate).subscribe({
    next: (res) => {
      console.log("Kemaskini success:", res);
      this.isKemaskiniModalVisible = true;
    },
    error: (err) => console.error("Kemaskini error:", err),
  });
  }


  showNoDataModal() {
    this.isModalVisible = true;
    // Optional: scroll to top if needed
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onVisibleChange(value: boolean) {
    this.isSuccessModalVisible = value;
    this.isHantarModalVisible = value;
    this.isKemaskiniModalVisible = value;
  }

  onModalSimpanClosed() {
  this.isSuccessModalVisible = false;
  this.refresh();
  console.log('Modal Simpan closed');
  }

  onModalHantarClosed() {
    this.isHantarModalVisible = false;
    this.refresh();
    console.log('Modal Hantar closed');
  }

  onModalKemaskiniClosed() {
    this.isKemaskiniModalVisible = false;
    console.log('Modal Kemaskini closed');
  }

  closeModal() {
    this.isModalVisible = false;
    this.isSuccessModalVisible = false;
    this.isHantarModalVisible = false;
    this.isKemaskiniModalVisible = false;
  }

  onModalOk() {
    this.closeModal();
  }

  onSuccessModalOk() {
    this.closeModal();
    this.refresh();
  console.log('Modal Simpan closed');
  }

  onHantarModalOk() {
    this.closeModal();
    this.refresh();
  console.log('Modal Hantar closed');
  }

  onKemaskiniModalOk() {
    this.closeModal();
    this.refresh();
  console.log('Modal Kemaskini closed');
  }

}