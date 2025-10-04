import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { ImgDirective } from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationModalComponent } from '../../../../core/components/notification-modal/notification-modal.component';
import {
  ButtonDirective,
  ColComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormSelectDirective,
} from '@coreui/angular';

@Component({
  selector: 'app-kategori-ntl',
  standalone: true,
  imports: [
    ImgDirective,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonDirective,
    ColComponent,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    FormControlDirective,
    FormDirective,
    FormLabelDirective,
    FormSelectDirective,
    NotificationModalComponent,
  ],
  templateUrl: './kategori-ntl.component.html',
  styleUrl: './kategori-ntl.component.scss',
})
export class KategoriNtlComponent {
  noPengenalan: string = '';
  noPengenalanError: string = '';
  umur: string = '';
  umurError: string = '';

  onUmurChange(value: string) {
    const numericValue = value.replace(/[^0-9]/g, '');

    if (numericValue !== value) {
      this.umurError = 'Sila masukkan nombor sahaja';

      setTimeout(() => {
        this.umur = '';
      }, 2000); //2 second to clear the input value
    } else {
      this.umurError = '';
      this.umur = numericValue;
    }
  }
  onNoPengenalanChange(value: string) {
    const numericValue = value.replace(/[^0-9]/g, '');

    if (numericValue !== value) {
      this.noPengenalanError = 'Sila masukkan nombor sahaja';

      setTimeout(() => {
        this.noPengenalan = '';
      }, 2000); //2 second to clear the input value
    } else {
      this.noPengenalanError = '';
      this.noPengenalan = numericValue;
    }
  }

  activeStep: number = 2;

  steps = [
    {
      number: 1,
      label: ' Maklumat Profil Pengembara',
      route: '../imbasan-ntl',
    },
    { number: 2, label: ' Maklumat Tindakan NTL', route: '../kategori-ntl' },
  ];

  goToStep(step: any): void {
    this.activeStep = step.number;

    this.router.navigate([step.route], { relativeTo: this.route });
  }

  categoryOptions = [
    { value: 'A', label: 'A - Passport Tidak Sah' },
    { value: 'B', label: 'B - Visa Tidak Sah' },
    { value: 'C', label: 'C - Imigran yang Dilarang' },
    { value: 'D', label: 'D - Tiada Hak Masuk Sabah/Sarawak' },
    { value: 'E', label: 'E - Permit/Pas Tidak Dapat Dikeluarkan' },
  ];

  reasonOptions = [
    {
      value: 'A01',
      label: 'A01 - Pasport Tamat Tempoh/Kurang daripada enam (6) bulan atau mengikut Pekeliling Berkuat kuasa bagi pintu masuk darat',
    },
    { value: 'A02', label: 'A02 - Pasport rosak.' },
    {
      value: 'A03',
      label:
        'A03 - Pasport telah ditarik balik penggunaannya oleh Negara Pengeluar.',
    },
    { value: 'A04', label: 'A04 - Muka surat pasport telah penuh.' },
    { value: 'B01', label: 'B01 - Visa tamat tempoh.' },
    { value: 'B02', label: 'B02 - Visa rosak/dirosakkan.' },
    { value: 'B03', label: 'B03 - Visa telah dibatalkan penggunaannya.' },
    {
      value: 'C01',
      label:
        'C01 - Tidak dapat menunjukkan pengembara mempunyai punca pendapatan dan ada kerja yang menanti',
    },
    { value: 'D01', label: 'D01 - Tidak dibenarkan memasuki Sabah/Sarawak.' },
    { value: '99', label: '99 - Lain-lain maklumat.' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}
  showBiometricModal = false;
  showModal = false;
  showModalAlert = false;
  modalTitle = '';
  openBiometricAfterAlert = false;

  // const isScanSuccess = false;//API Semak sini
  //    if(!isScanSuccess){
  //     this.modalTitle = 'Kad ABTC Gagal Imbasan';
  //     this.showBiometricModal = false;
  //     this.showModal = true;
  //     this.showModalAlert = true;
  //     this.openBiometricAfterAlert = true;
  //    }else{
  //
  //  }

  closeModal(): void {
    this.showModal = false;
    this.showModalAlert = false;
    if (this.openBiometricAfterAlert) {
      this.showBiometricModal = true;
      this.openBiometricAfterAlert = false;
    } else {
      this.showBiometricModal = false;
    }
  }
  previousSection(): void {
     this.router.navigate(['../imbasan-ntl'],  {relativeTo: this.route});
  }
}
