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
  visaNo: string;
  visaQrVds: string;
  visaType: string;
  visaExpiryDate: string;
  issueDatePassport: string;

  // Section 3: Personal Info
  name: string;
  dob: string;
  gender: string;
  nationality: string;
  docNoPersonal: string;
  uid?: string;
}


@Component({
  selector: 'app-maklumat-visa',
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
templateUrl: './maklumat-visa.component.html',
  styleUrl: './maklumat-visa.component.scss'
})

export class MaklumatVisaComponent implements OnInit {
  // Form data model
  formData: FormData = {
    journeyType: '',
    visitorType: '',
    docType: '',
    docNo: '',
    passportType: '',
    kpNo: '',
    expiryDate: '',
    countryIssue: '',


    visaNo: '',
    visaQrVds: '',
    visaType: '',
    visaExpiryDate: '',
    issueDatePassport: '',


    name: '',
    dob: '',
    gender: '',
    nationality: '',
    docNoPersonal: '',
    uid: ''

  };


  // Validation flags
  isFormValid: boolean = false;

  // Step navigation
  currentStep = 2;
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


  /**
   * Navigate to previous step
   */
  // goToPrevious(): void {
  //   console.log('Navigating to previous step');
  //   // Add your navigation logic here
  //   // Example: this.router.navigate(['/previous-step']);
  //   this.router.navigate(['/ibc/semakan-dan-tindakan-penyelia/maklumat-profil-pegawai']);
  // }
  goToPrevious(uid?: string) {
    console.log('Navigating to next step');
    console.log("UID to pass: ", this.formData.uid);

    // Add your navigation logic here
    this.router.navigate(
  ['/ibc/semakan-dan-tindakan-penyelia/maklumat-profil-pegawai'],
  { queryParams: { uid: this.formData.uid } }
);
}
  

  /**
   * Navigate to next step
   */
  goToNext(uid?: string) {
    console.log('Navigating to next step');
    console.log("UID to pass: ", this.formData.uid);

    // Add your navigation logic here
    this.router.navigate(
  ['/ibc/semakan-dan-tindakan-penyelia/maklumat-pengguna-kerap'],
  { queryParams: { uid: this.formData.uid } }
);
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
      this.formData.journeyType,
      this.formData.visitorType,
      this.formData.docType,
      this.formData.docNo,
      this.formData.passportType,
      this.formData.kpNo,
      this.formData.expiryDate,
      this.formData.countryIssue,
      this.formData.visaNo,
      this.formData.visaQrVds,
      this.formData.visaType,
      this.formData.visaExpiryDate,
      this.formData.issueDatePassport,
      this.formData.name,
      this.formData.dob,
      this.formData.gender,
      this.formData.nationality,
      this.formData.docNoPersonal
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
      visaNo: '',
      visaQrVds: '',
      visaType: '',
      visaExpiryDate: '',
      issueDatePassport: '',
      name: '',
      dob: '',
      gender: '',
      nationality: '',
      docNoPersonal: '',
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

  loadData(uid: string) {
  this.penyeliaService.getMaklumatPertanyaanByUid(uid).subscribe({
    next: (data) => {
      this.formData = {
        journeyType: data.intLocal,
        visitorType: data.visitorType,
        docType: data.docType,
        docNo: data.docNo,
        passportType: data.kpType,
        kpNo: data.kpNo,
        countryIssue: data.countryIssue,
        name: data.profilTraveller?.name || '',
        dob: data.profilTraveller?.dob || '',
        gender: data.profilTraveller?.gender || '',
        nationality: data.profilTraveller?.nationality || '',
        expiryDate: '',
        visaNo: '',
        visaQrVds: '',
        visaType: '',
        visaExpiryDate: '',
        issueDatePassport: '',
        docNoPersonal: '',
        uid: data.uid || uid
      };
    },
    error: (err) => {
      console.error('Error fetching maklumat pertanyaan', err);
    }
  });
}

loadDataByDetails(visitorType: string, docType: string, docNo: string, kpNo: string) {
    this.penyeliaService.getMaklumatPertanyaanByDetails(visitorType, docType, docNo, kpNo).subscribe({
      next: (data) => {
        console.log('API response (by details):', data);
        this.formData = {
          journeyType: data.intLocal,
        visitorType: data.visitorType,
        docType: data.docType,
        docNo: data.docNo,
        passportType: data.kpType,
        kpNo: data.kpNo,
        countryIssue: data.countryIssue,
        name: data.profilTraveller?.name || '',
        dob: data.profilTraveller?.dob || '',
        gender: data.profilTraveller?.gender || '',
        nationality: data.profilTraveller?.nationality || '',
        expiryDate: '',
        visaNo: '',
        visaQrVds: '',
        visaType: '',
        visaExpiryDate: '',
        issueDatePassport: '',
        docNoPersonal: '',
        uid: data.uid
        };
      },
      error: (err) => {
        console.error('Error fetching maklumat pertanyaan (by details)', err);
      }
    });
  }


}
