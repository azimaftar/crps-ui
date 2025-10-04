import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModalComponent } from '../../../shared-modal/shared-modal.component';
import { SubjectService } from '../../../../../services/PermohonanPasPerkahwinanWargaAsing/carianpermohonan.service';
import { IconDirective } from '@coreui/icons-angular';
import { carianpermohonan } from '../../../../../services/PermohonanPasPerkahwinanWargaAsing/carianpermohonan.service';

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
  selector: 'app-carian-permohonan',
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
    SharedModalComponent,
    IconDirective,
  ],
  templateUrl: './penerimaan-permohonan.component.html',
  styleUrl: '../../../pengurusan-surat/permohonan-pas-perkahwinan-warga-asing/permohonan-pas-perkahwinan-warga-asing.component.scss'
})
export class PenerimaanPermohonanComponents {
  private _selectedCategory: string = 'Warganegara/Penduduk Tetap';
  confirmedCategory: string = '';
  isLoading: boolean = false;
  identificationNumber: string = '';
  fid: string = '';
  name: string = '';
  dob: string = '';
  nationality: string = '';
  noKp: string = '';
  docNum: string = '';
  currentStep: number = 1;
  searchResults: carianpermohonan[] = [];
  noResultsFound: boolean = false;
  pageTitle = 'Penerimaan Permohonan';

  isWarganegara: boolean = true; // default matches the default category
  isAsing: boolean = false;
  isRujukan: boolean = false;
  searchText: string = '';

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
    { number: 1, title: 'Carian Pemohonan', route: '' },
    { number: 2, title: 'Maklumat Pemohon', route: '' },
  ];

  subjectList: carianpermohonan[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) { }


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
    this.dob = '';
    this.nationality = '';
    this.noKp = '';
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
          '/sec/pengurusan-surat/permohonan-pas-perkahwinan-warga-asing/permohonan-baru/carian-permohonan',
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

  onSearch(): void {
    // Implement search logic here
    if (!this.searchText.trim()) {
      console.log('Please enter search text');

      return;
    }

    console.log('Searching for:', this.searchText, 'in category:', this.selectedCategory);

    // Example search implementation
    this.performSearch();
  }
  
    performSearch(): void {
    this.isLoading = true;
    this.subjectService.searchByFID(this.searchText, this.selectedCategory, '1').subscribe(
      (results: carianpermohonan[]) => {
        this.searchResults = results;
        this.noResultsFound = results.length === 0;
        this.isLoading = false;

        if (this.noResultsFound) {
          this.showModal('Tiada rekod dijumpai');
        }
      },
      (error) => {
        console.error('Search failed:', error);
        this.isLoading = false;
        this.showModal('Ralat semasa mencari rekod');
      }
    );
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

    let formattedBirthDate = '';
    if (this.dob) {
      const dateParts = this.dob.split('-');
      if (dateParts.length === 3) {
        formattedBirthDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
      }
    }


    let searchParams: any = { kategoriCarian, page: this.selectedCategory };

    if (this.isWarganegara) {
      if (!this.identificationNumber) {
        this.showModal('Medan mandatori diperlukan');
        return;
      }
      searchParams.noKp = this.identificationNumber;

    } else if (this.isAsing) {
      if (!this.name || !this.dob || !this.nationality || !this.noKp) {
        this.showModal('Medan mandatori diperlukan');
        return;
      }
      searchParams.name = this.name;
      searchParams.dob = this.dob;
      searchParams.nationality = this.nationality;
      searchParams.docNum = this.docNum || ''; // Optional field, can be empty

    } else if (this.isRujukan) {
      if (!this.fid) {
        this.showModal('Medan mandatori diperlukan');
        return;
      }
      searchParams.fid = this.fid;
    }

    this.isLoading = true;

    this.subjectService.carianPermohonan(
      kategoriCarian,
      this.pageTitle,
      searchParams
    ).subscribe(
      (result: carianpermohonan[]) => {
        this.searchResults = result;
        this.noResultsFound = result.length === 0;
        this.isLoading = false;

        if (this.noResultsFound) {
          this.showModal('Tiada rekod dijumpai');
        }
      },
      (error) => {
        console.error('Search failed:', error);
        this.isLoading = false;
        this.showModal('Tiada rekod dijumpai');
      }
    );
  }

  private showModal(message: string) {
    this.modalMessage = message;
    this.modalMode = 'ok';
    this.modalAction = 'search-fail';
    this.modalVisible = true;
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
