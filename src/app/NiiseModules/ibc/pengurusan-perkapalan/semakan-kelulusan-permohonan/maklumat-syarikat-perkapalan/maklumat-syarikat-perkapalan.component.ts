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
import { from } from 'rxjs';

@Component({
  selector: 'app-maklumat-syarikat-perkapalan',
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
    ], //Routing
  templateUrl: './maklumat-syarikat-perkapalan.component.html',
  styleUrl: './maklumat-syarikat-perkapalan.component.scss'
})

export class MaklumatSyarikatPerkapalanComponent implements OnInit {
  //ReactiveModule Form
  profilForm!: FormGroup;

  //Define current step
  currentStep = 1;
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
      companyName: [{ value: 'Alam Maritim Sdn Bhd', disabled: true }],
      noSSM: [{ value: 'Masuk', disabled: true }],
      companyAddress: [{ value: 'Antarabangsa', disabled: true }],
      postcode: [{ value: 'P - Passport', disabled: true }],
      negeri: [{ value: 'MYS', disabled: true }],
      phoneNo: [{ value: '20 Januari 2028', disabled: true }],
      email: [{ value: 'Muhammad Russaini Bin Idrus', disabled: true }],
      kpNo: [{ value: '9803300225489', disabled: true }],
      namaPengurus: [{ value: 'Muhammad Russaini Bin Idrus', disabled: true }],
      docNo: [{ value: 'A0000002', disabled: true }],
      docType: [{ value: 'MYS', disabled: true }],
      companyPhoneNo: [{ value: '20 Januari 2028', disabled: true }],
      companyEmail: [{ value: 'MYS - Malaysia', disabled: true }],
    });

  }
  goToStep(step: any): void {
    this.router.navigate([step.route]);
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

}
