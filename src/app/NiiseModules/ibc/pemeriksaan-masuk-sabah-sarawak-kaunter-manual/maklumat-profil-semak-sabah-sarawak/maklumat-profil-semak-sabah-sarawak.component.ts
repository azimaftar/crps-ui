import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule ,ActivatedRoute} from '@angular/router';
import { ModalRujukPenyeliaComponent } from '../../pemeriksaan-keluar-kaunter-manual/modal-rujuk-penyelia/modal-rujuk-penyelia.component';

// CoreUI Imports
import {
  CardComponent,           // <c-card>
  CardHeaderComponent,     // <c-card-header>
  CardBodyComponent,       // <c-card-body>
  RowComponent,            // <c-row>
  ColComponent,            // <c-col>
  ButtonDirective,          // [cButton]
  ModalComponent,           // <c-modal>
  ModalToggleDirective,     //[cModalToggle]
  ModalBodyComponent,        // <c-modal-body>
  CardFooterComponent,
  ModalFooterComponent
} from '@coreui/angular';

@Component({
  selector: 'app-maklumat-profil-semak-sabah-sarawak',
  imports: [CommonModule,
    ReactiveFormsModule,
    RouterModule,
    // CoreUI Components
    CardComponent,
    ModalRujukPenyeliaComponent,
    CardHeaderComponent,
    ModalFooterComponent,
    CardBodyComponent,
    CardFooterComponent,
    RowComponent,
    ColComponent,
    ModalComponent,
    ModalBodyComponent,
    ModalToggleDirective,
    ButtonDirective], //Routing
  templateUrl: './maklumat-profil-semak-sabah-sarawak.component.html',
  styleUrl: './maklumat-profil-semak-sabah-sarawak.component.scss'
})
export class MaklumatProfilSemakSabahSarawakComponent {
  //ReactiveModule Form
  profilForm!: FormGroup; // profilForm

  // Untuk tukar struktur paparan berdasarkan jenis pelawat
  isWarganegara: boolean = false;

    responseCode: string = ''; 
    @ViewChild(ModalRujukPenyeliaComponent) modal!: ModalRujukPenyeliaComponent;




  //Define current step
  currentStep = 1;
  photoUrl = '';

  // Stepper
  steps = [
    { number: 1, title: 'Maklumat Profil Pengembara', route: '/maklumat-profil-sabah-sarawak' },
    { number: 2, title: 'Maklumat Visa', route: '/maklumat-visa-sabah-sarawak' },
    { number: 3, title: 'Maklumat Pas/Permit', route: '/maklumat-pas-sabah-sarawak' },
  ];

  //Constructor
  // constructor(private fb: FormBuilder,
  //   private router: Router
  // ) { }
  constructor(
  private fb: FormBuilder,
  private router: Router,
  private route: ActivatedRoute
) { }

  

  ngOnInit(): void {
    // Stepper logic
    const currentRoute = this.router.url;
    const matched = this.steps.find(s => s.route === currentRoute);
    this.currentStep = matched ? matched.number : 1;

    // Form initialization
    this.profilForm = this.fb.group({
      visitorType: ['Warganegara'],
      docType: ['P - Passport'],
      docNo: ['A0000002'],
      kpNo: ['980330025489'],
      name: ['Mohd Russaini Bin Idrus'],
      issueDatePassport: ['20 Januari 1992'],
      nationality: ['MYS'],
      expiryDate: ['20 Januari 2028'],
      age: ['28'],
      gender: ['Lelaki'],
      countryIssue: ['MYS - Malaysia'],
    });

    // Baru boleh access visitorType lepas form siap
    const visitorType = this.profilForm.get('visitorType')?.value;
    console.log("Visitor Type on Load:", visitorType);

    // Disable all fields
  this.profilForm.disable();
  }


  //Modal Declaration
  @ViewChild('modalStandard') modalStandard!: ModalComponent;
  modalMessage: string = '';
  modalButtonText: string = 'OK';

  //Semak Button
  semakMaklumatPengembara() {
    // Buat API Semak Nanti

    // ✅ Tambah logik checking visitorType
    // const visitorType = this.profilForm.get('visitorType')?.value;
    const visitorType = this.profilForm.get('visitorType')?.value || 'Warganegara'; // fallback kalau kosong
    console.log(visitorType);
    this.isWarganegara = visitorType === 'Warganegara';
    console.log('isWarganegara:', this.isWarganegara);

         this.router.navigate(['../maklumat-profil-pengembara-sabah-sarawak'],  {relativeTo: this.route});


    // Show modal
    if (this.modalStandard) {
      this.modalStandard.visible = true;
    }
  }
  openStandardModal(): void {
    this.modalStandard.visible = true;
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
      case 'IBC-S025':
        console.log("Rekod Passport Dokumen Perjalanan Tidak Dijumpai");
        this.hideStandardModal();
        // After hiding error modal, show Rujuk Penyelia modal
        setTimeout(() => {
          this.openModal();
        }, 300); // Small delay to ensure smooth transition
        break;
      case 'IBC-S018':
        console.log("Rekod Passport Dokumen Perjalanan Telah Tamat Tempoh Sah Laku");
        this.hideStandardModal();
        // After hiding error modal, show Rujuk Penyelia modal
        setTimeout(() => {
          this.openModal();
        }, 300); // Small delay to ensure smooth transition
        break;
        case 'IBC-W005':
        console.log("Tiada Surat Kemasukan");
        this.hideStandardModal();
        // After hiding error modal, show Rujuk Penyelia modal
        setTimeout(() => {
          this.openModal();
        }, 300); // Small delay to ensure smooth transition
        break;
        case 'IBC-W006':
        console.log("Sekatan SLTD");
        this.hideStandardModal();
        // After hiding error modal, show Rujuk Penyelia modal
        setTimeout(() => {
          this.openModal();
        }, 300); // Small delay to ensure smooth transition
        break;
        case 'IBC-W009':
        console.log("Sekatan RAE\nSkor risiko: 57%\nKod: A10");
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
      case 'IBC-S029':
        this.modalMessage = 'Rekod Profil Pengembara Tidak Dijumpai';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S025':
        this.modalMessage = 'Rekod Passport Dokumen Perjalanan Tidak Dijumpai';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S018':
        this.modalMessage = 'Rekod Passport Dokumen Perjalanan Telah Tamat Tempoh Sah Laku';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S017':
        this.modalMessage = 'Pengembara dari negara Israel mempunyai Surat Kebenaran Masuk';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-W007':
        this.modalMessage = 'Pengembara warga asing masuk dalam tempoh 7 hari dari Tarikh Keluar';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S030':
        this.modalMessage = 'Surat Kebenaran Masuk Tidak Dijumpai';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S038':
        this.modalMessage = 'Sila Lengkapkan e-GATE';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-W005':
        this.modalMessage = 'Tiada Surat Kemasukan';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-W006':
        this.modalMessage = 'Sekatan SLTD';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-W009':
        this.modalMessage = 'Sekatan RAE\nSkor risiko: 57%\nKod: A10';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
    }
  }
    OnTutup(): void {
  this.router.navigate(['../maklumat-profil-pengembara-kompleks'],  {relativeTo: this.route});
}

  // Test modal sequence (for development)
  testModalSequence(errorCode: string): void {
    console.log(`Testing modal sequence for ${errorCode}`);
    this.testError(errorCode);
  }


}

