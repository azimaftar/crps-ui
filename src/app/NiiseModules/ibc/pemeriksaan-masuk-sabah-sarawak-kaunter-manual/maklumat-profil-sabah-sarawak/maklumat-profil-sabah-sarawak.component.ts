import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
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
  selector: 'app-maklumat-profil-sabah-sarawak',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    // CoreUI Components
    ModalRujukPenyeliaComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    RowComponent,
    ColComponent,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalToggleDirective,
    ButtonDirective
  ], 
  templateUrl: './maklumat-profil-sabah-sarawak.component.html',
  styleUrl: './maklumat-profil-sabah-sarawak.component.scss'
})
export class MaklumatProfilSabahSarawakComponent implements OnInit {
  profilForm!: FormGroup; 

  isWarganegara: boolean = false;
  responseCode: string = ''; 
  @ViewChild(ModalRujukPenyeliaComponent) modal!: ModalRujukPenyeliaComponent;

  currentStep = 1;
  photoUrl = '';

  steps = [
    { number: 1, title: 'Maklumat Profil Pengembara', route: '/maklumat-profil-sabah-sarawak' },
    { number: 2, title: 'Maklumat Visa Pas', route: '/maklumat-visa-sabah-sarawak' },
    { number: 3, title: 'Maklumat FTF', route: '/maklumat-pengguna-kerap' },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const currentRoute = this.route.snapshot.routeConfig?.path || '';
    console.log("Route path snapshot:", currentRoute);
    const matched = this.steps.find(s => s.route === currentRoute);
    this.currentStep = matched ? matched.number : 1;
    

    // ✅ Form initialization (lebih clean)
    this.profilForm = this.fb.group({
      visitorType: ['Warganegara'], // default terus
      docType: [{ value: '', disabled: true }],
      docNo: ['A0000002'],
      docNo2: [{ value: 'A0000002', disabled: true }],
      kpNo: [{ value: '980330025489', disabled: true }],
      name: [{ value: 'Mohd Russaini Bin Idrus', disabled: true }],
      issueDatePassport: [{ value: '20 Januari 1992', disabled: true }],
      nationality: ['Malaysia'],
      nationality2: [{ value: 'Malaysia', disabled: true }],
      expiryDate2: [{ value: '20 Januari 2028', disabled: true }],
      expiryDate: [null],
      age: [{ value: '28', disabled: true }],
      gender: [{ value: 'Lelaki', disabled: true }],
      countryIssue: [{ value: 'MYS - Malaysia', disabled: true }]
    });

    // ✅ Check query params untuk docType
    this.route.queryParams.subscribe(params => {
      if (params['docType']) {
        this.profilForm.patchValue({ docType: params['docType'] });
        console.log("DocType from previous screen:", params['docType']);
      }
    });
  }

  @ViewChild('modalStandard') modalStandard!: ModalComponent;
  modalMessage: string = '';
  modalButtonText: string = 'OK';    
  
  semakMaklumatPengembara() {
    const visitorType = this.profilForm.get('visitorType')?.value || 'Warganegara'; 
    console.log("Visitor Type (Semak):", visitorType);
    this.isWarganegara = visitorType === 'Warganegara';
    console.log('isWarganegara:', this.isWarganegara);

    this.router.navigate(['../maklumat-profil-semak-sabah-sarawak'],  {relativeTo: this.route});

    if (this.modalStandard) {
      this.modalStandard.visible = true;
    }
  }

  openModal(): void {
    this.modal.openModal();
  }

  openStandardModal(): void {
    this.modalStandard.visible = true;
  }

  hideStandardModal(): void {
    this.modalStandard.visible = false;
  }

  modalStandardClick(): void {
    switch (this.responseCode) {
      case 'IBC-E009':
      case 'IBC-S019':
      case 'IBC-S018':
        this.hideStandardModal();
        setTimeout(() => this.openModal(), 300);
        break;
      default:
        this.hideStandardModal();
        break;
    }
  }

  async TutupForm(): Promise<void> {
    switch (this.responseCode) {
      case 'IBC-E009':
        this.modalMessage = 'Medan mandatori yang bertanda * adalah wajib diisi';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S019':
        this.modalMessage = 'Tempoh Sah Laku Pasport adalah kurang dari 6 bulan';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S018':
        this.modalMessage = 'Rekod Pasport/Dokumen Perjalan Telah Tamat Tempoh Sah Laku';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      default:
        this.router.navigate(['../maklumat-profil-pengembara-semak'], { relativeTo: this.route });
    }
  }

  testError(errorCode: string): void {
    this.responseCode = errorCode;
    switch (this.responseCode) {
      case 'IBC-E009':
        this.modalMessage = 'Medan mandatori yang bertanda * adalah wajib diisi';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S019':
        this.modalMessage = 'Tempoh Sah Laku Pasport adalah kurang dari 6 bulan';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S018':
        this.modalMessage = 'Rekod Pasport/Dokumen Perjalan Telah Tamat Tempoh Sah Laku';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
    }
  }

  testModalSequence(errorCode: string): void {
    console.log(`Testing modal sequence for ${errorCode}`);
    this.testError(errorCode);
  }
}
