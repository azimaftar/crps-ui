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
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective
}
  from '@coreui/angular';
import { ReusableTabComponent } from '../../shared/reusable-tab/reusable-tab.component';

interface FormData {
  arrivalDateToMalaysia: string;
  departureDateFromMalaysia: string;
  periodOfDaysInMalaysia: string;
  purpose: string;
  others: string;
  agencyName: string;
  eventName: string;
  // Maklumat Ketua Pemohon
  name: string;
  nationality: string;
  passportNo: string;
  issuedCountry: string;
  validDate: string;
  dob: string;
  gender: string;
}
@Component({
  selector: 'app-maklumat-perjalanan-dan-ketua-pemohon',
  imports: [
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
      ReusableTabComponent,
      ModalBodyComponent,
      ModalComponent,
      ModalFooterComponent,
      ModalHeaderComponent,
      ModalTitleDirective
    ], //Routing
  templateUrl: './maklumat-perjalanan-dan-ketua-pemohon.component.html',
  styleUrl: './maklumat-perjalanan-dan-ketua-pemohon.component.scss'
})
export class MaklumatPerjalananDanKetuaPemohonComponent {

  // Form data model
    formData: FormData = {
      arrivalDateToMalaysia: '',
      departureDateFromMalaysia: '',
      periodOfDaysInMalaysia: '',
      purpose: '',
      others: '',
      agencyName: '',
      eventName: '',
      // Maklumat Ketua Pemohon
      name: '',
      nationality: '',
      passportNo: '',
      issuedCountry: '',
      validDate: '',
      dob: '',
      gender: ''
    };
  
    // Validation flags
    isFormValid: boolean = false;
  
    // Step navigation
    currentStep = 1;
    //totalSteps: number = 5;
    steps = [
      'Maklumat Perjalanan dan Ketua Pemohon',
      'Maklumat Ahli'
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
      this.router.navigate(['/ibc/semakan-maklumat-pegawai-agensi-perkapalan/maklumat-pegawai-agensi-perkapalan']);
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
      this.router.navigate(['/ibc/isi-maklumat-pengembara/maklumat-ahli']);
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
      const {
        arrivalDateToMalaysia,
        departureDateFromMalaysia,
        purpose,
        others,
        name,
        nationality,
        passportNo,
        issuedCountry,
        validDate,
        dob,
        gender
      } = this.formData;

      // Only include required fields
      const requiredFields = [
        arrivalDateToMalaysia,
        departureDateFromMalaysia,
        purpose,
        name,
        nationality,
        passportNo,
        issuedCountry,
        validDate,
        dob,
        gender
      ];

      // Conditionally require 'others' only if purpose is 'other'
      if (purpose === 'other') {
        requiredFields.push(others);
      }

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
        arrivalDateToMalaysia: '',
        departureDateFromMalaysia: '',
        periodOfDaysInMalaysia: '',
        purpose: '',
        others: '',
        agencyName:'',
        eventName:'',
        name: '',
        nationality: '',
        passportNo: '',
        issuedCountry: '',
        validDate: '',
        dob: '',
        gender: ''
      };
      this.isFormValid = false;
    }
}
