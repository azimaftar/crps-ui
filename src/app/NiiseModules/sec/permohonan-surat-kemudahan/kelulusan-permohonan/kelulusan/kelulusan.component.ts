import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// CoreUI Imports
import {
  CardComponent,           // <c-card>
  CardBodyComponent,       // <c-card-body>
  RowComponent,            // <c-row>
  ColComponent,            // <c-col>
  ButtonDirective,          // [cButton]
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,

} from '@coreui/angular';

// Interface for uploaded file
interface UploadedFile {
  id: number;
  name: string;
  size: number;
  type: string;
  file: File;
  uploadDate: Date;
  status: 'pending' | 'uploading' | 'completed' | 'failed';
}

// Interface for application state
interface ApplicationState {
  selectedItem: any;
  selectedCategory: string;
  formData: any;
  currentStep: number;
  viewMode?: boolean;
}

@Component({
  selector: 'app-kelulusan',
  imports: [CommonModule,
    ReactiveFormsModule,
    RouterModule,
    // CoreUI Components
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ButtonDirective],
  templateUrl: './kelulusan.component.html',
  styleUrls: [
  '../../permohonan-surat-kemudahan.component.scss'
]

})
export class KelulusanComponent implements OnInit {

  // View mode properties
  isViewMode: boolean = false;
  selectedItem: any = null;
  selectedCategory: string = '';
  formData: any = {};

  // State management key
  private readonly STATE_KEY = 'surat_kemudahan_state';

  // Form properties
  selectedLulusOption: string = '';
  catatan: string = '';
  namaPelulus: string = '';
  tarikhKelulusan: string = '';

  uploadedFiles: UploadedFile[] = [];
  maxFileSize = 10 * 1024 * 1024; // 10MB in bytes
  selectedFile: File | null = null;

  // Different upload contexts
  requiredDocuments = [
    { id: 1, name: 'Surat Pelepasan daripada Agensi', uploaded: false, file: null },
    { id: 2, name: 'Surat Keputusan JKRIM', uploaded: false, file: null }
  ];

  //Define current step
  currentStep = 3;
  photoUrl = '';

  // Stepper
  steps = [
    { number: 1, title: 'Carian Permohonan', route: '/sec/permohonan-surat-kemudahan/kelulusan-permohonan' },
    { number: 2, title: 'Maklumat Pemohon', route: '/sec/permohonan-surat-kemudahan/maklumat-permohonan2' },
    { number: 3, title: 'Kelulusan Permohonan', route: '/sec/permohonan-surat-kemudahan/kelulusan' },
  ];

  public modalVisible = false;
  public modalMessage = 'Tiada rekod dijumpai';

  //Constructor
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initializeComponent();
    this.loadStateData();

    // Stepper logic
    const currentRoute = this.router.url;
    const matched = this.steps.find(s => s.route === currentRoute);
    this.currentStep = matched ? matched.number : 3;
  }

  private initializeComponent(): void {
    console.log('Kelulusan Permohonan 2 component initialized');
  }

  private loadStateData(): void {
    // Try to get data from router state first
    const navigation = this.router.getCurrentNavigation();
    const routerState = navigation?.extras?.state || history.state;

    if (routerState && routerState.viewMode !== undefined) {
      console.log('Loading from router state:', routerState);
      this.isViewMode = routerState.viewMode === true;
      this.selectedItem = routerState.selectedItem;
      this.selectedCategory = routerState.selectedCategory;
      this.formData = routerState.formData;
      this.currentStep = routerState.currentStep || 3;
      this.saveState();
      return;
    }

    // Try to load from stored state
    const storedState = this.loadState();
    if (storedState) {
      console.log('Loading from stored state:', storedState);
      this.isViewMode = storedState.viewMode === true;
      this.selectedItem = storedState.selectedItem;
      this.selectedCategory = storedState.selectedCategory;
      this.formData = storedState.formData;
      this.currentStep = storedState.currentStep || 3;
      return;
    }

    // Fallback - redirect to first page
    console.log('No state found, redirecting to first page');
    this.redirectToFirstPage();
  }

  private redirectToFirstPage(): void {
    this.clearState();
    this.router.navigate(['/sec/permohonan-surat-kemudahan/kelulusan-permohonan']);
  }

  /**
   * Save current state to memory
   */
  private saveState(): void {
    const state: ApplicationState = {
      selectedItem: this.selectedItem,
      selectedCategory: this.selectedCategory,
      formData: this.formData,
      currentStep: this.currentStep,
      viewMode: this.isViewMode
    };

    try {
      (window as any)[this.STATE_KEY] = state;
      console.log('State saved:', state);
    } catch (error) {
      console.error('Error saving state:', error);
    }
  }

  /**
   * Load state from memory
   */
  private loadState(): ApplicationState | null {
    try {
      const state = (window as any)[this.STATE_KEY];
      console.log('State loaded:', state);
      return state || null;
    } catch (error) {
      console.error('Error loading state:', error);
      return null;
    }
  }

  /**
   * Clear saved state
   */
  private clearState(): void {
    try {
      delete (window as any)[this.STATE_KEY];
      console.log('State cleared');
    } catch (error) {
      console.error('Error clearing state:', error);
    }
  }

  // Helper methods for view mode
  isEditMode(): boolean {
    return !this.isViewMode;
  }

  getModeText(): string {
    return this.isViewMode ? 'Paparan' : 'Kemaskini';
  }

  // File upload methods - Updated to check view mode
  onFileSelected(event: any, uploadType: string = 'general', documentId?: number) {
    // Prevent file upload in view mode
    if (this.isViewMode) {
      console.log('File upload disabled in view mode');
      return;
    }

    const files = event.target.files;

    if (uploadType === 'single') {
      this.handleSingleFileUpload(files[0]);
    } else if (uploadType === 'multiple') {
      this.handleMultipleFileUpload(files);
    } else if (uploadType === 'document' && documentId) {
      this.handleDocumentUpload(files[0], documentId);
    } else {
      this.handleMultipleFileUpload(files);
    }

    // Clear input
    event.target.value = '';
  }

  // Single file upload handler
  handleSingleFileUpload(file: File) {
    if (!file || this.isViewMode) return;

    // Validate file size
    if (file.size > this.maxFileSize) {
      alert(`File "${file.name}" is too large. Maximum size is 10MB.`);
      return;
    }

    // Clear previous files and upload new one
    this.uploadedFiles = [];
    this.selectedFile = file;

    const uploadedFile: UploadedFile = {
      id: Date.now(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file,
      uploadDate: new Date(),
      status: 'pending'
    };

    this.uploadedFiles.push(uploadedFile);
    this.uploadFile(uploadedFile);
  }

  // Multiple file upload handler
  handleMultipleFileUpload(files: FileList) {
    if (this.isViewMode) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Validate file size
      if (file.size > this.maxFileSize) {
        alert(`File "${file.name}" is too large. Maximum size is 10MB.`);
        continue;
      }

      // Check if file already exists
      if (this.uploadedFiles.some(f => f.name === file.name)) {
        alert(`File "${file.name}" already uploaded.`);
        continue;
      }

      const uploadedFile: UploadedFile = {
        id: Date.now() + i,
        name: file.name,
        size: file.size,
        type: file.type,
        file: file,
        uploadDate: new Date(),
        status: 'pending'
      };

      this.uploadedFiles.push(uploadedFile);
      this.uploadFile(uploadedFile);
    }
  }

  // Specific document upload handler
  handleDocumentUpload(file: File, documentId: number) {
    if (!file || this.isViewMode) return;

    // Validate file size
    if (file.size > this.maxFileSize) {
      alert(`File "${file.name}" is too large. Maximum size is 10MB.`);
      return;
    }

    // Find and update the specific document
    const docIndex = this.requiredDocuments.findIndex(doc => doc.id === documentId);
    if (docIndex !== -1) {
      this.requiredDocuments[docIndex].uploaded = true;

      // Also add to general uploaded files list
      const uploadedFile: UploadedFile = {
        id: Date.now(),
        name: file.name,
        size: file.size,
        type: file.type,
        file: file,
        uploadDate: new Date(),
        status: 'pending'
      };

      this.uploadedFiles.push(uploadedFile);
      this.uploadFile(uploadedFile);
    }
  }

  // Replace all files (for Button #4)
  replaceAllFiles(event: any) {
    if (this.isViewMode) return;

    // Clear existing files
    this.uploadedFiles = [];
    // Upload new files
    this.onFileSelected(event, 'multiple');
  }

  uploadFile(uploadedFile: UploadedFile) {
    if (this.isViewMode) return;

    uploadedFile.status = 'uploading';

    // Create FormData for file upload
    const formData = new FormData();
    formData.append('file', uploadedFile.file);

    console.log('Uploading file:', uploadedFile.name);
    console.log('Selected file:', uploadedFile.file.name);

    // Simulate upload progress (replace with actual upload service)
    setTimeout(() => {
      uploadedFile.status = 'completed';
      console.log('Upload completed:', uploadedFile.name);
    }, 2000);
  }

  removeFile(fileId: number) {
    if (this.isViewMode) return;
    this.uploadedFiles = this.uploadedFiles.filter(f => f.id !== fileId);
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
      case 'completed': return 'badge-success';
      case 'uploading': return 'badge-warning';
      case 'failed': return 'badge-danger';
      default: return 'badge-secondary';
    }
  }

  // Form Methods
  onSubmit() {
    if (this.isViewMode) {
      console.log('Submit disabled in view mode');
      return;
    }

    // Validation for mandatory fields
    if (!this.selectedLulusOption || this.selectedLulusOption === '') {
      this.showModal('Medan mandatori diperlukan');
      return;
    }

    if (!this.namaPelulus.trim()) {
      this.showModal('Medan mandatori diperlukan');
      return;
    }

    if (!this.tarikhKelulusan) {
      this.showModal('Medan mandatori diperlukan');
      return;
    }

    // Show success message based on selected option
    let successMessage = '';
    switch (this.selectedLulusOption) {
      case 'lulus':
        successMessage = 'Permohonan telah berjaya';
        break;
      case 'tidak_lulus':
        successMessage = 'Transaksi telah berjaya';
        break;
      case 'jkrim':
        successMessage = 'Permohonan telah dibawa untuk mesyuarat JKRIM';
        break;
      default:
        successMessage = 'Permohonan telah berjaya dihantar';
    }

    this.showModal(successMessage);

    console.log('Form submitted with:', {
      lulusOption: this.selectedLulusOption,
      catatan: this.catatan,
      namaPelulus: this.namaPelulus,
      tarikhKelulusan: this.tarikhKelulusan
    });

    // Handle form submission logic here
  }

  resetForm() {
    if (this.isViewMode) {
      console.log('Reset disabled in view mode');
      return;
    }

    this.selectedLulusOption = '';
    this.catatan = '';
    this.namaPelulus = '';
    this.tarikhKelulusan = '';
    this.uploadedFiles = [];
  }

  saveForm() {
    if (this.isViewMode) {
      console.log('Save disabled in view mode');
      return;
    }

    // Show success message for save
    this.showModal('Rekod berjaya disimpan');

    console.log('Form saved with:', {
      lulusOption: this.selectedLulusOption,
      catatan: this.catatan,
      namaPelulus: this.namaPelulus,
      tarikhKelulusan: this.tarikhKelulusan
    });

    // Handle form save logic here
  }

  // Navigation Methods
  goBack(): void {
    this.saveState(); // Save current state before navigation

    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index > 0) {
      this.router.navigate([this.steps[index - 1].route], {
        state: {
          selectedItem: this.selectedItem,
          category: this.selectedCategory,
          formData: this.formData,
          currentStep: this.steps[index - 1].number,
          viewMode: this.isViewMode  // Pass view mode
        }
      });
    }
  }

  // Disabled next button
  isLastStep(): boolean {
    return this.currentStep === this.steps.length;
  }

  // Method to handle dropdown changes
  onLulusOptionChange(event: Event) {
    if (!this.isViewMode) {
      const target = event.target as HTMLSelectElement;
      this.selectedLulusOption = target.value;
    }
  }

  // Method to handle textarea changes
  onCatatanChange(event: Event) {
    if (!this.isViewMode) {
      const target = event.target as HTMLTextAreaElement;
      this.catatan = target.value;
    }
  }

  // Method to handle input changes
  onNamaPelulusChange(event: Event) {
    if (!this.isViewMode) {
      const target = event.target as HTMLInputElement;
      this.namaPelulus = target.value;
    }
  }

  onTarikhKelulusanChange(event: Event) {
    if (!this.isViewMode) {
      const target = event.target as HTMLInputElement;
      this.tarikhKelulusan = target.value;
    }
  }

  /**
   * Show modal with message
   */
  showModal(message: string): void {
    this.modalMessage = message;
    this.modalVisible = true;
  }

  /**
   * Close modal
   */
  closeModal(): void {
    this.modalVisible = false;
  }

  /**
   * Handle modal OK button click
   */
  onModalOk(): void {
    // this.closeModal();

    this.router.navigate(['/sec/permohonan-surat-kemudahan/kelulusan-permohonan']);


  }
}