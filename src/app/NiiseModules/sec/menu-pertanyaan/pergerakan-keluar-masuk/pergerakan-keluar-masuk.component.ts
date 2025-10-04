import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectService, Subject } from '../../../../services/subject.service';
import { HttpClient } from '@angular/common/http';

// CoreUI Imports
import {
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  TableDirective,
  CardModule,
  GridModule,
  Tabs2Module,
  AlertComponent,
  ButtonDirective,

} from '@coreui/angular';

@Component({
  selector: 'app-pergerakan-keluar-masuk',
  templateUrl: './pergerakan-keluar-masuk.component.html',
  styleUrls: ['../menu-pertanyaan.component.scss'],
  standalone: true,
  imports: [
    // Angular + CoreUI modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    Tabs2Module,
    ColComponent,
    RowComponent,
    CardComponent,
    CardBodyComponent,
    TableDirective,
    CardModule,
    GridModule,
    AlertComponent,
    ButtonDirective,
  ]
})
export class PergerakanKeluarMasukComponent implements OnInit {
  private _selectedCategory: string = '';

  currentStep: number = 1;
  tarikhMulaPergerakan = '';
  tarikhAkhirPergerakan = '';
  name = '';
  nameBirthDate = '';
  identificationNumber = '';
  nationality = '';
  birthdate = '';
  passportNumber = '';
  activeTab = 1;
  searchResults: Subject[] = [];
  noResultsFound = false;
  pageTitle = 'Senarai Permohonan Pergerakan Keluar / Masuk';
  showWarning: boolean = false;
  warningMessage: string = '';

  selectedTabValue: string | number | undefined;

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private subjectService: SubjectService,
    private http: HttpClient // Inject HttpClient here if needed
  ) {}

  ngOnInit(): void {
    const stepFromState = history.state.currentStep;
    if (stepFromState && typeof stepFromState === 'number') {
      this.currentStep = stepFromState;
    }

    console.log('Received currentStep:', this.currentStep);
  }

  // Handle tab change
  handleChange(newTab: string | number | undefined) {
    this.selectedTabValue = newTab;
    this.showWarning = false;
    this.searchResults = [];
    this.noResultsFound = false;
    this.resetFormFields();
    console.log('Tab changed to:', newTab);
  }

  setActiveTab(tab: number): void {
    this.activeTab = tab;
  }

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
    this.resetFormFields();
  }

  resetFormFields(): void {
    this.tarikhMulaPergerakan = '';
    this.tarikhAkhirPergerakan = '';
    this.name = '';
    this.nameBirthDate = '';
    this.identificationNumber = '';
    this.nationality = '';
    this.birthdate = '';
    this.passportNumber = '';
  }

    generateNameBirthDate(): void {
    if (this.name && this.identificationNumber.length >= 6) {
      // Process name
      let processedName = this.name.toLowerCase();

      const binIndex = processedName.indexOf(' bin');
      const bintiIndex = processedName.indexOf(' binti');

      if (binIndex !== -1) {
        processedName = processedName.substring(0, binIndex);
      } else if (bintiIndex !== -1) {
        processedName = processedName.substring(0, bintiIndex);
      }

      processedName = processedName.replace(/\s+/g, '');

      // Process IC date
      const icDate = this.identificationNumber.substring(0, 6);
      const day = icDate.substring(4, 6);
      const month = icDate.substring(2, 4);
      const year = icDate.substring(0, 2);
      const rearrangedDate = `${day}${month}${year}`;

      // Combine into final string
      this.nameBirthDate = `${processedName}${rearrangedDate}`;
    } else {
      this.nameBirthDate = '';
    }
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

    // Auto-update the combined field
    this.generateNameBirthDate();
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
    const formatDate = (isoDate: string): string => {
      const [year, month, day] = isoDate.split('-');
      return `${day}-${month}-${year}`;
    };
    console.log('Jenis Permohonan:', targetJenisPermohonan)

    const formattedTarikhMula = this.tarikhMulaPergerakan ? formatDate(this.tarikhMulaPergerakan) : '';
    const formattedTarikhAkhir = this.tarikhAkhirPergerakan ? formatDate(this.tarikhAkhirPergerakan) : '';
    const formattedBirthDate = this.birthdate ? formatDate(this.birthdate) : '';

    this.subjectService.getGroupedSubjects().subscribe((groupedData) => {
      const data: Subject[] = groupedData[targetJenisPermohonan] || [];
      let filtered: Subject[] = [];

      if (this.selectedTabValue === 'date') {
        if (!this.tarikhMulaPergerakan || !this.tarikhAkhirPergerakan) {
          this.showWarning = true;
          this.warningMessage = 'Sila isi semua maklumat yang diperlukan.';
          return;
        }

        const mula = new Date(this.tarikhMulaPergerakan);
        const akhir = new Date(this.tarikhAkhirPergerakan);
        if (akhir < mula) {
          this.showWarning = true;
          this.warningMessage = 'Tarikh akhir tidak boleh lebih awal daripada tarikh mula.';
          return;
        }

        filtered = data.filter(item =>
          item.tarikhMulaPergerakan === formattedTarikhMula &&
          item.tarikhAkhirPergerakan === formattedTarikhAkhir
        );
      }

      else if (this.selectedTabValue === 'name') {
        if (!this.name || !this.identificationNumber) {
          this.showWarning = true;
          this.warningMessage = 'Sila isi semua maklumat yang diperlukan.';
          return;
        }

        filtered = data.filter(item =>
          item.nama === this.name &&
          item.noPengenalan === this.identificationNumber
        );
      }

      else if (this.selectedTabValue === 'nationality') {
        if (!this.nationality || !this.birthdate || !this.passportNumber) {
          this.showWarning = true;
          this.warningMessage = 'Sila isi semua maklumat yang diperlukan.';
          return;
        }

        filtered = data.filter(item =>
          item.wn === this.nationality &&
          item.birthDate === formattedBirthDate &&
          item.noPasport === this.passportNumber
        );
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
        pageTitle: this.pageTitle,
      }
    });
    console.log("Current Step:", this.currentStep)
  }
}