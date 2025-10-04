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
  NamaAnakKapal: string;
  Jawatan: string;
  NoPasport: string;
  TarikhTamat: string;
  BukuPelaut: string;
  IMM26: string;
  IMM262nd: string;
  StatusAnakKapal: string;
  PelabuhanKetibaan: string;
  PelabuhanPelepasan: string;
  NegaraAsalKapal: string;
  NamaKeluarga: string;
  NamaPenumpang: string;
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
  Warganegara: string,
  PenumpangGelap: string,
  TarikhTamatPelaut: string,
  SignOn: string,
  SignOff: string,
  StatusSupernumerary: string,
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
  selector: 'app-maklumat-anak-kapal-rawatan-hospital',
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
  templateUrl: './maklumat-anak-kapal-rawatan-hospital.component.html',
  styleUrl: './maklumat-anak-kapal-rawatan-hospital.component.scss'
})
export class MaklumatAnakKapalRawatanHospitalComponent {

// Form data model
      formData: FormData = { 
        Nama: '',
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
        IMM262nd: '',
        StatusAnakKapal: '',
        PelabuhanKetibaan: '',
        PelabuhanPelepasan: '',
        NegaraAsalKapal: '',
        NamaKeluarga: '',
        NamaPenumpang: '',
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
        Warganegara: '',
        PenumpangGelap: '',
        TarikhTamatPelaut: '',
        SignOn: '',
        SignOff: '',
        StatusSupernumerary: '',
  
      };
    // Ship list for table
    shipList: ShipData[] = [];
      // Validation flags
      isFormValid: boolean = false;
    
      // Step navigation
      currentStep = 6;
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
        this.router.navigate(['/ibc/pengurusan-perkapalan/maklumat-penumpang-gelap']);
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
        this.router.navigate(['/ibc/pengurusan-perkapalan/maklumat-penumpang-rawatan-hospital']);
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
          this.formData.NamaAnakKapal,
          this.formData.Jawatan,
          this.formData.NoPasport,
          this.formData.TarikhTamat,
          this.formData.BukuPelaut,
          this.formData.TarikhLahir,
          this.formData.TempatLahir,
          this.formData.IMM26,
          this.formData.IMM262nd,
          this.formData.StatusAnakKapal,
          this.formData.PelabuhanKetibaan,
          this.formData.PelabuhanPelepasan,
          this.formData.NegaraAsalKapal,
          this.formData.NamaKeluarga,
          this.formData.NamaPenumpang,
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
          this.formData.Warganegara,
          this.formData.PenumpangGelap,
          this.formData.TarikhTamatPelaut,
          this.formData.SignOn,
          this.formData.SignOff,
          this.formData.StatusSupernumerary,
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
          NamaAnakKapal: '',
          Jawatan: '',
          NoPasport: '',
          TarikhTamat: '',
          BukuPelaut: '',
          IMM26: '',
          IMM262nd: '',
          StatusAnakKapal: '',
          PelabuhanKetibaan: '',
          PelabuhanPelepasan: '',
          NegaraAsalKapal: '',
          NamaKeluarga: '',
          NamaPenumpang: '',
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
          Warganegara: '',
          PenumpangGelap: '',
          TarikhTamatPelaut: '',
          SignOn: '',
          SignOff: '',
          StatusSupernumerary: '',
        };
        this.isFormValid = false;
      }


}
