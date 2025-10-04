import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubjectService } from '../../../../../../../services/subject.service';

import { IconDirective } from '@coreui/icons-angular';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PermohonanService } from '../../../../../../../core/services/sec-services/PermohonanPasPerkahwinanWargaAsing.services';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../../../../../environments/environment';
import {
  MaritalStatus,
  genderList,
  stateList,
} from '../../../../../../../core/models/marital-status.model';
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
} from '@coreui/angular';

@Component({
  standalone: true,
  selector: 'app-maklumat-pasangan',
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
    AlertModule,
  ],
  templateUrl: './maklumat-pasangan.component.html',
  // styleUrl: '../../../../pengurusan-surat/permohonan-pas-perkahwinan-warga-asing/permohonan-pas-perkahwinan-warga-asing.component.scss',
})
export class MaklumatPasanganComponents {
  currentStep: number = 2;
  submissionData: any;
  pageTitle: string = 'Maklumat Pasangan';
  showSuccessModal: boolean = false;
  showWarningModal: boolean = false;
  showErrorModal: boolean = false;
  negeriBerlepas: string = ''; // bound to the radio buttons
  selectedCategory: string = ''; // bound to dropdown
  categories: string[] = []; // this gets updated dynamically

  nama: string = '';
  noDokumen: string = '';
  warganegara: string = '';
  jantina: string = '';
  phoneNumber: string = '';
  alamat1: string = '';
  alamat2: string = '';
  alamat3: string = '';
  poskod: string = '';
  city: string = '';
  negeri: string = '';
  jenisNegeriList = [
    'Johor',
    'Kedah',
    'Kelantan',
    'Melaka',
    'Negeri Sembilan',
    'Pahang',
    'Perak',
    'Perlis',
    'Pulau Pinang',
    'Sabah',
    'Sarawak',
    'Selangor',
    'Terengganu',
  ];
  jenisJantinaList = ['Lelaki', 'Perempuan', 'Lain-Lain'];
  warganegaraList = ['Warganegara Malaysia', 'Warganegara Asing', 'Lain-Lain'];
  tarikhlahir: Date = new Date();
  umur: number = 0;
  statusPerkahwinan = [
    'Bujang',
    'Berkahwin',
    'Duda',
    'Janda',
    'Cerai',
    'Lain-lain',
  ]; // Removed 'Lain-lain' as it is not a valid marital status
  email: string = ''; // New field for email
  kerja: string = ''; // New field for pekerjaan
  employername: string = ''; // New field for majikan
  entryDate: Date = new Date(); // New field for tarikh masuk kerja
  expiryDate: Date = new Date(); // New field for tarikh tamat pas
  public date: Date = new Date(); // New field for current date
  jenisDokumen: string = ''; // New field for jenis dokumen

  formData: any = null;
  maritalStatus: String = '';

  ngOnInit(): void {
    // ✅ Try to get from service (persistent)
    this.formData = this.permohonanService.getFormData();

    // 🚨 If user reloads the page or enters URL directly
    if (!this.formData) {
      console.warn('Form data not found. Redirecting...');
      this.router.navigate([
        '/sec/permohonan-pas-perkahwinan-warga-asing/permohonan-baru',
      ]);
      return;
    }

    // ✅ Safe navigation check
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as any;

    console.log('=== Data received from Permohonan Baru page ===');

    if (state) {
      console.log('pageTitle:', state.pageTitle);
      console.log('nama:', state.nama);
      console.log('nationality:', state.nationality);
      console.log('docsifforeign:', state.docsifforeign);
      console.log('warganegara:', state.warganegara);
      console.log('noDokumen:', state.noDokumen);
      console.log('jenisWarganegara:', state.jenisWarganegara);
      console.log('noKp:', state.noKp);
      console.log('noPasport:', state.noPasport);
      console.log('noDokumenPasangan:', state.noDokumenPasangan);
      console.log('noKpPasangan:', state.noKpPasangan);
      console.log('noPasportPasangan:', state.noPasportPasangan);
      console.log('email:', state.email);
      console.log('nomborTelefon:', state.phoneNumber);
      console.log('umur:', state.umur);
      console.log('alamat1:', state.alamat1);
      console.log('alamat2:', state.alamat2);
      console.log('alamat3:', state.alamat3);
      console.log('poskod:', state.poskod);
      console.log('negeri:', state.negeri);
      console.log('pekerjaan:', state.pekerjaan);
      console.log('majikan:', state.employername);
      console.log('entryDate:', state.entryDate);
      console.log('expireDate:', state.expireDate);
      console.log('tarikhLahir:', state.tarikhLahir);
      console.log('tarikhLahirPasangan:', state.tarikhLahirPasangan);
      console.log('tarikhPermohonan:', state.tarikhPermohonan);
      console.log('negeriBerlepas:', state.negeriBerlepas);
      console.log('selectedCategory:', state.selectedCategory);
      console.log('selectedregionOffice:', state.selectedregionOffice);
      console.log('statusPerkahwinan:', state.statusPerkahwinan);
    } else {
      console.log(
        '⚠️ No navigation state found (likely reload). Using service data only.'
      );
      console.log(this.formData);
    }

    this.loadMaritalStatuses();
    this.loadSexList();
    this.loadStateList();
  }

  ngOnChanges() {
    this.updateCategories();
  }

  updateCategories() {
    this.categories =
      this.allCategories[
        this.negeriBerlepas as keyof typeof this.allCategories
      ] || [];
    this.selectedCategory = ''; // Reset selected category when list changes
  }

  preventDash(event: KeyboardEvent): void {
    if (event.key === '-') {
      event.preventDefault();
    }
  }

  calculateAgeFromDob(): void {
    if (this.tarikhlahir) {
      const birthDate = new Date(this.tarikhlahir);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      this.umur = age;
    } else {
      this.umur = 0; // or null
    }
  }

  allCategories = {
    Sabah: [
      'Pemegang sijil lahir warga asing. (stateless person)',
      'Pemegang IMM 13 (dikeluarkan oleh Unit Khas untuk pelarian)',
      'Pemegang MyKAS (penduduk sementara, dikeluarkan oleh JPN)',
      'Tukang masak (Pemegang PLKS)',
      'Pembantu rumah (Pemegang Pas PLKS)',
      'Tukang urut (Pemegang PLKS)',
      'Pemegang WN DOC7 (pemohon sijil warganegara yang masih dalam proses) yang perlu merujuk JPN, Putrajaya',
      'Anak angkat warga asing',
      'Pemegang resit unit Sabah (JPN Sabah)',
    ],
    Sarawak: [
      'Pemegang sijil lahir warga asing. (belum ditentukan warganegara)',
      'Pemegang IMM 13 (dikeluarkan oleh Unit Khas untuk pelarian)',
      'Pemegang MyKAS (penduduk sementara, dikeluarkan oleh JPN)',
    ],
  };

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
    private permohonanService: PermohonanService
  ) {}

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

  resetForm(): void {
    this.negeriBerlepas = '';
    this.selectedCategory = '';
    this.categories = [];
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
    this.router.navigate([
      '/sec/pengurusan-edaran-notis/kemas-kini-edaran-notis/',
    ]);
  }

  closeErrorModal(): void {
    this.showErrorModal = false;
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

    this.router.navigate(['..'], {
      relativeTo: this.route,
      state: navState,
    });
  }

  nextPage(): void {
    // 1. Capture current form data
    const currentForm = this.permohonanService.getFormData();

    // 2. Merge pasangan field flat into existingData
    const updatedData = {
      ...currentForm,
      nama: this.nama,
      noDokumen: this.noDokumen,
      warganegara: this.warganegaraList,
      jantina: this.jenisJantinaList,
      tarikhlahir: this.tarikhlahir,
      age: this.umur,
      statusPerkahwinan: this.statusPerkahwinan,
      email: this.email,
      kerja: this.kerja,
      phoneNumber: this.phoneNumber,
      alamat1: this.alamat1,
      alamat2: this.alamat2,
      alamat3: this.alamat3,
      poskod: this.poskod,
      bandar: this.city,
      negeri: this.negeri,
      majikan: this.employername,
      entryDate: this.entryDate,
      expiryDate: this.expiryDate,
    };

    // Navigate only after successful submission
    this.router.navigate(['../maklumat-pasangan/dokumen-sokongan'], {
      relativeTo: this.route,
    });
  }

  saveData() {
    return null;
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

  maritalStatusOption: MaritalStatus[] = [];
  genderOptions: genderList[] = [];
  stateOptions: stateList[] = [];

  private loadMaritalStatuses(): void {
    this.permohonanService.getMaritalStatus().subscribe({
      next: (data) => {
        console.log('✅ Marital status list:', data);
        this.maritalStatusOption = data;
      },
      error: (err) => {
        console.error('❌ Failed to fetch marital statuses:', err);
        this.maritalStatusOption = [];
      },
    });
  }

  private loadSexList(): void {
    this.permohonanService.getSexList().subscribe({
      next: (sex) => {
        console.log('✅ Sex list:', sex);
        this.genderOptions = sex;
      },
      error: (err) => {
        console.error('❌ Failed to fetch marital statuses:', err);
        this.genderOptions = [];
      },
    });
  }

  private loadStateList(): void {
    this.permohonanService.getStateList().subscribe({
      next: (st) => {
        console.log('✅ Sex list:', st);
        this.stateOptions = st;
      },
      error: (err) => {
        console.error('❌ Failed to fetch state:', err);
        this.stateOptions = [];
      },
    });
  }
}
