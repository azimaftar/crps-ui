import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  CardModule,
  GridModule,
  ButtonModule,
  ModalModule,
  ModalComponent 
} from '@coreui/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalRujukPenyeliaComponent } from '../modal-rujuk-penyelia/modal-rujuk-penyelia.component';

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
}

@Component({
  selector: 'app-maklumat-profil-pengembara-semak',
  imports: [
    CommonModule,
    FormsModule,
    CardModule,      // CoreUI Card components
    GridModule,      // CoreUI Grid system
    ButtonModule,    // CoreUI Button components
    ModalModule,     // CoreUI Modal components
    ModalRujukPenyeliaComponent
  ],
  templateUrl: './maklumat-profil-pengembara-semak.component.html',
  styleUrl: './maklumat-profil-pengembara-semak.component.scss'
})
export class MaklumatProfilPengembaraSemakComponent {

  @ViewChild('errorModal') errorModal!: ModalComponent;
  @ViewChild('modalRujukPenyelia') modalRujukPenyelia!: ModalRujukPenyeliaComponent;

  // Form data object matching template bindings
  formData: FormData = {
    noDocument: 'A0000002',
    noIdentification: '980330025489',
    name: 'Mohd Rusaini Bin Ishak',
    dateIssued: '20 Januari 1992',
    expiryDate: '20 Januari 2028',
    age: '26',
    nationality: 'MYS',
    issuingCountry: 'MYS - Malaysia',
    photoUrl: 'assets/images/avatars/3.jpg' // Add actual photo URL when available
  };

  // Add these properties for error handling
  responseCode: string = '';
  modalMessage: string = '';
  modalButtonText: string = '';
  isModalVisible: boolean = false;
  nextRoute: string = ''; // Initialize with empty string
  
  // Add property to track if we need to show rujuk penyelia modal next
  showRujukPenyeliaNext: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  // Updated onSemak method with error response codes for testing
  onSemak(): void {
    // Simulate different response codes for testing
    // Comment/uncomment the lines below to test different scenarios
    
    // Test Case 1: Profile not found error
    // this.responseCode = 'IBC-S029';  // Rekod Profil Pengembara Tidak Dijumpai
    
    // Test Case 2: Document not found error - ACTIVE FOR TESTING
    // this.responseCode = 'IBC-S025';  // Rekod Pasport/ Dokumen Perjalan Tidak Dijumpai
    
    // Test Case 3: Document expired error
    // this.responseCode = 'IBC-S018';  // Rekod Pasport/ Dokumen Perjalan Telah Tamat Tempoh Sah Laku
    
    // Test Case 4: Success case (no error)
     this.responseCode = 'SUCCESS';

    // Test Case 5: Document not found error  
    // this.responseCode = 'IBC-S003';  // Unik ID telah wujud
    
    // Test Case 6: Document not found error  
    // this.responseCode = 'IBC-S013';  // Unik ID tidak wujud

    // Test Case 7: Document not found error  
    // this.responseCode = 'IBC-W005';  // Tiada Surat Kemudahan

    // Test Case 8: Document not found error  
    // this.responseCode = 'IBC-W006';  // Sekatan SLTD

    // Test Case 9: Document not found error  
    // this.responseCode = 'IBC-S056';  // RAE Julat Skor Risiko Sederhana/Tinggi

    // Handle the response based on the error code
    this.handleResponse();
  }

  // Handle different response codes
  private handleResponse(): void {
    switch (this.responseCode) {
      case 'IBC-S029': 
        this.modalMessage = 'Rekod Profil Pengembara Tidak Dijumpai'; 
        this.modalButtonText = 'OK'; 
        this.nextRoute = '../keluar-imbasan-dokumen-perjalanan-lain2'; // Set specific route for this error
        this.showRujukPenyeliaNext = false; // No rujuk penyelia for this case
        this.openStandardModal(); 
        break;
      case 'IBC-S025': 
        this.modalMessage = 'Rekod Pasport/ Dokumen Perjalan Tidak Dijumpai'; 
        this.modalButtonText = 'OK'; 
        this.nextRoute = ''; // No direct route navigation for this case
        this.showRujukPenyeliaNext = true; // Show rujuk penyelia modal after this one
        this.openStandardModal(); 
        break;
      case 'IBC-S018': 
        this.modalMessage = 'Rekod Pasport/ Dokumen Perjalan Telah Tamat Tempoh Sah Laku'; 
        this.modalButtonText = 'OK'; 
        //this.nextRoute = '../document-expired-page'; // Set specific route for this error
        this.showRujukPenyeliaNext = true;
        this.openStandardModal(); 
        break;
      case 'IBC-W005': 
        this.modalMessage = 'Tiada Surat Kemudahan'; 
        this.modalButtonText = 'OK'; 
        //this.nextRoute = '../no-convenience-letter-page'; // Set specific route for this error
        this.showRujukPenyeliaNext = true;
        this.openStandardModal(); 
        break;
      case 'IBC-W006': 
        this.modalMessage = 'Sekatan SLTD'; 
        this.modalButtonText = 'OK'; 
        //this.nextRoute = '../sltd-restriction-page'; // Set specific route for this error
        this.showRujukPenyeliaNext = true;
        this.openStandardModal(); 
        break;
      case 'IBC-RAE': 
        this.modalMessage = 'Sekatan RAE\nSkor Risiko : 57%\nKod: A10'; 
        this.modalButtonText = 'TUTUP'; 
        //this.nextRoute = '../rae-restriction-page'; // Set specific route for this error
        this.showRujukPenyeliaNext = true;
        this.openStandardModal(); 
        break;
      case 'IBC-S003': 
        this.modalMessage = 'Unik ID telah wujud'; 
        this.modalButtonText = 'TUTUP'; 
        //this.nextRoute = '../rae-restriction-page'; // Set specific route for this error
        this.showRujukPenyeliaNext = false;
        this.openStandardModal(); 
        break;
      case 'IBC-S013': 
        this.modalMessage = 'Unik ID tidak wujud'; 
        this.modalButtonText = 'TUTUP'; 
        //this.nextRoute = '../rae-restriction-page'; // Set specific route for this error
        this.showRujukPenyeliaNext = false;
        this.openStandardModal(); 
        break;
      // case 'IBC-W005': 
      //   this.modalMessage = 'Tiada Surat Kemudahan'; 
      //   this.modalButtonText = 'TUTUP'; 
      //   //this.nextRoute = '../rae-restriction-page'; // Set specific route for this error
      //   this.showRujukPenyeliaNext = false;
      //   this.openStandardModal(); 
      //   break;
      case 'IBC-S056': 
        this.modalMessage = 'RAE Julat Skor Risiko Sederhana/Tinggi'; 
        this.modalButtonText = 'TUTUP'; 
        //this.nextRoute = '../rae-restriction-page'; // Set specific route for this error
        this.showRujukPenyeliaNext = false;
        this.openStandardModal(); 
        break;        
      default: 
        // Success case - navigate to the specified path
        this.router.navigate(['../maklumat-profil-maklumat-profil-pengembara'], { relativeTo: this.route }); 
        return;
    }
  }

  // Add this method to open the modal
  private openStandardModal(): void {
    console.log('Opening modal:', this.modalMessage);
    // Open the CoreUI modal using visibility property
    this.isModalVisible = true;
  }

  // Updated closeModal method to handle rujuk penyelia flow
  closeModal(): void {
    this.isModalVisible = false;
    
    // Check if we need to show rujuk penyelia modal next
    if (this.showRujukPenyeliaNext) {
      // Reset the flag
      this.showRujukPenyeliaNext = false;
      // Show rujuk penyelia modal after a brief delay
      setTimeout(() => {
        this.openRujukPenyeliaModal();
      }, 300); // Small delay for better UX
    } else if (this.nextRoute) {
      // Navigate to the specific route set for each error case
      this.router.navigate([this.nextRoute], { relativeTo: this.route });
    }
  }

  // Method to open rujuk penyelia modal
  private openRujukPenyeliaModal(): void {
    console.log('Opening rujuk penyelia modal');
    if (this.modalRujukPenyelia) {
      this.modalRujukPenyelia.openModal();
    }
  }

  // Handle decision from rujuk penyelia modal
  handleDecision(event: any): void {
    console.log('Decision received from rujuk penyelia:', event);
    
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
    // Navigate to next page or perform approval actions
    this.router.navigate(['../maklumat-profil-maklumat-profil-pengembara'], { relativeTo: this.route });
  }

  // Handle rejection action
  private handleRejection(event: any): void {
    console.log('Processing rejection...', event);
    // Add your rejection logic here
    // Navigate to rejection page or perform rejection actions
    this.router.navigate(['../keluar-imbasan-dokumen-perjalanan-lain2'], { relativeTo: this.route });
  }

  // Handle referral action
  private handleReferral(event: any): void {
    console.log('Processing referral...', event);
    // Add your referral logic here
    // Navigate to referral page or perform referral actions
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