import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

// Modal luar
import { ModalRujukPenyeliaComponent } from '../../pemeriksaan-keluar-kaunter-manual/modal-rujuk-penyelia/modal-rujuk-penyelia.component';

// CoreUI Imports
import {
  CardComponent,           // <c-card>
  CardHeaderComponent,     // <c-card-header>
  CardBodyComponent,       // <c-card-body>
  RowComponent,            // <c-row>
  ColComponent,            // <c-col>
  ButtonDirective,         // [cButton]
  ModalComponent,          // <c-modal>
  ModalBodyComponent,      // <c-modal-body>
  ModalFooterComponent     // <c-modal-footer>
} from '@coreui/angular';

@Component({
  selector: 'app-maklumat-pas-sabah-sarawak',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    // CoreUI Components
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalRujukPenyeliaComponent
  ],
  templateUrl: './maklumat-pas-sabah-sarawak.component.html',
  styleUrl: './maklumat-pas-sabah-sarawak.component.scss'
})
export class MaklumatPasSabahSarawakComponent implements OnInit {
  // Reactive Form
  pasForm!: FormGroup;

  // Define current step
  currentStep = 2;
  photoUrl = '';

  // Stepper
  steps = [
    { number: 1, title: 'Maklumat Profil Pengembara', route: '/maklumat-profil-pengembara-sabah-sarawak' },
    { number: 2, title: 'Maklumat Visa', route: '/maklumat-visa-sabah-sarawak' },
    { number: 3, title: 'Maklumat Pas/Permit', route: '/maklumat-pas-sabah-sarawak' },
  ];

  // ========================
  // Modal Handling
  // ========================
  responseCode: string = '';
  modalMessage: string = '';
  modalButtonText: string = 'OK';

  @ViewChild('modalStandard') modalStandard!: ModalComponent;
  @ViewChild(ModalRujukPenyeliaComponent) modal!: ModalRujukPenyeliaComponent;

  openStandardModal(): void {
    this.modalStandard.visible = true;
  }

  hideStandardModal(): void {
    this.modalStandard.visible = false;
  }

  // Handle modal OK button click
  modalStandardClick(): void {
    switch (this.responseCode) {
      case 'IBC-S017':
        console.log("Pengembara dari negara Israel mempunyai Surat Kebenaran Masuk");
        this.hideStandardModal();
        setTimeout(() => this.openModal(), 300);
        break;
      case 'IBC-S030':
        console.log("Surat Kebenaran Masuk Tidak Dijumpai");
        this.hideStandardModal();
        setTimeout(() => this.openModal(), 300);
        break;
      case 'IBC-W007':
        console.log("Pengembara warga asing masuk dalam tempoh 7 hari dari Tarikh Keluar [27/07/2025]");
        this.hideStandardModal();
        setTimeout(() => this.openModal(), 300);
        break;
      case 'IBC-S038':
        console.log("Sila lengkapkan e.IMM.26");
        this.hideStandardModal();
        setTimeout(() => this.openModal(), 300);
        break;
      case 'IBC-W005':
        console.log("Tiada Surat Kemudahan");
        this.hideStandardModal();
        setTimeout(() => this.openModal(), 300);
        break;
      case 'IBC-W006':
        console.log("Sekatan SLTD");
        this.hideStandardModal();
        setTimeout(() => this.openModal(), 300);
        break;
      default:
        this.hideStandardModal();
        break;
    }
  }

  openModal(): void {
    this.modal.openModal();
  }

  // Test methods (development only)
  testError(errorCode: string): void {
    this.responseCode = errorCode;
    switch (this.responseCode) {
      case 'IBC-S017':
        this.modalMessage = 'Pengembara dari negara Israel mempunyai Surat Kebenaran Masuk';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S030':
        this.modalMessage = 'Surat Kebenaran Masuk Tidak Dijumpai';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-W007':
        this.modalMessage = 'Pengembara warga asing masuk dalam tempoh 7 hari dari Tarikh Keluar [27/07/2025]';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S038':
        this.modalMessage = 'Sila lengkapkan e.IMM.26';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-W005':
        this.modalMessage = 'Tiada Surat Kemudahan';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-W006':
        this.modalMessage = 'Sekatan SLTD';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;  
    }
  }

  testModalSequence(errorCode: string): void {
    console.log(`Testing modal sequence for ${errorCode}`);
    this.testError(errorCode);
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Stepper logic
    const currentRoute = this.router.url;
    const matched = this.steps.find(s => s.route === currentRoute);
    this.currentStep = matched ? matched.number : 3;

    // Form initialization
    this.pasForm = this.fb.group({
      pasNo: ['VDR239001313', Validators.required],
      QrDvs: ['VDSV13130032'],
      pasType: ['Single Entry Visa'],
      pasIssueDate: ['20 Januari 2024'],
      pasExpiryDate: ['30 Januari 2035'],
      name: ['Muhammad Russaini Bin Idrus'],
      dob: ['20 Januari 1992'],
      gender: ['Lelaki'],
      nationality: ['MYS'],
      docNo: ['A0000002']
    });

    // Disable form fields
    this.pasForm.disable();
  }

  // ========================
  // Biometric Methods
  // ========================
  captureFaceAndIris() {
    console.log('Capturing face and iris...');
    this.router.navigate(['../capturing-face-and-iris-ibc'], { relativeTo: this.route });
  }

  captureFingerprint() {
    console.log('Capturing fingerprint...');
    this.router.navigate(['../cap-jari-ibc'], { relativeTo: this.route });
  }

  // ========================
  // Form Methods
  // ========================
  onSubmit() {
    if (this.pasForm.valid) {
      console.log('Form submitted:', this.pasForm.value);
    } else {
      console.log('Form is invalid');
      this.markFormGroupTouched();
    }
  }

  resetForm() {
    this.router.navigate(['../sabah-sarawak-manual-profil'], { relativeTo: this.route });
  }

  // ========================
  // Navigation Methods
  // ========================
  goNext(): void {
    this.router.navigate(['../sign-on-to-join-ship-ibc'], { relativeTo: this.route });
  }

  goBack(): void {
    this.router.navigate(['../maklumat-visa-sabah-sarawak'], { relativeTo: this.route });
  }

  isLastStep() {
    return this.currentStep === 3;
  }

  // ========================
  // Helper Methods
  // ========================
  private markFormGroupTouched(): void {
    Object.keys(this.pasForm.controls).forEach(key => {
      const control = this.pasForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }
}
