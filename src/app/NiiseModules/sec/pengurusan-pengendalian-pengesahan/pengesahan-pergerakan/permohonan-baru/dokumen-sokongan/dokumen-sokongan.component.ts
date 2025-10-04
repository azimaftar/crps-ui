import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {PermohonanFormDataService} from '../../../../../../services/pengesahanPergerakan/permohonan-form-data.service';
import {FormValidationService, ValidationError} from '../../../../../../services/pengesahanPergerakan/form-validation.service';
import { SharedModalComponent } from '../../../../shared-modal/shared-modal.component';
import {CardComponent, CardBodyComponent,  RowComponent, ColComponent, ButtonDirective,FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective} from '@coreui/angular';

interface DocumentItem {
  id: number;
  keterangan: string;
  namaDocumen: string;
  fileName?: string;
  format?: string;
  file?: File;
  fileData?: string; 
  fileUrl?: string;
  isUploaded: boolean;
  isCustom?: boolean;
}

@Component({
  selector: 'app-dokumen-sokongan-permohonan-baru',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule, RouterModule,CardComponent,CardBodyComponent,SharedModalComponent,RowComponent,
    ColComponent,FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective,ButtonDirective], 
  templateUrl: './dokumen-sokongan.component.html',
  styleUrls: ['../../../pengurusan-pengendalian-pengesahan.component.scss']
})

export class DokumenSokonganComponent {
  
  constructor(private fb: FormBuilder, 
    private router: Router, private http: HttpClient,
    private permohonanFormDataService: PermohonanFormDataService,
    private validationService: FormValidationService) {}

  modalMessage = '';
  modalVisible = false;
  modalMode: 'ok' | 'confirm' = 'ok';

  maxFileSize = 10 * 1024 * 1024;

  katAppl!: number;
  sectionNumber!: number;
  nextCustomId !: number;
  newDocumentKeterangan: string = '';

  isConfirmed: boolean = false;
  showAddDocumentForm: boolean = false;
  isSubmissionSuccessful: boolean = false;
  showValidationMessages: boolean = false;
  
  formData: any = null;
  documents: DocumentItem[] = []; 
  documentsTesting: DocumentItem[] = []; 
  validationErrors: ValidationError[] = [];
  documentValidationErrors: ValidationError[] = [];
  ngOnInit(): void {
    this.formData = this.permohonanFormDataService.getFormData();
    this.initialiseDocuments();
    if ((!this.formData) || (!this.formData.applCat)){
      this.router.navigate([this.steps[0].route]);
    }

    this.documentsTesting = this.permohonanFormDataService.getDocumentsData();
    if (this.checkCurrentForm()){
      this.documents = this.permohonanFormDataService.getDocumentsData();
    }

    if (this.validationService.hasErrors()){
      this.showValidationMessages = true;
      this.validationErrors = this.validationService.getErrors();
    } 

    this.isConfirmed = this.validationService.getPengesahanCheckBox();

    const currentRoute = this.router.url;
    const matched = this.steps.find(s => s.route === currentRoute);
    this.currentStep = matched ? matched.number : 2;
  }

  currentStep = 2;
  totalSteps = 3;
  steps = [
    { number: 1, title: 'Maklumat Pemohon', isAccessible: true, route: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/permohonan-baru' },
    { number: 2, title: 'Dokumen Sokongan', isAccessible: true, route: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/dokumen-sokongan' },
  ];

  navigateToStep(steps: number): void {
    this.mergeFormData();
    this.saveDocumentsToService();
    this.router.navigate([this.steps[steps].route]);
  }

  initialiseDocuments() {
    if (this.formData.applCat == 'Pengesahan Pergerakan'){
      this.katAppl = 1;
      this.documents = [
        { id: 1, keterangan: 'Salinan Kad Pengenalan/ Pasport/ Pas', namaDocumen: '', isUploaded: false, isCustom: false },
        { id: 2, keterangan: 'Dokumen Sokongan', namaDocumen: '', isUploaded: false, isCustom: false }
      ];
      this.nextCustomId = 3;

    } else if (this.formData.applCat == 'Pengesahan Cap Keselamatan'){
      this.katAppl = 2;
      this.documents = [
        {  id: 1, keterangan: 'Biodata Subjek', namaDocumen: '', isUploaded: false, isCustom: false },
        {  id: 2, keterangan: 'Muka surat pasport yang terdapat cop untuk pengesahan', namaDocumen: '', isUploaded: false, isCustom: false }
      ];
      this.nextCustomId = 3;
    } else if (this.formData.applCat == 'Pengesahan Pas'){
      this.katAppl = 3;
      this.documents = [
        {  id: 1, keterangan: 'Salinan Pas', namaDocumen: '', isUploaded: false, isCustom: false },
      ];
      this.nextCustomId = 2;
    } else if (this.formData.applCat == 'Pengesahan Senarai Syak'){
      this.katAppl = 4;
      this.documents = [
        {  id: 1, keterangan: 'Salinan Kad Pengenalan/ Pasport', namaDocumen: '', isUploaded: false, isCustom: false },
      ];
      this.nextCustomId = 2;
    }
  }

  checkCurrentForm(): boolean{
    if (this.documentsTesting){
      if (this.katAppl == 1 && this.documentsTesting[0].keterangan == 'Salinan Kad Pengenalan/ Pasport/ Pas'){
        return true;
      } else if (this.katAppl == 2 && this.documentsTesting[0].keterangan == 'Biodata Subjek'){
        return true;
      } else if (this.katAppl == 3 && this.documentsTesting[0].keterangan == 'Salinan Pas'){
        return true;
      } else if (this.katAppl == 4 && this.documentsTesting[0].keterangan == 'Salinan Kad Pengenalan/ Pasport'){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  ngOnDestroy(): void {
    this.saveDocumentsToService();
  }

  private convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        const base64Data = base64String.split(',')[1];
        resolve(base64Data);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async onFileUpload(event: any, documentIndex: number): Promise<void> {
    const file = event.target.files[0];
    if (file) {
      try {
        const base64Data = await this.convertFileToBase64(file);
        
        this.documents[documentIndex] = {
          ...this.documents[documentIndex],
          file: file,
          fileName: file.name,
          format: file.type,
          fileData: base64Data,
          isUploaded: true
        };
        
        this.saveDocumentsToService();
        
      } catch (error) {
        console.error('Error converting file to base64:', error);
        this.showError('Ralat semasa memuat naik fail.');
      }
    }
  }

  onFileRemove(documentIndex: number): void {
    this.documents[documentIndex] = {
      ...this.documents[documentIndex],
      file: undefined,
      fileName: undefined,
      format: undefined,
      fileData: undefined,
      fileUrl: undefined,
      isUploaded: false
    };
    
    this.saveDocumentsToService();
  }

  private saveDocumentsToService(): void {
    this.permohonanFormDataService.setDocumentsData(this.documents);
    this.validationService.setErrorsDocuments(this.documentValidationErrors);
    this.validationService.setErrors(this.validationErrors);
  }

  showAddDocumentDialog(): void {
    this.showAddDocumentForm = true;
    this.newDocumentKeterangan = '';
  }

  cancelAddDocument(): void {
    this.showAddDocumentForm = false;
    this.newDocumentKeterangan = '';
  }

  confirmAddDocument(): void {
    if (this.newDocumentKeterangan.trim()) {
      const newDocument: DocumentItem = {
        id: this.nextCustomId++,
        keterangan: this.newDocumentKeterangan.trim(),
        namaDocumen: '',
        isUploaded: false,
        isCustom: true
      };
      
      this.documents.push(newDocument);
      this.showAddDocumentForm = false;
      this.newDocumentKeterangan = '';
      this.saveDocumentsToService(); 
    }
  }

  selectFileForDocument(index: number): void {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf,.doc,.docx,.jpg,.jpeg,.png,.gif';
    
    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        this.handleFileSelection(file, index);
      }
    };
    
    fileInput.click();
  }

  private handleFileSelection(file: File, index: number): void {
    if (file.size > this.maxFileSize) {
      alert('Saiz fail terlalu besar. Sila pilih fail kurang dari 10MB.');
      return;
    }

    const format = file.name.split('.').pop()?.toUpperCase() || '';
    const fileUrl = URL.createObjectURL(file);

    this.documents[index] = {
      ...this.documents[index],
      fileName: file.name,
      namaDocumen: file.name,
      format: format,
      file: file,
      fileUrl: fileUrl,
      isUploaded: true
    };
  }

  removeFile(index: number): void {
    if (this.documents[index].fileUrl) {
      URL.revokeObjectURL(this.documents[index].fileUrl);
    }
    this.documents[index] = {
      ...this.documents[index],
      fileName: undefined,
      namaDocumen: '',
      format: undefined,
      file: undefined,
      fileUrl: undefined,
      isUploaded: false
    };
  }

  removeCustomDocument(index: number): void {
   if (this.documents[index].isCustom) {
      if (this.documents[index].fileUrl) {
        URL.revokeObjectURL(this.documents[index].fileUrl);
      }
      
      this.documents.splice(index, 1);
      this.saveDocumentsToService(); 
    }
  }

  viewFile(index: number): void {
  const document = this.documents[index];
  if (document.fileUrl) {
    window.open(document.fileUrl, '_blank');
  } else {
    alert('Fail tidak tersedia untuk dilihat.');
  }
  }

  getAllUploadedFiles(): File[] {
    return this.documents
      .filter(doc => doc.file)
      .map(doc => doc.file!);
  }

  areAllDocumentsUploaded(): boolean {
    return this.documents.every(doc => doc.isUploaded);
  }

  getDocumentsMetadata(): any[] {
    return this.documents
      .filter(doc => doc.isUploaded)
      .map(doc => ({
        id: doc.id,
        keterangan: doc.keterangan,
        fileName: doc.fileName,
        format: doc.format,
        isCustom: doc.isCustom,
        file: doc.file,
        fileUrl: doc.fileUrl
      }));
  }

  onCheckboxChange(event: any) {
    this.isConfirmed = event.target.checked;
    this.validationService.setPengesahanCheckBox(this.isConfirmed);
  }

  enableSubmit(): boolean {
    return this.canProceedToSubmit();
  }

  mergeFormData() {
    const existingData = this.permohonanFormDataService.getFormData();
    const currentForm = { ...this.formData };

    const updatedData = {
      ...existingData,
      ...currentForm
    };
    this.permohonanFormDataService.setFormData(updatedData);
  }

  goNext(): void {
    this.mergeFormData();
    this.saveDocumentsToService();

    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index !== -1 && index + 1 < this.steps.length) {
      this.router.navigate([this.steps[index + 1].route]);
    }
  }
  
  goBack():void  {
    this.mergeFormData();
    this.saveDocumentsToService();
    
    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (this.formData.applCat == 'Pengesahan Pergerakan') {
      this.sectionNumber = 2;
      this.router.navigate(
        [this.steps[index - 1].route],
        { state: { sectionNumber: 2} }
      );
    } else {
      if (index > 0) {
        this.router.navigate([this.steps[index - 1].route]);
      }
    }
  }

  isLastStep(): boolean {
    return this.currentStep === this.steps.length;
  }

  isFirstStep(): boolean {
    return this.currentStep === 1;
  }

  handleConfirmSubmit(): void {
    this.modalVisible = false;
    
    if (this.modalMode === 'confirm') {
      this.isSubmissionSuccessful = true;
      this.showError('Permohonan berjaya dihantar.');
      
      // console.log('Form submitted successfully with documents:', this.getDocumentsMetadata());
    }  
  }  

  handleCancelModal(): void {
    this.modalVisible = false;
  }  

  canProceedToSubmit(): boolean {
    return (this.isConfirmed && (this.validationService.validateOptionalDocuments(this.documents) == null) && this.validationService.validateRequiredDocuments(this.documents));
  }

  saveForm(){
    this.isSubmissionSuccessful = false;
  }

  submitForm(): void {
    this.showValidationMessages = true;
    const docTambahan = this.validationService.validateOptionalDocuments(this.documents);
    
    if (!this.validateCurrentForm()) {
      this.showError('Sila masukkan semua medan mandatori mengikut format yang ditetapkan.');
      return;
    } 

    if (!this.validationService.validateRequiredDocuments(this.documents)) {
      this.showError('Semua dokumen mandatori mesti dimuat naik sebelum menghantar.');
      return;
    }

    if (docTambahan) {
      this.showError('Sila muat naik fail untuk ' + docTambahan);
      return;
    }

    if (!this.isConfirmed) {
      this.showError('Sila sahkan maklumat sebelum menghantar.');
      return;
    }

    this.showConfirm('Adakah anda pasti untuk menghantar permohonan ini?');
  }

  validateCurrentForm(): boolean {
    this.validationErrors = this.validationService.validatePermohonanForm(this.formData);
    return this.validationErrors.length === 0;
  }

  private showError(message: string): void {
    this.modalMode = 'ok';
    this.modalMessage = message;
    this.modalVisible = true;
  }

  private showConfirm(message: string): void {
    this.modalMode = 'confirm';
    this.modalMessage = message;
    this.modalVisible = true;
  }
}