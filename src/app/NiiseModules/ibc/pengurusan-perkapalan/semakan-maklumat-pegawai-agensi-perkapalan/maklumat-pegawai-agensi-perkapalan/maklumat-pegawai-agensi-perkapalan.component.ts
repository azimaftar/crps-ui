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
  agencyOfficerName: string;
  officerKpNo: string;
  job: string;
  unit: string;
  officePhoneNo: string;
  officerPhoneNo: string;
  officerEmail: string;
}

@Component({
  selector: 'app-maklumat-pegawai-agensi-perkapalan',
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
  templateUrl: './maklumat-pegawai-agensi-perkapalan.component.html',
  styleUrl: './maklumat-pegawai-agensi-perkapalan.component.scss'
})

export class MaklumatPegawaiAgensiPerkapalanComponent implements OnInit {

  // Form data model
    formData: FormData = {
      agencyOfficerName: 'Ali Aliah',
      officerKpNo: '30 Januari 1993',
      job: 'Lelaki',
      unit: 'AB123456',
      officePhoneNo: 'Perkapalan Sabah',
      officerPhoneNo: '01123456789',
      officerEmail: '@'
    };
  
    // Validation flags
    isFormValid: boolean = false;
  
    // Step navigation
    currentStep = 1;
    //totalSteps: number = 5;
    steps = [
      'Maklumat Pegawai Agensi Perkapalan',
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
      this.router.navigate(['/ibc/pengurusan-perkapalan/maklumat-pegawai-agensi-perkapalan']);
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
      this.router.navigate(['/ibc/pengurusan-perkapalan/maklumat-dokumen-sokongan']);
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
        this.formData.agencyOfficerName,
        this.formData.officerKpNo,
        this.formData.job,
        this.formData.unit,
        this.formData.officePhoneNo,
        this.formData.officerPhoneNo,
        this.formData.officerEmail
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
        agencyOfficerName: '',
        officerKpNo: '',
        job: '',
        unit: '',
        officePhoneNo: '',
        officerPhoneNo:'',
        officerEmail:''
      };
      this.isFormValid = false;
    }

}
