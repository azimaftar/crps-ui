import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// CoreUI Imports
import {
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  TableDirective,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective
} from '@coreui/angular';
import { PermohonanService } from '../../../../../services/permohonan.service';

interface UploadedFile {
  id: number;
  name: string;
  size: number;
  type: string;
  file: File;
  uploadDate: Date;
  status: 'pending' | 'uploading' | 'completed' | 'failed';
}

@Component({
  selector: 'app-dokumen-sokongan',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CardComponent,
    CardBodyComponent,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    RowComponent,
    TableDirective,
    ColComponent,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    ButtonDirective
  ],
  templateUrl: './dokumen-sokongan.component.html',
  styleUrls: [
  '../../permohonan-surat-kemudahan.component.scss'
]

})
export class DokumenSokonganComponent implements OnInit {
  uploadedFiles: UploadedFile[] = [];
  maxFileSize = 10 * 1024 * 1024;
  isConfirmed = false;

  requiredDocuments = [
    { id: 1, name: 'Surat Pelepasan daripada Agensi', uploaded: false, file: null as UploadedFile | null },
    { id: 2, name: 'Surat Keputusan JKRIM', uploaded: false, file: null as UploadedFile | null }
  ];

  currentStep = 3;

  steps = [
    { number: 1, title: 'Carian & Senarai Sabjek', route: '/sec/permohonan-surat-kemudahan/permohonan-baru' },
    { number: 2, title: 'Maklumat Pemohon', route: '/sec/permohonan-surat-kemudahan/maklumat-pemohon' },
    { number: 3, title: 'Dokumen Sokongan', route: '/sec/permohonan-surat-kemudahan/dokumen-sokongan' }
  ];

  public modalVisible = false;
  public modalMessage = 'Tiada rekod dijumpai';
  private isSubmissionSuccessful = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private permohonanService: PermohonanService
  ) {}

  ngOnInit(): void {
    const currentRoute = this.router.url;
    const matched = this.steps.find(s => s.route === currentRoute);
    this.currentStep = matched ? matched.number : 2;

    const savedFiles = this.permohonanService.getUploadedFiles();
    if (savedFiles && savedFiles.length > 0) {
      this.uploadedFiles = savedFiles;
    }
  }

  onFileSelected(event: any, documentId: number) {
    const file = event.target.files[0];
    if (!file || file.size > this.maxFileSize) return;

    const uploadedFile: UploadedFile = this.createUploadedFile(file);
    this.uploadedFiles.push(uploadedFile);
    this.uploadFile(uploadedFile);

    const docIndex = this.requiredDocuments.findIndex(d => d.id === documentId);
    if (docIndex !== -1) {
      this.requiredDocuments[docIndex].uploaded = true;
      this.requiredDocuments[docIndex].file = uploadedFile;
    }

    this.permohonanService.setUploadedFiles(this.uploadedFiles);
    event.target.value = '';
  }

  uploadFile(uploadedFile: UploadedFile) {
    uploadedFile.status = 'uploading';
    setTimeout(() => {
      uploadedFile.status = 'completed';
    }, 2000);
  }

  createUploadedFile(file: File): UploadedFile {
    return {
      id: Date.now(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file,
      uploadDate: new Date(),
      status: 'pending'
    };
  }

  removeFile(fileId: number) {
    this.uploadedFiles = this.uploadedFiles.filter(f => f.id !== fileId);

    // also remove from requiredDocuments
    this.requiredDocuments.forEach(doc => {
      if (doc.file && doc.file.id === fileId) {
        doc.uploaded = false;
        doc.file = null;
      }
    });

    this.permohonanService.setUploadedFiles(this.uploadedFiles);
  }

  removeFileByDocId(docId: number) {
    const doc = this.requiredDocuments.find(d => d.id === docId);
    if (doc && doc.file) {
      this.removeFile(doc.file.id);
    }
  }

  getFileIcon(fileType: string): string {
    if (fileType.includes('pdf')) return 'fa-file-pdf';
    if (fileType.includes('word') || fileType.includes('document')) return 'fa-file-word';
    if (fileType.includes('image')) return 'fa-file-image';
    if (fileType.includes('excel') || fileType.includes('sheet')) return 'fa-file-excel';
    return 'fa-file';
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'completed':
        return 'badge-success';
      case 'uploading':
        return 'badge-warning';
      case 'failed':
        return 'badge-danger';
      default:
        return 'badge-secondary';
    }
  }

  onSubmit() {
    if (!this.isConfirmed) {
      this.isSubmissionSuccessful = false;
      this.showModal('Medan mandatori diperlukan');
    } else {
      this.isSubmissionSuccessful = true;
      this.showModal('Permohonan telah berjaya');
      console.log('Form submitted successfully');
    }
  }

  saveForm() {
    this.isSubmissionSuccessful = false;
    this.showModal('Rekod berjaya disimpan');
    console.log('Form saved successfully');
  }

  onCheckboxChange(event: any) {
    this.isConfirmed = event.target.checked;
  }

  showModal(message: string): void {
    this.modalMessage = message;
    this.modalVisible = true;
  }

  closeModal(): void {
    this.modalVisible = false;
  }

  onModalOk(): void {
    this.closeModal();
    if (this.isSubmissionSuccessful) {
      this.router.navigate(['/sec/permohonan-surat-kemudahan/permohonan-baru']);
      this.isSubmissionSuccessful = false;
    }
  }

  goBack(): void {
    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index > 0) {
      this.router.navigate([this.steps[index - 1].route]);
    }
  }

  isLastStep(): boolean {
    return this.currentStep === this.steps.length;
  }
}
