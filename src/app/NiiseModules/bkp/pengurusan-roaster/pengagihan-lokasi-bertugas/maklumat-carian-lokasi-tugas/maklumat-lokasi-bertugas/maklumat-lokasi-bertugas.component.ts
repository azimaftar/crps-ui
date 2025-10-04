import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import {
  CardModule,
  ButtonModule,
  TableModule,
  ButtonDirective,
  TableDirective,
  ModalModule,
  FormModule,
  GridModule,
  ContainerComponent,
  CardBodyComponent
} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilEnvelopeClosed } from '@coreui/icons';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { ModalSimpanComponent } from './modal-simpan/modal-simpan.component';
import { ModalHantarComponent } from './modal-hantar/modal-hantar.component';
import { Router, RouterModule } from '@angular/router';
import { DaftarPengagihanLokasiBertugasService, ReqDaftarPengagihanLokasiBertugas, RespDaftarPengagihanLokasiBertugas } from '../../../../../../services/PengurusanRoster/PengagihanLokasiBertugas/DaftarPengagihanLokasiBertugasService';

@Component({
  selector: 'app-maklumat-lokasi-bertugas',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ContainerComponent,
    ModalModule,
    FormModule,
    CardModule,
    ButtonModule,
    ButtonDirective,
    TableModule,
    TableDirective,
    IconModule,
    CardBodyComponent,
    GridModule,
    DragDropModule,
    ModalSimpanComponent,
    ModalHantarComponent,
  ],
  templateUrl: './maklumat-lokasi-bertugas.component.html',
  styleUrls: [
    '../../../pengurusan-roaster.component.scss',
    '../../../../bkp.scss'
  ],
  providers: [IconSetService]
})
export class MaklumatLokasiBertugasComponent {

  constructor(
  private router: Router,
  private carianService: DaftarPengagihanLokasiBertugasService,
  private iconSet: IconSetService
  ) {
    this.iconSet.icons = { cilEnvelopeClosed };
  }

  showModalSimpan = false;
  showModalHantar = false;

  filters = {
    bahagian: '',
    unit: '',
    kumpulan: '',
    tarikh: '',
  };

   searchResults: RespDaftarPengagihanLokasiBertugas[] = [];
    hasSearched = false;
    isLoading = false;
    errorMessage = '';

    kaunterList: string[] = [];
    persons: string[] = [];
    tempohMula: string [] = [];
    tempohAkhir: string [] = [];
    nomborPerkhidmatan: string[] = [];
    gredJawatan: string [] = [];

  onSearch(form: NgForm) {
    console.log('Search triggered with filters, this.filters');

   if (form.invalid) {
    form.control.markAllAsTouched(); // Mark all controls as touched
    this.errorMessage = 'Sila isi semua medan yang diperlukan.';
    this.hasSearched = true;
    return;
  }
    const noFiltersApplied = !this.filters.bahagian && !this.filters.unit && !this.filters.kumpulan;

   if (noFiltersApplied) {
      this.searchResults = [];
      this.hasSearched = false;
      this.kaunterList = [];
      this.persons = [];
      this.tempohMula = [];
      this.tempohAkhir = [];
      this.nomborPerkhidmatan = [];
      this.gredJawatan = [];
      return;
    }

    this.hasSearched = true;
    this.isLoading = true;
    this.errorMessage = '';

    //map frontend filters to backend parameters
    const requestParams: ReqDaftarPengagihanLokasiBertugas = {
         division_cd: this.filters.bahagian,
         unit_cd: this.filters.unit,
         group: this.filters.kumpulan,
         tarikh: this.filters.tarikh
       };

    this.carianService.getMaklumatCarian(requestParams).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.searchResults = response;

        //populate dynamic arrays from backend data
        this.kaunterList = response.map(item => item.Kaunter);
        this.persons = response.map(item => item.Name);
        this.tempohMula = response.map(item => item.N001_START_TIME);
        this.tempohAkhir = response.map(item => item.N001_END_TIME);
        this.nomborPerkhidmatan = response.map(item => item.NOSERV);
        this.gredJawatan = response.map(item => item.Gred);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('API Error:', error);
        this.errorMessage = 'Ralat sistem. Sila cuba lagi.';
        // Reset arrays on error
        this.kaunterList = [];
        this.persons = [];
        this.tempohMula = [];
        this.tempohAkhir = [];
        this.nomborPerkhidmatan = [];
        this.gredJawatan = [];
      }
    });
  }

  onSimpan() {
    console.log('Simpan clicked');
    this.showModalSimpan = true;
  }

  onHantar() {
    console.log('Hantar clicked');
    this.showModalHantar = true;
  }

  onModalSimpanClosed() {
    this.showModalSimpan = false;
    console.log('Modal Simpan closed');
  }

  onModalHantarClosed() {
    this.showModalHantar = false;
    console.log('Modal Hantar closed');
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousIndex !== event.currentIndex) {
      // Reorder all arrays to maintain synchronization
      const newKaunterList = [...this.kaunterList];
      moveItemInArray(newKaunterList, event.previousIndex, event.currentIndex);
      this.kaunterList = newKaunterList;

      const newPersons = [...this.persons];
      moveItemInArray(newPersons, event.previousIndex, event.currentIndex);
      this.persons = newPersons;

      const newTempohMula = [...this.tempohMula];
      moveItemInArray(newTempohMula, event.previousIndex, event.currentIndex);
      this.tempohMula = newTempohMula;

      const newTempohAkhir = [...this.tempohAkhir];
      moveItemInArray(newTempohAkhir, event.previousIndex, event.currentIndex);
      this.tempohAkhir = newTempohAkhir;

      const newNomborPerkhidmatan = [...this.nomborPerkhidmatan];
      moveItemInArray(newNomborPerkhidmatan, event.previousIndex, event.currentIndex);
      this.nomborPerkhidmatan = newNomborPerkhidmatan;

      const newGredJawatan = [...this.gredJawatan];
      moveItemInArray(newGredJawatan, event.previousIndex, event.currentIndex);
      this.gredJawatan = newGredJawatan;
    }
}
}
