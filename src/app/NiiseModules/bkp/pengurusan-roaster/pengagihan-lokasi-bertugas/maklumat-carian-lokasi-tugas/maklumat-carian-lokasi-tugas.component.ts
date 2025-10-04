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
} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilEnvelopeClosed } from '@coreui/icons';
import { ContainerComponent, CardBodyComponent } from '@coreui/angular';
import { Router, RouterModule } from '@angular/router';
import {
  MaklumatCarianLokasiService,
  ReqMaklumatCarian,
  RespMaklumatCarian,
} from '../../../../../services/PengurusanRoster/PengagihanLokasiBertugas/MaklumatCarianLokasiService';

@Component({
  selector: 'app-maklumat-carian-lokasi-tugas',
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
    TableModule,
    TableDirective,
    IconModule,
    CardBodyComponent,
  ],
  providers: [IconSetService],
  templateUrl: './maklumat-carian-lokasi-tugas.component.html',
  styleUrls: ['../../pengurusan-roaster.component.scss'],
})
export class MaklumatCarianLokasiTugasComponent {
  isModalVisible = false;
  errorMessage: string = '';

  // ✅ CONSTRUCTOR INJECTION untuk Service & Router
  constructor(
    private router: Router,
    private carianService: MaklumatCarianLokasiService,
    private iconSet: IconSetService
  ) {
    this.iconSet.icons = { cilEnvelopeClosed };
  }

  onView(): void {
    this.router.navigate([
      '/bkp/pengurusan-roaster/pengagihan-lokasi-bertugas/maklumat-lokasi-bertugas',
    ]);
  }

  filters = {
    bahagian: '',
    unit: '',
    kumpulan: '',
  };

  searchResults: RespMaklumatCarian[] = [];
  hasSearched = false;
  isLoading = false;

  onSearch(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      this.errorMessage = 'Sila isi semua medan yang diperlukan.';
      this.hasSearched = true;
      return;
    }

    this.hasSearched = true;
    this.errorMessage = '';

    console.log('Search triggered with filters:', this.filters);

    const noFiltersApplied =
      !this.filters.bahagian && !this.filters.unit && !this.filters.kumpulan;

    if (noFiltersApplied) {
      this.searchResults = [];
      this.hasSearched = false;
      this.showNoDataModal();
      return;
    }

    this.hasSearched = true;
    this.isLoading = true;
    this.errorMessage = '';

    // Map frontend filters to backend parameters
    const requestParams: ReqMaklumatCarian = {
      division_cd: this.filters.bahagian,
      unit_cd: this.filters.unit,
      group: this.filters.kumpulan,
    };

    // ✅ Gunakan service melalui constructor injection
    this.carianService.getMaklumatCarian(requestParams).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.searchResults = response;

        if (this.searchResults.length === 0) {
          this.showNoDataModal();
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('API Error:', error);
        this.errorMessage = 'Ralat sistem. Sila cuba lagi.';
        this.showNoDataModal();
      },
    });
  }

  // editPegawai(pegawai: RespMaklumatCarian) {
  //   console.log('Edit pegawai:', pegawai);
  // }

  resetSearch() {
    this.filters = {
      bahagian: '',
      unit: '',
      kumpulan: '',
    };
    this.searchResults = [];
    this.hasSearched = false;
    this.errorMessage = '';
  }

  showNoDataModal() {
    this.isModalVisible = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeModal() {
    this.isModalVisible = false;
  }

  onModalOk() {
    this.closeModal();
  }

  onDaftar(): void {
    this.router.navigate([
      '/bkp/pengurusan-roaster/pengagihan-lokasi-bertugas/maklumat-carian-lokasi-tugas/maklumat-lokasi-bertugas',
    ]);
  }
}
