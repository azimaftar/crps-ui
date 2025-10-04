// semakan-tindakan-penyelia.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

// CoreUI Imports
import {
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  FormLabelDirective,
  FormControlDirective,
  FormSelectDirective,
  FormModule,
  InputGroupComponent,
  InputGroupTextDirective,
} from '@coreui/angular';

// Interface for form data
interface SemakanTindakanData {
  jenisDoumen: string;
  jenisPelapor: string;
  noDokumen: string;
  warganegara: string;
  noPengenalan: string;
}


@Component({
  selector: 'app-semakan-maklumat-pas',
  standalone:true,
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
    FormLabelDirective,
    FormControlDirective,
    FormSelectDirective,
    FormModule,
    InputGroupComponent,
    InputGroupTextDirective,

  ],
  templateUrl: './semakan-maklumat-pas.component.html',
  styleUrl: './semakan-maklumat-pas.component.scss'
})
export class SemakanMaklumatPasComponent implements OnInit {
  // Reactive Form
  semakanForm!: FormGroup;

  // Dropdown options
  jenisDoumenOptions = [
    { value: '', label: 'Pilih Jenis Dokumen' },
    { value: 'passport', label: 'Passport' },
    { value: 'ic', label: 'Kad Pengenalan' },
    { value: 'visa', label: 'Visa' },
    { value: 'permit', label: 'Permit Kerja' },
    { value: 'lain', label: 'Lain-lain' }
  ];

  jenisPelaporOptions = [
    { value: '', label: 'Pilih Jenis Pelapor' },
    { value: 'warganegara', label: 'Warganegara' },
    { value: 'bukan_warganegara', label: 'Bukan Warganegara' },
    { value: 'pelawat', label: 'Pelawat' },
    { value: 'pekerja_asing', label: 'Pekerja Asing' }
  ];

  warganegaraOptions = [
    { value: '', label: 'Pilih Warganegara' },
    { value: 'malaysia', label: 'Malaysia' },
    { value: 'indonesia', label: 'Indonesia' },
    { value: 'singapura', label: 'Singapura' },
    { value: 'thailand', label: 'Thailand' },
    { value: 'brunei', label: 'Brunei' },
    { value: 'filipina', label: 'Filipina' },
    { value: 'china', label: 'China' },
    { value: 'india', label: 'India' },
    { value: 'bangladesh', label: 'Bangladesh' },
    { value: 'myanmar', label: 'Myanmar' },
    { value: 'lain', label: 'Lain-lain' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize form
    this.semakanForm = this.fb.group({
      jenisDoumen: ['', Validators.required],
      jenisPelapor: ['', Validators.required],
      noDokumen: ['', [Validators.required, Validators.minLength(3)]],
      warganegara: ['', Validators.required],
      noPengenalan: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Search/Submit function
  // onSemak(): void {
  //   if (this.semakanForm.valid) {
  //     const formData = this.semakanForm.value;
  //     console.log('Form Data Submitted:', formData);
      
  //     // Show loading or success message
  //     alert('Sedang memproses semakan...');
      
  //     // Here you can add your API call or navigation logic
  //     // Example: navigate to results page
  //     // this.router.navigate(['/results'], { state: { searchData: formData } });
      
  //   } else {
  //     alert('Sila lengkapkan semua maklumat yang diperlukan.');
  //     this.markFormGroupTouched();
  //   }
  // }

  onSemak(): void {
    //console.log('Navigating to previous step');
    // Add your navigation logic here
    // Example: this.router.navigate(['/previous-step']);
    this.router.navigate(['/ibc/semakan-dan-tindakan-penyelia/cetak-pas-maklumat']);
  }

  // Reset/Clear function
  onSetSemula(): void {
    const confirmReset = confirm('Adakah anda pasti untuk mengosongkan semua maklumat?');
    
    if (confirmReset) {
      this.semakanForm.reset();
      console.log('Form has been reset');
    }
  }

  // Helper function to mark all fields as touched for validation
  private markFormGroupTouched(): void {
    Object.keys(this.semakanForm.controls).forEach(key => {
      const control = this.semakanForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }

  // Helper function to check if field is invalid
  isFieldInvalid(fieldName: string): boolean {
    const field = this.semakanForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  // Get error message for field
  getFieldErrorMessage(fieldName: string): string {
    const field = this.semakanForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required']) {
        return 'Maklumat ini diperlukan';
      }
      if (field.errors['minlength']) {
        return `Minimum ${field.errors['minlength'].requiredLength} aksara diperlukan`;
      }
    }
    return '';
  }
}
