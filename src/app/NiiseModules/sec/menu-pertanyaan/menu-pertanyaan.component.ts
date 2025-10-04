import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { MenuContentComponent } from '../../landing/menu-content/menu-content.component';

@Component({
  selector: 'app-permohonan-baru',
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
    ButtonDirective,
    CardModule,
    GridModule,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
  ],
  templateUrl: './menu-pertanyaan.component.html',
  styleUrls: ['./menu-pertanyaan.component.scss']
})
export class MenuPertanyaanComponent implements OnInit {

  selectedCategory: string = '';
  confirmedCategory: string = '';
  searchResults: any[] = [];
  isLoading: boolean = false;
  useNationalityOptions: boolean = false;

  currentStep: number = 1;
  totalSteps: number = 3;

  steps = [
    { number: 1, title: 'Kategori Carian', route: '/sec/menu-pertanyaan' },
    { number: 2, title: 'Menu Carian', route: '' },
  ];

  categories: string[] = [
    'Senarai Syak',
    'Surat Kemudahan',
    'Surat Kemudahan Berlepas',
    'Pas Khas',
    'Pengesahan Passport',
    'Pekeliling Khas (SPK)',
    'Pergerakan Keluar/Masuk',
    'Visa, Pas, Permit',
    'Memo Periksa Keluar/Masuk',
    'Semakan Biometrik',
  ];

  categoryTitles: { [key: string]: string } = {
    'Senarai Syak': 'Senarai Permohonan Senarai Syak',
    'Surat Kemudahan': 'Senarai Permohonan Surat Kemudahan',
    'Surat Kemudahan Berlepas': 'Senarai Permohonan Surat Kemudahan Berlepas',
    'Pas Khas': 'Senarai Permohonan Pas Khas',
    'Pengesahan Passport': 'Senarai Permohonan Pengesahan Passport',
    'Pekeliling Khas (SPK)': 'Senarai Permohonan Pekeliling Khas (SPK)',
    'Pergerakan Keluar/Masuk': 'Senarai Permohonan Pergerakan Keluar/Masuk',
    'Visa, Pas, Permit': 'Senarai Permohonan Visa, Pas, Permit',
    'Memo Periksa Keluar/Masuk': 'Senarai Permohonan Memo Periksa Keluar/Masuk',
    'Semakan Biometrik': 'Senarai Permohonan Semakan Biometrik',
  };

  categoryRouteMap: { [key: string]: string } = {
    'Senarai Syak': 'senarai-syak',
    'Surat Kemudahan': 'surat-kemudahan',
    'Surat Kemudahan Berlepas': 'surat-kemudahan-berlepas',
    'Pas Khas': 'pas-khas',
    'Pengesahan Passport': 'pengesahan-passport',
    'Pekeliling Khas (SPK)': 'pekeliling-khas',
    'Pergerakan Keluar/Masuk': 'pergerakan-keluar-masuk',
    'Visa, Pas, Permit': 'visa-pas-permit',
    'Memo Periksa Keluar/Masuk': 'memo-periksa-keluar-masuk',
    'Semakan Biometrik': 'semakan-biometrik',
  };

  public modalVisible = false;
  public modalMessage = 'Tiada rekod dijumpai';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const stepFromState = history.state.currentStep;
    if (stepFromState && typeof stepFromState === 'number') {
      this.currentStep = stepFromState;
    } else {
      this.currentStep = 1;
    }
  }

  onCategoryChange(): void {
    this.useNationalityOptions = [
      'Senarai Syak',
      'Surat Kemudahan'
    ].includes(this.selectedCategory);
  }

  onSearch(): void {
    const routePath = this.categoryRouteMap[this.selectedCategory];
    if (!routePath) return;

    this.currentStep += 1; // Increment currentStep before navigating

    this.router.navigate([routePath], {
      relativeTo: this.route,
      state: {
        selectedCategory: this.selectedCategory,
        currentStep: this.currentStep  // Pass the incremented step
      }
    });
    console.log('Navigating to:', routePath);
    console.log('Current step:', this.currentStep);
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

  navigateToStep1() {
    const step1 = this.steps.find(step => step.number === 1);
    if (step1) {
      this.router.navigate([step1.route]);
    }
  }

}
