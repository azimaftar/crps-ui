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
  selector: 'app-pengurusan-pemeriksaan-arahan',
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
  templateUrl: './pengurusan-pemeriksaan-arahan.component.html',
  styleUrl: './pengurusan-pemeriksaan-arahan.component.scss'
})
export class PengurusanPemeriksaanArahanComponent {
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
  constructor(
  private fb: FormBuilder,
  private router: Router,
  private route: ActivatedRoute
) { }

ngOnInit(): void {
  this.profilForm = this.fb.group({
    visitorPassport: [''],
    visitorType: [''],
    examType: [''],
    docType: [''],
    docNo: [''],
    name: [''],
    kpNo: [''],
    nationality: [''],
    expiryDate: [''],
    age: [''],
    desttype: [''],
    dob: [''],
    countryIssue: [''],
  });

  // Enable hanya passport, disable semua lain
  Object.keys(this.profilForm.controls).forEach(key => {
    if (key !== 'visitorPassport') {
      this.profilForm.get(key)?.disable();
    } else {
      this.profilForm.get(key)?.enable();
    }
  });
}

  //Modal Declaration
  @ViewChild('modalStandard') modalStandard!: ModalComponent;
  modalMessage: string = '';
  modalButtonText: string = 'OK';

CarianMaklumatPengembara() {
  const passport = this.profilForm.get('visitorPassport')?.value;

  // ✅ Semak jika kosong
  if (!passport) {
    this.modalMessage = 'Medan mandatori yang bertanda * adalah wajib diisi';
    this.modalButtonText = 'OK';
    this.openStandardModal();
    return; // keluar terus, tak perlu teruskan patch value
  }

  if (passport === 'A0000002') {
    // Patch value tetap akan nampak walaupun field disable
    this.profilForm.patchValue({
      visitorType: 'Warganegara',
      examType: 'Keluar',
      docType: 'P - Passport',
      docNo: 'A0000002',
      name: 'Mohd Russaini Bin Idrus',
      kpNo: '980330025489',
      nationality: 'MYS',
      expiryDate: '20 Januari 2028',
      age: '28',
      desttype: 'Antarabangsa',
      dob: '20 Januari 1992',
      countryIssue: 'MYS - Malaysia',
    });
  } else {
    // Passport tak dijumpai
    this.profilForm.patchValue({
      visitorType: '',
      examType: '',
      docType: '',
      docNo: '',
      name: '',
      kpNo: '',
      nationality: '',
      expiryDate: '',
      age: '',
      desttype: '',
      dob: '',
      countryIssue: '',
    });
    this.modalMessage = 'Passport tidak dijumpai!';
    this.modalButtonText = 'OK';
    this.openStandardModal();
  }
}


HantarMaklumatPengembara() {
  // ✅ Semak visitorType
  const visitorType = this.profilForm.get('visitorType')?.value || 'Warganegara';
  console.log(visitorType);
  this.isWarganegara = visitorType === 'Warganegara';
  console.log('isWarganegara:', this.isWarganegara);

  // Papar modal kejayaan
  this.modalMessage = 'Rekod Berjaya Dihantar!';
  this.modalButtonText = 'OK';
  this.openStandardModal();
}


  resetForm() {
    this.profilForm.reset();   // semua field jadi null
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

