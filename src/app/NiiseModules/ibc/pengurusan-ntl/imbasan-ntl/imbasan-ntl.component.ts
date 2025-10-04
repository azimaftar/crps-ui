import { Component, ViewChild, ElementRef ,Input} from '@angular/core';
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
  selector: 'app-imbasan-ntl',
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
  templateUrl: './imbasan-ntl.component.html',
  styleUrl: './imbasan-ntl.component.scss',
})
export class ImbasanNtlComponent {
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

  activeStep: number = 1;

  steps = [
    { number: 1, label: ' Maklumat Profil Pengembara',route: '../imbasan-ntl'},
    { number: 2, label: ' Maklumat Tindakan NTL',route: '../kategori-ntl' }
  ];

  goToStep(step: any): void {
  this.activeStep = step.number;

  this.router.navigate([step.route], { relativeTo: this.route });
}

  
  constructor(private router: Router, private route: ActivatedRoute) {}
  showBiometricModal = false;
  showModal = false;
  showModalAlert = false;
  modalTitle = '';
  openBiometricAfterAlert = false;

  @ViewChild('jenispelawat') jenispelawat!: ElementRef;
  @ViewChild('noDokumen') noDokumen!: ElementRef;
  @ViewChild('warganegara') warganegara!: ElementRef;
  @ViewChild('tarikhtamatdokumen') tarikhtamatdokumen!: ElementRef;

  onSemakClick(): void {
    const fields = new Map([
      ['jenisPelawat', this.jenispelawat.nativeElement.value],
      ['noDokumen', this.noDokumen.nativeElement.value],
      ['warganegara', this.warganegara.nativeElement.value],
      ['tarikhTamatDokumen', this.tarikhtamatdokumen.nativeElement.value],
    ]);

    const messages: { [key: string]: string } = {
      jenisPelawat: 'Jenis (Pelawat) Kosong, Sila isikan Maklumat Berikut.',
      noDokumen: 'Maklumat (No. Dokumen) Kosong, Sila isikan Maklumat Berikut.',
      warganegara:
        'Maklumat (Warganegara) Kosong, Sila isikan Maklumat Berikut.',
      tarikhTamatDokumen:
        'Maklumat (Tarikh Tamat Dokumen Perjalanan) Kosong, Sila isikan Maklumat Berikut.',
    };

    for (const [key, value] of fields.entries()) {
      if (!value) {
        this.modalTitle = messages[key];
        this.showBiometricModal = false;
        this.showModal = true;
        this.showModalAlert = true;
        this.openBiometricAfterAlert = false;
        return;
      }
    }

    // All fields have values
    this.router.navigate(['../pemeriksaan-masuk-dokumen'], {
      relativeTo: this.route,
    });
  }

  // const isScanSuccess = false;//API Semak sini
  //    if(!isScanSuccess){
  //     this.modalTitle = 'Kad ABTC Gagal Imbasan';
  //     this.showBiometricModal = false;
  //     this.showModal = true;
  //     this.showModalAlert = true;
  //     this.openBiometricAfterAlert = true;
  //    }else{
  //
  //    }
  nextStep(): void {
    if (this.activeStep < this.steps.length) {
      this.activeStep++;
    }
  }

  prevStep(): void {
    if (this.activeStep > 1) {
      this.activeStep--;
    }
  }

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

  nextSection(): void {
     this.router.navigate(['../kategori-ntl'],  {relativeTo: this.route});
  }

  gotoImbasPassportNtl(): void {
     this.router.navigate(['../passport-ntl'],  {relativeTo: this.route});
  }
}
