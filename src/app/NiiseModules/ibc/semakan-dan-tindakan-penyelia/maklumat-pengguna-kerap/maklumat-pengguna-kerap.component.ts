import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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
import { ReusableTabComponent } from '../../shared/reusable-tab/reusable-tab.component';

import { ModalKeputusanNtlComponent } from '../modal-keputusan-ntl/modal-keputusan-ntl.component';

import { SemakanTindakanPenyeliaService } from '../../../../core/services/ibc-services/semakan-tindakan-penyelia.service';

interface FormData {
  // Section 1: Travel Info
  journeyType: string;
  visitorType: string;
  docType: string;
  docNo: string;
  passportType: string;
  kpNo: string;
  expiryDate: string;
  countryIssue: string;

  // Section 2: Visa / Pass Info
  noFTF: string;
  visaQrVds: string;
  indFTF: string;
  expiryFTF: string;
  uid?: string;
}


@Component({
  selector: 'app-maklumat-pengguna-kerap',
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
    ModalKeputusanNtlComponent,
    ReusableTabComponent
  ], //Routing
  templateUrl: './maklumat-pengguna-kerap.component.html',
  styleUrl: './maklumat-pengguna-kerap.component.scss'
})

export class MaklumatPenggunaKerapComponent implements OnInit {
  // Form data model
  formData: FormData = {
    // Section 1
    journeyType: '',
    visitorType: '',
    docType: '',
    docNo: '',
    passportType: '',
    kpNo: '',
    expiryDate: '',
    countryIssue: '',

    // Section 2
    noFTF: '',
    visaQrVds: '',
    indFTF: '',
    expiryFTF: '',
    uid:''
  };


  // Validation flags
  isFormValid: boolean = false;

  // Step navigation
  currentStep = 3;
  //totalSteps: number = 5;
  steps = [
    'Maklumat Profil Pegawai',
    'Maklumat Visa',
    'Maklumat Pengguna Kerap (FTF)',
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private penyeliaService: SemakanTindakanPenyeliaService
  ) { }

  currentUid: string | null = null;

 ngOnInit(): void {
  console.log('Maklumat Visa component initialized');
  this.validateForm();

  this.route.queryParamMap.subscribe(params => {
    const uid = params.get('uid');
    if (uid) {
      this.currentUid = uid;
      console.log('Received UID (from query param):', this.currentUid);
      this.loadData(uid);   // ✅ load data with same method
    } else {
      console.warn('No UID received in query params');
    }
  });
}

loadData(uid: string) {
  this.penyeliaService.getMaklumatPertanyaanByUid(uid).subscribe({
    next: (data) => {
      this.formData = {
        journeyType: data.intLocal || '',
        visitorType: data.visitorType || '',
        docType: data.docType || '',
        docNo: data.docNo || '',
        expiryDate: data.expiryDate || '',
        visaQrVds: data.visaQrVds || '',
        uid: data.uid || uid,
        passportType: data.passportType || '',
        kpNo: data.kpNo || '',
        countryIssue: data.countryIssue || '',
        noFTF: data.noFTF || '',
        indFTF: data.indFTF || '',      // newly required
        expiryFTF: data.expiryFTF || '' // newly required
      };
    },
    error: (err) => {
      console.error('Error fetching maklumat pertanyaan', err);
    }
  });
}


  /**
   * Navigate to previous step
   */
  goToPrevious(uid?: string) {
    console.log('Navigating to next step');
    console.log("UID to pass: ", this.formData.uid);

    // Add your navigation logic here
    this.router.navigate(
  ['/ibc/semakan-dan-tindakan-penyelia/maklumat-visa'],
  { queryParams: { uid: this.formData.uid } }
);
}

  /**
   * Navigate to next step
   */
  // goToNext(): void {
  //   console.log('Navigating to next step');
  //   console.log('Form data:', this.formData);
  //   // Process completion
  //   if (confirm('Adakah anda pasti untuk menyelesaikan permohonan ID pengguna ini?')) {
  //     // Implement completion logic here
  //     // Example: this.submitApplication();
  //     alert('Permohonan ID pengguna telah berjaya diselesaikan!');
  //   }
  //   // Add your navigation logic here
  //   this.router.navigate(['/ibc/semakan-dan-tindakan-penyelia/maklumat-visa']);
  // }

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
      this.formData.journeyType,
      this.formData.visitorType,
      this.formData.docType,
      this.formData.docNo,
      this.formData.passportType,
      this.formData.kpNo,
      this.formData.expiryDate,
      this.formData.countryIssue,
      this.formData.noFTF,
      this.formData.visaQrVds,
      this.formData.indFTF,
      this.formData.expiryFTF
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
    this.router.navigate(['/ibc/semakan-dan-tindakan-penyelia/carian-profil-pengembara']);
  }
  // saveForm(): void {
  //   console.log('Navigating to previous step');
  //   // Add your navigation logic here
  //   // Example: this.router.navigate(['/previous-step']);
  //   this.router.navigate(['/ibc/semakan-dan-tindakan-penyelia/maklumat-visa']);
  // }
  // New method for Rujuk Penyelia
  resultForm(): void {
    this.validateForm();
    if (this.isFormValid) {
      console.log('Keputusan Penyelia submitted:', this.formData);
      alert('Maklumat telah dihantar kepada Penyelia untuk semakan.');
      this.router.navigate(['/ibc/semakan-dan-tindakan-penyelia']);
    } else {
      alert('Sila lengkapkan semua maklumat wajib sebelum menghantar kepada Penyelia.');
    }
  }

  resetForm(): void {
    this.formData = {
      journeyType: '',
      visitorType: '',
      docType: '',
      docNo: '',
      passportType: '',
      kpNo: '',
      expiryDate: '',
      countryIssue: '',
      noFTF: '',
      visaQrVds: '',
      indFTF: '',
      expiryFTF: '',
    };
    this.isFormValid = false;
  }

  isVisible = false;
  catatan = '';
  
  @ViewChild(ModalKeputusanNtlComponent) keputusanModal!: ModalKeputusanNtlComponent;
  @Output() onDecision = new EventEmitter<{decision: string, catatan: string}>();
  @Output() onClose = new EventEmitter<void>();
  

  /**
   * Open the modal
   */
  openModal() {
    this.isVisible = true;
  }

  /**
   * Close the modal
   */
  closeModal() {
    this.isVisible = false;
    this.onClose.emit();
  }

  /**
   * Handle modal visibility change from CoreUI modal
   */
  onVisibleChange(visible: boolean): void {
    this.isVisible = visible;
    if (!visible) {
      this.closeModal();
    }
  }

  /**
   * Make decision and emit result
   */
  makeDecision(decision: string) {
    this.onDecision.emit({
      decision: decision,
      catatan: this.catatan
    });
    this.closeModal();
  }

  /**
   * Open the Keputusan Penyelia modal
   */
  openKeputusanModal() {
    this.keputusanModal.openModal();
  }

  /**
   * Handle the result from Keputusan Penyelia modal
   */
  onKeputusanSimpan(result: {tindakan: string, kategori: string, catatan: string}) {
    console.log('Keputusan saved:', result);
    // Emit this data to parent component
    this.onDecision.emit({
      decision: `${result.tindakan} - ${result.kategori}`,
      catatan: result.catatan
    });
    this.closeModal();
  }

  /**
   * Handle keputusan modal close
   */
  onKeputusanClose() {
    console.log('Keputusan modal closed');
  }

  /**
   * Get current form data
   */
  getFormData(): { catatan: string } {
    return {
      catatan: this.catatan
    };
  }


  /**
   * Set form data
   */
  setFormData(data: { catatan?: string }): void {
    if (data.catatan !== undefined) {
      this.catatan = data.catatan;
    }
  }

  /**
   * Check if form has data
   */
  hasFormData(): boolean {
    return this.catatan.trim().length > 0;
  }

}
