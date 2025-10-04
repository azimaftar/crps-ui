import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReusableTabComponent } from './../../shared/reusable-tab/reusable-tab.component'; //Stepper

// CoreUI Imports
import {
  CardComponent,           // <c-card>
  CardHeaderComponent,     // <c-card-header>
  CardBodyComponent,       // <c-card-body>
  RowComponent,            // <c-row>
  ColComponent,            // <c-col>
  ButtonDirective,          // [cButton]
  ButtonGroupComponent,
  ModalComponent,
  ModalBodyComponent,
  ModalToggleDirective
} from '@coreui/angular';

@Component({
  selector: 'app-maklumat-pas',
  imports: [
    ColComponent,
    RowComponent,
    CardComponent,
    CardBodyComponent,
    ButtonDirective,
    ReactiveFormsModule,
    ButtonGroupComponent,
    RouterModule,
    ReusableTabComponent], //Routing
  templateUrl: './maklumat-pas.component.html',
  styleUrl: './maklumat-pas.component.scss'
})
export class MaklumatPasComponent {
  //ReactiveModule Form
  pasForm!: FormGroup;
  photoUrl = '';
  isMaklumatLengkap = false;

  // Step navigation
  currentStep = 3;

  steps = [
    'Maklumat Profil Pengembara',
    'Maklumat Visa',
    'Maklumat Pas/Permit',
    'Maklumat Pengguna Kerap (FTF)',
    'Sign On To Join Ship'
  ];

  // Stepper
  // steps = [
  //   { number: 1, title: 'Maklumat Profil Pengembara', route: ['ibc/pemeriksaan-masuk/maklumat-profil'] },
  //   { number: 2, title: 'Maklumat Visa', route: 'ibc/pemeriksaan-masuk/maklumat-visa' },
  //   { number: 3, title: 'Maklumat Pas Permit', route: 'ibc/pemeriksaan-masuk/maklumat-pas' },
  //   { number: 4, title: 'Maklumat Pengguna Kerja (FTF)', route: 'ibc/pemeriksaan-masuk/maklumat-pengguna-kerap' },
  //   { number: 5, title: 'Sign-On To Ship', route: 'ibc/pemeriksaan-masuk/sign-on-to-join-ship' },
  // ];

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.pasForm = this.fb.group({
      pasNo: ['VDR239001313', Validators.required],
      pasQrVds: ['VDSV13130032'],
      pasType: ['Single Entry Visa'],
      pasIssueDate: ['20 Januari 2024'],
      pasExpiryDate: ['30 Januari 2035'],
      pasName: ['Muhammad Russaini Bin Idrus'],
      dob: ['20 Januari 1992'],
      gender: ['Lelaki'],
      nationality: ['MYS'],
      docNo: ['A0000002']
    });
  }


  // Stepper logic
  // const currentRoute = this.router.url;
  // const matched = this.steps.find(s => s.route === currentRoute);
  // this.currentStep = matched ? matched.number : 3;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const value = params['maklumat'];
      this.isMaklumatLengkap = value === 'lengkap';
    });
  }

  get canSave(): boolean {
    return this.isMaklumatLengkap;
  }

  //Buttons
  // Biometric Methods
  captureFaceAndIris() {
    console.log('Capturing face and iris...');
    this.router.navigate(['ibc/pemeriksaan-masuk/biometrik-wajah'], { queryParams: { statusImbas: "imbas" } })
  }

  captureFingerprint() {
    console.log('Capturing fingerprint...');
    this.router.navigate(['ibc/pemeriksaan-masuk/biometrik-capjari'], { queryParams: { statusImbas: "imbas" } })
  }

  // Form Methods
  onSubmit() {

  }

  resetForm() {
    this.router.navigate(['ibc/pemeriksaan-masuk/pemeriksaan-masuk-2']);
  }

  saveForm() {

  }

  // Navigation Methods
  goToNext(): void {
    this.router.navigate(['ibc/pemeriksaan-masuk/maklumat-pengguna-kerap'], { queryParams: { maklumat: 'lengkap' } });
  }

  goToPrevious(): void {
    this.router.navigate(['ibc/pemeriksaan-masuk/maklumat-visa'], { queryParams: { maklumat: 'lengkap' } }); 
  }



}
