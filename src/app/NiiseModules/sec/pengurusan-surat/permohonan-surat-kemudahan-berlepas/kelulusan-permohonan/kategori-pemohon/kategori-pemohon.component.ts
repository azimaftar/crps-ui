import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubjectService } from '../../../../../../services/subject.service';

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
  selector: 'app-kategori-pemohon',
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
  templateUrl: './kategori-pemohon.component.html',
  styleUrls: ['../../../pengurusan-surat-component.scss']
})

export class KategoriPemohonComponent {
  currentStep: number = 2;
  submissionData: any;
  pageTitle: string = "Kategori Permohonan";
  showSuccessModal: boolean = false;
  showWarningModal: boolean = false;
  showErrorModal: boolean = false;
  negeriBerlepas: string = ''; // bound to the radio buttons
  selectedCategory: string = ''; // bound to dropdown
  categories: string[] = []; // this gets updated dynamically  

  ngOnInit(): void {
    console.log('Permohonan Baru loaded');

    const state = history.state;

    if (state) {
      this.currentStep = state.currentStep || 2;
      this.submissionData = { ...state }; 

      this.negeriBerlepas = this.submissionData.negeriBerlepas || '';
      this.selectedCategory = this.submissionData.selectedCategory || '';

      console.log("negeriBerlepas:", this.negeriBerlepas)
      console.log("Selected Category:", this.selectedCategory)
      console.log("currentStep:", this.currentStep)

      console.log('Received State:', this.submissionData);
    }
  }

  steps = [
    { number: 1, title: 'Carian Pemohon', route: '' },
    { number: 2, title: 'Kategori Pemohon', route: '' },
    { number: 3, title: 'Maklumat Pemohon', route: '' },
    { number: 4, title: 'Kelulusan', route: '' }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) {}

  isFormValid(): boolean {
    return !!this.negeriBerlepas && !!this.selectedCategory;
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

  prevPage(): void {
    this.currentStep -= 1;

    const navState = {
      ...this.submissionData, //include all form data
      currentStep: this.currentStep,
      pageTitle: this.pageTitle
    };

    console.log('Navigating to previous page with state:', navState);

    this.router.navigate(['../'], {
      relativeTo: this.route,
      state: navState
    });
  }

  nextPage(): void {
    const navState = {
      ...this.submissionData, //carry over full data
      negeriBerlepas: this.negeriBerlepas, //if these are updated, override them
      selectedCategory: this.selectedCategory,
      currentStep: this.currentStep,
      pageTitle: this.pageTitle
    };

    this.router.navigate(['maklumat-pemohon'], {
      relativeTo: this.route,
      state: navState
    });
  }
}