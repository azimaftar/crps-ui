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
  selector: 'app-sabah-sarawak-manual-jenis-dokumen-lainlain',
  imports: [CommonModule,
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
    ButtonDirective], //Routing
  
templateUrl: './sabah-sarawak-manual-jenis-dokumen-lainlain.component.html',
styleUrl: './sabah-sarawak-manual-jenis-dokumen-lainlain.component.scss',
})
export class SabahSarawakManualJenisDokumenLainlainComponent {
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
    { number: 2, title: 'Maklumat Visa Pas', route: '/maklumat-visa' },
    { number: 3, title: 'Maklumat FTF', route: '/maklumat-pengguna-kerap' },
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
  visitorType: [{ value: 'Warganegara', disabled: false }],
  docType: [{ value: 'P - Passport', disabled: true }],
  docNo: [{ value: 'A0000002', disabled: false }],
  docNo2: [{ value: 'A0000002', disabled: true }],
  kpNo: [{ value: '980330025489', disabled: true }],
  name: [{ value: 'Mohd Russaini Bin Idrus', disabled: true }],
  issueDatePassport: [{ value: '20 Januari 1992', disabled: true }],
  nationality: [{ value: 'Malaysia', disabled: false }],
  nationality2: [{ value: 'Malaysia', disabled: true }],
  expiryDate2: [{ value: '20 Januari 2028', disabled: true }],
  expiryDate: [null],
  age: [{ value: '28', disabled: true }],
  gender: [{ value: 'Lelaki', disabled: true }],
  countryIssue: [{ value: 'MYS - Malaysia', disabled: true }]
});


    // Baru boleh access visitorType lepas form siap
    const visitorType = this.profilForm.get('visitorType')?.value;
    console.log("Visitor Type on Load:", visitorType);

    // Disable all fields
  //this.profilForm.disable();
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


    this.router.navigate(['../maklumat-profil-semak-ibc'],  {relativeTo: this.route});
  

    // Show modal
    if (this.modalStandard) {
      this.modalStandard.visible = true;
    }
  }
    // Modal methods (following senior dev pattern)
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
    }
  }

  testModalSequence(errorCode: string): void {
    console.log(`Testing modal sequence for ${errorCode}`);
    this.testError(errorCode);
  }


}


