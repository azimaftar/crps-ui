import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BadgeModule, ColComponent, RowComponent, GridModule } from '@coreui/angular';
import { ReusableTabComponent } from './../../../shared/reusable-tab/reusable-tab.component'

import {
  ButtonModule,
  CardModule,
  FormModule,
  HeaderModule,
  AvatarModule,
} from '@coreui/angular';

interface FormData {
  kategoriPegawai: string;
  jenisDokumen: string;
  noDokumen: string;
  warganegara: string;
  nama: string;
  tarikhLahir: string;
  jantina: string;
  noPengenalan: string;
  noTelefon: string;
  email: string;
  lokasi: string;
  tempatBertugas: string;
  bahagian: string;
  unit: string;
  jawatan: string;
  gred: string;
  gradMelebihiAda: string;
  keperluanBiometrik: string;
  jenisBiometrik: {
    capJari: boolean;
    wajah: boolean;
  };
  kaedahLog: {
    capJari: boolean;
    wajah: boolean;
    otp: boolean;
  };
}

interface FingerprintData {
  capJari1: string;
  capJari2: string;
}

@Component({
  selector: 'maklumat-profil-pegawai',
  standalone: true,
  imports: [CommonModule,
    ButtonModule,
    CardModule,
    FormModule,
    HeaderModule,
    AvatarModule,
    FormsModule,
    RouterModule,
    BadgeModule,
    GridModule,
    ReusableTabComponent],
  templateUrl: './maklumat-profil-pegawai.component.html',
  styleUrls: ['./maklumat-profil-pegawai.component.scss']
})
export class MaklumatProfilPegawaiComponent implements OnInit {

  // Form data model
  formData: FormData = {
    kategoriPegawai: 'Pegawai JIM',
    jenisDokumen: 'MyKad',
    noDokumen: '930330025489',
    warganegara: 'Warganegara',
    nama: 'Mohd Russaini Bin Idrus',
    tarikhLahir: '30 Januari 1993',
    jantina: 'Lelaki',
    noPengenalan: 'AB123456',
    noTelefon: '0112345678',
    email: 'poh.lim@gov.my',
    lokasi: 'Putrajaya',
    tempatBertugas: 'Putrajaya',
    bahagian: 'Visa, Pas dan Permit',
    unit: 'VPP',
    jawatan: 'Pembantu Tadbir',
    gred: 'KP19',
    gradMelebihiAda: 'Sila Pilih-',
    keperluanBiometrik: 'Ya',
    jenisBiometrik: {
      capJari: true,
      wajah: false
    },
    kaedahLog: {
      capJari: true,
      wajah: true,
      otp: true
    }
  };

  // Fingerprint data
  fingerprintData: FingerprintData = {
    capJari1: '',
    capJari2: ''
  };

  // Modal control
  isFingerprintModalOpen: boolean = false;

  // Validation flags
  isFormValid: boolean = false;

  // Step navigation
  currentStep = 1;

  steps = [
    'Maklumat Profil Pegawai',
    'Maklumat Penetapan Peranan',
    'Maklumat PTJ',
    'Dokumen Sokongan',
    'Sejarah ID'
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('Maklumat Profil Pegawai component initialized');
    this.validateForm();
  }

  /**
   * Open fingerprint modal
   */
  openFingerprintModal(): void {
    this.isFingerprintModalOpen = true;
  }

  /**
   * Close fingerprint modal
   */
  closeFingerprintModal(): void {
    this.isFingerprintModalOpen = false;
  }

  /**
   * Scan fingerprint
   */
  scanFingerprint(type: string): void {
    if (type === 'capJari1') {
      this.fingerprintData.capJari1 = 'Fingerprint 1 scanned';
    } else if (type === 'capJari2') {
      this.fingerprintData.capJari2 = 'Fingerprint 2 scanned';
    }
  }

  /**
   * Complete fingerprint scan
   */
  completeFingerprintScan(): void {
    this.closeFingerprintModal();
  }

  /**
   * Navigate to previous step
   */
  goToPrevious(): void {
    console.log('Navigating to previous step');
    // Add your navigation logic here
    // Example: this.router.navigate(['/previous-step']);
    this.router.navigate(['/IDM/kelulusan-permohonan-id/senarai-permohonan-id']);
  }

  /**
   * Navigate to next step
   */  goToNext(): void {
    console.log('Navigating to next step');
    console.log('Form data:', this.formData);
    // Process completion
    if (confirm('Adakah anda pasti untuk menyelesaikan permohonan ID pengguna ini?')) {
      // Implement completion logic here
      // Example: this.submitApplication();
      alert('Permohonan ID pengguna telah berjaya diselesaikan!');
    }
    // Add your navigation logic here
    this.router.navigate(['/IDM/pendaftaran-id-pengguna/kelulusan-permohonan-id/maklumat-penetapan-peranan']);
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
      this.formData.kategoriPegawai,
      this.formData.jenisDokumen,
      this.formData.noDokumen,
      this.formData.nama,
      this.formData.tarikhLahir,
      this.formData.jantina,
      this.formData.noPengenalan,
      this.formData.noTelefon,
      this.formData.email,
      this.formData.lokasi,
      this.formData.tempatBertugas,
      this.formData.bahagian,
      this.formData.unit,
      this.formData.jawatan,
      this.formData.gred,
      this.formData.keperluanBiometrik,
      this.formData.kaedahLog
    ];
    
    // Check if all required fields are filled
    this.isFormValid = requiredFields.every(field =>
      field !== null && field !== undefined && field.toString().trim() !== ''
    );
  }
}