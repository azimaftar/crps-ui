import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PermohonanService } from '../../../../services/permohonan.service';

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
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CardComponent,
    CardBodyComponent,
    RowComponent,
    TableDirective,
    ColComponent,
    ButtonDirective,
    FormsModule,
    CardModule,
    GridModule,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
  ],
  templateUrl: './permohonan-baru.component.html',
  styleUrls: [
  '../permohonan-surat-kemudahan.component.scss'
]

})
export class PermohonanBaruComponent implements OnInit {

  selectedCategory: string = '';
  searchResults: any[] = [];
  isLoading: boolean = false;

  currentStep: number = 1;
  totalSteps: number = 3;

  steps = [
    { number: 1, title: 'Carian & Senarai Sabjek', route: '/sec/permohonan-surat-kemudahan/permohonan-baru' },
    { number: 2, title: 'Maklumat Pemohon', route: '/sec/permohonan-surat-kemudahan/maklumat-pemohon' },
    { number: 3, title: 'Dokumen Sokongan', route: '/sec/permohonan-surat-kemudahan/dokumen-sokongan' },
  ];

  public modalVisible = false;
  public modalMessage = 'Tiada rekod dijumpai';
  public searchNoKP = '';

  constructor(
    private router: Router,
    private permohonanService: PermohonanService
  ) { }

  ngOnInit(): void {
    this.initializeComponent();
  }

  private initializeComponent(): void {
    this.searchResults = [];
    this.selectedCategory = '';
    this.searchNoKP = '';
    console.log('Permohonan Baru component initialized');
  }

  performUnifiedSearch(): void {
    const cleanNoKP = this.searchNoKP.trim();

    if (!cleanNoKP) {
      this.showModal('Ralat', 'Sila masukkan No. KP');
      this.searchResults = [];
      return;
    }

    this.isLoading = true;
    console.log('Searching for:', cleanNoKP, 'Category:', this.selectedCategory);

    this.permohonanService.semakStatusSL(this.selectedCategory, cleanNoKP).subscribe({
      next: (response: any) => {
        const transformed = {
          noKP: response.kpNo,
          noDokumen: response.passportNo ?? '-',           // use null-safe fallback
          warganegara: response.nationality ?? '-',
          nama: response.name ?? '-',
          status: response.applyStatus?.toLowerCase() === 'a' ? 'aktif' : 'tidak_aktif',
          tarikhLahir: '-'  // Not returned by backend yet
        };

        this.searchResults = [transformed];
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Search error:', error);
        this.searchResults = [];
        this.showModal('Tiada rekod dijumpai', error?.error?.message || 'Tiada rekod dijumpai');
        this.isLoading = false;
      }
    });


  }

  showModal(title: string, message: string): void {
    this.modalMessage = message;
    this.modalVisible = true;
  }

  closeModal(): void {
    this.modalVisible = false;
  }

  onModalOk(): void {
    this.closeModal();
  }

  navigateToMaklumat(): void {
    this.router.navigate(['/sec/permohonan-surat-kemudahan/maklumat-pemohon']);
  }

  paparDetails(item: any, mode: 'papar' | 'kemaskini'): void {
    console.log(`Navigating to paparan page with mode: ${mode}`, item);
    this.router.navigate(['/sec/permohonan-surat-kemudahan/paparan'], {
      state: {
        selectedItem: item,
        mode: mode, // Pass the mode
        kpNo: item.noKP // Pass the KP number
      }
    });
  }


  getItemById(id: number): any {
    return this.searchResults.find(item => item.id === id); // updated from sampleData
  }

  resetForm(): void {
    this.selectedCategory = '';
    this.searchNoKP = '';
    this.searchResults = [];
    this.currentStep = 1;
    this.closeModal();
    console.log('Form reset completed');
  }

  goToStep(stepNumber: number): void {
    if (stepNumber >= 1 && stepNumber <= this.totalSteps) {
      this.currentStep = stepNumber;
      console.log('Jumped to step:', this.currentStep);
    }
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }

  /** Deprecated legacy methods */
  validateNoKP(noKP: string): void {
    console.warn('validateNoKP is deprecated, use performUnifiedSearch instead');
  }

  performSearch(): void {
    console.warn('performSearch is deprecated, use performUnifiedSearch instead');
  }

  checkNoKPExists(noKP: string): boolean {
    return this.searchResults.some(item => item.noKP === noKP); // updated
  }

  private filterData(): any[] {
    console.warn('filterData is deprecated');
    return [];
  }


}
