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
  journeyType: string;
  visitorType: string;
  docType: string;
  docNo: string;
  passportType: string;
  kpNo: string;
  misconductExpiryDate: string;
  countryIssue: string;
  name: string;
  printedName: string;
  dob: string;
  gender: string;
  nationality: string;
  n3xitInd: string;
  pasType: string;
  passDuration: string;
  pasExpiryDate: string;
  gateNo: string;
  flightID: string;
  dateDeparture: string;
  deptTime: string;
  referSv: string;
  svAction: string;
  NTLCategory: string;
  remarksSv: string;
  uid?: string;
}

@Component({
  selector: 'app-maklumat-profil-pegawai',
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
  templateUrl: './maklumat-profil-pegawai.component.html',
  styleUrl: './maklumat-profil-pegawai.component.scss'
})

export class MaklumatProfilPegawaiComponent implements OnInit {
  // Form data model
  formData: FormData = { /* keep empty initially */
    journeyType: '',
    visitorType: '',
    docType: '',
    docNo: '',
    passportType: '',
    kpNo: '',
    misconductExpiryDate: '',
    countryIssue: '',
    name: '',
    printedName: '',
    dob: '',
    gender: '',
    nationality: '',
    n3xitInd: '',
    pasType: '',
    passDuration: '',
    pasExpiryDate: '',
    gateNo: '',
    flightID: '',
    dateDeparture: '',
    deptTime: '',
    referSv: '',
    svAction: '',
    NTLCategory: '',
    remarksSv: '',
    uid: ''
  };

  // Validation flags
  isFormValid: boolean = false;

  // Step navigation
  currentStep = 1;
  //totalSteps: number = 5;
  steps = [
    'Maklumat Profil Pegawai',
    'Maklumat Visa',
    'Maklumat Pengguna Kerap (FTF)',
  ];
  constructor(private router: Router,
    private route: ActivatedRoute,
    private penyeliaService: SemakanTindakanPenyeliaService
  ) { }

  ngOnInit(): void {
    console.log('Maklumat Profil Pegawai component initialized');
    this.validateForm();

    this.route.queryParams.subscribe(params => {
      const uid = params['uid'];
      const visitorType = params['visitorType'];
      const docType = params['docType'];
      const docNo = params['docNo'];
      const kpNo = params['kpNo'];

      if (uid) {
        this.loadData(uid);
      } else if (visitorType && docType && docNo && kpNo) {
        this.loadDataByDetails(visitorType, docType, docNo, kpNo);
      }
    });

    this.route.queryParams.subscribe(params => {
      console.log('Received query params:', params);
      const uid = params['uid'];
      const visitorType = params['visitorType'];
      const docType = params['docType'];
      const docNo = params['docNo'];
      const kpNo = params['kpNo'];

      if (uid) {
        this.loadData(uid);
      } else if (visitorType && docType && docNo && kpNo) {
        console.log('Calling loadDataByDetails with:', visitorType, docType, docNo, kpNo);
        this.loadDataByDetails(visitorType, docType, docNo, kpNo);
      } else {
        console.warn('No uid or visitorType/docType/docNo/kpNo provided in URL');
      }
    });



  }



  /**
   * Navigate to previous step
   */
  goToPrevious(): void {
    console.log('Navigating to previous step');
    // Add your navigation logic here
    // Example: this.router.navigate(['/previous-step']);
    this.router.navigate(['/ibc/permohonan-pendaftaran-ejen-perkapalan/maklumat-profil-pengembara']);
  }

  /**
   * Navigate to next step
   */
  goToNext(uid?: string) {
    console.log('Navigating to next step');
    console.log("UID to pass: ", this.formData.uid);

    // Add your navigation logic here
    this.router.navigate(
  ['/ibc/semakan-dan-tindakan-penyelia/maklumat-visa'],
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
      this.formData.misconductExpiryDate,
      this.formData.countryIssue,
      this.formData.name,
      this.formData.printedName,
      this.formData.dob,
      this.formData.gender,
      this.formData.nationality,
      this.formData.n3xitInd,
      this.formData.pasType,
      this.formData.passDuration,
      this.formData.pasExpiryDate,
      this.formData.gateNo,
      this.formData.flightID,
      this.formData.dateDeparture,
      this.formData.deptTime,
      this.formData.referSv,
      this.formData.svAction,
      this.formData.NTLCategory,
      this.formData.remarksSv,
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
      misconductExpiryDate: '',
      countryIssue: '',
      name: '',
      printedName: '',
      dob: '',
      gender: '',
      nationality: '',
      n3xitInd: '',
      pasType: '',
      passDuration: '',
      pasExpiryDate: '',
      gateNo: '',
      flightID: '',
      dateDeparture: '',
      deptTime: '',
      referSv: '',
      svAction: '',
      NTLCategory: '',
      remarksSv: ''
    };
    this.isFormValid = false;
  }

  isVisible = false;
  catatan = '';

  @ViewChild(ModalKeputusanNtlComponent) keputusanModal!: ModalKeputusanNtlComponent;
  @Output() onDecision = new EventEmitter<{ decision: string, catatan: string }>();
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

  private docNoToUuidMap: { [docNo: string]: string } = {
    'A12345678': 'UID001',
    'B98765432': 'UID002',
    'C12345678': 'UID003',
    'JP7785429': 'UID004'
  };

  /**
   * Open the Keputusan Penyelia modal
   */
  openKeputusanModal() {
    // Ensure form data is loaded
    if (!this.formData) {
      console.log('Form data not loaded yet');
      return;
    }

    console.log('Form data loaded:', this.formData);

    // Map docNo to uuidRef
    const mappedUuid = this.docNoToUuidMap[this.formData.docNo]; // Use docNo from formData

    if (!mappedUuid) {
      alert('Dokumen No tidak dijumpai dalam sistem. Sila semak semula.');
      return;
    }

    // Pass mapped UUID and other API values to the modal
    this.keputusanModal.uuidRef = mappedUuid;
    this.keputusanModal.vesselName = this.formData.flightID;
    this.keputusanModal.branchCode = this.formData.gateNo;

    console.log('uuidRef (mapped)', this.keputusanModal.uuidRef);
    console.log('vesselName', this.keputusanModal.vesselName);
    console.log('branchCode', this.keputusanModal.branchCode);

    this.keputusanModal.openModal();
  }


  /**
   * Handle the result from Keputusan Penyelia modal
   */
  onKeputusanSimpan(result: { tindakan: string, kategori: string, catatan: string }) {
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
          misconductExpiryDate: data.expiryDate,
          countryIssue: data.countryIssue,
          name: data.profilTraveller?.name,
          printedName: data.profilTraveller?.printedName,
          dob: data.profilTraveller?.dob,
          gender: data.profilTraveller?.gender,
          nationality: data.profilTraveller?.nationality,
          n3xitInd: data.n3xitType,
          pasType: data.pasType,
          passDuration: data.pasDuration?.toString(),
          pasExpiryDate: data.pasExpiryDate,
          gateNo: data.n3xitBranch,
          flightID: data.vesselName,
          dateDeparture: data.txnDate,
          deptTime: data.txnTime,
          referSv: data.remarks?.reasonRemarks || '',
          svAction: '',
          NTLCategory: data.reasonNTL, //no included api for getMaklumatPertanyaan
          remarksSv: '',
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
          journeyType: data.intLocal || '',
          visitorType: data.visitorType || '',
          docType: data.docType || '',
          docNo: data.docNo || '',
          passportType: data.kpType || '',
          kpNo: data.kpNo || '',
          misconductExpiryDate: data.expiryDate || '',
          countryIssue: data.countryIssue || '',
          name: data.profilTraveller?.name || '',
          printedName: data.profilTraveller?.printedName || '',
          dob: data.profilTraveller?.dob || '',
          gender: data.profilTraveller?.gender || '',
          nationality: data.profilTraveller?.nationality || '',
          n3xitInd: data.n3xitType || '',
          pasType: data.pasType || '',
          passDuration: data.pasDuration?.toString() || '',
          pasExpiryDate: data.pasExpiryDate || '',
          gateNo: data.n3xitBranch || '',
          flightID: data.vesselName || '',
          dateDeparture: data.txnDate || '',
          deptTime: data.txnTime || '',
          referSv: data.remarks?.reasonRemarks || '',
          svAction: '',
          NTLCategory: '',
          remarksSv: ''
        };
      },
      error: (err) => {
        console.error('Error fetching maklumat pertanyaan (by details)', err);
      }
    });
  }
}
