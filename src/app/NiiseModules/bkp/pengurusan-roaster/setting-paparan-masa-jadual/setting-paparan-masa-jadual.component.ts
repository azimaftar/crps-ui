import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  CardModule,
  ButtonModule,
  TableModule,
  ButtonDirective,
  TableDirective,
  ModalModule,
  FormModule,
  FormSelectDirective,
} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilEnvelopeClosed } from '@coreui/icons';
import { ContainerComponent, CardBodyComponent } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import {
  SettingPaparanMasaJadualService,
  RespSettingPaparanMasaJadual,
} from '../../../../services/PengurusanRoster/SettingPaparanMasaJadual/SettingPaparanMasaJadualService';

@Component({
  selector: 'app-setting-paparan-masa-jadual',
  standalone: true,
  imports: [
    RouterModule,
    ContainerComponent,
    ModalModule,
    CommonModule,
    FormsModule,
    FormModule,
    FormSelectDirective,
    CardModule,
    ButtonModule,
    ButtonDirective,
    TableModule,
    TableDirective,
    IconModule,
    CardBodyComponent,
    HttpClientModule,
  ],
  templateUrl: './setting-paparan-masa-jadual.component.html',
  styleUrls: ['../../bkp.scss'],
})
export class SettingPaparanMasaJadualComponent {
  isModalVisible = false;
  isLoading = false;
  errorMessage: string = '';
  private router = inject(Router);
  private paparanService = inject(SettingPaparanMasaJadualService);

  // Mapping untuk dropdown values
  bahagianOptions = [{ value: 'D', label: 'D' }];

  unitOptions = [{ value: 'U01', label: 'U01' }];

  kumpulanOptions = [{ value: '01', label: '01' }];

  bulanOptions = [
    { value: 1, label: '01 - Januari' },
    { value: 2, label: '02 - Februari' },
    { value: 3, label: '03 - Mac' },
    { value: 4, label: '04 - April' },
    { value: 5, label: '05 - Mei' },
    { value: 6, label: '06 - Jun' },
    { value: 7, label: '07 - Julai' },
    { value: 8, label: '08 - Ogos' },
    { value: 9, label: '09 - September' },
    { value: 10, label: '10 - Oktober' },
    { value: 11, label: '11 - November' },
    { value: 12, label: '12 - Disember' },
  ];

  tahunOptions = [
    { value: 2025, label: '2025' },
    { value: 2024, label: '2024' },
    { value: 2023, label: '2023' },
    { value: 2022, label: '2022' },
  ];

  filters = {
    bahagian: '',
    unit: '',
    kumpulan: '',
    bulan: 0,
    tahun: 0,
  };

  searchResults: RespSettingPaparanMasaJadual[] = [];
  hasSearched = false;

  constructor(private iconSet: IconSetService) {
    this.iconSet.icons = { cilEnvelopeClosed };
  }

 onView(selectedPegawai: RespSettingPaparanMasaJadual): void {
  this.router.navigate(
    ['/bkp/pengurusan-roaster/setting-paparan-masa-jadual/jadual-roster'],
    {
      state: {
        formData: {
          bahagian: this.filters.bahagian,
          unit: this.filters.unit,
          kumpulan: this.filters.kumpulan,
          tarikh: selectedPegawai.N003DutyDate,
          kaunter: selectedPegawai.ctrName,
          namaPegawai: selectedPegawai.Name,
          nomborPerkhidmatan: selectedPegawai.NoPerkhidmatan,
          masaMula: selectedPegawai.startTime,
          masaAkhir: selectedPegawai.endTime,
          gredJawatan: selectedPegawai.post,
          catatan: selectedPegawai.remarks,
          userUid: selectedPegawai.userUid, 
        }
      }
    }
  );
}


  async onSearch(form: NgForm) {
    console.log('Search triggered with filters:', this.filters);

    // Validation
    if (!this.filters.bahagian || !this.filters.unit || !this.filters.kumpulan || 
        !this.filters.bulan || !this.filters.tahun) {
      this.showNoDataModal();
      return;
    }

    this.isLoading = true;
    this.hasSearched = true;

    try {
      const request = {
        divisionCd: this.filters.bahagian,
        unitCd: this.filters.unit,
        groupCd: this.filters.kumpulan,
        month: this.filters.bulan,
        year: this.filters.tahun
      };

      this.searchResults = await this.paparanService.getPaparanMasaJadual(request).toPromise() || [];
      
      console.log('API Response:', this.searchResults);

      if (this.searchResults.length === 0) {
        this.showNoDataModal();
      }

    } catch (error) {
      console.error('API Error:', error);
      this.showNoDataModal();
    } finally {
      this.isLoading = false;
    }
  }

  resetSearch() {
    this.filters = {
      bahagian: '',
      unit: '',
      kumpulan: '',
      bulan: 0,
      tahun: 0,
    };
    this.searchResults = [];
    this.hasSearched = false;
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
}
