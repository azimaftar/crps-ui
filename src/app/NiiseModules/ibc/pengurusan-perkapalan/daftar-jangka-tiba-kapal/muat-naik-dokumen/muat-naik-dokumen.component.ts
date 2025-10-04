import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute  } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import { BadgeModule, GridModule } from '@coreui/angular';
import { ReusableTabComponent } from '../../../shared/reusable-tab/reusable-tab.component'

// CoreUI Imports - ALL REQUIRED IMPORTS
import {
  CardComponent,           // <c-card>
  CardHeaderComponent,     // <c-card-header>
  CardBodyComponent,       // <c-card-body>
  RowComponent,            // <c-row>
  ColComponent,            // <c-col>
  ButtonDirective,         // [cButton]
  FormLabelDirective,      // cLabel
  FormControlDirective,    // cFormControl
  FormSelectDirective,     // cFormSelect
  FormModule,             // For form directives
  InputGroupComponent,     // <c-input-group>
  InputGroupTextDirective, // <c-input-group-text>
  ButtonModule,
  CardModule,
  HeaderModule,
  AvatarModule,
} from '@coreui/angular';

interface FormData { 
  Catatan: string;
  NamaFail: string,
}

// Interface for ship data
interface ShipData {
  // ADD these new properties for file upload:
  uploadedFile?: File | null;
  uploadError?: string | null;
}


@Component({
  selector: 'app-muat-naik-dokumen',
  standalone:true,
  imports: [
    CommonModule,
      ReactiveFormsModule,
      RouterModule,
      CardComponent,
      CardHeaderComponent,
      CardBodyComponent,
      RowComponent,
      ColComponent,
      ButtonDirective,
      FormLabelDirective,     
      FormControlDirective,    
      FormModule,             
      CommonModule,
      ButtonModule,
      CardModule,
      FormModule,
      HeaderModule,
      AvatarModule,
      FormsModule,
      RouterModule,
      BadgeModule,
      GridModule,
      ReusableTabComponent
  ],
  templateUrl: './muat-naik-dokumen.component.html',
  styleUrl: './muat-naik-dokumen.component.scss'
})
export class MuatNaikDokumenComponent {

// Form data model
    formData: FormData = { 
      Catatan: '',
      NamaFail: '',
    };
  // Ship list for table
  shipList: ShipData[] = [];
    // Validation flags
    isFormValid: boolean = false;
  
    // Step navigation
    currentStep = 9;
    //totalSteps: number = 9;
    steps = [
      'Maklumat Jangka Tiba Kapal',
      'Maklumat Anak Kapal dan Supernumerary',
      'Maklumat Penumpang',
      'Maklumat Orang Yang Diselamatkan',
      'Maklumat Penumpang Gelap (Stowaway)',
      'Maklumat Anak Kapal yang memerlukan rawatan hospital atau yang mati',
      'Maklumat Penumpang yang memerlukan rawatan hospital atau yang mati',
      'Maklumat Pergerakan Kapal',
      'Muat Naik Dokumen',
    ];
    constructor(private router: Router) { }
  
    ngOnInit(): void {
      console.log('Maklumat Profil Pegawai component initialized');
      this.validateForm();
    }
  
    /**
     * Navigate to previous step
     */
    goToPrevious(): void {
      console.log('Navigating to previous step');
      // Add your navigation logic here
      // Example: this.router.navigate(['/previous-step']);
      this.router.navigate(['/ibc/pengurusan-perkapalan/maklumat-penumpang-rawatan-hospital']);
    }
  
    /**
     * Navigate to next step
     */
    goToNext(): void {
      console.log('Navigating to next step');
      console.log('Form data:', this.formData);
      // Process completion
      if (confirm('Adakah anda pasti untuk menyelesaikan permohonan ID pengguna ini?')) {
        // Implement completion logic here
        // Example: this.submitApplication();
        alert('Permohonan ID pengguna telah berjaya diselesaikan!');
      }
      // Add your navigation logic here
      this.router.navigate(['/ibc/pengurusan-perkapalan/muat-naik-dokumen']);
    }
  
    /**
     * Show Wujud ID functionality
     */
    showWujudID(): void {
      console.log('Show Wujud ID clicked');
      // Implement your Wujud ID logic here
    }
  
    /**
     * Determine if user can proceed to next step
     */
    canProceedToNext(): boolean {
      this.validateForm();
      return this.isFormValid;
    }
  
    /**
     * Validate form data
     */
    validateForm(): void {
      const requiredFields = [
        this.formData.Catatan,
        this.formData.NamaFail,
      ];
  
      // Check if all required fields are filled
      this.isFormValid = requiredFields.every(field =>
        field !== null && field !== undefined && field.toString().trim() !== ''
      );
    }

    saveForm(): void {
    this.validateForm();
    if (this.isFormValid) {
      console.log('Form is valid. Saving data:', this.formData);
      // You can later send the form data to an API here
      alert('Maklumat berjaya disimpan!');
    } else {
      alert('Sila lengkapkan semua maklumat wajib.');
    }
  }

    resetForm(): void {
      this.formData = {
        Catatan: '',
        NamaFail: '',
      };
      this.isFormValid = false;
    }

// ADD THESE NEW PROPERTIES FOR FILE UPLOAD:
  defaultFiles: (File | null)[] = [null, null, null]; // For default rows
  defaultFileErrors: (string | null)[] = [null, null, null]; // For default row errors
  
  private readonly MAX_FILE_SIZE = 300 * 1024; // 300KB in bytes
  private readonly ALLOWED_TYPES = [
    'image/jpeg', 'image/jpg', 'image/png', 'image/gif',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];

  

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

}
