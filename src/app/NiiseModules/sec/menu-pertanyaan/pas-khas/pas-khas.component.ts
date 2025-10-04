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
  selector: 'app-khas',
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
  templateUrl: './pas-khas.component.html',
  styleUrls: ['../menu-pertanyaan.component.scss']
})


export class PasKhasComponent implements OnInit {
  private _selectedCategory: string = '';
  confirmedCategory: string = '';
  isLoading: boolean = false;
  useNationalityOptions: boolean = false;
  currentStep: number = 1; // default fallback
  selectedNationality: string = '';
  passportNumber: string = '';
  searchResults: Subject[] = [];
  noResultsFound: boolean = false;
  pageTitle = 'Senarai Permohonan Pas Khas';

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
    this.confirmedCategory = '';
    this.searchResults = [];
    this.isLoading = false;
  }

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) {}

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

    if (!this.selectedNationality || !this.passportNumber) {
          alert('Sila isi semua maklumat yang diperlukan.');
          return;
        }
    else {

        filtered = data.filter(
          item =>
            item.wn === this.selectedNationality &&
            item.noPasport === this.passportNumber &&
            (item.jenisPermohonan || '').trim().toLowerCase() === targetJenisPermohonan.toLowerCase()
        );

        console.log("Input:", this.selectedNationality, ",", this.passportNumber);

      if (filtered.length === 0) {
        this.noResultsFound = true;
      }
    }
      this.searchResults = filtered;
      console.log("Filtered Data:", filtered);
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