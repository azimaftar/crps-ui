import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ModalRujukPenyeliaComponent } from '../../pemeriksaan-keluar-kaunter-manual/modal-rujuk-penyelia/modal-rujuk-penyelia.component';


// Component luar
import { NotificationModalComponent } from '../../../../core/components/notification-modal/notification-modal.component';

// CoreUI Imports
import {
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ModalFooterComponent,
  ButtonDirective,
  ModalComponent,
  ModalBodyComponent
} from '@coreui/angular';

@Component({
  selector: 'app-maklumat-visa-ibc',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NotificationModalComponent,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalRujukPenyeliaComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective
  ],
  templateUrl: './maklumat-visa-ibc.component.html',
  styleUrl: './maklumat-visa-ibc.component.scss'
})
export class MaklumatVisaIbcComponent implements OnInit {
  visaForm!: FormGroup;

  currentStep = 2;
  photoUrl = '';

  responseCode: string = ''; 
   @ViewChild(ModalRujukPenyeliaComponent) modal!: ModalRujukPenyeliaComponent;

  modalMessage: string = '';
  modalButtonText: string = 'OK';

  showBiometricModal = false;
  showModal = false;
  showModalAlert = false;
  modalTitle = '';
  openBiometricAfterAlert = false;
  toNextPage = true;

  dariCapJariEmpatPost = false; // ➕ Tambah: kawalan disabled butang

  steps = [
    { number: 1, title: 'Maklumat Profil Pengembara', route: '/maklumat-profil-ibc' },
    { number: 2, title: 'Maklumat Visa', route: '/maklumat-visa-ibc' },
    { number: 3, title: 'Maklumat Pas Permit', route: '/maklumat-pas-ibc' },
    { number: 4, title: 'Sign On To Join Ship', route: '/maklumat-pengguna-kerap' },
  ];

  @ViewChild('modalStandard') modalStandard!: ModalComponent;
  openStandardModal(): void {
  this.modalStandard.visible = true;
}

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const currentRoute = this.router.url;
    const matched = this.steps.find(s => s.route === currentRoute);
    this.currentStep = matched ? matched.number : 2;

    this.visaForm = this.fb.group({
      visaNo: ['VDR239001313', Validators.required],
      visaQrDvs: ['VDSV13130032'],
      visaType: ['Single Entry Visa'],
      visaIssueDate: ['20 Januari 2024'],
      visaExpiryDate: ['30 Januari 2035'],
      visaName: ['Muhammad Russaini Bin Idrus'],
      visaDob: ['20 Januari 1992'],
      visaGender: ['Lelaki'],
      visaNationality: ['MYS'],
      docNo: ['A0000002']
    });

    this.visaForm.disable();
  }

  captureFaceAndIris() {
    console.log('Capturing face and iris...');
    this.router.navigate(['../capturing-face-and-iris-ibc'], { relativeTo: this.route });
  }

  captureFingerprint() {
    console.log('Capturing fingerprint...');
    this.router.navigate(['../cap-jari-ibc'], { relativeTo: this.route });
  
  }

  onSubmit() {
    if (this.visaForm.valid) {
      console.log('Form submitted:', this.visaForm.value);
    } else {
      console.log('Form is invalid');
      this.markFormGroupTouched();
    }
  }

  resetForm() {
   this.router.navigate(['../pemeriksaan-masuk-dokumen'], { relativeTo: this.route });
  }

  goNext(): void {
    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index !== -1 && index + 1 < this.steps.length) {
      this.router.navigate(['../maklumat-pas-ibc'], { relativeTo: this.route });
    }
  }

goBack(): void {
  this.router.navigate(['../maklumat-profil-ibc'], { relativeTo: this.route });
}

  private markFormGroupTouched(): void {
    Object.keys(this.visaForm.controls).forEach(key => {
      const control = this.visaForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }

  hideStandardModal(): void {
    this.modalStandard.visible = false;
  }
      // Modal methods (following senior dev pattern)
  openModal(): void {
    this.modal.openModal();
  }
  
  // Handle modal OK button click (following senior dev pattern)
  modalStandardClick(): void {
    switch (this.responseCode) {
        case 'IBC-S022':
        console.log("Rekod Visa Tidak Dijumpai");
        this.hideStandardModal();
        // After hiding error modal, show Rujuk Penyelia modal
        setTimeout(() => {
          this.openModal();
        }, 300); // Small delay to ensure smooth transition
        break;
        case 'IBC-S016':
        console.log("Rekod Visa Telah Tamat Tempoh Sah Laku");
        this.hideStandardModal();
        // After hiding error modal, show Rujuk Penyelia modal
        setTimeout(() => {
          this.openModal();
        }, 300); // Small delay to ensure smooth transition
        break;
        case 'IBC-S023':
        console.log("Single Entry Visa Telah Digunakan Ketika Masuk");
        this.hideStandardModal();
        // After hiding error modal, show Rujuk Penyelia modal
        setTimeout(() => {
          this.openModal();
        }, 300); // Small delay to ensure smooth transition
        break;
      default:
        this.hideStandardModal();
        break;
    }
  }
  

    // Test methods for development
  testError(errorCode: string): void {
    this.responseCode = errorCode;
    switch (this.responseCode) {
      case 'IBC-S022':
        this.modalMessage = 'Rekod Visa Tidak Dijumpai';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S016':
        this.modalMessage = 'Rekod Visa Telah Tamat Tempoh Sah Laku';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S023':
        this.modalMessage = 'Single Entry Visa Telah Digunakan Ketika Masuk';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
    }
  }
  // Test modal sequence (for development)
  testModalSequence(errorCode: string): void {
    console.log(`Testing modal sequence for ${errorCode}`);
    this.testError(errorCode);
  }
}
