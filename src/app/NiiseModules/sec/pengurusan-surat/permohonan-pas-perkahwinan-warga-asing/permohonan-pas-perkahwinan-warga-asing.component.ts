import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModalComponent } from '../../shared-modal/shared-modal.component';
import { IconDirective } from '@coreui/icons-angular';
import {
  carianpermohonan,
  SubjectService,
} from '../../../../services/PermohonanPasPerkahwinanWargaAsing/carianpermohonan.service';

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
  selector: 'app-permohonan-pas-perkahwinan-warga-asing',
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
  templateUrl: './permohonan-pas-perkahwinan-warga-asing.component.html',
  styleUrl: './permohonan-pas-perkahwinan-warga-asing.component.scss'
})
export class PermohonanPasPerkahwinanComponent {
  private _selectedCategory: string = '';
  searchResultsProfile: any[] = [];
  searchResultsPas: any[] = [];
  searchResultsSL: any[] = [];
  searchResultsPergerakan: any[] = [];
  currentStep: number = 1;
  noPengenalan: string = '';
  pageTitle: string = 'Carian Permohon';

  // Modal
  modalVisible = false;
  modalMessage = '';
  modalMode: 'ok' | 'confirm' = 'ok';

  categories: string[] = ['Warganegara/Penduduk Tetap', 'Warga Asing'];

  steps = [{ number: 1, title: 'Carian Pemohon', route: '' }];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private subjectService: SubjectService // ✅ service, not interface
  ) {}

  ngOnInit(): void {
    console.log('Pengurusan Pas Perkahwinan Warga Asing Loaded');

    const state = history.state;
    this.currentStep = state.currentStep || 1;
    console.log('Current Step:', this.currentStep);
  }

  get selectedCategory(): string {
    return this._selectedCategory;
  }

  set selectedCategory(value: string) {
    this._selectedCategory = value;
    this.resetFormFields(); // Reset all fields when category changes
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }

  navigateToStep1() {
    const step1 = this.steps.find((step) => step.number === 1);
    if (step1) {
      this.router.navigate([step1.route]);
    }
  }

  enforce12DigitLimit(event: any): void {
    const input = event.target as HTMLInputElement;
    // Remove non-digit characters
    input.value = input.value.replace(/\D/g, '');

    // Enforce 12-digit max
    if (input.value.length > 12) {
      input.value = input.value.slice(0, 12);
    }

    // Update the ngModel value
    this.noPengenalan = input.value;

    // Auto-trigger search if exactly 12 digits entered
    if (this.noPengenalan.length === 12) {
      this.onSubmit();
    }
  }

  resetFormFields(): void {
    this.noPengenalan = '';
  }

  onRowAction(item: any): void {}

  // onMohonPasClick(): void {
  //   console.log('Redirect to Permohonan Baru Page')
  //   this.currentStep += 1;
  //   this.router.navigate(['./permohonan-baru'], {
  //     relativeTo: this.route,
  //     state: {
  //       currentStep: this.currentStep,
  //     },
  //   });
  //   console.log('Step value:', this.currentStep)
  // }

  onMohonPasClick(): void {
    console.log('Redirect to Permohonan Baru Page');
    this.currentStep += 1;
    this.router.navigate(['./permohonan-baru'], {
      relativeTo: this.route,
    });
  }

  handleConfirmSubmit(): void {
    this.modalVisible = false;
    this.router.navigate([
      '/sec/pengurusan-surat/permohonan-pas-perkahwinan-warga-asing',
    ]);
  }

  handleCancelModal(): void {
    this.modalVisible = false;
    console.log('User clicked Batal / Ok');
  }

  onSubmit() {
    if (!this.noPengenalan) return;

    // Profile
    this.subjectService.getProfile(this.noPengenalan).subscribe((data) => {
      this.searchResultsProfile = data;
    });

    // Pas
    this.subjectService.getPas(this.noPengenalan).subscribe((data) => {
      this.searchResultsPas = data;
    });

    // Senarai Syak
    this.subjectService.getSL(this.noPengenalan).subscribe((data) => {
      this.searchResultsSL = data;
    });

    // Pergerakan
    this.subjectService.getPergerakan(this.noPengenalan).subscribe((data) => {
      this.searchResultsPergerakan = data;
    });
  }
}
