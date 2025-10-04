import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconDirective } from '@coreui/icons-angular';

// For Testing
import { SubjectService, Subject } from '../../../../../services/subject.service';

import { SharedModalComponent } from '../../../shared-modal/shared-modal.component';

// CoreUI Imports
import {
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  CardModule,
  GridModule,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,
  TableDirective,
} from '@coreui/angular';

@Component({
  selector: 'app-kelulusan-permohonan',
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
    SharedModalComponent,    
  ],
  templateUrl: './kelulusan-permohonan.component.html',
  styleUrls: [
    '../../pengurusan-surat-component.scss'
  ]

})

export class KelulusanPermohonanComponent {
  private _selectedCategory: string = 'Warganegara/Penduduk Tetap';
  confirmedCategory: string = '';
  isLoading: boolean = false;
  identificationNumber: string = '';
  noRujukanPermohonan: string = '';
  name: string = '';
  birthDate: string = '';
  selectedNationality: string = '';
  passportNumber: string = '';
  currentStep: number = 1;
  searchResults: Subject[] = [];
  noResultsFound: boolean = false;
  pageTitle = 'Senarai Permohonan Surat Kemudahan Berlepas';

  isWarganegara: boolean = true; // default matches the default category
  isAsing: boolean = false;
  isRujukan: boolean = false;

  // Modal
  modalVisible = false;
  modalMessage = '';
  modalMode: 'ok' | 'confirm' = 'ok';  
  modalAction: 'search-fail' | 'confirm-submit' | null = null;

  categories: string[] = [
    'Warganegara/Penduduk Tetap',
    'Warga Asing',
    'Nombor Rujukan',
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
    { number: 1, title: 'Carian Pemohon', route: '' },
    { number: 2, title: 'Kategori Pemohon', route: '' },
    { number: 3, title: 'Maklumat Pemohon', route: '' },
    { number: 4, title: 'Kelulusan', route: '' }
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

    // Enforce default selected category
    this.selectedCategory = 'Warganegara/Penduduk Tetap';
  }

  get selectedCategory(): string {
    return this._selectedCategory;
  }

  set selectedCategory(value: string) {
    this._selectedCategory = value;
    this.resetFormFields();

    // Update flags so the template reflects the new category
    this.isWarganegara = value === 'Warganegara/Penduduk Tetap';
    this.isAsing = value === 'Warga Asing';
    this.isRujukan = value === 'Nombor Rujukan';
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

  handleConfirmSubmit(): void {
    this.modalVisible = false;

    switch (this.modalAction) {
      case 'confirm-submit':
        this.onSubmit();
        this.router.navigate([
          '/sec/pengurusan-surat/permohonan-surat-kemudahan-berlepas/pengesyoran-permohonan',
        ]);
        break;
      case 'search-fail':
      default:
        // Do nothing, just close the modal
        break;
    }

    this.modalAction = null; // Reset after use
  }

  handleCancelModal(): void {
    this.modalVisible = false;
    console.log('User clicked Batal / Ok');
    console.log("handleCancelModal")
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
    const kategoriCarian = this.selectedCategory;

    // Format birth date to DD-MM-YYYY
    let formattedBirthDate = '';
    if (this.birthDate) {
      const [year, month, day] = this.birthDate.split('-');
      formattedBirthDate = `${day}-${month}-${year}`;
    }

    let searchParams: any = {
      kategoriCarian,
      page: this.pageTitle
    };

    if (kategoriCarian === 'Warganegara/Penduduk Tetap') {
      if (!this.identificationNumber) {
        this.modalMessage = 'Medan mandatori diperlukan';
        this.modalMode = 'ok';
        this.modalAction = null;
        this.modalVisible = true;
        return;
      }
      searchParams.noPengenalan = this.identificationNumber;

    } else if (kategoriCarian === 'Warga Asing') {
      if (!this.name || !this.birthDate || !this.selectedNationality || !this.passportNumber) {
        this.modalMessage = 'Medan mandatori diperlukan';
        this.modalMode = 'ok';
        this.modalAction = null;
        this.modalVisible = true;
        return;
      }
      searchParams.name = this.name;
      searchParams.birthDate = formattedBirthDate;
      searchParams.wn = this.selectedNationality;
      searchParams.passportNumber = this.passportNumber;

    } else if (kategoriCarian === 'Nombor Rujukan') {
      if (!this.noRujukanPermohonan) {
        this.modalMessage = 'Medan mandatori diperlukan';
        this.modalMode = 'ok';
        this.modalAction = null;
        this.modalVisible = true;
        return;
      }
      searchParams.noRujukanPermohonan = this.noRujukanPermohonan;
    }

    this.isLoading = true;

    this.subjectService.cariWfr12_3(
      kategoriCarian,
      this.pageTitle,
      searchParams
    ).subscribe(
      (result) => {
        this.searchResults = result;
        this.noResultsFound = result.length === 0;
        this.isLoading = false;

        if (this.noResultsFound) {
          this.modalMessage = 'Tiada rekod dijumpai';
          this.modalMode = 'ok';
          this.modalAction = 'search-fail';
          this.modalVisible = true;
        }
      },
      (error) => {
        console.error('Search failed:', error);
        this.noResultsFound = true;
        this.isLoading = false;

        this.modalMessage = 'Tiada rekod dijumpai';
        this.modalMode = 'ok';
        this.modalAction = 'search-fail';
        this.modalVisible = true;
      }
    );
  }

  // For pen icon
  kemasKini(item: any) {
    this.currentStep += 1;

    const navState = {
      ...item, // ← Pass ALL data from selected row
      currentStep: this.currentStep,
      pageTitle: this.pageTitle
    };

    this.router.navigate(['./kategori-pemohon'], {
      relativeTo: this.route,
      state: navState
    });

    console.log("Navigate with full data:", navState);
  }
}

