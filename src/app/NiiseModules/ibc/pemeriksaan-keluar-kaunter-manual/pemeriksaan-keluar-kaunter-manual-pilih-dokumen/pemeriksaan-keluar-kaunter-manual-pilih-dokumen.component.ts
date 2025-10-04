// pemeriksaan-keluar-kaunter-manual-pilih-dokumen.component.ts
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalJenisDokumenPemeriksaanKeluarComponent } from '../modal-jenis-dokumen-pemeriksaan-keluar/modal-jenis-dokumen-pemeriksaan-keluar.component';
import {
  CardModule,
  GridModule,
  ButtonModule,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,
  ButtonDirective
} from '@coreui/angular';

@Component({
  selector: 'app-pemeriksaan-keluar-kaunter-manual-pilih-dokumen',
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    GridModule,
    ButtonModule,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ButtonDirective,
    ModalJenisDokumenPemeriksaanKeluarComponent
  ],
  templateUrl: './pemeriksaan-keluar-kaunter-manual-pilih-dokumen.component.html',
  styleUrl: './pemeriksaan-keluar-kaunter-manual-pilih-dokumen.component.scss'
})
export class PemeriksaanKeluarKaunterManualPilihDokumenComponent {
  selectedDocumentType: string = '';
  selectedDocumentOption: string = '';

  // Modal Declaration
  @ViewChild('modalStandard') modalStandard!: ModalComponent;
  modalMessage: string = '';
  modalButtonText: string = 'OK';
  
  // Response codes for testing
  responseCode: string = ''; 
  // responseCode: string = 'IBC-S026'; 
  // responseCode: string = 'IBC-S020'; 
  // responseCode: string = 'IBC-S028'; 

  constructor(private router: Router, private route: ActivatedRoute) {}

  // Handle document type selection
  onDocumentTypeChange(event: any): void {
    this.selectedDocumentType = event.target.value;
    console.log('Selected document type:', this.selectedDocumentType);
    
    // Reset radio button selection when dropdown changes
    this.selectedDocumentOption = '';
  }

  // Handle document option selection (radio buttons)
  onDocumentOptionChange(event: any): void {
    this.selectedDocumentOption = event.target.value;
    console.log('Selected document option:', this.selectedDocumentOption);
  }

  // Show/Hide modal methods
  openModal() {
    this.modalStandard.visible = true;
  }

  hideModal() {
    this.modalStandard.visible = false;
  }

  // Simulate scanning process
  async simulateScanning(): Promise<string> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // TESTING: Force specific errors based on document type
    switch(this.selectedDocumentType) {
      // case 'pasport':
      //   return 'IBC-S026'; // Test passport error
      // case 'kad-abtc':
      //   return 'IBC-S020'; // Test ABTC error
      // case 'kod-qr':
      //   return 'IBC-S028'; // Test QR error
      default:
        return ''; // Success
    }
  }

  // Handle scan document button click
  async onScanDocument(): Promise<void> {
    console.log('Scanning document...');
    console.log('Document Type:', this.selectedDocumentType);
    console.log('Document Option:', this.selectedDocumentOption);
    
    // Simulate scanning and get response code
    this.responseCode = await this.simulateScanning();
    
    // Handle response based on error code 
    switch (this.responseCode) {
      case 'IBC-S026':
        this.modalMessage = 'Dokumen Gagal Imbasan';
        this.modalButtonText = 'OK';
        this.openModal();
        break;
      case 'IBC-S020':
        this.modalMessage = 'Kad ABTC Gagal Imbasan';
        this.modalButtonText = 'OK';
        this.openModal();
        break;
      case 'IBC-S028':
        this.modalMessage = 'Kod QR Gagal Dibaca';
        this.modalButtonText = 'OK';
        this.openModal();
        break;
      default:
        // Success - navigate to next page
        this.navigateBasedOnDocumentType();
        return;
    }
  }

  modalStandardClick(): void {
  switch (this.responseCode) {
    case 'IBC-S026':
    case 'IBC-S020':
    case 'IBC-S028':
      console.log("Error occurred - navigating to error handling page");
      this.hideModal();
      // Navigate to general error handling page
      this.router.navigate(['../keluar-imbasan-dokumen-perjalanan-lain2'], { relativeTo: this.route });
      break;
    default:
      this.hideModal();
      break;
  }
}

  // Navigate based on selected document type (success scenario)
  private navigateBasedOnDocumentType(): void {
    switch(this.selectedDocumentType) {
      case 'pasport':
        this.onPasportImbasDokumen();
        break;
      case 'kad-abtc':
        this.onABTCImbasDokumen();
        break;
      case 'kod-qr':
        this.onKodQR();
        break;
      case 'lain-lain':
        this.onLain2();
        break;
      default:
        this.onLain2();
    }
  }

  // Navigate to passport document scanning page
  onPasportImbasDokumen(): void {
    this.router.navigate(['../keluar-imbasan-dokumen-perjalanan-pasport'], { relativeTo: this.route });
  }

  onABTCImbasDokumen(): void {
    this.router.navigate(['../keluar-imbasan-dokumen-perjalanan-abtc'], { relativeTo: this.route });
  }

  onKodQR(): void {
    this.router.navigate(['../keluar-imbasan-dokumen-perjalanan-kodqr'], { relativeTo: this.route });
  }

  onLain2(): void {
    this.router.navigate(['../keluar-imbasan-dokumen-perjalanan-lain2'], { relativeTo: this.route });
  }

  // Get available document options based on selected type
  getDocumentOptions(): string[] {
    switch(this.selectedDocumentType) {
      case 'pasport':
        return ['Kad ABTC', 'Kod QR', 'Lain-lain'];
      case 'kad-abtc':
        return ['Kod QR', 'Lain-lain'];
      case 'kod-qr':
        return ['Lain-lain'];
      default:
        return [];
    }
  }

  // Get button text based on selected document type
  getButtonText(): string {
    switch(this.selectedDocumentType) {
      case 'pasport':
      case 'kad-abtc':
        return 'Imbas Dokumen';
      case 'kod-qr':
        return 'Imbas Kod QR';
      case 'lain-lain':
        return 'Masukkan Maklumat';
      default:
        return 'Imbas Dokumen';
    }
  }
    
  // Open modal method (main entry point)
  openModalAction(): void {
    // Handle based on document type
    this.onScanDocument();
  }

  // Check if scan button should be enabled
  canScanDocument(): boolean {
    return this.selectedDocumentType !== '' && this.selectedDocumentType !== null;
  }

  // Reset form
  resetForm(): void {
    this.selectedDocumentType = '';
    this.selectedDocumentOption = '';
  }

  // Test methods for different error codes (for development/testing)
  testError(errorCode: string): void {
    this.responseCode = errorCode;
    this.onScanDocument();
  }
}