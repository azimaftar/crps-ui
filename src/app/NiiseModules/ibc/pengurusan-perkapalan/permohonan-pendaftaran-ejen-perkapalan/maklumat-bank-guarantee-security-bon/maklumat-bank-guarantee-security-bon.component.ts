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
  bankGuaranteeNo: string;
  bankName: string;
  startGuarantee: string;
  expiredGuarantee: string;
}

@Component({
  selector: 'app-maklumat-bank-guarantee-security-bon',
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
  templateUrl: './maklumat-bank-guarantee-security-bon.component.html',
  styleUrl: './maklumat-bank-guarantee-security-bon.component.scss'
})

export class MaklumatBankGuaranteeSecurityBonComponent implements OnInit {
  // Form data model
        formData: FormData = {
          bankGuaranteeNo: 'Sbah Express',
          bankName: 'Anjung Mantap Shipping & Logistic Sdn. Bhd',
          startGuarantee: '30 Januari 1993',
          expiredGuarantee: '017-726381',
        };
      
        // Validation flags
        isFormValid: boolean = false;
      
        // Step navigation
        currentStep = 4;
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
          this.router.navigate(['/ibc/pengurusan-perkapalan/maklumat-cawangan-dan-kapal-semak']);
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
            this.formData.bankGuaranteeNo,
            this.formData.bankName,
            this.formData.startGuarantee,
            this.formData.expiredGuarantee
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
            bankGuaranteeNo: '',
            bankName: '',
            startGuarantee: '',
            expiredGuarantee: '',
            
          };
          this.isFormValid = false;
        }
    dokumenList: any[] = [
    {
      bil: 1,
      keterangan: 'Permohonan SL',
      namaDokumen: 'Permohonan SL',
      format: 'DOCX'
    },
    {
      bil: 2,
      keterangan: 'Salinan Kad Pengenalan Pertama',
      namaDokumen: 'Salinan Kad Pengenalan',
      format: 'PDF'
    }
  ];

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      Array.from(input.files).forEach((file, index) => {
        const extension = file.name.split('.').pop()?.toUpperCase() || 'N/A';

        this.dokumenList.push({
          bil: this.dokumenList.length + 1,
          keterangan: '',
          namaDokumen: file.name,
          format: extension
        });
      });

      // Reset the input value so user can re-upload the same file if needed
      input.value = '';
    }
  }

  //delete function for a row
  deleteDokumen(index: number): void {
    this.dokumenList.splice(index, 1);
    this.dokumenList.forEach((doc, i) => doc.bil = i + 1); // Renumber
  }
}
