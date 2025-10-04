import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import {PermohonanFormDataService} from '../../../../../services/pengesahanPergerakan/permohonan-form-data.service';
import {FormValidationService, ValidationError} from '../../../../../services/pengesahanPergerakan/form-validation.service';
import {PengesahanPergerakanService, Permohonan} from '../../../../../services/pengesahanPergerakan/pengesahan-pergerakan.service';
import { SharedModalComponent } from '../../../shared-modal/shared-modal.component';
import {apiConfig} from "../../../../../api.config";
import {
  CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, CardModule, GridModule } from '@coreui/angular';

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
  selector: 'app-permohonan-baru-pengesahan-pergerakan',
  imports: [CommonModule, ReactiveFormsModule, RouterModule,CardComponent,CardBodyComponent,RowComponent,ColComponent,ButtonDirective,
    CommonModule,FormsModule,CardModule,GridModule,SharedModalComponent,],
  templateUrl: './permohonan-baru.component.html',
  styleUrls: ['../../pengurusan-pengendalian-pengesahan.component.scss']
})

export class PermohonanBaruComponent implements OnInit {

  constructor(private router: Router,
    private http: HttpClient,
    private permohonanFormDataService: PermohonanFormDataService,
    private validationService: FormValidationService,
    private pengesahanPergerakanService: PengesahanPergerakanService) {
  }

  apiUrl!: string;

  modalMessage = '';
  modalVisible = false;
  modalMode: 'ok' | 'confirm' = 'ok';

  isSaving: boolean = false;
  isSubmitting: boolean = false;
  formCompleted: boolean = false;
  firstSection: boolean = false;
  secondSection: boolean = false;
  showValidationMessages: boolean = false;

  documents: DocumentItem[] = [];
  validationErrors: ValidationError[] = [];

  warganegaraList: any = null;
  formData: any = null;
  ngOnInit(): void {
    this.formData = this.permohonanFormDataService.getFormData();
    this.warganegaraList = this.permohonanFormDataService.getWarganegaraList();
    this.documents = this.permohonanFormDataService.getDocumentsData();

    if (this.validationService.hasErrors()){
      this.showValidationMessages = true;
      this.validationErrors = this.validationService.getErrors();
      this.validationService.setErrors(this.validationErrors);
    }

    this.updateStepAccessibility();
    const state = history.state as { sectionNumber?: number};
    this.sectionNumber = state?.sectionNumber || 1;

    this.apiUrl  = apiConfig.apiUrlSec;
  }

  sectionNumber!: number;
  currentStep: number = 1;
  totalSteps: number = 2;
  steps = [
    { number: 1, title: 'Maklumat Pemohon', isAccessible: true, route: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/permohonan-baru' },
    { number: 2, title: 'Dokumen Sokongan', isAccessible: false, route: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/permohonan-baru/dokumen-sokongan' },
  ];

  navigateToStep(steps: number): void {
    this.saveDocumentsToService();
    if (this.steps[1].isAccessible){
      this.router.navigate([this.steps[steps].route]);
    }
  }

  private saveDocumentsToService(): void {
    this.mergeFormData();
    this.permohonanFormDataService.setDocumentsData(this.documents);
    this.validationService.setErrors(this.validationErrors);
  }

  updateStepAccessibility(): any {
    if (this.formData.applCat) {
      this.steps = this.steps.map(step => {
        if (step.number === 2) {
          return { ...step, isAccessible: true };
        }
        return { ...step, isAccessible: true };
      });
      return;
    } else {
       this.steps = this.steps.map(step => {
        if (step.number === 2) {
          return { ...step, isAccessible: false };
        }
        return { ...step, isAccessible: true };
      });
      return;
    }
  }

  onChangeCat(event: any){
    this.resetForm();
    const kategori = event.target.value;
    this.formData.applCat = kategori;
    this.updateStepAccessibility();

    if (kategori == 'Pengesahan Pergerakan'){
      this.sectionNumber = 1;
    } else {
      this.sectionNumber = 0;
    }
  }

  formComplete(){
    if (!this.showValidationMessages) return true;
    return this.validateCurrentForm();
  }

  resetForm(): void {
    this.formData = this.permohonanFormDataService.clearFormData();
    this.documents = this.permohonanFormDataService.clearDocumentsData();
    this.sectionNumber = 1;
    this.validationErrors = [];
    this.showValidationMessages = false;
    this.validationService.setPengesahanCheckBox(false);
    this.formData.applCat = "";
    this.updateStepAccessibility();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitForm();
  }

  categoryNotChosen(): boolean {
    return (!this.formData.applCat );
  }

  otherCategories(): boolean {
    if ((this.formData.applCat  == 'Pengesahan Cap Keselamatan') ||
    (this.formData.applCat  == 'Pengesahan Pas') || (this.formData.applCat  == 'Pengesahan Senarai Syak')){
      return true;
    } else {
      return false;
    }
  }

  disableGoNext(): boolean {
    return (this.categoryNotChosen() && !this.isLastStep())
  }

  disableGoBack(sectionNumber: number): boolean {
    if (this.otherCategories()){
      return !(this.isFirstStep());
    } else {
      return (this.previousSection(sectionNumber) && this.isFirstStep());
    }
  }

  previousSection(sectionNumber: number): boolean{
    if(sectionNumber == 1){
      this.firstSection = true;
      return false;
    } else if(sectionNumber == 2){
      this.secondSection = true;
      return true;
    } else {
      return false;
    }
  }

  setNextSection(sectionNumber: number){
    this.sectionNumber = sectionNumber + 1;
  }

  setPreviousSection(sectionNumber: number){
    this.sectionNumber = sectionNumber - 1;
    return this.sectionNumber;
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

  goNext(sectionNumber: number): void {
    this.saveDocumentsToService();

    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (this.otherCategories()){
      if (index !== -1 && index + 1 < this.steps.length) {
        this.router.navigate([this.steps[index + 1].route]);
      }
    } else {
      if (this.sectionNumber == 1){
        this.setNextSection(sectionNumber);
      } else if (this.sectionNumber == 2){
        if (index !== -1 && index + 1 < this.steps.length) {
          this.router.navigate([this.steps[index + 1].route]);
        }
      }
    }
  }

  goBack(sectionNumber: number): void {
    this.saveDocumentsToService();

    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (this.otherCategories()){
      //Other categories only have 2 pages, cannot go back, button disabled anyway

    } else if (this.formData.applCat  == 'Pengesahan Pergerakan'){
      if (index == 2){  //Second page returns to  first page (second section)
        this.sectionNumber = 2;
        this.router.navigate([this.steps[index - 1].route]);
      } else if (this.sectionNumber == 2){  //First page (second section) returns to first section
        this.setPreviousSection(sectionNumber);
      }
    }
  }

  isLastStep(): boolean {
    return this.currentStep === this.steps.length;
  }

  isFirstStep(): boolean {
    return this.currentStep === 1;
  }

  nextStep(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  handleConfirmSubmit(): void {
    this.modalVisible = false;

    if (this.modalMode === 'confirm') {
      this.performSubmit();
    }
  }

  handleCancelModal(): void {
    this.modalVisible = false;
  }

  submitForm(): void {
    this.showValidationMessages = true;
    const docTambahan = this.validationService.validateOptionalDocuments(this.documents);

    if (!this.validateCurrentForm()) {
      this.showError('Sila masukkan semua medan mandatori mengikut format yang ditetapkan.');
      this.scrollToFirstError();
      return;
    }

    if (!this.validationService.validateRequiredDocuments(this.documents)){
      this.showError('Sila pastikan semua dokumen telah dimuat naik.');
      return;
    }

    if (docTambahan) {
      this.showError('Sila muat naik fail untuk ' + docTambahan);
      return;
    }

    if (!this.validationService.getPengesahanCheckBox()){
      this.showError('Sila sahkan maklumat sebelum menghantar.');
      return;
    }

    this.showConfirm('Adakah anda pasti untuk menghantar permohonan ini?');
  }

  private performSubmit(): void {
    if (this.isSubmitting) return;

    console.log('=== SUBMIT START ===');

    this.isSubmitting = true;
    this.mergeFormData();

    const permohonanData: Permohonan = this.mapFormDataToPermohonan();
    console.log("permohonan data: ", permohonanData);

    // this.pengesahanPergerakanService.postDaftarPermohonan(permohonanData, 'hantar')
    //   .subscribe({
    //     next: (response: string) => {
    //       console.log('=== SUCCESS BLOCK ===');
    //       this.isSubmitting = false;
    //       console.log('Submit successful: ', response);
    //       this.resetForm();
    //       this.showError('Permohonan berjaya dihantar. Nombor rujukan: ' + (response || 'N/a'));
    //     },
    //     error: (error) => {
    //       console.log('=== ERROR BLOCK ===');
    //       this.isSubmitting = false;
    //       console.error('Full error object: ', error);

    //       let errorMessage = 'Ralat berlaku semasa menghantar permohonan.';

    //       if (error.status === 500) {
    //         errorMessage = 'Ralat pelayan. Sila cuba lagi atau hubungi sokongan teknikal.';
    //       } else if (error.error && typeof error.error === 'string') {
    //         errorMessage = error.error;
    //       } else if (error.error && error.error.message) {
    //         errorMessage = error.error.message;
    //       } else if (error.message) {
    //         errorMessage = error.message;
    //       }

    //       this.showError(errorMessage);
    //     }
    // });
  }

  private performSave(): void {
  }

  private mapFormDataToPermohonan(): Permohonan {
    console.log('Mapped permohonan data:', this.formData);
    console.log('Documents: ', this.documents);

    const dokumenSokongan = this.documents.map(doc => ({
      keterangan: doc.keterangan,
      namaDocumen: doc.namaDocumen,
      fileName: doc.fileName || '',
      format: doc.format || '',
      fileData: doc.fileData || '',
      isUploaded: doc.isUploaded,
      isCustom: doc.isCustom || false
    }));

    const permohonan: Permohonan = {
      applCat: this.formData.applCat || '',
      officeState: this.formData.officeState || '',
      refNo: this.formData.refNo || '',
      letterDate: this.formData.letterDate || '',
      officerName: this.formData.officerName || '',
      address1: this.formData.address1 || '',
      address2: this.formData.address2 || '',
      address3: this.formData.address3 || '',
      poskod: this.formData.poskod || '',
      bandar: this.formData.bandar || '',
      emel: this.formData.emel || '',
      applPurpose: this.formData.applPurpose || '',
      tempohMaklumatPergerakan: this.formData.tempohMaklumatPergerakan || '',
      moveStartDt: this.formData.moveStartDt || '',
      moveEndDt: this.formData.moveEndDt || '',
      maklumatPergerakanTerakhir: this.formData.maklumatPergerakanTerakhir || '',
      name: this.formData.name || '',
      kpNo: this.formData.kpNo || '',
      docNo: this.formData.docNo || '',
      pasType: this.formData.pasType || '',
      citizenship: this.formData.citizenship || '',
      bahagian: this.formData.bahagian || '',
      stampNo: this.formData.stampNo || '',

      dokumenSokongan: dokumenSokongan,
    };

    return permohonan;
  }

  validateCurrentForm(): boolean {
    this.validationErrors = this.validationService.validatePermohonanForm(this.formData);
    return this.validationErrors.length === 0;
  }

  hasFieldError(fieldName: string): boolean {
    return this.validationErrors.some(e => e.field === fieldName);
  }

  getFieldError(fieldName: string): string | null {
    const error = this.validationErrors.find(e => e.field === fieldName);
    return error ? error.message : null;

  }

  getFieldClass(fieldName: string): string {
    if (!this.showValidationMessages) return 'form-control';
    return this.hasFieldError(fieldName) ? 'form-control is-invalid' : 'form-control is-valid';
  }

  getSelectClass(fieldName: string): string {
    if (!this.showValidationMessages) return 'form-select';
    return this.hasFieldError(fieldName) ? 'form-select is-invalid' : 'form-select is-valid';
  }

  onFieldChange(fieldName: string): void {
    if (this.showValidationMessages) {
      // Re-validate when field changes
      this.validateCurrentForm();
    }
  }

  private scrollToFirstError(): void {
    setTimeout(() => {
      const firstErrorElement = document.querySelector('.is-invalid');
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
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
