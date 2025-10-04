import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubjectService, Subject } from '../../../../services/subject.service';

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
import { MenuContentComponent } from '../../../landing/menu-content/menu-content.component';

@Component({
  selector: 'app-surat-kemudahan',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,

    // CoreUI
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    CardModule,
    GridModule,
    ButtonDirective,
  ],  
  templateUrl: './surat-kemudahan.component.html',
  styleUrls: ['../menu-pertanyaan.component.scss']
})


export class SuratKemudahanComponent implements OnInit {
  private _selectedCategory: string = '';
  confirmedCategory: string = '';
  isLoading: boolean = false;
  useNationalityOptions: boolean = false;
  identificationNumber: string = '';
  currentStep: number = 1; 
  selectedNationality: string = '';
  passportNumber: string = '';
  searchResults: Subject[] = [];
  noResultsFound: boolean = false;
  pageTitle = 'Senarai Permohonan Surat Kemudahan';

  steps = [
    { number: 1, title: 'Kategori Carian', route: '/sec/menu-pertanyaan' },
    { number: 2, title: 'Menu Carian', route: '' },
  ];


  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }

  get selectedCategory(): string {
    return this._selectedCategory;
  }

  set selectedCategory(value: string) {
    this._selectedCategory = value;
    this.resetFormFields(); // Resets all inputs when category changes
  }

  resetFormFields(): void {
    this.selectedNationality = '';
    this.passportNumber = '';
    this.identificationNumber = '';
    this.confirmedCategory = '';
    this.isLoading = false;
    this.searchResults = []; // Clears the table
    this.noResultsFound = false;
  }

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) {}

  categories: string[] = [
    'Warganegara/Penduduk Tetap',
    'Warga Asing',
  ];

  nationalities: string[] = [
    'Malaysia',
    'Bangladesh',
    'Brunei',
    'Cambodia',
    'Filipina',
    'India',
    'Indonesia',
    'Laos',
    'Maldives',
    'Myanmar',
    'Nepal',
    'Pakistan',
    'Singapura',
    'Sri Lanka',
    'Thailand',
    'Vietnam',
  ];

  ngOnInit(): void {
    // Access currentStep from navigation state
    const stepFromState = history.state.currentStep;
    if (stepFromState && typeof stepFromState === 'number') {
      this.currentStep = stepFromState;
    }

    console.log('Received currentStep:', this.currentStep);
  }

  enforce12DigitLimit(event: any): void {
    const input = event.target as HTMLInputElement;
    // Remove all non-digit characters
    input.value = input.value.replace(/\D/g, '');

    // Enforce 12-digit max manually in case user pasted more than 12 digits
    if (input.value.length > 12) {
      input.value = input.value.slice(0, 12);
    }

    // Update the ngModel value
    this.identificationNumber = input.value;
  }

  navigateToStep1() {
    const step1 = this.steps.find(step => step.number === 1);
    if (step1) {
      this.router.navigate([step1.route]);
    }
  }

  onSubmit(): void {
    this.searchResults = [];
    this.noResultsFound = false;

    const targetJenisPermohonan = this.pageTitle.replace('Senarai Permohonan ', '').trim();
    console.log("Target Jenis Permohonan:", targetJenisPermohonan);

    this.subjectService.getGroupedSubjects().subscribe((groupedData) => {
      const data: Subject[] = groupedData[targetJenisPermohonan] || [];
      let filtered: Subject[] = [];

      if (this.selectedCategory === 'Warganegara/Penduduk Tetap') {
        if (!this.identificationNumber) {
          alert('Sila isi nombor pengenalan.');
          return;
        }

        filtered = data.filter(
          item => item.noPengenalan === this.identificationNumber
        );

        console.log("Filtered Data:", filtered);

      } else {
        if (!this.selectedNationality || !this.passportNumber) {
          alert('Sila isi semua maklumat yang diperlukan.');
          return;
        }

        filtered = data.filter(
          item =>
            item.wn === this.selectedNationality &&
            item.noPasport === this.passportNumber
        );

        console.log("Filtered Data:", filtered);
      }

      if (filtered.length === 0) {
        this.noResultsFound = true;
      }

      this.searchResults = filtered;
    });
  }

  onRowAction(item: any) {
    console.log("Data:", item)
    this.router.navigate(['papar'], {
      relativeTo: this.route,
      state: { 
        data: item,
        currentStep: this.currentStep, 
        pageTitle: this.pageTitle
      }
    });
    console.log("Current Step:", this.currentStep)
  }
}