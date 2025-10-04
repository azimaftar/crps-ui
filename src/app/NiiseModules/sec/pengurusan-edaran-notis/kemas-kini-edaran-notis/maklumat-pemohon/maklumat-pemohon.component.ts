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
  selector: 'app-maklumat-pemohon',
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
  templateUrl: './maklumat-pemohon.component.html',
  styleUrls: [
  '../../pengurusan-edaran-notis.component.scss'
]

})
export class MaklumatPemohonComponent implements OnInit {
  searchResults: string = '';
  currentStep: number = 1;
  status: string = '';
  pageTitle: string = 'Maklumat Pemohon';
  sahkanChecked: boolean = false;
  maklumatKes: string = '';
  notisID: string = '';
  showSuccessModal: boolean = false;
  tarikhHantarPermohonan: string = '';
  waktuHantarPermohonan: string = '';
  file1: string = '';
  file2: string = '';


  dokumenList = [
    { keterangan: 'Dokumen Kes (PDF)', selectedFile: null as File | null, uploadedFileName: null as string | null },
    { keterangan: 'Imej (JPEG, JPG, PNG)', selectedFile: null as File | null, uploadedFileName: null as string | null }
  ];

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

  ngOnInit(): void {
    const navigationState = history.state;

    if (navigationState.data) {
      const submission = navigationState.data;

      this.notisID = submission.notisID;
      this.maklumatKes = submission.maklumatKes;
      this.file1 = submission.file1;
      this.file2 = submission.file2;
      this.sahkanChecked = submission.sahkanChecked;
      this.tarikhHantarPermohonan = submission.tarikhHantarPermohonan;
      this.waktuHantarPermohonan = submission.waktuHantarPermohonan;  
      this.dokumenList = [
        {
          keterangan: 'Dokumen Kes (PDF)',
          selectedFile: null,
          uploadedFileName: submission.file1 || null
        },
        {
          keterangan: 'Imej (JPEG, JPG, PNG)',
          selectedFile: null,
          uploadedFileName: submission.file2 || null
        }
      ];
      this.currentStep = navigationState.currentStep || 1;
      this.pageTitle = navigationState.pageTitle || 'Maklumat Pemohon';

    } else {
      console.warn('No submission data passed in navigation state');
      // Optional fallback: redirect back or show error
    }
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
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  getFileExtension(fileName: string | undefined): string {
    if (!fileName) return '';
    const parts = fileName.split('.');
    return parts.length > 1 ? `.${parts.pop()?.toLowerCase()}` : '';
  }

  onFileSelected(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
      if (!allowedTypes.includes(file.type)) return;
      this.dokumenList[index].selectedFile = file;
    }
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
  }

  downloadFile(fileName: string): void {
    const url = `http://localhost:2000/uploads/${fileName}`;
    window.open(url, '_blank');
  }

  nextPage(): void {
    this.currentStep += 1;

    const navState = {
      data: {
        notisID: this.notisID,
        maklumatKes: this.maklumatKes,
        file1: this.file1,
        file2: this.file2,
        sahkanChecked: this.sahkanChecked,
        tarikhHantarPermohonan: this.tarikhHantarPermohonan,
        waktuHantarPermohonan: this.waktuHantarPermohonan,
      },
      currentStep: this.currentStep,
    };

    console.log('Navigating to kelulusan-permohonan with state:', navState);

    this.router.navigate(
      ['/sec/pengurusan-edaran-notis/kemas-kini-edaran-notis/kelulusan-permohonan'],
      {
        state: navState,
      }
    );
  }
}
