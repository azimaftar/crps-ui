import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  CardModule,
  GridModule,
  ButtonModule,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent
} from '@coreui/angular';
import { Router, ActivatedRoute } from '@angular/router';

// Interface for form data structure
interface FormData {
  noDocument?: string;
  noIdentification?: string;
  name?: string;
  dateIssued?: string;
  expiryDate?: string;
  age?: string;
  nationality?: string;
  issuingCountry?: string;
  photoUrl?: string;
  // Add the enabled fields from your form
  jenisPelawat?: string;
  noInputDokumen?: string;
  warganegara?: string;
  tarikhTamat?: string;
}

@Component({
  selector: 'app-keluar-imbasan-dokumen-perjalanan-lain2',
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    GridModule,
    ButtonModule,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent
  ],
  templateUrl: './keluar-imbasan-dokumen-perjalanan-lain2.component.html',
  styleUrl: './keluar-imbasan-dokumen-perjalanan-lain2.component.scss'
})
export class KeluarImbasanDokumenPerjalananLain2Component {

  // Modal Declaration
  @ViewChild('modalStandard') modalStandard!: ModalComponent;
  modalMessage: string = '';
  modalButtonText: string = 'Tutup';
  
  // Response codes for testing
  responseCode: string = ''; 
  // responseCode: string = 'IBC-E009'; // Test mandatory fields error

  // Form data object matching template bindings
  formData: FormData = {
    // Enabled fields (user can input these)
    jenisPelawat: '',
    noInputDokumen: '',
    warganegara: '',
    tarikhTamat: '',
    
    // Disabled fields (pre-filled data)
    noDocument: 'A0000002',
    noIdentification: '980330025489',
    name: 'Mohd Rusaini Bin Ishak',
    dateIssued: '20 Januari 1992',
    expiryDate: '20 Januari 2028',
    age: '26',
    nationality: 'MYS',
    issuingCountry: 'MYS - Malaysia',
    photoUrl: '' // Add actual photo URL when available
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  // Check if enabled fields are filled
  checkEnabledFields(): boolean {
    // Define which fields are enabled (not disabled) in your form
    const enabledFields = [
      'jenisPelawat',
      'noInputDokumen', 
      'warganegara',
      'tarikhTamat'
    ];
    
    // Check if any enabled field is empty
    for (const field of enabledFields) {
      const value = this.formData[field as keyof FormData];
      if (!value || value.toString().trim() === '') {
        console.log(`Enabled field ${field} is empty:`, value);
        return false; // Found empty enabled field
      }
    }
    
    return true; // All enabled fields are filled
  }

  // Simulate validation check (replace with actual API call)
  async simulateValidation(): Promise<string> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // FOR TESTING: Uncomment to test specific errors
    // return 'IBC-E009'; // Test mandatory fields error
    
    // Check if enabled fields are filled
    if (!this.checkEnabledFields()) {
      return 'IBC-E009'; // Enabled fields not filled
    }
    
    // Disable random errors for normal operation
    // Only show errors when manually testing
    // if (Math.random() < 0.3) {
    //   return 'IBC-E009'; // Random mandatory field error
    // }
    
    // Normal operation - return success
    return '';
  }

  // Open modal method with validation
  async onSemak(): Promise<void> {
    console.log('Attempting to process semak...');
    
    // Validate before proceeding
    this.responseCode = await this.simulateValidation();
    
    // Handle response based on error code
    switch (this.responseCode) {
      case 'IBC-E009':
        this.modalMessage = 'Medan mandatori yang bertanda * adalah wajib diisi.';
        this.modalButtonText = 'Tutup';
        this.openStandardModal();
        break;
      default:
        // Success - navigate to next page
        this.router.navigate(['../maklumat-profil-pengembara-semak'], { relativeTo: this.route });
        return;
    }
  }

  // Modal methods
  openStandardModal(): void {
    this.modalStandard.visible = true;
  }

  hideStandardModal(): void {
    this.modalStandard.visible = false;
  }

  // Handle modal OK button click
  modalStandardClick(): void {
    switch (this.responseCode) {
      case 'IBC-E009':
        console.log("Mandatory fields error - staying on current page");
        this.hideStandardModal();
        // Stay on current page to allow user to fix the issue
        break;
      default:
        this.hideStandardModal();
        break;
    }
  }

  // Test method for development (can be called from console or test buttons)
  testError(errorCode: string): void {
    this.responseCode = errorCode;
    
    switch (this.responseCode) {
      case 'IBC-E009':
        this.modalMessage = 'Medan mandatori yang bertanda * adalah wajib diisi.';
        this.modalButtonText = 'Tutup';
        this.openStandardModal();
        break;
    }
  }

  // Test modal sequence (for development)
  testModalSequence(errorCode: string): void {
    console.log(`Testing Lain2 modal sequence for ${errorCode}`);
    this.testError(errorCode);
  }

  // Handle decision from modal
  handleDecision(event: any): void {
    console.log('Decision received:', event);
    
    // Handle different decision types
    switch(event.action) {
      case 'approve':
        this.handleApproval(event);
        break;
      case 'reject':
        this.handleRejection(event);
        break;
      case 'refer':
        this.handleReferral(event);
        break;
      default:
        console.log('Unknown decision action:', event.action);
    }
  }

  // Handle approval action
  private handleApproval(event: any): void {
    console.log('Processing approval...', event);
    // Add your approval logic here
  }

  // Handle rejection action
  private handleRejection(event: any): void {
    console.log('Processing rejection...', event);
    // Add your rejection logic here
  }

  // Handle referral action
  private handleReferral(event: any): void {
    console.log('Processing referral...', event);
    // Add your referral logic here
  }

  // Print functionality
  printPage(): void {
    window.print();
  }

  // Method to load form data from service/API
  loadFormData(data: FormData): void {
    this.formData = { ...this.formData, ...data };
  }

  // Method to update photo
  updatePhoto(photoUrl: string): void {
    this.formData.photoUrl = photoUrl;
  }
}