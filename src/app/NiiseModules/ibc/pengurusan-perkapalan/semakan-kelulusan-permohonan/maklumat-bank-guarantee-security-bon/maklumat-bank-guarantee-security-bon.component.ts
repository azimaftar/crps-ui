import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CoreuiModalComponent } from '../../../../../core/components/coreui-modal/coreui-modal.component';
import {
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective,
  ButtonCloseDirective,
  TableDirective,
  TableColorDirective,
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
  selector: 'app-maklumat-bank-guarantee-security-bon',
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
    TableDirective,
    TableColorDirective,], //Routing
  templateUrl: './maklumat-bank-guarantee-security-bon.component.html',
  styleUrl: './maklumat-bank-guarantee-security-bon.component.scss'
})

export class MaklumatBankGuaranteeSecurityBonComponent implements OnInit {
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
  const currentRoute = this.router.url.split('?')[0];

  const matchedStep = this.steps.find(s => {
    const stepRoute = Array.isArray(s.route) ? s.route[0] : s.route;
    return stepRoute === currentRoute;
  });

  this.currentStep = matchedStep ? matchedStep.number : 1;

  // Form initialization
  this.profilForm = this.fb.group({
    noBankGuarantee: [{ value: 'Alam Maritim Sdn Bhd', disabled: true }],
    bankName: [{ value: 'Masuk', disabled: true }],
    effectiveDate: ['', Validators.required],  // enabled and required
    endDate: ['', Validators.required],        // enabled and required
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
  const routePath = Array.isArray(step.route) ? step.route[0] : step.route;
  this.router.navigate([routePath]);
  }

  goNext(): void {
    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index !== -1 && index + 1 < this.steps.length) {
      const nextRoute = Array.isArray(this.steps[index + 1].route) ? this.steps[index + 1].route[0] : this.steps[index + 1].route;
      this.router.navigate([nextRoute]);
    }
  }

  goBack(): void {
    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index > 0) {
      const prevRoute = Array.isArray(this.steps[index - 1].route) ? this.steps[index - 1].route[0] : this.steps[index - 1].route;
      this.router.navigate([prevRoute]);
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

  //Upload file
  selectedFile: File | null = null;
  uploadedDocuments: any[] = [];

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) { // 10MB limit
      this.selectedFile = file;
    } else {
      alert('Fail melebihi 10MB!');
      event.target.value = ''; // clear file input
      this.selectedFile = null;
    }
  }

  uploadDocument(): void {
    if (this.selectedFile) {
      const docName = this.selectedFile.name;
      const fileFormat = docName.split('.').pop()?.toUpperCase() || 'N/A';

      this.uploadedDocuments.push({
        name: docName,
        format: fileFormat,
        file: this.selectedFile,
      });

      this.selectedFile = null;
      // Optional: Reset file input field
      const fileInput = document.getElementById('supportingDocument') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }
  }

  removeDocument(index: number): void {
    this.uploadedDocuments.splice(index, 1);
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
