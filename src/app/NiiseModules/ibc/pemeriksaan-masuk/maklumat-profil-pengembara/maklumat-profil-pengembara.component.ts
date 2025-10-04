import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MaklumatPengembaraServicesService } from 'src/app/core/services/ibc-services/maklumat-pengembara-services.service';

// CoreUI Imports
import {
  CardComponent,           // <c-card>
  CardHeaderComponent,     // <c-card-header>
  CardBodyComponent,       // <c-card-body>
  RowComponent,            // <c-row>
  ColComponent,            // <c-col>
  ButtonDirective,          // [cButton]
  ModalComponent,           // <c-modal>
  //ModalToggleDirective,     //[cModalToggle]
  ModalBodyComponent,
  //ModalHeaderComponent,
  //ModalFooterComponent,        // <c-modal-body>
} from '@coreui/angular';

@Component({
  selector: 'app-maklumat-profil-pengembara',
  imports: [CommonModule,
    ReactiveFormsModule,
    RouterModule,
    // CoreUI Components
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ModalComponent,
    ModalBodyComponent,
    // ModalHeaderComponent,
    // ModalFooterComponent,
    // ModalToggleDirective,
    ButtonDirective],
  templateUrl: './maklumat-profil-pengembara.component.html',
  styleUrl: './maklumat-profil-pengembara.component.scss'
})
export class MaklumatProfilPengembaraComponent {
  //ReactiveModule Form
  profilForm!: FormGroup; // profilForm
  //anakKapalForm!: FormGroup; // anakKapalForm dalam modalSignOnToShip


  //Define current step
  currentStep = 1;
  photoUrl = '';

  // Stepper
  steps = [
    { number: 1, title: 'Maklumat Profil Pengembara', route: ['ibc/pemeriksaan-masuk/maklumat-profil'] },
    { number: 2, title: 'Maklumat Visa', route: 'ibc/pemeriksaan-masuk/maklumat-visa' },
    { number: 3, title: 'Maklumat Pas Permit', route: 'ibc/pemeriksaan-masuk/maklumat-pas' },
    { number: 4, title: 'Maklumat Pengguna Kerja (FTF)', route: 'ibc/pemeriksaan-masuk/maklumat-pengguna-kerap' },
    { number: 5, title: 'Sign-On To Ship', route: 'ibc/pemeriksaan-masuk/sign-on-to-join-ship' },
  ];

  //Constructor
  constructor(private fb: FormBuilder,
    private router: Router,
    private pengembaraService: MaklumatPengembaraServicesService
  ) { }

  ngOnInit(): void {
    // Stepper logic
    const currentRoute = this.router.url;
    const matched = this.steps.find(s => s.route === currentRoute);
    this.currentStep = matched ? matched.number : 1;

    // Form initialization for profilForm
    this.profilForm = this.fb.group({
      visitorType: ['1'],
      docType: ['803'],
      docNo: ['A0000001'],
      kpNo: ['950712035678'],
      name: ['Siti Aishah Binti Ahmad'],
      issueDatePassport: ['20 Januari 1992'],
      nationality: ['MYS'],
      expiryDate: ['20 Januari 2028'],
      age: ['28'],
      gender: ['Lelaki'],
      countryIssue: ['MYS - Malaysia'],
    });

    // Form initialization for anakKapalForm
    // this.anakKapalForm = this.fb.group({
    //      // Maklumat Anak Kapal
    //       docType: [''],
    //       gender: [''],
    //       dob: [''],
    //       docNo: [''],
    //       kpNo: [''],
    //       nationality: [''],
    //       name: [''],
    //       jobCode: [''],

    //       // Maklumat Visa
    //       visaNo: [''],
    //       visaQrVds: [''],
    //       visaType: [''],
    //       visaIssueDate: [''],
    //       visaExpiryDate: [''],

    //       // Maklumat Kapal
    //       shipName: [''],
    //       shipType: [''],
    //       noIMO: [''],
    //       callSign: [''],
    //       voyageNo: [''],
    //       companyName: [''],

    //       // Maklumat Tiba dan Berlepas Kapal
    //       expArrDate: [''],
    //       expArrTime: [''],
    //       nextPort: [''],
    //       expDepDate: [''],
    //       expDepTime: ['']

    //   });

    // Disable form fields
    //this.profilForm.disable();
  }



  //Show which modal on screen
  openModal() {
    // if (modalName === 'standard') {
    this.modalStandard.visible = true;
    // } else if (modalName === 'signOnToShip') {
    //   this.modalSignOnToShip.visible = true;
    // }
  }

  hideModal() {
    // if (modalName === 'standard') {
    this.modalStandard.visible = false;
    // } else if (modalName === 'signOnToShip') {
    //   this.modalSignOnToShip.visible = false;
    // }
  }

  //Modal Declaration
  @ViewChild('modalStandard') modalStandard!: ModalComponent;
  //@ViewChild('modalSignOnToShip') modalSignOnToShip!: ModalComponent;
  //@ViewChild(SignOnToJoinShipComponent) scrollableLongContentModal!: SignOnToJoinShipComponent;
  modalMessage: string = '';
  modalButtonText: string = 'OK';

  responseCode: string = '';
  //responseCode : string  = 'IBC-S029'; 
  // responseCode : string  = 'IBC-S025'; 
  // responseCode : string  = 'IBC-S018'; 
  // responseCode : string  = 'IBC-S030'; 
  // responseCode : string  = 'IBC-S017'; 
  // responseCode : string  = 'IBC-w007'; 
  // responseCode : string  = 'IBC-S038'; 
  // responseCode : string  = 'IBC-W005'; 
  // responseCode : string  = 'IBC-W006';
  //responseCode : string = 'WFR-IBC-02.1.1-15'; //WFR-IBC-02.1.1-15
  // responseCode : string = 'WFR-IBC-02.1.1-17'; //WFR-IBC-02.1.1-17

  //Semak Button
  semakMaklumatPengembara() {
    // Buat API Semak Nanti
    const formData = this.profilForm.getRawValue(); //get form values
    // console.log('📋 Form Data:', formData); //checking for Khai

    this.pengembaraService.semakMaklumatPengembara(formData).subscribe({
      next: (response) => {
        // console.log('✅ Server Response:', response); //checking
        this.pengembaraService.setSemakResponse(response); //store response
      },
      error: (error) => {
        // console.error('❌ API Error:', error);
      }
    });





    //Modal Test Dummy Data
    // let responseCode:string='';
    // let responseCode = 'IBC-S029'; //IBC-S029
    // let responseCode = 'IBC-S025'; //IBC-S025
    // let responseCode = 'IBC-S018'; //IBC-S018
    // let responseCode = 'IBC-S030'; //IBC-S030
    // let responseCode = 'IBC-S017'; //IBC-S017
    // let responseCode = 'IBC-W007'; //IBC-W007
    // let responseCode = 'IBC-S038'; //IBC-S038
    // let responseCode = 'IBC-W005'; //IBC-W005
    // let responseCode = 'IBC-W006'; //IBC-W006
    //let responseCode = 'WFR-IBC-02.1.1-15'; //WFR-IBC-02.1.1-15
    // let responseCode = 'WFR-IBC-02.1.1-17'; //WFR-IBC-02.1.1-17


    switch (this.responseCode) {
      case 'IBC-S029':
        this.modalMessage = 'Rekod Profil Pengembara Tidak Dijumpai';
        this.modalButtonText = 'OK';
        this.openModal();
        break;
      case 'IBC-S025':
        this.modalMessage = 'Rekod Pasport/ Dokumen Perjalanan Tidak Dijumpai';
        this.modalButtonText = 'OK';
        this.openModal();
        break;
      case 'IBC-S018':
        this.modalMessage = 'Rekod Pasport/ Dokumen Perjalanan Telah Tamat Tempoh Sah Laku';
        this.modalButtonText = 'OK';
        this.openModal();
        break;
      case 'IBC-S030':
        this.modalMessage = 'Surat Kebenaran Masuk Tidak Dijumpai';
        this.modalButtonText = 'OK';
        this.openModal();
        break;
      case 'IBC-S017':
        this.modalMessage = 'Pengembara dari negara Israel mempunyai Surat Kebenaran Masuk ';
        this.modalButtonText = 'OK';
        this.openModal();
        break;
      case 'IBC-W007':
        this.modalMessage = 'Pengembara warga asing masuk dalam tempoh 7 hari dari Tarikh Keluar [27/07/2025]';
        this.modalButtonText = 'OK';
        this.openModal();
        break;
      case 'IBC-S038':
        this.modalMessage = 'Sila Lengkapkan e-IMM.26.';
        this.modalButtonText = 'OK';
        this.openModal();
        break;
      case 'IBC-W005':
        this.modalMessage = 'Tiada Surat Kemudahan';
        this.modalButtonText = 'OK';
        this.openModal();
        break;
      case 'IBC-W006':
        this.modalMessage = 'Sekatan SLTD';
        this.modalButtonText = 'OK';
        this.openModal();
        break;
      case 'WFR-IBC-02.1.1-15':
        //Go to 1-15
        this.router.navigate(['ibc/pemeriksaan-masuk/sign-on-to-join-ship']);
        break;
      case 'WFR-IBC-02.1.1-17':
        this.modalMessage = `
        <strong>Sekatan RAE</strong><br>
        Skor Risiko : 57%<br>
        Kod: A10
      `;
        this.modalButtonText = 'TUTUP';
        this.openModal();
        break;
      default:
        // Anggap default sebagai "data dijumpai" masa tekan butang [SEMAK]
        this.router.navigate(['ibc/pemeriksaan-masuk/maklumat-profil']);
        return; // Hentikan function supaya modal tak tunjuk
    }
    // Show modal
    // if (this.modalStandard) {
    //   this.modalStandard.visible = true; 
    // }

  }

  //Tekan butang [OK] di Modal
  modalStandardClick() {
    switch (this.responseCode) {
      case 'IBC-S029':
        console.log("Go to WFR-IBC-02.1.1-7 MASUKKAN MAKLUMAT DOKUMEN");
        break;
      case 'IBC-S025':
        console.log("Go to WFR-IBC-02.1.1-25 POP UP SKRIN - RUJUK PENYELIA");
        break;
      case 'IBC-S018':
        console.log("Go to WFR-IBC-02.1.1-25 POP UP SKRIN - RUJUK PENYELIA");
        break;
      case 'IBC-S030':
        console.log("Go to WFR-IBC-02.1.1-25 POP UP SKRIN - RUJUK PENYELIA");
        break;
      case 'IBC-S017':
        console.log("Go to WFR-IBC-2.1.1-11");
        break;
      case 'IBC-W007':
        console.log("Go to WFR-IBC-2.1.1-11");
        break;
      case 'IBC-S038':
        console.log("Go to WFR-IBC-2.1.1-3");
        break;
      case 'IBC-W005':
        console.log("Go to WFR-IBC-2.1.1-25");
        break;
      case 'IBC-W006':
        console.log("Go to WFR-IBC-2.1.1-25");
        break;
      case 'WFR-IBC-02.1.1-17': //Masukkan Maklumat Dokument
        console.log("Go to WFR-IBC-2.1.1-25");
        break;
      default:
        // Anggap default sebagai "data dijumpai" masa tekan butang [SEMAK]
        this.router.navigate(['/maklumat-profil']);
        return; // Hentikan function supaya modal tak tunjuk
    }
  }


  //Modal 2 Button
  modalSignOnClick() {
    this.router.navigate(['/maklumat-profil']);
  }
}
