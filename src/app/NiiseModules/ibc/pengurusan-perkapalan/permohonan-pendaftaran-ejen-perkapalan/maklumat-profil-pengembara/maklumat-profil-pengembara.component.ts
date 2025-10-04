import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BadgeModule, GridModule } from '@coreui/angular';
import {
  ButtonModule,
  CardModule,
  FormModule,
  HeaderModule,
  AvatarModule,
}
  from '@coreui/angular';
import { ReusableTabComponent } from '../../../shared/reusable-tab/reusable-tab.component';

interface FormData {
  nationality: string;
  dob: string;
  name: string;
  kpNo: string;
  gender: string;
  kategoryEjenP: string;
}

@Component({
  selector: 'app-maklumat-profil-pengembara',
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
      ReusableTabComponent
    ], //Routing
  templateUrl: './maklumat-profil-pengembara.component.html',
  styleUrl: './maklumat-profil-pengembara.component.scss'
})

export class MaklumatProfilPengembaraComponent implements OnInit {

  // Form data model
    formData: FormData = {
      nationality: 'Warganegara',
      name: 'Mohd Russaini Bin Idrus',
      dob: '30 Januari 1993',
      gender: 'Lelaki',
      kpNo: 'AB123456',
      kategoryEjenP: 'Perkapalan Sabah',
    };
  
    // Validation flags
    isFormValid: boolean = false;
  
    // Step navigation
    currentStep = 1;
    //totalSteps: number = 5;
    steps = [
      'Maklumat Profil Pengembara',
      'Maklumat Syarikat Perkapalan',
      'Maklumat Cawangan dan Kapal',
      'Maklumat Bank Guarantee/Security Bon',
      'Maklumat Dokumen Sokongan'
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
      this.router.navigate(['/ibc/pengurusan-perkapalan/laman-utama-permohonan-pendaftaran-ejen']);
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
      this.router.navigate(['/ibc/pengurusan-perkapalan/maklumat-syarikat-perkapalan']);
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
        this.formData.nationality,
        this.formData.name,
        this.formData.dob,
        this.formData.kpNo,
        this.formData.gender,
        this.formData.kategoryEjenP
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
        nationality: '',
        name: '',
        dob: '',
        gender: '',
        kpNo: '',
        kategoryEjenP: ''
      };
      this.isFormValid = false;
    }

}
