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
  selector: 'app-maklumat-dokumen-sokongan',
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
    CoreuiModalComponent,
    TableDirective,
    TableColorDirective,], //Routing
  templateUrl: './maklumat-dokumen-sokongan.component.html',
  styleUrl: './maklumat-dokumen-sokongan.component.scss'
})

export class MaklumatDokumenSokonganComponent implements OnInit {
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
      
    });

  }

  // Form Methods
  onSubmit() {
  if (this.profilForm.valid && this.isLastStep()) {
    console.log('Final submission:', this.profilForm.value);
    this.router.navigate(['ibc/pemeriksaan-masuk/emel-notifikasi']);
  } else {
    this.markFormGroupTouched();
    this.open('modal-wajib-diisi'); // optional
  }
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
