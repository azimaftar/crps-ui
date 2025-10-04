import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubjectService } from '../../../../../services/subject.service';

import { IconDirective } from '@coreui/icons-angular';

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
} from '@coreui/angular';

@Component({
  selector: 'app-kelulusan-permohonan',
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
  ],
  templateUrl: './kelulusan-permohonan.component.html',
  styleUrls: [
  '../../pengurusan-edaran-notis.component.scss'
]

})

export class KelulusanPermohonanComponent implements OnInit {
  submissionData: any;
  currentStep: number = 1;
  statusPermohonan: string = '';
  catatan: string = '';
  maklumatKes: string = '';
  sahkanChecked: boolean = false;
  file1: string | null = null;
  file2: string | null = null;
  tarikhKeputusanPermohonan: string = '';
  waktuKeputusanPermohonan: string = '';
  pageTitle: string = "Kelulusan Permohonan";
  notisID: string = '';
  showSuccessModal: boolean = false;
  showWarningModal: boolean = false;
  showErrorModal: boolean = false;
  tarikhHantarPermohonan: string = '';
  waktuHantarPermohonan: string = '';
  status: string = '';

  ngOnInit(): void {
    console.log('KelulusanPermohonanComponent loaded');

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    this.tarikhKeputusanPermohonan = `${day}-${month}-${year}`;
 
    const now = new Date();
    this.waktuKeputusanPermohonan = now.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

    const state = history.state;
    if (state?.data) {
      this.maklumatKes = state.data.maklumatKes;
      this.file1 = state.data.file1;
      this.file2 = state.data.file2;
      this.sahkanChecked = state.data.sahkanChecked;
      this.notisID = state.data.notisID;
      this.tarikhHantarPermohonan = state.data.tarikhHantarPermohonan;
      this.waktuHantarPermohonan = state.data.waktuHantarPermohonan;
    }
    this.submissionData = state.data;

    this.currentStep = state.currentStep || 1;
    console.log('Current Step:', this.currentStep);

    console.log('Received submission data:', this.submissionData);
  }

  steps = [
    { number: 1, title: 'Senarai Notis', route: '../kemas-kini-edaran-notis.component' },
    { number: 2, title: 'Maklumat Permohonan', route: '' },
    { number: 3, title: 'Kelulusan', route: ''},
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) {}

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

  resetForm(): void {
    this.statusPermohonan = '';
    this.catatan = '';
  }

  submit(): void {
    const trimmedCatatan = this.catatan.trim();

    // Check if statusPermohonan is selected
    if (!this.statusPermohonan) {
      this.showWarningModal = true;
      return;
    }

    // Validate catatan only if status is "Tidak Lulus"
    const isCatatanRequired = this.statusPermohonan === 'Tidak Lulus';
    const isInvalidCatatan =
      isCatatanRequired &&
      (trimmedCatatan === '' ||
      trimmedCatatan.length < 3 ||
      !/^[a-zA-Z0-9\s.,-]+$/.test(trimmedCatatan));

    if (isInvalidCatatan) {
      this.showErrorModal = true;
      console.warn('Invalid catatan (required for Tidak Lulus):', this.catatan);
      return;
    }

    const fullSubmission = {
      ...this.submissionData,
      statusPermohonan: this.statusPermohonan,
      catatan: trimmedCatatan,
      tarikhKeputusanPermohonan: this.tarikhKeputusanPermohonan,
      waktuKeputusanPermohonan: this.waktuKeputusanPermohonan,
      tarikhHantarPermohonan: this.tarikhHantarPermohonan,
      waktuHantarPermohonan: this.waktuHantarPermohonan,
    };

    this.subjectService.submitAll(fullSubmission).subscribe({
      next: (res) => {
        console.log('Final submission successful:', res);
        this.showSuccessModal = true;
      },
      error: (err) => {
        console.error('Final submission failed:', err);
      }
    });

    console.log("Full Submission:", fullSubmission);
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
    this.router.navigate(['/sec/pengurusan-edaran-notis/kemas-kini-edaran-notis/']);
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
      data: {
        notisID: this.notisID,
        maklumatKes: this.maklumatKes,
        file1: this.file1,
        file2: this.file2,
        sahkanChecked: this.sahkanChecked,
        tarikhKeputusanPermohonan: this.tarikhKeputusanPermohonan,
        waktuKeputusanPermohonan: this.waktuKeputusanPermohonan
      },
      currentStep: this.currentStep,
      pageTitle: this.pageTitle
    };

    console.log('Navigating to maklumat pemohon with state:', navState);

    this.router.navigate(
      ['/sec/pengurusan-edaran-notis/kemas-kini-edaran-notis/maklumat-pemohon'],
      { state: navState }
    );
  }
}

