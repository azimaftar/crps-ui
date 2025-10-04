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
  NamaKapal: string;
  JenisKapal: string;
  IMONo: string;
  CallSign: string;
  VoyageNo: string;
  NamaAnakKapal: string;
  Jawatan: string;
  NoPasport: string;
  TarikhTamat: string;
  BukuPelaut: string;
  IMM26: string;
  StatusAnakKapal: string;
  PelabuhanKetibaan: string;
  PelabuhanPelepasan: string;
  NegaraAsalKapal: string;
  NamaKeluarga: string;
  NamaPenumpang: string;
  Warganegara: string;
  TarikhLahir: string;
  TempatLahir: string;
  Jantina: string;
  JenisDokumenPerjalanan: string;
  NoDokumenPerjalanan: string;
  NegaraPengeluarDokumenPerjalanan: string;
  TarikhTamatDokumenPerjalanan: string;
  PelabuhanEmbarkation: string;
  NoVisa: string;
}

// Interface for ship data
interface ShipData {
  namaKapal: string;
  noImo: string;
  noRasmi: string;
  // ADD these new properties for file upload:
  uploadedFile?: File | null;
  uploadError?: string | null;
  jawatan?: string; // Add this if not already present
}

@Component({
  selector: 'app-maklumat-penumpang',
  standalone:true,
  imports: [
    CommonModule,
      ReactiveFormsModule,
      RouterModule,
      //NotificationModalComponent,
      // CoreUI Components
      CardComponent,
      CardHeaderComponent,
      CardBodyComponent,
      RowComponent,
      ColComponent,
      ButtonDirective,
      FormLabelDirective,      // ADD THIS
      FormControlDirective,    // ADD THIS
      FormModule,             // ADD THIS
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
  templateUrl: './maklumat-penumpang.component.html',
  styleUrl: './maklumat-penumpang.component.scss'
})
export class MaklumatPenumpangComponent {

// Form data model
    formData: FormData = { 
      NamaKapal: '',
      JenisKapal: '',
      IMONo: '',
      CallSign: '',
      VoyageNo: '',
      NamaAnakKapal: '',
      Jawatan: '',
      NoPasport: '',
      TarikhTamat: '',
      BukuPelaut: '',
      IMM26: '',
      StatusAnakKapal: '',
      PelabuhanKetibaan: '',
      PelabuhanPelepasan: '',
      NegaraAsalKapal: '',
      NamaKeluarga: '',
      NamaPenumpang: '',
      Warganegara: '',
      TarikhLahir: '',
      TempatLahir: '',
      Jantina: '',
      JenisDokumenPerjalanan: '',
      NoDokumenPerjalanan: '',
      NegaraPengeluarDokumenPerjalanan: '',
      TarikhTamatDokumenPerjalanan: '',
      PelabuhanEmbarkation: '',
      NoVisa: '',

    };
  // Ship list for table
  shipList: ShipData[] = [];
    // Validation flags
    isFormValid: boolean = false;
  
    // Step navigation
    currentStep = 3;
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
      this.router.navigate(['/ibc/pengurusan-perkapalan/maklumat-anak-kapal-dan-supernumerary']);
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
      this.router.navigate(['/ibc/pengurusan-perkapalan/maklumat-orang-yang-diselamatkan']);
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
        this.formData.NamaKapal,
        this.formData.JenisKapal,
        this.formData.IMONo,
        this.formData.CallSign,
        this.formData.VoyageNo,
        this.formData.NamaAnakKapal,
        this.formData.Jawatan,
        this.formData.NoPasport,
        this.formData.TarikhTamat,
        this.formData.BukuPelaut,
        this.formData.Warganegara,
        this.formData.TarikhLahir,
        this.formData.TempatLahir,
        this.formData.IMM26,
        this.formData.StatusAnakKapal,
        this.formData.PelabuhanKetibaan,
        this.formData.PelabuhanPelepasan,
        this.formData.NegaraAsalKapal,
        this.formData.NamaKeluarga,
        this.formData.NamaPenumpang,
        this.formData.Warganegara,
        this.formData.TarikhLahir,
        this.formData.TempatLahir,
        this.formData.Jantina,
        this.formData.JenisDokumenPerjalanan,
        this.formData.NoDokumenPerjalanan,
        this.formData.NegaraPengeluarDokumenPerjalanan,
        this.formData.TarikhTamatDokumenPerjalanan,
        this.formData.PelabuhanEmbarkation,
        this.formData.NoVisa,
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
            
        NamaKapal: '',
        JenisKapal: '',
        IMONo: '',
        CallSign: '',
        VoyageNo: '',
        NamaAnakKapal: '',
        Jawatan: '',
        NoPasport: '',
        TarikhTamat: '',
        BukuPelaut: '',
        IMM26: '',
        StatusAnakKapal: '',
        PelabuhanKetibaan: '',
        PelabuhanPelepasan: '',
        NegaraAsalKapal: '',
        NamaKeluarga: '',
        NamaPenumpang: '',
        Warganegara: '',
        TarikhLahir: '',
        TempatLahir: '',
        Jantina: '',
        JenisDokumenPerjalanan: '',
        NoDokumenPerjalanan: '',
        NegaraPengeluarDokumenPerjalanan: '',
        TarikhTamatDokumenPerjalanan: '',
        PelabuhanEmbarkation: '',
        NoVisa: '',
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

  // ... your existing constructor and ngOnInit ...

  // ADD THESE NEW METHODS FOR FILE UPLOAD:

  // For dynamic ship list items
  onFileSelected(event: any, index: number): void {
    const file = event.target.files[0];
    
    if (!file) {
      return;
    }

    // Initialize uploadedFile and uploadError properties if they don't exist
    if (!this.shipList[index].hasOwnProperty('uploadedFile')) {
      this.shipList[index].uploadedFile = null;
    }
    if (!this.shipList[index].hasOwnProperty('uploadError')) {
      this.shipList[index].uploadError = null;
    }

    // Validate file size
    if (file.size > this.MAX_FILE_SIZE) {
      this.shipList[index].uploadError = 'Saiz fail melebihi 300KB. Sila pilih fail yang lebih kecil.';
      this.shipList[index].uploadedFile = null;
      return;
    }

    // Validate file type
    if (!this.ALLOWED_TYPES.includes(file.type)) {
      this.shipList[index].uploadError = 'Jenis fail tidak dibenarkan. Sila pilih gambar, PDF, atau dokumen Word.';
      this.shipList[index].uploadedFile = null;
      return;
    }

    // File is valid
    this.shipList[index].uploadedFile = file;
    this.shipList[index].uploadError = null;
    
    console.log('File selected for ship index', index, ':', file.name);
    
    // Optional: Upload file to server here
    // this.uploadFileToServer(file, index);
  }

  triggerFileUpload(index: number): void {
    const fileInput = document.getElementById(`fileUpload_${index}`) as HTMLInputElement;
    fileInput?.click();
  }

  removeFile(index: number): void {
    this.shipList[index].uploadedFile = null;
    this.shipList[index].uploadError = null;
    
    // Clear the file input
    const fileInput = document.getElementById(`fileUpload_${index}`) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  // For default rows
  onDefaultFileSelected(event: any, index: number): void {
    const file = event.target.files[0];
    
    if (!file) {
      return;
    }

    // Validate file size
    if (file.size > this.MAX_FILE_SIZE) {
      this.defaultFileErrors[index] = 'Saiz fail melebihi 300KB. Sila pilih fail yang lebih kecil.';
      this.defaultFiles[index] = null;
      return;
    }

    // Validate file type
    if (!this.ALLOWED_TYPES.includes(file.type)) {
      this.defaultFileErrors[index] = 'Jenis fail tidak dibenarkan. Sila pilih gambar, PDF, atau dokumen Word.';
      this.defaultFiles[index] = null;
      return;
    }

    // File is valid
    this.defaultFiles[index] = file;
    this.defaultFileErrors[index] = null;
    
    console.log('Default file selected for index', index, ':', file.name);
    
    // Optional: Upload file to server here
    // this.uploadDefaultFileToServer(file, index);
  }

  triggerDefaultFileUpload(index: number): void {
    const fileInput = document.getElementById(`fileUpload_default_${index}`) as HTMLInputElement;
    fileInput?.click();
  }

  removeDefaultFile(index: number): void {
    this.defaultFiles[index] = null;
    this.defaultFileErrors[index] = null;
    
    // Clear the file input
    const fileInput = document.getElementById(`fileUpload_default_${index}`) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  // Optional: Method to upload file to server
  private uploadFileToServer(file: File, index: number): void {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('shipIndex', index.toString());
    
    // Replace with your actual upload service call
    console.log('Uploading file to server:', file.name);
    
    // Example API call structure:
    // this.http.post('/api/upload-ship-file', formData).subscribe({
    //   next: (response) => {
    //     console.log('File uploaded successfully', response);
    //   },
    //   error: (error) => {
    //     console.error('File upload failed', error);
    //     this.shipList[index].uploadError = 'Gagal memuat naik fail. Sila cuba lagi.';
    //     this.shipList[index].uploadedFile = null;
    //   }
    // });
  }

  // Optional: Method to upload default row file to server
  private uploadDefaultFileToServer(file: File, index: number): void {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('defaultRowIndex', index.toString());
    
    // Replace with your actual upload service call
    console.log('Uploading default file to server:', file.name);
    
    // Example API call structure:
    // this.http.post('/api/upload-default-file', formData).subscribe({
    //   next: (response) => {
    //     console.log('Default file uploaded successfully', response);
    //   },
    //   error: (error) => {
    //     console.error('Default file upload failed', error);
    //     this.defaultFileErrors[index] = 'Gagal memuat naik fail. Sila cuba lagi.';
    //     this.defaultFiles[index] = null;
    //   }
    // });
  }

  // Helper method to format file size for display
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

}


