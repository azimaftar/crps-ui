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

interface FormData {
  companyName: string;
  companyNo: string;
}

@Component({
  selector: 'app-maklumat-pemohon',
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
    ], //Routing
templateUrl: './maklumat-pemohon.component.html',
  styleUrl: './maklumat-pemohon.component.scss'
})

export class MaklumatPemohonComponent implements OnInit {

  // Form data model
    formData: FormData = {
      companyName: 'Warganegara',
      companyNo: 'AB123456',
    };
  
    // Validation flags
    isFormValid: boolean = false;
  
    constructor(private router: Router) { }
  
    ngOnInit(): void {
      console.log('Maklumat Profil Pegawai component initialized');
      this.validateForm();
    }
  
    /**
     * Navigate to next step
     */
    goToNextPage() {
      this.router.navigate(['/ibc/pengurusan-perkapalan/maklumat-profil-pegawai-agensi-perkapalan']);
    }

    /**
     * Validate form data
     */
    validateForm(): void {
      const requiredFields = [
        this.formData.companyName,
        this.formData.companyNo,
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
        companyNo: '',
      };
      this.isFormValid = false;
    }

}
