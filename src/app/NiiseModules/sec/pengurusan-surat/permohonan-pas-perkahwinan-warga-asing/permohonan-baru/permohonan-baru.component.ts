import { Component, NgModule, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubjectService } from '../../../../../services/subject.service';

import { IconDirective } from '@coreui/icons-angular';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PermohonanService } from '../../../../../core/services/sec-services/PermohonanPasPerkahwinanWargaAsing.services';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { apiConfig } from "../../../../../api.config";
import {
  MaritalStatus,
  stateList,
  genderList,
  jimList,
  sequenceNumber,
  ctryList,
  Religion,
} from '../../../../../core/models/marital-status.model';

// CoreUI Imports
import {
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  TableDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  CardModule,
  GridModule,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,
  AlertModule,
  ButtonModule,
  ModalModule,
} from '@coreui/angular';

@Component({
  standalone: true,
  selector: 'app-permohonan-baru',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    TableDirective,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    CardModule,
    GridModule,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    IconDirective,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    AlertModule,
    ButtonModule,
    CardModule,
    GridModule,
    ModalModule,
  ],
  templateUrl: './permohonan-baru.component.html',
  styleUrl:
    '../../../pengurusan-surat/permohonan-pas-perkahwinan-warga-asing/permohonan-pas-perkahwinan-warga-asing.component.scss',
})
export class PermohonanBaruComponent {
  currentStep: number = 1;
  submissionData: any;
  pageTitle: string = 'Kategori Pemohon';

  nama: string = '';
  nationality: string = '';
  docsifforeign: string = '';
  warganegara: string = '';
  noDokumen: string = '';
  jenisWarganegara: string = '';
  noKp: string = '';
  noPasport: string = '';
  noDokumenPasangan: string = '';
  noKpPasangan: string = '';
  noPasportPasangan: string = '';
  email: string = '';
  gender: string = '';
  phoneNumber: string = '';

  // strictly typed as number | null
  umur: number | null = null;
  alamat1: string = '';
  alamat2: string = '';
  alamat3: string = '';
  poskod: string = '';
  city: string = '';
  negeri: string = '';
  jobInfo: string = '';
  employername: string = '';

  entryDate: Date = new Date();
  expiryDate: Date = new Date();

  // you can keep string, Angular will store 'YYYY-MM-DD'
  tarikhLahir: Date = new Date();

  maritalStatus: String = '';

  tarikhPermohonan: Date = new Date();
  showSuccessModal: boolean = false;
  showWarningModal: boolean = false;
  showErrorModal: boolean = false;

  selectedCategory: string = ''; // kategori permohonan, e.g. 'Warganegara / Penduduk Tetap' or 'Warga Asing'
  selectedCitizenCategory: String = '';
  selectedregionOffice: string = ''; // bound to the dropdown for region office

  categories: [string, string] = [
    'Warganegara / Penduduk Tetap',
    'Warga Asing',
  ]; // bound to the dropdown

  // genderOptions = [
  //   { value: 'L', label: 'Lelaki' },
  //   { value: 'P', label: 'Perempuan' },
  // ];

  maritalStatusOption: MaritalStatus[] = [];
  genderOptions: genderList[] = [];
  stateOptions: stateList[] = [];
  jimListOptions: jimList[] = [];
  religionOptions: Religion[] = [];
  sequenceNumber: sequenceNumber[] = [];
  ctryList: ctryList[] = [];

  public date: Date = new Date();

  // Called when the user finishes entering the IC number
  onIcChange(): void {
    if (this.noKp && this.noKp.length === 12) {
      if (this.selectedCategory === 'Warganegara / Penduduk Tetap') {
        this.setDobAndAgeFromIC(this.noKp);
      }
      this.fetchIdentityData(this.noKp);
    }
  }

  // Called when DOB is manually selected (foreigners)
  onDobChange(): void {
    if (this.selectedCategory === 'Warga Asing' && this.tarikhLahir) {
      this.setAgeFromDob(this.tarikhLahir.toString());
    }
  }

  /**
   * Extract DOB and age from IC number (12-digit Malaysian IC format: YYMMDD-XX-XXXX)
   */
  private setDobAndAgeFromIC(ic: string): void {
    if (ic && ic.length >= 6) {
      const yy = ic.substring(0, 2);
      const mm = ic.substring(2, 4);
      const dd = ic.substring(4, 6);

      const fullYear = parseInt(yy, 10) > 50 ? `19${yy}` : `20${yy}`;
      const dobString = `${fullYear}-${mm}-${dd}`;

      this.tarikhLahir = new Date(dobString);

      const today = new Date();
      let age = today.getFullYear() - this.tarikhLahir.getFullYear();
      const monthDiff = today.getMonth() - this.tarikhLahir.getMonth();
      const dayDiff = today.getDate() - this.tarikhLahir.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }

      this.umur = age;
    } else {
      this.tarikhLahir = null!;
      this.umur = null;
    }
  }

  /**
   * Set age based on selected date of birth (for non-citizens).
   */
  private setAgeFromDob(dob: string): void {
    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }

      this.umur = age;
    } else {
      this.umur = null;
    }
  }

  /**
   * Reset dependent fields when applicant category changes.
   */
  onCategoryChange(): void {
    this.tarikhLahir = null!;
    this.umur = null;
    this.noKp = '';
  }

  /**
   * Allow only numeric characters (for IC, phone number, etc.)
   */
  allowOnlyNumbers(event: KeyboardEvent): void {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

  /**
   * Prevent pasting non-numeric characters.
   */
  blockInvalidPaste(event: ClipboardEvent): void {
    const pasteData = event.clipboardData?.getData('text') ?? '';
    if (!/^\d+$/.test(pasteData)) {
      event.preventDefault();
    }
  }

  /**
   * Trim leading/trailing whitespace for phone number.
   */
  trimPhoneNumber(): void {
    this.phoneNumber = this.phoneNumber?.toString().trim() || '';
  }

  ngOnInit(): void {
    // console.log('Permohonan Baru loaded');

    // console.log('Current Step:', this.currentStep);

    this.loadMaritalStatuses();
    this.loadSexList();
    this.loadStateList();
    this.loadJimList();
    this.loadReligionList();
    this.loadCountryList();
    this.loadsequenceNumber();
  }

  steps = [
    {
      number: 1,
      title: 'Maklumat Pemohon',
      route:
        'sec/pengurusan-surat/permohonan-pas-perkahwinan-warga-asing/permohonan-baru',
    },
    {
      number: 2,
      title: 'Maklumat Pasangan',
      route:
        'sec/pengurusan-surat/permohonan-pas-perkahwinan-warga-asing/permohonan-baru/maklumat-pasangan',
    },
    {
      number: 3,
      title: 'Document Sokongan',
      route:
        'sec/pengurusan-surat/permohonan-pas-perkahwinan-warga-asing/permohonan-baru/maklumat-pasangan/dokumen-sokongan',
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private subjectService: SubjectService,
    private permohonanService: PermohonanService,
    private http: HttpClient
  ) {}

  private mapApiToForm(data: any) {
    return {
      nama: data.icdName || '',
      nomborKadPengenalan: data.icdKpno || '',
      warganegara: data.icdCitizenship || '',
      bangsa: data.icdRace || '',
      tarikhLahir: data.icdDateOfBirth || '',
      jantina: data.icdGender || '',
      negaraLahir: data.icdCountryOfBirth || '',
      tempatLahir: data.icdPlaceOfBirth || '',
      fid: data.icdFid || '',
      dataBiometrik: data.icdBio || '',
      nomborSyarikat: data.icdCompanyNo || '',
      namaSyarikat: data.icdCompanyName || '',
      tarikhSuratAgensi: data.icdLetterDate || '',
      tarikhSijilAgensi: data.icdCertificateDate || '',
    };
  }

  private loadMaritalStatuses(): void {
    this.permohonanService.getMaritalStatus().subscribe({
      next: (data) => {
        // console.log('✅ Marital status list:', data);
        this.maritalStatusOption = data;
      },
      error: (err) => {
        // console.error('❌ Failed to fetch marital statuses:', err);
        this.maritalStatusOption = [];
      },
    });
  }

  private loadSexList(): void {
    this.permohonanService.getSexList().subscribe({
      next: (sex) => {
        // console.log('✅ Sex list:', sex);
        this.genderOptions = sex;
      },
      error: (err) => {
        // console.error('❌ Failed to fetch marital statuses:', err);
        this.genderOptions = [];
      },
    });
  }

  private loadStateList(): void {
    this.permohonanService.getStateList().subscribe({
      next: (st) => {
        // console.log('✅ State list:', st);
        this.stateOptions = st;
      },
      error: (err) => {
        // console.error('❌ Failed to fetch state:', err);
        this.stateOptions = [];
      },
    });
  }

  private loadJimList(): void {
    this.permohonanService.getJimList().subscribe({
      next: (st) => {
        // console.log('✅ Jim list:', st);
        this.jimListOptions = st;
      },
      error: (err) => {
        // console.error('❌ Failed to fetch state:', err);
        this.jimListOptions = [];
      },
    });
  }

  private loadReligionList(): void {
    this.permohonanService.getReligionList().subscribe({
      next: (st) => {
        // console.log('✅ Religion list:', st);
        this.religionOptions = st;
      },
      error: (err) => {
        // console.error('❌ Failed to fetch state:', err);
        this.religionOptions = [];
      },
    });
  }

  private loadCountryList(): void {
    this.permohonanService.getCountryList().subscribe({
      next: (ctry) => {
        // console.log('✅ Country list:', ctry);
        this.ctryList = ctry;
      },
      error: (err) => {
        // console.error('❌ Failed to fetch state:', err);
        this.ctryList = [];
      },
    });
  }

  private loadsequenceNumber(): void {
    this.permohonanService.getsequenceNumber().subscribe({
      next: (seq) => {
        // console.log('✅ sequence number list:', seq);
        this.sequenceNumber = seq;
      },
      error: (err) => {
        // console.error('❌ Failed to fetch state:', err);
        this.sequenceNumber = [];
      },
    });
  }

  resultDaftarPermohonan: boolean = false;
  resultSuccCd: boolean = false;

  fetchIdentityData(icNumber: string): void {
    this.permohonanService.getApplInfo(icNumber).subscribe({
      next: (response) => {
        console.log('getApplInfo response:', response);

        if (response && response.records && response.records.length > 0) {
          const record = response.records[0]; // take first record

          this.nama = record.name || '';
          this.noKp = record.kpNo || '';

          // ✅ Map gender from lookup list
          const genderCode = record.gender || '';
          const genderObj = this.genderOptions.find((g) => g.sexCD === genderCode);
          this.gender = genderObj ? String(genderObj.sexCD) : '';

          // ✅ Map citizen from lookup list
          const CitizenCode = record.selectedCitizenCategory || '';
          const CitizenObj = this.ctryList.find((c) => c.wrldSTACode === CitizenCode);
          this.selectedCitizenCategory = CitizenObj ? String(CitizenObj.wrldSTACode): '';

          // Address fields
          this.alamat1 = record.address1 || '';
          this.alamat2 = record.address2 || '';
          this.alamat3 = record.address3 || '';
          this.poskod = record.postcode || '';
          this.city = record.city || '';
          this.negeri = record.stateCode || '';
          this.phoneNumber = record.noPhone || '';
          this.maritalStatus = record.maritalStatus || '';
          // this.jobInfo = record.occupation || ''; // no data from API

          // this.showSuccess('Maklumat pemohon berjaya dijumpai.');
        } else {
          // this.showFail('Tiada Rekod Dijumpai.');
        }
      },
      error: (err) => {
        // console.error('Error fetching ApplInfo:', err);
        // alert('Ralat ketika memanggil API.');
      },
    });
  }

  // submitPermohonan(): void {
  //   const payload = {
  //     kpNo: this.noDokumen, // Kad pengenalan / Passport
  //     name: this.nama,
  //     docNo: this.noDokumen, // backend expects docNo
  //     dob: this.tarikhLahir, // YYYY-MM-DD
  //     martitalStatus: this.maritalStatus, // ⚠️ spelling matches backend DTO
  //     gender: this.gender, // 'L' or 'P'
  //     email: this.email,
  //     job: this.jobInfo,
  //     age: this.umur,
  //     phoneNo: this.phoneNumber,
  //     address1: this.alamat1,
  //     address2: this.alamat2,
  //     address3: this.alamat3,
  //     poscode: this.poskod,
  //     negeri: this.negeri,
  //   };

  //   this.permohonanService.submitPermohonan(payload).subscribe({
  //     next: (response) => {
  //       console.log('Success:', response);
  //       this.showSuccessModal = true;
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       if (error.status === 400) {
  //         this.showWarningModal = true;
  //         console.error('Bad request:', error.error);
  //       } else {
  //         this.showErrorModal = true;
  //         console.error('Server error:', error.error);
  //       }
  //     },
  //   });
  // }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }

  navigateToStep1(): void {
    const step1 = this.steps.find((step) => step.number === 1);
    if (step1) this.router.navigate([step1.route]);
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
    this.router.navigate([
      '/sec/permohonan-pas-perkahwinan-warga-asing/permohonan-baru/',
    ]);
  }

  closeErrorModal(): void {
    this.showErrorModal = false;
  }

  resetForm(): void {
    this.selectedCategory = '';
    this.categories = ['Warganegara / Penduduk Tetap', 'Warga Asing'];
  }

  closeWarningModal(): void {
    this.showWarningModal = false;
  }

  prevPage(): void {
    this.currentStep -= 1;

    const navState = {
      currentStep: this.currentStep,
      pageTitle: this.pageTitle,
    };

    console.log('Navigating to Permohonan Baru page with state:', navState);

    this.router.navigate(['../'], {
      relativeTo: this.route,
      state: navState,
    });
  }

  getFormData(): any {
    return {
      nama: this.nama,
      kategoriPermohonan: this.selectedCategory,
      regionOffice: this.selectedregionOffice,
      noKp: this.noKp,
      noDokumen: this.noDokumen,
      noKadPengenalan: this.noKp,
      citizen: this.selectedCitizenCategory,
      gender: this.gender,
      tarikhlahir: this.tarikhLahir,
      age: this.umur,
      statusPerkahwinan: this.maritalStatus,
      noTelefon: this.phoneNumber,
      job: this.jobInfo,
      alamat1: this.alamat1,
      alamat2: this.alamat2,
      alamat3: this.alamat3,
      poskod: this.poskod,
      bandar: this.city,
      negeri: this.negeri,
      majikan: this.employername,
      entryDate: this.entryDate,
      expiryDate: this.expiryDate,
      jenisWarganegara: this.jenisWarganegara,
      warganegara: this.warganegara,
      noPasport: this.noPasport,
      // add other fields as necessary
    };
  }

  // inside PermohonanBaruComponent
  nextStep(): void {
    const formData = this.getFormData();
    this.permohonanService.setFormData(formData);
    this.router.navigate(['./maklumat-pasangan'], {
      relativeTo: this.route,
    });
  }

  // Notification state
  notificationType: 'confirm' | 'success' | 'fail' | null = null;
  message: string = '';

  // Show confirmation
  showConfirm(msg: string) {
    this.notificationType = 'confirm';
    this.message = msg;
  }

  // Show success
  showSuccess(msg: string) {
    this.notificationType = 'success';
    this.message = msg;
  }

  // Show failure
  showFail(msg: string) {
    this.notificationType = 'fail';
    this.message = msg;
  }

  // Clear notification (optional)
  clearNotification() {
    this.notificationType = null;
    this.message = '';
  }

  onConfirm(): void {
    // handle confirmation logic here
    console.log('Confirmed!');
    this.clearNotification();
  }

  saveData() {
    return null;
  }

  private counter: number = 1; // Counter for sequence number

  //////////////////////////////////////////////

  async saveSubmitForm(isDraft: boolean = true): Promise<void> {
    try {
      const formData = this.permohonanService.getFormData();
      if (!formData) {
        alert('❌ Tiada data untuk dihantar.');
        return;
      }

      // 1️⃣ Generate dynamic No Rujukan Permohonan
      const noRujukan = await this.generateNoRujukanPermohonan(isDraft);

      // 2️⃣ Construct final payload
      const FinalJsonPayLoad = {
        noRujukanPermohonan: noRujukan,
        ...formData,
      };

      console.log(
        '🧠 FINAL PAYLOAD:',
        JSON.stringify(FinalJsonPayLoad, null, 2)
      );

      // 3️⃣ Send to backend
      this.http
        .post(
          '${apiConfig.apiUrlSec}/postDaftarPermohonan2.1',
          FinalJsonPayLoad
        )
        .subscribe({
          next: (res) => {
            console.log('✅ Submission successful', res);
            alert(
              `✅ Data berjaya dihantar sebagai ${
                isDraft ? 'Draft' : 'Official'
              }!`
            );

            // Navigate to different page if needed
            this.router.navigate(['/sec/sl/tambah-sl']);
          },
          error: (err) => {
            console.error('❌ Submission failed', err);
            alert('❌ Gagal menghantar data. Sila cuba lagi.');
          },
        });
    } catch (error) {
      console.error('❌ Error in saveSubmitForm:', error);
      alert('❌ Ralat semasa menjana No Rujukan Permohonan.');
    }
  }

  private calculateAge(dob: Date): number {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  }

  async generateNoRujukanPermohonan(isDraft: boolean): Promise<string> {
    try {
      const code = isDraft ? 'T0018' : 'T0011';

      // Call your API to get the sequence
      const seqData: any = await this.http
        .get(`${apiConfig.apiUrlSec}/seqCode?code=${code}`)
        .toPromise();

      if (!seqData || seqData.length === 0) {
        throw new Error('Failed to fetch sequence data.');
      }

      const seq = seqData[0]; // Take first record from API

      // Build date part: MM-YY
      const now = new Date();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const year = now.getFullYear().toString().slice(-2);

      // Construct final No Rujukan Permohonan
      // Format: prefix1 / smdl / MM-YY / seqNo
      return `${seq.R353_PREFIX_1} / ${seq.R353_SMDL} / ${month}-${year} / ${seq.R353_SEQ_NO}`;
    } catch (error) {
      console.error('Error generating Rujukan Permohonan:', error);
      return 'ERROR / SEQ / 0000';
    }
  }
}
