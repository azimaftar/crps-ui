import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
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
  branchName: string;
  branchAddr: string;
  branchPostcode: string;
  branchCity: string;
  branchPhoneNo: string;
  branchEmail: string;
  branchSpvName: string;
  brnSpvPhoneNo: string;
  brnSpvEmel: string;
  shipName: string;
  indShip: string;
  shipType: string;
  shipCategory: string;
  
}


@Component({
  selector: 'app-maklumat-cawangan-dan-kapal-semak',
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
      ReusableTabComponent], //Routing
  templateUrl: './maklumat-cawangan-dan-kapal-semak.component.html',
  styleUrl: './maklumat-cawangan-dan-kapal-semak.component.scss'
})

export class MaklumatCawanganDanKapalSemakComponent implements OnInit {
 // Form data model
       formData: FormData = {
         branchName: 'Sbah Express',
         branchAddr: 'Anjung Mantap Shipping & Logistic Sdn. Bhd',
         branchPostcode: '30 Januari 1993',
         branchCity: '017-726381',
         branchPhoneNo: 'AB123456',
         branchEmail: 'P-Passport',
         branchSpvName: '6091829112',
         brnSpvPhoneNo: '9827829',
         brnSpvEmel: 'Klang',
         shipName: '',
         indShip: '',
         shipType: '',
         shipCategory: ''
       };
     
       // Validation flags
       isFormValid: boolean = false;
     
       // Step navigation
       currentStep = 3;
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
         this.router.navigate(['/ibc/pengurusan-perkapalan/maklumat-syarikat-perkapalan']);
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
          //  alert('Permohonan ID pengguna telah berjaya diselesaikan!');
         }
         // Add your navigation logic here
         this.router.navigate(['/ibc/pengurusan-perkapalan/maklumat-bank-guarantee-security-bon']);
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
           this.formData.branchName,
           this.formData.branchAddr,
           this.formData.branchPostcode,
           this.formData.branchCity,
           this.formData.branchPhoneNo,
           this.formData.branchEmail,
           this.formData.branchSpvName,
           this.formData.brnSpvPhoneNo,
           this.formData.brnSpvEmel,
           this.formData.shipName,
           this.formData.indShip,
           this.formData.shipType,
           this.formData.shipCategory
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
          branchName: '',
          branchAddr: '',
          branchPostcode: '',
          branchCity: '',
          branchPhoneNo: '',
          branchEmail: '',
          branchSpvName: '',
          brnSpvPhoneNo: '',
          brnSpvEmel: '',
          shipName: '',
          indShip: '',
          shipType: '',
          shipCategory: ''
         };
         this.isFormValid = false;
       }
       semakKapal(): void {
          // Simulated DB response (replace with actual service call)
          const mockDataFromDB = {
            shipName: 'KD Tun Abdul Razak',
            indShip: 'Kapal Tempatan',
            shipType: 'Kapal Selam',
            shipCategory: 'Kapal Dagang'
          };

          // Assign data to form fields
          this.formData.shipName = mockDataFromDB.shipName;
          this.formData.indShip = mockDataFromDB.indShip;
          this.formData.shipType = mockDataFromDB.shipType;
          this.formData.shipCategory = mockDataFromDB.shipCategory;

          alert('Maklumat kapal berjaya dimuatkan!');
        }

   
}
