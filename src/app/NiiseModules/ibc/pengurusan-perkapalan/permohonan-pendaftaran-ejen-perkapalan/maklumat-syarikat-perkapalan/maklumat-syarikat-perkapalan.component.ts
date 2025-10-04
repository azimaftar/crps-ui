import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  ButtonModule,
  CardModule,
  FormModule,
  HeaderModule,
  AvatarModule,
  BadgeModule,
  GridModule,
}
  from '@coreui/angular';
import { ReusableTabComponent } from '../../../shared/reusable-tab/reusable-tab.component';

interface FormData {
  companyName: string;
  companyAddr1: string;
  companyPostcode: string;
  phoneNo: string;
  directorName: string;
  typFile: string;
  companyPhoneNo: string;
  companyNo: string;
  companyCity: string;
  email: string;
  docNo: string;
  companyEmail: string;
}

@Component({
  selector: 'app-maklumat-syarikat-perkapalan',
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
  templateUrl: './maklumat-syarikat-perkapalan.component.html',
  styleUrl: './maklumat-syarikat-perkapalan.component.scss'
})

export class MaklumatSyarikatPerkapalanComponent implements OnInit {
    // Form data model
      formData: FormData = {
        companyName: 'Sbah Express',
        companyAddr1: 'Anjung Mantap Shipping & Logistic Sdn. Bhd',
        companyPostcode: '30 Januari 1993',
        phoneNo: '017-726381',
        directorName: 'AB123456',
        typFile: 'P-Passport',
        companyPhoneNo: '6091829112',
        companyNo: '9827829',
        companyCity: 'Klang',
        email: 'Rusai@gmail.com',
        docNo: '77766',
        companyEmail: 'SbahaExpress@gmail.com',
      };
    
      // Validation flags
      isFormValid: boolean = false;
    
      // Step navigation
      currentStep = 2;
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
        this.router.navigate(['/ibc/pengurusan-perkapalan/maklumat-profil-pengembara']);
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
        this.router.navigate(['/ibc/pengurusan-perkapalan/maklumat-cawangan-dan-kapal-semak']);
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
          this.formData.companyName,
          this.formData.companyAddr1,
          this.formData.companyPostcode,
          this.formData.phoneNo,
          this.formData.directorName,
          this.formData.typFile,
          this.formData.companyPhoneNo,
          this.formData.companyNo,
          this.formData.companyCity,
          this.formData.email,
          this.formData.docNo,
          this.formData.companyEmail
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
          companyName: '',
          companyAddr1: '',
          companyPostcode: '',
          phoneNo: '',
          directorName: '',
          typFile: '',
          companyPhoneNo: '',
          companyNo: '',
          companyCity: '',
          email: '',
          docNo: '',
          companyEmail: ''
        };
        this.isFormValid = false;
      }
  
}
