import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

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

import { ReusableTabComponent } from './../../shared/reusable-tab/reusable-tab.component'; //Stepper

@Component({
  selector: 'app-maklumat-visa',
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
  templateUrl: './maklumat-visa.component.html',
  styleUrl: './maklumat-visa.component.scss'
})

export class MaklumatVisaComponent {
  // Step navigation
  currentStep = 2;

  steps = [
    'Maklumat Profil Pengembara',
    'Maklumat Visa',
    'Maklumat Pas/Permit',
    'Maklumat Pengguna Kerap (FTF)',
    'Sign On To Join Ship'
  ];

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.visaForm = this.fb.group({
      visaNo: [{ value: '', disabled: true }],
      visaQrVds: [{ value: '', disabled: true }],
      visaType: [{ value: '', disabled: true }],
      visaIssueDate: [{ value: '', disabled: true }],
      visaExpiryDate: [{ value: '', disabled: true }],
      visaName: [{ value: '', disabled: true }],
      visaDob: [{ value: '', disabled: true }],
      visaGender: [{ value: '', disabled: true }],
      visaNationality: [{ value: '', disabled: true }],
      docNo: [{ value: '', disabled: true }]
    });

  }

  //Form
  visaForm!: FormGroup;
  isMaklumatLengkap = false;

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
  captureFaceAndIris() {
    console.log('Capturing face and iris...');
    this.router.navigate(['ibc/pemeriksaan-masuk/biometrik-wajah'], { queryParams: { statusImbas: "imbas" } })
  }

  captureFingerprint() {
    console.log('Capturing fingerprint...');
    this.router.navigate(['ibc/pemeriksaan-masuk/biometrik-capjari'], { queryParams: { statusImbas: "imbas" } })
  }

  saveForm(): void {

  }


  resetForm(): void {
    this.router.navigate(['ibc/pemeriksaan-masuk/pemeriksaan-masuk-2']);
  }

  goToNext(): void {
    this.router.navigate(['ibc/pemeriksaan-masuk/pemeriksaan-masuk-pas'], { queryParams: { maklumat: 'lengkap' } });
  }

  goToPrevious() {
    this.router.navigate(['ibc/pemeriksaan-masuk/pemeriksaan-masuk'], { queryParams: { maklumat: 'lengkap' } });
  }



}
