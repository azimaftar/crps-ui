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
  selector: 'app-surat-kemudahan-berlepas',
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
  templateUrl: './surat-kemudahan-berlepas.component.html',
  styleUrls: ['../menu-pertanyaan.component.scss']
})


export class SuratKemudahanBerlepasComponent implements OnInit {
  private _selectedCategory: string = '';
  confirmedCategory: string = '';
  isLoading: boolean = false;
  useNationalityOptions: boolean = false;
  identificationNumber: string = '';
  name: string = '';
  currentStep: number = 1; // default fallback
  selectedNationality: string = '';
  birthDate: string = '';
  passportNumber: string = '';
  refIdSuratKebenaranKeluar: string = '';
  selectedGender: string = '';
  applicantDocumentId: string = '';
  notisPenolakanMasuk: string = '';
  searchResults: Subject[] = [];
  noResultsFound: boolean = false;
  pageTitle = 'Senarai Permohonan Surat Kemudahan Berlepas';

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
    this.name = '';
    this.birthDate = '';
    this.selectedGender = '';
    this.refIdSuratKebenaranKeluar = '';
    this.applicantDocumentId = '';
    this.notisPenolakanMasuk = '';
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

  genders: string[] = [
    'Lelaki',
    'Perempuan',
    'Lain-lain',
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

    // Pre-convert birth date if available
    let formattedBirthDate = '';
    if (this.birthDate) {
      const [year, month, day] = this.birthDate.split('-');
      formattedBirthDate = `${day}-${month}-${year}`;
    }

    this.subjectService.getGroupedSubjects().subscribe((groupedData) => {
      const data: Subject[] = groupedData[targetJenisPermohonan] || [];
      let filtered: Subject[] = [];

      if (this.selectedCategory === 'Warganegara/Penduduk Tetap') {
        if (!this.refIdSuratKebenaranKeluar || !this.notisPenolakanMasuk) {
          alert('Sila isi nombor pengenalan.');
          return;
        }

        filtered = data.filter(
          item =>
            item.nama === this.name &&
            item.birthDate === formattedBirthDate &&
            item.refIdSuratKebenaranKeluar === this.refIdSuratKebenaranKeluar &&
            item.notisPenolakanMasuk === this.notisPenolakanMasuk
        );

      } else {
        if (!this.selectedNationality || !this.passportNumber || !this.birthDate) {
          alert('Sila isi semua maklumat yang diperlukan.');
          return;
        }

        filtered = data.filter(
          item =>
            item.wn === this.selectedNationality &&
            item.birthDate === formattedBirthDate &&
            item.noPasport === this.passportNumber
        );

        console.log("Input:", this.selectedNationality, ",", formattedBirthDate, ",", this.passportNumber);
      }

      if (filtered.length === 0) {
        this.noResultsFound = true;
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
