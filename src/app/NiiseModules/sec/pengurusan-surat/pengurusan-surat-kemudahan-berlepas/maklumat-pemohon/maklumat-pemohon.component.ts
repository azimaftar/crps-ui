import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubjectService } from '../../../../../services/subject.service';

import { IconDirective } from '@coreui/icons-angular';
import { SharedModalComponent } from '../../../shared-modal/shared-modal.component';

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
} from '@coreui/angular';

@Component({
  selector: 'app-maklumat-pemohon',
  standalone: true,
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
    SharedModalComponent,
  ],
  templateUrl: './maklumat-pemohon.component.html',
  styleUrls: ['../../pengurusan-surat-component.scss'] 
})
export class MaklumatPemohonComponent implements OnInit {
  pageTitle: string = 'Maklumat Pemohon';
  currentStep: number = 1;

  // Form Data
  nama: string = '';
  jenisDokumen: string = '';
  noDokumen: string = '';
  jantina: string = '';
  nomborTelefon: string = '';
  alamat1: string = '';
  alamat2: string = '';
  alamat3: string = '';
  poskod: string = '';
  bandar: string = '';
  negeri: string = '';
  tujuanPermohonan: string = '';
  sahkanChecked: boolean = false;
  negeriBerlepas: string = '';
  selectedCategory: string = '';

  // Modal
  modalVisible = false;
  modalMessage = '';
  modalMode: 'ok' | 'confirm' = 'ok';

  submissionData: any;

  steps = [
    { number: 1, title: 'Carian & Senarai Subjek', route: '' },
    { number: 2, title: 'Kategori Pemohon', route: '' },
    { number: 3, title: 'Maklumat Pemohon', route: '' },
  ];

  jenisDokumenList = ['IC', 'Passport', 'License'];
  jenisJantinaList = ['Lelaki', 'Perempuan', 'Lain-Lain'];
  jenisBandarList = [
    'Alor Setar', 'Bandar Saujana Utama', 'Butterworth', 'Chukai', 'George Town',
    'Gombak', 'Ipoh', 'Johor Bahru', 'Jitra', 'Juru', 'Kangar', 'Kelang', 'Klebang',
    'Kota Bharu', 'Kota Kinabalu', 'Kuala Terengganu', 'Kuantan', 'Kulim', 'Kulai',
    'Labuan', 'Lenggong', 'Melaka', 'Meru', 'Nilai', 'Pagoh', 'Prai', 'Puncak',
    'Putrajaya', 'Seremban', 'Shah Alam', 'Tapah', 'Temerloh', 'Yan',
  ];
  jenisNegeriList = [
    'Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 'Pahang', 'Perak',
    'Perlis', 'Pulau Pinang', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu',
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) {}

  ngOnInit(): void {
    const state = history.state;
    this.currentStep = state.currentStep || 1;
    console.log('Permohonan Baru loaded');
    console.log('Current Step:', this.currentStep);

    this.negeriBerlepas = state.negeriBerlepas || '';
    this.selectedCategory = state.selectedCategory || '';
    this.currentStep = state.currentStep || 1;
    this.pageTitle = state.pageTitle || '';

    console.log('Received data from previous page:', {
      negeriBerlepas: this.negeriBerlepas,
      selectedCategory: this.selectedCategory,
      currentStep: this.currentStep,
      pageTitle: this.pageTitle
    });
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }

  navigateToStep1(): void {
    const step1 = this.steps.find(step => step.number === 1);
    if (step1) this.router.navigate([step1.route]);
  }

  goBack(): void {
    this.router.navigate([
      '/sec/pengurusan-surat/pengurusan-surat-kemudahan-berlepas/permohonan-baru',
    ]);
  }

  isFormValid(): boolean {
    return (
      !!this.nama &&
      !!this.jenisDokumen &&
      !!this.noDokumen &&
      !!this.jantina &&
      !!this.nomborTelefon &&
      !!this.alamat1 &&
      !!this.poskod &&
      !!this.bandar &&
      !!this.negeri &&
      !!this.tujuanPermohonan &&
      this.sahkanChecked === true
    );
  }

  resetForm(): void {
    this.nama = '';
    this.jenisDokumen = '';
    this.noDokumen = '';
    this.jantina = '';
    this.nomborTelefon = '';
    this.alamat1 = '';
    this.alamat2 = '';
    this.alamat3 = '';
    this.poskod = '';
    this.bandar = '';
    this.negeri = '';
    this.tujuanPermohonan = '';
    this.sahkanChecked = false;
  }

  openSubmitModal(): void {
    const now = new Date();
    const tarikhHantar = `${now.getDate().toString().padStart(2, '0')}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${now.getFullYear()}`;
    const waktuHantar = `${now.getHours().toString().padStart(2, '0')}:${now
      .getMinutes()
      .toString()
      .padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

    this.submissionData = {
      fullUrl: this.router.url,
      tarikhHantar,
      waktuHantar,
      nama: this.nama,
      jenisDokumen: this.jenisDokumen,
      noDokumen: this.noDokumen,
      jantina: this.jantina,
      nomborTelefon: this.nomborTelefon,
      alamat1: this.alamat1,
      alamat2: this.alamat2,
      alamat3: this.alamat3,
      poskod: this.poskod,
      bandar: this.bandar,
      negeri: this.negeri,
      tujuanPermohonan: this.tujuanPermohonan,
      sahkanChecked: this.sahkanChecked,
    };

    if (!this.sahkanChecked) {
      this.modalMessage = 'Medan mandatori diperlukan'; // CMN E001
      this.modalMode = 'ok';
    } else {
      this.modalMessage = 'Permohonan telah berjaya'; // SEC-S005
      this.modalMode = 'confirm';
    }

    this.modalVisible = true;
  }

  handleConfirmSubmit(): void {
    this.modalVisible = false;
    this.submitAll();
    this.router.navigate([
      '/sec/pengurusan-surat/pengurusan-surat-kemudahan-berlepas',
    ]);
  }

  handleCancelModal(): void {
    this.modalVisible = false;
    console.log('User clicked Batal / Ok');
  }

  submitAll(): void {
    if (!this.submissionData) {
      console.error('Submission data is missing.');
      this.modalMessage = 'Maklumat yang dimasukkan tidak sah'; // CMN-E007
      this.modalMode = 'ok';
      this.modalVisible = true;
      return;
    }

    const now = new Date();
    const tarikhHantar = `${now.getDate().toString().padStart(2, '0')}:${(now.getMonth() + 1).toString().padStart(2, '0')}:${now.getFullYear()}`;
    const waktuHantar = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

    const fullSubmission = {
      ...this.submissionData,
      tarikhHantar,
      waktuHantar,
      negeriBerlepas: this.negeriBerlepas,
      selectedCategory: this.selectedCategory,
      currentStep: this.currentStep,
      pageTitle: this.pageTitle,
    };

    this.subjectService.submitAll(fullSubmission).subscribe({
      next: (res) => {
        console.log('Final submission successful:', res);
      },
      error: (err: any) => {
        console.error('Final submission failed:', err);
      },
    });
  }

}
