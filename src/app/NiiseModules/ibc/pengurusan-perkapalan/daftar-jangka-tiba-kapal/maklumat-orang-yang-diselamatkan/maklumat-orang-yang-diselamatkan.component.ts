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
  Nama: string;
  JenisKapal: string;
  IMONo: string;
  CallSign: string;
  VoyageNo: string;
  Jawatan: string;
  NoPasport: string;
  TarikhTamat: string;
  BukuPelaut: string;
  IMM26: string;
  StatusAnakKapal: string;
  PelabuhanKetibaan: string;
  PelabuhanPelepasan: string;
  NegaraAsalKapal: string;
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
  StatusPenumpang: string;
  StatusPemeriksaan: string;
  OrangYgDiselamatkan: string;
  NoLaporanPolis: string,
  DokLaporanPolis: string,
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
  selector: 'app-maklumat-orang-yang-diselamatkan',
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
  templateUrl: './maklumat-orang-yang-diselamatkan.component.html',
  styleUrl: './maklumat-orang-yang-diselamatkan.component.scss'
})
export class MaklumatOrangYangDiselamatkanComponent {

  // Form data model
      formData: FormData = { 
        Nama: '',
        JenisKapal: '',
        IMONo: '',
        CallSign: '',
        VoyageNo: '',
        Jawatan: '',
        NoPasport: '',
        TarikhTamat: '',
        BukuPelaut: '',
        IMM26: '',
        StatusAnakKapal: '',
        PelabuhanKetibaan: '',
        PelabuhanPelepasan: '',
        NegaraAsalKapal: '',
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
        StatusPenumpang: '',
        StatusPemeriksaan: '',
        OrangYgDiselamatkan: '',
        NoLaporanPolis: '',
        DokLaporanPolis: '',
  
      };
    // Ship list for table
    shipList: ShipData[] = [];
      // Validation flags
      isFormValid: boolean = false;
    
      // Step navigation
      currentStep = 4;
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
    
      // Add this property to track disabled state
      isStowawayFieldsDisabled: boolean = false;
    
      ngOnInit(): void {
        console.log('Maklumat Profil Pegawai component initialized');
        this.validateForm();
        
        // Set initial disabled state based on PenumpangGelap value
        if (this.formData.OrangYgDiselamatkan === 'Tiada') {
          this.isStowawayFieldsDisabled = true;
        }
      }

      onStowawayChange(): void {
        if (this.formData.OrangYgDiselamatkan === 'Tiada') {
          // Clear the form fields
          this.formData.Nama = '';
          this.formData.Jantina = '';
          this.formData.TarikhLahir = '';
          this.formData.Warganegara = '';
          this.formData.StatusPenumpang = '';
          this.formData.StatusPemeriksaan = '';
          this.formData.NoLaporanPolis= '',
          this.formData.DokLaporanPolis= '',
          
          // Disable the fields
          this.isStowawayFieldsDisabled = true;
        } else {
          // Enable the fields
          this.isStowawayFieldsDisabled = false;
        }
      }
    
      /**
       * Navigate to previous step
       */
      goToPrevious(): void {
        console.log('Navigating to previous step');
        // Add your navigation logic here
        // Example: this.router.navigate(['/previous-step']);
        this.router.navigate(['/ibc/pengurusan-perkapalan/maklumat-penumpang']);
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
        this.router.navigate(['/ibc/pengurusan-perkapalan/maklumat-penumpang-gelap']);
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
          this.formData.Nama,
          this.formData.JenisKapal,
          this.formData.IMONo,
          this.formData.CallSign,
          this.formData.VoyageNo,
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
          this.formData.StatusPenumpang,
          this.formData.StatusPemeriksaan,
          this.formData.OrangYgDiselamatkan,
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
              
          Nama: '',
          JenisKapal: '',
          IMONo: '',
          CallSign: '',
          VoyageNo: '',
          Jawatan: '',
          NoPasport: '',
          TarikhTamat: '',
          BukuPelaut: '',
          IMM26: '',
          StatusAnakKapal: '',
          PelabuhanKetibaan: '',
          PelabuhanPelepasan: '',
          NegaraAsalKapal: '',
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
          StatusPenumpang: '',
          StatusPemeriksaan: '',
          OrangYgDiselamatkan: '',
          NoLaporanPolis: '',
          DokLaporanPolis: '',
        };
        this.isFormValid = false;
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

}



