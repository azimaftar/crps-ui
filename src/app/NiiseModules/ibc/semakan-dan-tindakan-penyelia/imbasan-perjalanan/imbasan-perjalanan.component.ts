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
import { DomSanitizer } from '@angular/platform-browser';
import { data } from './pasport';

// Interface for form data
interface SemakanTindakanData {
  jenisDoumen: string;
  jenisPelapor: string;
  noDokumen: string;
  warganegara: string;
  noPengenalan: string;
}

@Component({
  selector: 'app-imbasan-perjalanan',
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
    InputGroupTextDirective,],
  templateUrl: './imbasan-perjalanan.component.html',
  styleUrl: './imbasan-perjalanan.component.scss'
})
export class ImbasanPerjalananComponent implements OnInit {

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
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // Initialize form
    this.semakanForm = this.fb.group({
      jenisDoumen: ['', Validators.required],
      jenisPelapor: ['', Validators.required],
      noDokumen: ['', [Validators.required, Validators.minLength(3)]],
      warganegara: ['', Validators.required],
      noPengenalan: ['', [Validators.required, Validators.minLength(12)]]
    });
  }

  // Search/Submit function
  onSemak(): void {
    if (this.semakanForm.valid) {
      const formData = this.semakanForm.value;
      console.log('Form Data Submitted:', formData);
      
      // Show loading or success message
      alert('Sedang memproses semakan...');
      
      // Here you can add your API call or navigation logic
      // Example: navigate to results page
      this.router.navigate(['/ibc/semakan-dan-tindakan-penyelia/cetak-pas-maklumat']);
      
    } else {
      alert('Sila lengkapkan semua maklumat yang diperlukan.');
      this.markFormGroupTouched();
    }
  }

  

    passportData: any = {
    Name: 'John Doe',
    Gender: 'M',
    DOB: '19900115',
    Age: 34,
    Nationality: 'USA',
    Type: 'P',
    DocNo: 'A1234567',
    IssueState: 'USA',
    DateExpiry: '20300115',
    RemainderTerm: '720',
    EPassport: 'Y',
    ChipType: 'ICAO',
    DSCertIssue: 'USA',
    Result: 'PASS',
    FRR: 1,
    ScanID: 'SCAN123456',
    DPImg: data
  };

  getImageFromBase64(base64: any, format: string = "jpeg"): any {
    return this.sanitizer
    .bypassSecurityTrustResourceUrl(`data:image/${format};base64,${base64}`); 
    ;
  }




  formatDate(dateStr: string): string {
    if (!dateStr || dateStr.length !== 8) return 'N/A';
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return `${day}/${month}/${year}`;
  }

  getCountryName(code: string): string {
    const countries: Record<string, string> = {
      'JPN': 'Japan',
      'MYS': 'Malaysia',
      'MY': 'Malaysia',
      'USA': 'United States',
      'GBR': 'United Kingdom'
    };
    return countries[code] || code;
  }

  getValidityStatus(term: string): string {
    const remaining = parseInt(term, 10);
    if (remaining < 0) return 'Expired';
    if (remaining < 30) return `Only ${term} days`;
    if (remaining < 365) return `${Math.floor(remaining / 30)} months`;
    return `${Math.floor(remaining / 365)} years`;
  }

  clearData(): void {
    this.passportData = null;
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

