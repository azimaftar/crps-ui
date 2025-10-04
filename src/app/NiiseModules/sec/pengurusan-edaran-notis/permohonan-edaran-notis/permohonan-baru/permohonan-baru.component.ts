import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubjectService } from '../../../../../services/subject.service';

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
  selector: 'app-permohonan-baru',
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
  ],
  templateUrl: './permohonan-baru.component.html',
  styleUrls: ['../../pengurusan-edaran-notis.component.scss']
})
export class PermohonanBaruComponent {
  searchResults: string = '';
  currentStep: number = 1;
  status: string = '';
  pageTitle: string = 'Maklumat Pemohon';
  sahkanChecked: boolean = false;
  maklumatKes: string = '';
  showSuccessModal: boolean = false;

  dokumenList = [
    {
      keterangan: 'Dokumen Kes (PDF)',
      selectedFile: null as File | null,
      uploadedFileName: null as string | null,
      uploadDisabled: false
    },
    {
      keterangan: 'Imej (JPEG, JPG, PNG)',
      selectedFile: null as File | null,
      uploadedFileName: null as string | null,
      uploadDisabled: false
    },
  ];

  steps = [{ number: 1, title: 'Maklumat Kes', route: '' }];

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
      this.dokumenList[index].uploadDisabled = false; // ENABLE upload again
    }
  }

  uploadFile(index: number): void {
    const file = this.dokumenList[index].selectedFile;
    if (!file) return;

    this.subjectService.uploadFile(file).subscribe({
      next: (res) => {
        console.log('Upload successful:', res);
        this.dokumenList[index].uploadedFileName = res.savedAs;
        this.dokumenList[index].uploadDisabled = true; // DISABLE upload
      },
      error: (err) => {
        console.error('Upload failed:', err);
      }
    });
  }

  submitAll(): void {
    const payload: {
      maklumatKes: string;
      sahkanChecked: boolean;
      file1: string | null;
      file2: string | null;
      statusPermohonan: string | null;
    } = {
      maklumatKes: this.maklumatKes,
      sahkanChecked: this.sahkanChecked,
      file1: this.dokumenList[0].uploadedFileName,
      file2: this.dokumenList[1].uploadedFileName,
      statusPermohonan: "Baru",
    };

        this.subjectService.submitAll(payload).subscribe({
      next: (res) => {
        console.log('Submission successful:', res);
        this.showSuccessModal = true;
      },
      error: (err) => {
        console.error('Submission failed:', err);
      }
    });

  }

  resetForm(): void {
    this.maklumatKes = '';
    this.status = '';
    this.sahkanChecked = false;
    this.dokumenList = this.dokumenList.map(doc => ({
      ...doc,
      selectedFile: null,
      uploadedFileName: null
    }));

    const checkbox = document.getElementById('sahkanCheckbox') as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
    this.router.navigate(['/sec/pengurusan-edaran-notis/permohonan-edaran-notis'],)
  }

  onRowAction(item: any): void {
    this.router.navigate(['papar'], {
      relativeTo: this.route,
      state: {
        data: item,
        currentStep: this.currentStep,
        pageTitle: this.pageTitle
      }
    });
  }
}
