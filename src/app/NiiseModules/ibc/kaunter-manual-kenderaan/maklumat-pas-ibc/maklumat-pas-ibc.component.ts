// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Router, RouterModule } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute  } from '@angular/router';

// CoreUI Imports
import {
  CardComponent,           // <c-card>
  CardHeaderComponent,     // <c-card-header>
  CardBodyComponent,       // <c-card-body>
  RowComponent,            // <c-row>
  ColComponent,            // <c-col>
  ButtonDirective          // [cButton]
} from '@coreui/angular';

@Component({
  selector: 'app-maklumat-pas-ibc',
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
      ButtonDirective], //Routing
  templateUrl: './maklumat-pas-ibc.component.html',
  styleUrl: './maklumat-pas-ibc.component.scss'
})
export class MaklumatPasIbcComponent {
  //ReactiveModule Form
  pasForm!: FormGroup;

  //Define current step
  currentStep = 2;
  photoUrl = '';

  // Stepper
  steps = [
    { number: 1, title: 'Maklumat Profil Pengembara', route: '/maklumat-profil-pengembara-ibc' },
    { number: 2, title: 'Maklumat Visa', route: '/maklumat-visa-ibc' },
    { number: 3, title: 'Maklumat Pas/Permit', route: '/maklumat-pas-ibc' },
    { number: 4, title: 'Sign On To Join Ship', route: '/sign-on-to-join-ship-ibc' },
  ];

  constructor(private fb: FormBuilder,
             private router: Router,
               private route: ActivatedRoute

  ) {}

  ngOnInit(): void {
  // Stepper logic
  const currentRoute = this.router.url;
  const matched = this.steps.find(s => s.route === currentRoute);
  this.currentStep = matched ? matched.number : 3;

  // Form initialization
  this.pasForm = this.fb.group({
    pasNo: ['VDR239001313', Validators.required],
    QrDvs: ['VDSV13130032'],
    pasType: ['Single Entry Visa'],
    pasIssueDate: ['20 Januari 2024'],
    pasExpiryDate: ['30 Januari 2035'],
    name: ['Muhammad Russaini Bin Idrus'],
    dob: ['20 Januari 1992'],
    gender: ['Lelaki'],
    nationality: ['MYS'],
    docNo: ['A0000002']
  });

  // Disable form fields
  this.pasForm.disable();
}

  //Buttons
  // Biometric Methods
  captureFaceAndIris() {
    console.log('Capturing face and iris...');
    this.router.navigate(['../capturing-face-and-iris-ibc'], { relativeTo: this.route });
  }

  captureFingerprint() {
    console.log('Capturing fingerprint...');
    this.router.navigate(['../cap-jari-ibc'], { relativeTo: this.route });
  
  }

  //Form Methods
  onSubmit() {
    if (this.pasForm.valid) {
      console.log('Form submitted:', this.pasForm.value);
    } else {
      console.log('Form is invalid');
      this.markFormGroupTouched();
    }
  }

  resetForm() {
   this.router.navigate(['../pemeriksaan-masuk-dokumen'], { relativeTo: this.route });
  }


  // Navigation Methods
  goNext(): void {
    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index !== -1 && index + 1 < this.steps.length) {
      // this.router.navigate([this.steps[index + 1].route]);
      this.router.navigate(['../sign-on-to-join-ship-ibc'],  {relativeTo: this.route});
    }
  }

goBack(): void {
  this.router.navigate(['../maklumat-visa-ibc'], { relativeTo: this.route });
}


  // Helper Methods
  private markFormGroupTouched(): void {
    Object.keys(this.pasForm.controls).forEach(key => {
      const control = this.pasForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
}
}
