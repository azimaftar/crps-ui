import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {PermohonanFormDataService} from '../../../../../../services/pengesahanPergerakan/permohonan-form-data.service';
import {FormValidationService, ValidationError} from '../../../../../../services/pengesahanPergerakan/form-validation.service';
import { SuratPengesahanService } from '../../../../../../services/pengesahanPergerakan/surat-pengesahan.service';
import { SharedModalComponent } from '../../../../shared-modal/shared-modal.component';
import {
  CardComponent, 
  CardBodyComponent, 
  RowComponent, 
  ColComponent, 
  ButtonDirective,
  CardModule, 
  GridModule 
} from '@coreui/angular';

@Component({
  selector: 'app-keputusan3-permohonan-pengesahan-pergerakan',
  imports: [CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    CommonModule,
    FormsModule,
    CardModule,
    GridModule,
    SharedModalComponent,
  ],
  templateUrl: './keputusan-permohonan.component.html',
  styleUrl: '../../../pengurusan-pengendalian-pengesahan.component.scss'
})

export class KeputusanPermohonanComponent implements OnInit {
  constructor(private router: Router, 
    private http: HttpClient, 
    private permohonanFormDataService: PermohonanFormDataService,
    private validationService: FormValidationService,
    private suratPengesahanServiceL: SuratPengesahanService) {
  }

  modalVisible = false;
  modalMessage = '';
  modalMode: 'ok' | 'confirm' = 'ok';

  applCatIsPergerakan: boolean = false;
  applCatIsCapKeselamatan: boolean = false;
  applCatIsSenaraiSyak: boolean = false;
  applCatIsPas: boolean = false;
  formCompleted:boolean = false;
  showNoResults: boolean = false;

  refNoInService = '';
  validationErrors: ValidationError[] = [];
  validationErrorsWithRefNo: ValidationError[] = [];
  showValidationMessages: boolean = false;

  clearFormData: any = null;
  keputusanData: any = null; defaultKeputusanData: any = null; 
  keputusanPermohonan: any = null; defaultKeputusanPermohonan: any = null;
  ngOnInit(): void {
    this.keputusanPermohonan = this.permohonanFormDataService.getKeputusanPermohonan();
    this.checkCat();

    if ((!this.keputusanPermohonan) || (!this.keputusanPermohonan.refNo)){
      this.router.navigate([this.steps[0].route]);
    }

    if (this.validationService.hasErrors()){
      this.validationErrors = this.validationService.getErrors();
      if (!this.validationService.refNoIsNotNull()){
        this.refNoInService = this.validationService.getCurrentRefNo();
      }
      if (this.refNoInService == this.keputusanPermohonan.refNo) {
        this.showValidationMessages = true;
      }
    } 
  //  for testing
    // this.keputusanPermohonan.namaPemohon = 'aishah';
    // this.keputusanPermohonan.nomborKadPengenalan = '010101';
    // this.keputusanPermohonan.emelPemohon = 'aishah@gmail.com';
    // this.keputusanPermohonan.nomborTelefon = '010101';
    // this.keputusanPermohonan.namaAgensi = 'aishah';
  }

  currentStep: number = 3;
  totalSteps: number = 3;
  steps = [
    { number: 1, title: 'Carian Permohonan', isAccessible: true, route: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/keputusan-permohonan' },
    { number: 2, title: 'Maklumat Permohonan', isAccessible: true, route: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/keputusan-permohonan/maklumat-permohonan' },
    { number: 3, title: 'Keputusan Permohonan', isAccessible: true, route: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/keputusan-permohonan/keputusan-permohonan' }
  ];

  navigateToStep(steps: number): void {
    this.saveForm();
    this.router.navigate([this.steps[steps].route]);
  }

async openPengesahanLetter(): Promise<void> {
  try {
    console.log('Opening PDF with data:', this.keputusanPermohonan);
    
    if (!this.keputusanPermohonan) {
      throw new Error('Data permohonan tidak dijumpai');
    }
    
    const requiredFields = ['namaPemohon', 'nomborKadPengenalan', 'emelPemohon'];
    const missingFields = requiredFields.filter(field => !this.keputusanPermohonan[field]);
    
    if (missingFields.length > 0) {
      throw new Error(`Medan wajib tidak lengkap: ${missingFields.join(', ')}`);
    }
    
    await this.suratPengesahanServiceL.openPDF(this.keputusanPermohonan);
  } catch (error: any) {
    console.error('PDF Generation Error:', error);
    this.showError(error.message || 'Ralat membuka surat. Sila cuba lagi.');
  }
}

async printPengesahanLetter(): Promise<void> {
  try {
    console.log('Printing PDF with data:', this.keputusanPermohonan);
    await this.suratPengesahanServiceL.printPDF(this.keputusanPermohonan);
  } catch (error: any) {
    console.error('PDF Print Error:', error);
    this.showError(error.message || 'Ralat mencetak surat. Sila cuba lagi.');
  }
}

async downloadPengesahanLetter(): Promise<void> {
  try {
    console.log('Downloading PDF with data:', this.keputusanPermohonan);
    await this.suratPengesahanServiceL.downloadPDF(this.keputusanPermohonan);
  } catch (error: any) {
    console.error('PDF Download Error:', error);
    this.showError(error.message || 'Ralat memuat turun surat. Sila cuba lagi.');
  }
}
  validateCurrentForm(): boolean {
    this.validationErrors = this.validationService.validateKeputusanPermohonan(this.keputusanPermohonan);
    return this.validationErrors.length === 0;
  }

  submitForm(): void {
    this.showValidationMessages = true;
    this.validationService.setCurrentRefNo(this.keputusanPermohonan.refNo);

    if (!this.validateCurrentForm()) {
      this.showError('Sila masukkan semua medan mandatori mengikut format yang ditetapkan.');
      // return;
    } 

    this.openPengesahanLetter();
  }

  removeFieldError(fieldName: string): void {
    if (this.validationErrors) {
      this.validationErrors = this.validationErrors.filter(error => error.field !== fieldName);

      const index = this.validationErrors.findIndex(error => error.field === fieldName);
      
      if (index > -1) {
        this.validationErrors.splice(index, 1);
      }
    }
  }

  checkCat(): void {
    if (this.keputusanPermohonan.applCat == "Pengesahan Pergerakan"){
      this.applCatIsPergerakan = true;
    } else if (this.keputusanPermohonan.applCat == "Pengesahan Cap Keselamatan") {
      this.applCatIsCapKeselamatan = true;
    } else if (this.keputusanPermohonan.applCat == "Pengesahan Pas") {
      this.applCatIsPas = true;
    } else if (this.keputusanPermohonan.applCat == "Pengesahan Senarai Syak") {
      this.applCatIsSenaraiSyak = true;
    }
  }

  formComplete(){
    return this.validateCurrentForm();
  }

  saveForm() {
    this.permohonanFormDataService.setKeputusanPermohonan(this.keputusanPermohonan);
    this.validationService.setErrors(this.validationErrors);  
  }

  resetForm(): void {
    this.defaultKeputusanPermohonan = this.permohonanFormDataService.getDefaultKeputusanPermohonanOnly();
    this.clearFormData = { ...this.keputusanPermohonan, ...this.defaultKeputusanPermohonan};
    this.permohonanFormDataService.setKeputusanPermohonan(this.clearFormData);
    this.keputusanPermohonan = this.clearFormData;
    this.validationErrors = [];
    this.validationService.setErrors(this.validationErrors);
    this.showValidationMessages = false;  
  }

  onSubmit(event: Event) {
    event.preventDefault();
  }

  disableGoNext(): boolean {
    return (this.isLastStep())
  }

  disableGoBack(): boolean {
    return !(this.isFirstStep());
  }

  nextPage(): void {
    this.goNext();
  }

  goNext(): void {
    this.saveForm();
    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index !== -1 && index + 1 < this.steps.length) {
      this.router.navigate([this.steps[index + 1].route]);
    }
  }

  goBack(): void {
    this.saveForm();
    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index > 0) {
        this.router.navigate([this.steps[index - 1].route]);
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

  hasFieldError(fieldName: string): boolean {
    return this.validationErrors.some(e => e.field === fieldName);
  }

  getFieldError(fieldName: string): string | null {
    const error = this.validationErrors.find(e => e.field === fieldName);
    return error ? error.message : null;
  }

  getRefNoInErrors(fieldName: string): string | null {
    const error = this.validationErrorsWithRefNo.find(e => e.field === fieldName);
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
      this.validateCurrentForm();
    }
  }

  handleConfirmSubmit(): void {
    this.modalVisible = false;
  }  

  handleCancelModal(): void {
    this.modalVisible = false;
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
