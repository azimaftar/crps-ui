import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute  } from '@angular/router';
import { ModalRujukPenyeliaComponent } from '../../pemeriksaan-keluar-kaunter-manual/modal-rujuk-penyelia/modal-rujuk-penyelia.component';

// Component luar
import { NotificationModalComponent } from '../../../../core/components/notification-modal/notification-modal.component';



// CoreUI Imports
import {
  CardComponent,           // <c-card>
  CardHeaderComponent,     // <c-card-header>
  CardBodyComponent,       // <c-card-body>
  RowComponent,            // <c-row>
  ColComponent,            // <c-col>
  ButtonDirective,         // [cButton]
  ModalComponent,
  ModalFooterComponent,
  ModalBodyComponent
} from '@coreui/angular';



@Component({
  selector: 'app-sign-on-to-join-ship-main',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NotificationModalComponent,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalRujukPenyeliaComponent,
    // CoreUI Components
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective], //Routing
  templateUrl: './sign-on-to-join-ship-main.component.html',
  styleUrl: './sign-on-to-join-ship-main.component.scss'
})

export class SignOnToJoinShipMainComponent implements OnInit {
  //ReactiveModule Form
  visaForm!: FormGroup;
    // constructor(private router: Router, private route: ActivatedRoute) { }
  //Define current step
  currentStep = 3;
  photoUrl = '';

  @ViewChild(ModalRujukPenyeliaComponent) modal!: ModalRujukPenyeliaComponent;

  modalMessage: string = '';
  modalButtonText: string = 'OK';

  //modal declaration
  showBiometricModal = false;
  showModal = false;
  showModalAlert = false;
  modalTitle = '';
  openBiometricAfterAlert = false;
  toNextPage = true;

  dariCapJariEmpatPost = false; // ➕ Tambah: kawalan disabled butang

  // Stepper
  steps = [
    { number: 1, title: 'Maklumat Profil Pengembara', route: '/maklumat-profil-ibc' },
    { number: 2, title: 'Maklumat Visa', route: '/maklumat-visa-ibc' },
    { number: 3, title: 'Maklumat Pas Permit', route: '/maklumat-pas-ibc' },
    { number: 4, title: 'Maklumat Pengguna Kerap (FTF)', route: '/maklumat-pengguna-kerap' },
    { number: 5, title: 'Sign On To Join Ship', route: '/sign-on-to-join-ship-ibc' },
  ];
  @ViewChild('modalStandard') modalStandard!: ModalComponent;
    responseCode: string = ''; 

  openStandardModal(): void {
  this.modalStandard.visible = true;
}

  constructor(private fb: FormBuilder,
             private router: Router,
               private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  // Stepper logic
  const currentRoute = this.router.url;
  const matched = this.steps.find(s => s.route === currentRoute);
  this.currentStep = matched ? matched.number : 5;

  // Form initialization
  this.visaForm = this.fb.group({
    docType: ['P - Passport'],
    kpNo: ['980330025489'],
    visaNo: ['VDR239001313', Validators.required],
    visaQrDvs: ['VDSV13130032'],
    visaType: ['Visa Transir'],
    visaNameShip: ['Star Cruise'],
    visaTypeShip: ['Kapal Dagang'],
    visaCallSign: ['A0000002'],
    visaIMO: ['98798570070'],
    visaIssueDate: ['20 Januari 2024'],
    visaExpiryDate: ['30 Januari 2035'],
    visaName: ['Muhammad Russaini Bin Idrus'],
    visaDob: ['20 Januari 1992'],
    visaGender: ['Lelaki'],
    visaNameEjenShip: ['Simedarby Kargo Malaysia'],
    visaJawatan: ['Tukang Masak'],
    visaNationality: ['MYS'],
    visaVoyageNo: ['980330025489'],
    visaTimeExpected: ['20 Januari 2024'],
    visaTimeExpectedArrive: ['18:05:27'],
    visaDateExpectedShip: ['21 Januari 2024'],
    visaTimeExpectedShip: ['12:02:41'],
    visaJangkaRapatandDermaga: ['Pelabuhan Klang'],
    docNo: ['A0000002']
  });

  // Disable form fields
  this.visaForm.disable();
}

  //Buttons

  // Biometric Methods
  captureFaceAndIris(){
    console.log('Capturing face and iris...');
    // Implement biometric capture logic here
        this.router.navigate(['../capturing-face-and-iris-main'], { relativeTo: this.route });

  }

  captureFingerprint(){
    console.log('Capturing fingerprint...');
    // Implement fingerprint capture logic here
        this.router.navigate(['../cap-jari-main'], { relativeTo: this.route });
  }

  // Form Methods
  onSubmit(){
    // if (this.profilForm.valid) {
    //   console.log('Form submitted:', this.profilForm.value);
    //   // Handle form submission logic here
    // } else {
    //   console.log('Form is invalid');
    //   this.markFormGroupTouched();
    // }
  }

  resetForm() {
    // Implement fingerprint capture logic here
        this.router.navigate(['../keluar-kaunter-manual-kenderaan-profil'], { relativeTo: this.route });
  }


  // Navigation Methods
  goNext(): void {
    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index !== -1 && index + 1 < this.steps.length) {
      this.router.navigate([this.steps[index + 1].route]);
    }
  }
    //Disabled next button 
isLastStep() {
  return this.currentStep === this.steps.length;
}

  goBack(): void {
    this.router.navigate(['../maklumat-pas-main'], { relativeTo: this.route });
  }
  


  // Helper Methods
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
        case 'IBC-S039':
        console.log("Transit Visa Telah Tamat Tempoh Sah Laku");
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
      case 'IBC-S039':
        this.modalMessage = 'Transit Visa Telah Tamat Tempoh Sah Laku';
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

