import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {SemakanPermohonanService} from '../../../../../services/pengesahanPergerakan/semakan-permohonan.service';
import {PermohonanFormDataService} from '../../../../../services/pengesahanPergerakan/permohonan-form-data.service';
import {FormValidationService} from '../../../../../services/pengesahanPergerakan/form-validation.service';
import { SharedModalComponent } from '../../../shared-modal/shared-modal.component';

import {CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonDirective,CardModule, GridModule } from '@coreui/angular';

@Component({
  selector: 'app-keputusan1-permohonan-pengesahan-pergerakan',
  imports: [CommonModule, ReactiveFormsModule,RouterModule,CardComponent,CardBodyComponent,RowComponent,ColComponent,ButtonDirective,CommonModule,
    FormsModule,CardModule,GridModule,SharedModalComponent,],
  templateUrl: './keputusan-permohonan.component.html',
  styleUrl: '../../pengurusan-pengendalian-pengesahan.component.scss'
})

export class KeputusanPermohonanComponent implements OnInit {
  constructor(private router: Router, 
    private http: HttpClient, 
    private semakanPermohonanService: SemakanPermohonanService, 
    private permohonanFormDataService: PermohonanFormDataService,
    private validationService: FormValidationService) {
  }
  
  status: string = '';
  refNo: string = '';
  showNoResults: boolean = true;

  modalMessage = '';
  modalVisible = false;
  modalMode: 'ok' | 'confirm' = 'ok';

  result: any = null;
  mergedData: any = null;
  defaultKeputusanPermohonan: any = null;
  ngOnInit(): void {
    this.result = this.permohonanFormDataService.getKeputusanPermohonan();
    if (this.result.applCat) {
      this.showNoResults = false;
    } else {
      this.showNoResults = true;
    }
    this.updateStepAccessibility();
  } 

  currentStep: number = 1;
  totalSteps: number = 3;
  steps = [
    { number: 1, title: 'Carian Permohonan', isAccessible: true, route: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/keputusan-permohonan' },
    { number: 2, title: 'Maklumat Permohonan', isAccessible: false, route: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/keputusan-permohonan/maklumat-permohonan' },
    { number: 3, title: 'Keputusan Permohonan', isAccessible: false, route: '/sec/pengurusan-pengendalian-pengesahan/pengesahan-pergerakan/keputusan-permohonan/keputusan-permohonan' }
  ];

  navigateToStep(steps: number): void { 
    this.permohonanFormDataService.setKeputusanPermohonan(this.result);
    if (this.steps[1].isAccessible && this.steps[2].isAccessible){
      this.router.navigate([this.steps[steps].route]);
    }
  }

  onSearch() {
    this.result = this.semakanPermohonanService.searchByRefNo(this.refNo);
    this.defaultKeputusanPermohonan = this.permohonanFormDataService.getDefaultKeputusanPermohonan();

    if (this.result) {
      this.showNoResults = false;
      this.mergedData = { ...this.defaultKeputusanPermohonan, ...this.result};
      this.permohonanFormDataService.setKeputusanPermohonan(this.mergedData);
    } else {
      this.showNoResults = true;
      this.modalMessage = 'Tiada rekod dijumpai';
      this.modalMode = 'ok';
      this.modalVisible = true;
    }
    this.updateStepAccessibility();
    this.status = 'Aktif';
  } 

  updateStepAccessibility(): any {
    if (this.showNoResults) {
      this.steps = this.steps.map(step => {
        if (step.number === 2 || step.number === 3) {
          return { ...step, isAccessible: false };
        }
        return { ...step, isAccessible: true };
      });
      return;
    }

    this.steps = this.steps.map(step => {
      if (step.number === 2) {
        return { ...step, isAccessible: true }; // Step 2 is always accessible when showNoResults is false
      }
      if (step.number === 3) {
        return { ...step, isAccessible: true };
      }
      return { ...step, isAccessible: true };
    });
  }

  resultNull(): boolean {
    return !this.result || !this.result.refNo;
  }

  paparDetails(): void {
    this.goNext();
  }

  onSubmit(event: Event) {
    event.preventDefault();
  }

  disableGoNext(): boolean {
    return (!this.isLastStep())
  }

  disableGoBack(): boolean {
    return !(this.isFirstStep());
  }

  nextPage(): void {
    this.goNext();
  }

  goNext(): void {
    const index = this.steps.findIndex(s => s.number === this.currentStep);

    if (index !== -1 && index + 1 < this.steps.length) {
      this.router.navigate([this.steps[index + 1].route]);
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
}

