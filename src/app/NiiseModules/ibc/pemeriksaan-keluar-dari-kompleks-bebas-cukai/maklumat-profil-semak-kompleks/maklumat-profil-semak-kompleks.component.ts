// import { Component } from '@angular/core';

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
  selector: 'app-maklumat-profil-semak-kompleks',
  imports: [CommonModule,
    ReactiveFormsModule,
    RouterModule,
    // CoreUI Components
    CardComponent,
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
  templateUrl: './maklumat-profil-semak-kompleks.component.html',
  styleUrl: './maklumat-profil-semak-kompleks.component.scss'
})
export class MaklumatProfilSemakKompleksComponent {
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
    { number: 1, title: 'Maklumat Profil Pengembara', route: '/maklumat-profil' },
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

    

    //Jumpa maklumat
    //this.router.navigate(['/maklumat-profil']);

    //Modal Test
    // let responseCode: string = '';

    // responseCode = 'IBC-S029'; //IBC-S029
    // responseCode = 'IBC-S025'; //IBC-S025
    // responseCode = 'IBC-S018'; //IBC-S018
    // responseCode = 'IBC-S030'; //IBC-S030
    // responseCode = 'IBC-S017'; //IBC-S017
    // responseCode = 'IBC-W007'; //IBC-W007
    // responseCode = 'IBC-S038'; //IBC-S038
    // responseCode = 'IBC-W005'; //IBC-W005
    // responseCode = 'IBC-W006'; //IBC-W006
    // responseCode = 'WFR-IBC-02.1.1-17'; //WFR-IBC-02.1.1-17

  //   switch (responseCode) {
  //     case 'IBC-S029':
  //       this.modalMessage = 'Rekod Profil Pengembara Tidak Dijumpai';
  //       this.modalButtonText = 'OK';
  //       break;
  //     case 'IBC-S025':
  //       this.modalMessage = 'Rekod Pasport/ Dokumen Perjalanan Tidak Dijumpai';
  //       this.modalButtonText = 'OK';
  //       break;
  //     case 'IBC-S018':
  //       this.modalMessage = 'Rekod Pasport/ Dokumen Perjalanan Telah Tamat Tempoh Sah Laku';
  //       this.modalButtonText = 'OK';
  //       break;
  //     case 'IBC-S030':
  //       this.modalMessage = 'Surat Kebenaran Masuk Tidak Dijumpai';
  //       this.modalButtonText = 'OK';
  //       break;
  //     case 'IBC-S017':
  //       this.modalMessage = 'Pengembara dari negara Israel mempunyai Surat Kebenaran Masuk ';
  //       this.modalButtonText = 'OK';
  //       break;
  //     case 'IBC-W007':
  //       this.modalMessage = 'Pengembara warga asing masuk dalam tempoh 7 hari dari Tarikh Keluar [27/07/2025]';
  //       this.modalButtonText = 'OK';
  //       break;
  //     case 'IBC-S038':
  //       this.modalMessage = 'Sila Lengkapkan e-IMM.26.';
  //       this.modalButtonText = 'OK';
  //       break;
  //     case 'IBC-W005':
  //       this.modalMessage = 'Tiada Surat Kemudahan';
  //       this.modalButtonText = 'OK';
  //       break;
  //     case 'IBC-W006':
  //       this.modalMessage = 'Sekatan SLTD';
  //       this.modalButtonText = 'OK';
  //       break;
  //     case 'WFR-IBC-02.1.1-15':
  //       //Open signOn Modal
  //       break;
  //     case 'WFR-IBC-02.1.1-17':
  //       this.modalMessage = 'Sekatan RAE Skor Risiko: 57% Kod: A10';
  //       this.modalButtonText = 'TUTUP';
  //       break;
  //     default:
  //       // Anggap default sebagai "data dijumpai" masa tekan butang [SEMAK]
  //       //this.router.navigate(['maklumat-profil-ibc']);
         this.router.navigate(['../maklumat-profil-kompleks'],  {relativeTo: this.route});
  //         state: { visitorType: visitorType }
  //       return; // Hentikan function supaya modal tak tunjuk
  //   }

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
      case 'IBC-S019':
        console.log("Passport validity < 6 months - opening Rujuk Penyelia modal");
        this.hideStandardModal();
        // After hiding error modal, show Rujuk Penyelia modal
        setTimeout(() => {
          this.openModal();
        }, 300); // Small delay to ensure smooth transition
        break;
      case 'IBC-S018':
        console.log("Passport expired - opening Rujuk Penyelia modal");
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
      case 'IBC-S030':
        this.modalMessage = 'Pengembara dari negara Israel tidak mempunyai Surat Kebenaran Masuk atau tidak dijumpai';
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

