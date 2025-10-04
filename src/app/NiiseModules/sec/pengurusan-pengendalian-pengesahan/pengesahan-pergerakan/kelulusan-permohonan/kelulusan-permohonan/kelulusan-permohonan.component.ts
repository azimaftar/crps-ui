import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {PermohonanFormDataService} from '../../../../../../services/pengesahanPergerakan/permohonan-form-data.service';
import {FormValidationService, ValidationError} from '../../../../../../services/pengesahanPergerakan/form-validation.service';
import { SharedModalComponent } from '../../../../shared-modal/shared-modal.component';

import {CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonDirective,CardModule, GridModule } from '@coreui/angular';

@Component({
  selector: 'app-kelulusan-permohonan-page2',
  imports: [CommonModule,ReactiveFormsModule,RouterModule,CardComponent,CardBodyComponent,RowComponent,ColComponent,ButtonDirective,
    CommonModule,FormsModule,CardModule,GridModule,SharedModalComponent,],
  templateUrl: './kelulusan-permohonan.component.html',
  styleUrls: ['../../../pengurusan-pengendalian-pengesahan.component.scss']
})

export class KelulusanPermohonanComponent implements OnInit {
  constructor(private router: Router, 
    private http: HttpClient, 
    private permohonanFormDataService: PermohonanFormDataService,
    private validationService: FormValidationService) {
  }

  modalMessage = '';
  modalVisible = false;
  modalMode: 'ok' | 'confirm' = 'ok';

  formCompleted:boolean = false;
  showNoResults: boolean = false;
  applCatIsPas: boolean = false;
  applCatIsPergerakan: boolean = false;
  applCatIsCapKeselamatan: boolean = false;
  applCatIsSenaraiSyak: boolean = false;
  showValidationMessages: boolean = false;

  refNoInService = '';
  validationErrors: ValidationError[] = [];
  validationErrorsWithRefNo: ValidationError[] = [];
  
  keputusanData: any = null;  
  clearFormData: any = null;
  defaultKeputusanData: any = null;
  ngOnInit(): void {
    this.keputusanData = this.permohonanFormDataService.getKeputusanData();
    this.checkCat();

    if ((!this.keputusanData) || (!this.keputusanData.refNo)){
      this.router.navigate([this.steps[0].route]);
    }

    if (this.validationService.hasErrors()){
      this.validationErrors = this.validationService.getErrors();
      if (!this.validationService.refNoIsNotNull()){
        this.refNoInService = this.validationService.getCurrentRefNo();
      }
      if (this.refNoInService == this.keputusanData.refNo) {
        this.showValidationMessages = true;
      }
    } 
  }

  currentStep: number = 3;
  totalSteps: number = 3;
  steps = [
    { number: 1, title: 'Carian Permohonan', isAccessible: true, route: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/kelulusan-permohonan' },
    { number: 2, title: 'Maklumat Permohonan', isAccessible: true, route: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/kelulusan-permohonan/maklumat-permohonan' },
    { number: 3, title: 'Kelulusan Permohonan', isAccessible: true, route: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/kelulusan-permohonan/kelulusan-permohonan' }
  ];

  navigateToStep(steps: number): void {
    this.saveForm();
    this.router.navigate([this.steps[steps].route]);
  }

  validateCurrentForm(): boolean {
    this.validationErrors = this.validationService.validateKeputusanForm(this.keputusanData);
    return this.validationErrors.length === 0;
  }

  submitForm(): void {
    this.showValidationMessages = true;
    this.validationService.setCurrentRefNo(this.keputusanData.refNo);

    if (!this.validateCurrentForm()) {
      this.showError('Sila masukkan semua medan mandatori mengikut format yang ditetapkan.');
      return;
    } 

    this.showConfirm('Adakah anda pasti untuk menghantar permohonan ini?');
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
    if (this.keputusanData.applCat == "Pengesahan Pergerakan"){
      this.applCatIsPergerakan = true;
    } else if (this.keputusanData.applCat == "Pengesahan Cap Keselamatan") {
      this.applCatIsCapKeselamatan = true;
    } else if (this.keputusanData.applCat == "Pengesahan Pas") {
      this.applCatIsPas = true;
    } else if (this.keputusanData.applCat == "Pengesahan Senarai Syak") {
      this.applCatIsSenaraiSyak = true;
    } 
  }

  formComplete(): boolean{
    return this.validateCurrentForm();
  }

  saveForm() {
    this.permohonanFormDataService.setKeputusanData(this.keputusanData);
    this.validationService.setErrors(this.validationErrors);  
  }

  resetForm(): void {
    this.defaultKeputusanData = this.permohonanFormDataService.getDefaultKeputusanDataOnly();
    this.clearFormData = { ...this.keputusanData, ...this.defaultKeputusanData};
    this.permohonanFormDataService.setKeputusanData(this.clearFormData);
    this.keputusanData = this.clearFormData;
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
}
