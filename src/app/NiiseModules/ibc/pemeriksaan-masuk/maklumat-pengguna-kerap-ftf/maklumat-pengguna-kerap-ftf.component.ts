import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  selector: 'app-maklumat-pengguna-kerap-ftf',
  imports: [ColComponent,
    RowComponent,
    CardComponent,
    CardBodyComponent,
    ButtonDirective,
    ReactiveFormsModule,
    ButtonGroupComponent,
    RouterModule,
    ReusableTabComponent], //Routing
  templateUrl: './maklumat-pengguna-kerap-ftf.component.html',
  styleUrl: './maklumat-pengguna-kerap-ftf.component.scss'
})
export class MaklumatPenggunaKerapFtfComponent {
  //ReactiveModule Form
  ftfForm!: FormGroup;
  photoUrl = '';
  isMaklumatLengkap = false;

  // Step navigation
  currentStep = 4;

  steps = [
    'Maklumat Profil Pengembara',
    'Maklumat Visa',
    'Maklumat Pas/Permit',
    'Maklumat Pengguna Kerap (FTF)',
    'Sign On To Join Ship'
  ];
  

  //Constructor
  constructor(private fb: FormBuilder,
             private router: Router,
             private route: ActivatedRoute
  ) {

    // Form initialization
  this.ftfForm = this.fb.group({
      noFTF: ['ESD239001313'],
      QrVds: ['VDSV13130032'],
      indFTF: ['Pas Pengajian'],
      issueDateFTF: ['20 Januari 2024'],
      expiryFTF: ['30 Januari 2035'],
      name: ['Muhammad Russaini Bin Idrus'],
      dob: ['20 Januari 1992'],
      gender: ['Lelaki'],
      nationality: ['MYS'],
      docNo: ['A0000002'],
      kpNo: ['980330025489']
  });

  

  }

  ngOnInit(): void { 

    this.route.queryParams.subscribe(params => {
      const value = params['maklumat'];
      this.isMaklumatLengkap = value === 'lengkap';
    });

  }

  get canSave(): boolean {
    return this.isMaklumatLengkap;
  }


  // Biometric Methods
  captureFaceAndIris(){
    console.log('Capturing face and iris...');
    this.router.navigate(['ibc/pemeriksaan-masuk/biometrik-wajah'], { queryParams: { statusImbas: "imbas"} })
  }

  captureFingerprint(){
    console.log('Capturing fingerprint...');
    this.router.navigate(['ibc/pemeriksaan-masuk/biometrik-capjari'], { queryParams: { statusImbas: "imbas"} })
  }

  // Form Methods
  saveForm(){
   
  }

  resetForm() {
    this.router.navigate(['ibc/pemeriksaan-masuk/pemeriksaan-masuk-2'] );    
  }


  // Navigation Methods
  goBack():void  {
    this.router.navigate(['ibc/pemeriksaan-masuk/maklumat-pas'], { queryParams: { maklumat: 'lengkap' } });    
  }

  goNext(): void {
    this.router.navigate(['ibc/pemeriksaan-masuk/sign-on-to-join-ship'], { queryParams: { maklumat: 'lengkap' } });    
  }

  
  



  
}
