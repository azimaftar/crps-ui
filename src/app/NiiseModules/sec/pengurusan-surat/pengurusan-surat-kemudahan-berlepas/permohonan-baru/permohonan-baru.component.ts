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
  selector: 'app-permohonan-baru',
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
  templateUrl: './permohonan-baru.component.html',
  styleUrls: ['../../pengurusan-surat-component.scss']
  })
export class PermohonanBaruComponent {
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
    
    console.log('Current Step:', this.currentStep);
  }

  ngOnChanges() {
    this.updateCategories();
  }

  updateCategories() {
    this.categories = this.allCategories[this.negeriBerlepas as keyof typeof this.allCategories] || [];
    this.selectedCategory = ''; // Reset selected category when list changes
  }  

  allCategories = {
    Sabah: [
      'Pemegang sijil lahir warga asing. (stateless person)', 
      'Pemegang IMM 13 (dikeluarkan oleh Unit Khas untuk pelarian)', 
      'Pemegang MyKAS (penduduk sementara, dikeluarkan oleh JPN)', 
      'Tukang masak (Pemegang PLKS)', 
      'Pembantu rumah (Pemegang Pas PLKS)', 
      'Tukang urut (Pemegang PLKS)', 
      'Pemegang WN DOC7 (pemohon sijil warganegara yang masih dalam proses) yang perlu merujuk JPN, Putrajaya', 
      'Anak angkat warga asing', 
      'Pemegang resit unit Sabah (JPN Sabah)'
    ],
    Sarawak: [
      'Pemegang sijil lahir warga asing. (belum ditentukan warganegara)', 
      'Pemegang IMM 13 (dikeluarkan oleh Unit Khas untuk pelarian)', 
      'Pemegang MyKAS (penduduk sementara, dikeluarkan oleh JPN)'
    ]
  };  

  steps = [
    { number: 1, title: 'Carian & Senarai Subjek', route: '' },
    { number: 2, title: 'Kategori Pemohon', route: '' },
    { number: 3, title: 'Maklumat Pemohon', route: '' }
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

  resetForm(): void {
    this.negeriBerlepas =''; 
    this.selectedCategory =''; 
    this.categories = [];

  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
    this.router.navigate(['/sec/pengurusan-edaran-notis/kemas-kini-edaran-notis/']);
  }  

  closeErrorModal(): void {
    this.showErrorModal = false;
  }

  closeWarningModal(): void {
    this.showWarningModal = false;
  }

  prevPage(): void {
    this.currentStep -= 1;

    const navState = {
      currentStep: this.currentStep,
      pageTitle: this.pageTitle
    };

    console.log('Navigating to Pengurusan Surat Kemudahan Berlepas page with state:', navState);

    this.router.navigate(['../'], 
      { relativeTo: this.route, 
        state: navState 
      });
  }

  nextPage(): void {
    this.currentStep += 1;

    const navState = {
      currentStep: this.currentStep,
      pageTitle: this.pageTitle,
      negeriBerlepas: this.negeriBerlepas,
      selectedCategory: this.selectedCategory
    };

    // Navigate only after successful submission
    this.router.navigate(['../maklumat-pemohon'], {
      relativeTo: this.route,
      state: navState
    });    

    console.log("Submitting and navigating with:", navState);
  }
}