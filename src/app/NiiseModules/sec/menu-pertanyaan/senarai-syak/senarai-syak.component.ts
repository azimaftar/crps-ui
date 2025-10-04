import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// For Testing
import { SubjectService, Subject } from '../../../../services/subject.service';

// CoreUI Imports
import {
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  CardModule,
  GridModule,
} from '@coreui/angular';

@Component({
  selector: 'app-senarai-syak',
  standalone: true,
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
  templateUrl: './senarai-syak.component.html',
  styleUrls: ['../menu-pertanyaan.component.scss']
})

export class SenaraiSyakComponent implements OnInit {
  private _selectedCategory: string = '';
  confirmedCategory: string = '';
  isLoading: boolean = false;
  identificationNumber: string = '';
  name: string = '';
  birthDate: string = '';
  selectedNationality: string = '';
  passportNumber: string = '';
  currentStep: number = 1;
  searchResults: Subject[] = [];
  noResultsFound: boolean = false;
  pageTitle = 'Senarai Permohonan Senarai Syak';
  

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

  steps = [
    { number: 1, title: 'Kategori Carian', route: '/sec/menu-pertanyaan' },
    { number: 2, title: 'Menu Carian', route: '' },
  ];

  subjectList: Subject[] = [];

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) {}

  ngOnInit(): void {
    const stepFromState = history.state.currentStep;
    if (stepFromState && typeof stepFromState === 'number') {
      this.currentStep = stepFromState;
    }
    console.log('Received currentStep:', this.currentStep);
  }

  get selectedCategory(): string {
    return this._selectedCategory;
  }

  set selectedCategory(value: string) {
    this._selectedCategory = value;
    this.resetFormFields(); // Reset all fields when category changes
  }

  resetFormFields(): void {
    this.name = '';
    this.birthDate = '';
    this.selectedNationality = '';
    this.passportNumber = '';
    this.identificationNumber = '';
    this.confirmedCategory = '';
    this.subjectList = [];
    this.isLoading = false;
    this.searchResults = []; // Clears the table
    this.noResultsFound = false;
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
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

    // Pre-convert birth date if available
    let formattedBirthDate = '';
    if (this.birthDate) {
      const [year, month, day] = this.birthDate.split('-');
      formattedBirthDate = `${day}-${month}-${year}`;
    }

    this.subjectService.getGroupedSubjects().subscribe((groupedData) => {
      const data: Subject[] = groupedData[targetJenisPermohonan] || [];
      let filtered: Subject[] = [];

      // Debug log to inspect what's in the data
      data.forEach(item => {
        console.log("item.jenisPermohonan:", item.jenisPermohonan);
      });

      if (this.selectedCategory === 'Warganegara/Penduduk Tetap') {
        if (!this.identificationNumber) {
          alert('Sila isi nombor pengenalan.');
          return;
        }

        filtered = data.filter(
          item =>
            item.noPengenalan === this.identificationNumber
        );

      } else {
        if (!this.selectedNationality || !this.passportNumber || !this.birthDate || !this.name) {
          alert('Sila isi semua maklumat yang diperlukan.');
          return;
        }

        filtered = data.filter(
          item =>
            item.wn === this.selectedNationality &&
            item.noPasport === this.passportNumber &&
            item.birthDate === formattedBirthDate &&
            item.nama === this.name
        );
      }

      if (filtered.length === 0) {
        this.noResultsFound = true;
        return;
      }

      this.searchResults = filtered;
      console.log("Filtered Results:", filtered);
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
