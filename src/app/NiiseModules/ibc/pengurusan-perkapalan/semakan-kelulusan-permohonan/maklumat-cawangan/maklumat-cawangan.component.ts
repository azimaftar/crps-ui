import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CoreuiModalComponent } from '../../../../../core/components/coreui-modal/coreui-modal.component';

import {
  CardComponent,           // <c-card>
  CardHeaderComponent,     // <c-card-header>
  CardBodyComponent,       // <c-card-body>
  RowComponent,            // <c-row>
  ColComponent,            // <c-col>
  ButtonDirective,         // [cButton]
} from '@coreui/angular';
import { from } from 'rxjs';

@Component({
  selector: 'app-maklumat-cawangan',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    RouterModule,
    // CoreUI Components
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    CoreuiModalComponent], //Routing
  templateUrl: './maklumat-cawangan.component.html',
  styleUrl: './maklumat-cawangan.component.scss'
})

export class MaklumatCawanganComponent implements OnInit {
  //ReactiveModule Form
  profilForm!: FormGroup;

  //Define current step
  currentStep = 3;
  photoUrl = '';

  // Stepper
   steps = [
    { number: 1, title: 'Maklumat Syarikat Perkapalan', route: '/ibc/semakan-kelulusan-permohonan/maklumat-syarikat-perkapalan' },
    { number: 2, title: 'Maklumat Cawangan', route: '/ibc/semakan-kelulusan-permohonan/maklumat-cawangan' },
    { number: 3, title: 'Maklumat Bank Guarantee/Security Bon', route: '/ibc/semakan-kelulusan-permohonan/maklumat-bank-guarantee-security-bon' },
    { number: 4, title: 'Maklumat Dokumen Sokongan', route: '/ibc/semakan-kelulusan-permohonan/maklumat-dokumen-sokongan' },
  ];

  //Constructor
  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  maklumat: string = '';

  ngOnInit(): void {
    // Stepper logic
    const currentRoute = this.router.url.split('?')[0]; // remove query params if any
    const matchedStep = this.steps.find(s => s.route === currentRoute);
    this.currentStep = matchedStep ? matchedStep.number : 1;


    // Form initialization
    this.profilForm = this.fb.group({
      branchName: [{ value: 'Alam Maritim Sdn Bhd', disabled: true }],
      branchAddress: [{ value: 'Masuk', disabled: true }],
      companyAddress: [{ value: 'Antarabangsa', disabled: true }],
      postcode: [{ value: 'P - Passport', disabled: true }],
      negeri: [{ value: 'MYS', disabled: true }],
      phoneNo: [{ value: '20 Januari 2028', disabled: true }],
      email: [{ value: 'Muhammad Russaini Bin Idrus', disabled: true }],
      branchPhoneNo: [{ value: '9803300225489', disabled: true }],
      branchAdminName: [{ value: 'Muhammad Russaini Bin Idrus', disabled: true }],
      branchEmail: [{ value: 'A0000002', disabled: true }],
      docType: [{ value: 'MYS', disabled: true }],
      companyPhoneNo: [{ value: '20 Januari 2028', disabled: true }],
      companyEmail: [{ value: 'MYS - Malaysia', disabled: true }],
      shipName: [{ value: 'Titanic', disabled: true }],
      shipType: [{ value: 'Kapal Selam', disabled: true }],
      indikator: [{ value: '', disabled: true }],
      shipCategory: [{ value: '', disabled: true }],
    });

  }

  // Form Methods
  onSubmit() {
    console.log('Capturing fingerprint...');
    this.router.navigate(['ibc/pemeriksaan-masuk/emel-notifikasi'])
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
  goToStep(step: any): void {
    this.router.navigate([step.route]);
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

   isFirstStep(): boolean {
  return this.currentStep === 1;
  }

  isLastStep(): boolean {
    return this.currentStep === this.steps.length;
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

  //Modal
  openModal: string | null = null;

  open(modalId: string) {
    this.openModal = modalId;
  }

  close() {
    this.openModal = null;
  }
}
