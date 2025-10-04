import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective,
  ButtonCloseDirective,
}
  from '@coreui/angular';
// CoreUI Imports
import {
  CardComponent,           // <c-card>
  CardHeaderComponent,     // <c-card-header>
  CardBodyComponent,       // <c-card-body>
  RowComponent,            // <c-row>
  ColComponent,            // <c-col>
  ButtonDirective,         // [cButton]
} from '@coreui/angular';
@Component({
  selector: 'app-maklumat-profil',
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
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ModalToggleDirective,
    ButtonCloseDirective
  ],
  templateUrl: './maklumat-profil.component.html',
  styleUrl: './maklumat-profil.component.scss'
})
export class MaklumatProfilComponent {
  //ReactiveModule Form
  profilForm!: FormGroup;

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
    private route: ActivatedRoute
  ) { }

  maklumat: string = '';

  ngOnInit(): void {
    // Stepper logic
    const currentRoute = this.router.url;
    const matched = this.steps.find(s => s.route === currentRoute);
    this.currentStep = matched ? matched.number : 1;
    this.route.queryParams.subscribe(params => {
      this.maklumat = params['maklumat'] || '';
      console.log('maklumat:', this.maklumat); // for debugging
    });


    // Form initialization
    this.profilForm = this.fb.group({
      visitorType: [{ value: 'Warganegara', disabled: true }],
      jenisPemeriksaan: [{ value: 'Masuk', disabled: true }],
      journeyType: [{ value: 'Antarabangsa', disabled: true }],
      docType: [{ value: 'P - Passport', disabled: true }],
      docNo: [{ value: 'A0000002', disabled: true }],
      kpNo: [{ value: '9803300225489', disabled: true }],
      nationality: [{ value: 'MYS', disabled: true }],
      expiryDate: [{ value: '20 Januari 2028', disabled: true }],
      countryIssue: [{ value: 'MYS - Malaysia', disabled: true }],
      name: [{ value: 'Muhammad Russaini Bin Idrus', disabled: true }],
      printedName: [{ value: 'Muhammad Russaini Bin Idrus', disabled: true }],
      dob: [{ value: '20 Januari 1992', disabled: true }],
      gender: [{ value: 'Lelaki', disabled: true }],
      pasType: [{ value: 'Pas Lawatan Sosial' }],
      pasExpiryDate: [{ value: 'KLIA Terminal 1', disabled: true }],
      vesselNo: [{ value: 'OD1007', disabled: true }],
      movementType: [{ value: 'Periksa Masuk', disabled: true }],
      entryBranch: [{ value: 'KLIA Terminal 1', disabled: true }],
      entryDate: [{ value: '20 Januari 2024', disabled: true }],
      entryTime: [{ value: '18:05:27', disabled: true }]
    });

  }

  //Buttons
  // Biometric Methods
  captureFaceAndIris() {
    console.log('Capturing face and iris...');
    this.router.navigate(['ibc/pemeriksaan-masuk-kbc/biometrik-wajah-iris'], { queryParams: { statusImbas: "imbas" } })
  }

  captureFingerprint() {
    console.log('Capturing fingerprint...');
    this.router.navigate(['ibc/pemeriksaan-masuk-kbc/biometrik-capjari'], { queryParams: { statusImbas: "imbas" } })
  }

  // Form Methods
  onSubmit() {
    console.log('Capturing fingerprint...');
    this.router.navigate(['ibc/pemeriksaan-masuk-kbc/pilihan-dokumen'])
    // if (this.profilForm.valid) {
    //   console.log('Form submitted:', this.profilForm.value);
    //   // Handle form submission logic here
    // } else {
    //   console.log('Form is invalid');
    //   this.markFormGroupTouched();
    // }
  }

  resetForm() {
    // this.profilForm.reset();
    // this.currentStep = 1;
    // this.photoUrl = '';
  }


  // Navigation Methods
  goNext(): void {
    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index !== -1 && index + 1 < this.steps.length) {
      this.router.navigate([this.steps[index + 1].route]);
    }
  }

  goBack(): void {
    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index > 0) {
      this.router.navigate([this.steps[index - 1].route]);
    }
  }

  //Disabled back button bc first page
  isFirstStep() {
    return this.currentStep === 1;
  }


  // Helper Methods
  private markFormGroupTouched(): void {
    Object.keys(this.profilForm.controls).forEach(key => {
      const control = this.profilForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }
}
