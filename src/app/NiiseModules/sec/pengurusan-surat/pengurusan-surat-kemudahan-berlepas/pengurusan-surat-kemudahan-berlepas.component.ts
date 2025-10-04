import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModalComponent } from '../../shared-modal/shared-modal.component';
import { SubjectService, Subject } from '../../../../services/subject.service';
import { IconDirective } from '@coreui/icons-angular';

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
  selector: 'app-pengurusan-surat-kemudahan-berlepas',
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
  templateUrl: './pengurusan-surat-kemudahan-berlepas.component.html',
  styleUrls: ['../pengurusan-surat-component.scss'],
})
export class PengurusanSuratKemudahanBerlepasComponent {
  private _selectedCategory: string = '';
  searchResults: any[] = [];
  currentStep: number = 1;
  noPengenalan: string = '';
  pageTitle: string = "Carian Senarai Syak Yang Membuat Permohonan Kemudahan Berlepas";

  // Modal
  modalVisible = false;
  modalMessage = '';
  modalMode: 'ok' | 'confirm' = 'ok';

  categories: string[] = [
    'Warganegara/Penduduk Tetap',
    'Warga Asing',
  ];  

  steps = [
    { number: 1, title: 'Carian & Senarai Subjek', route: '' },
    { number: 2, title: 'Kategori Pemohon', route: '' },
    { number: 3, title: 'Maklumat Pemohon', route: '' }
  ];

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) {}

  ngOnInit(): void {
    console.log('Pengurusan Surat Kemudahan Loaded');

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
    const step1 = this.steps.find(step => step.number === 1);
    if (step1) {
      this.router.navigate([step1.route]);
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
    this.noPengenalan = input.value;
  }  

  resetFormFields(): void {
    this.noPengenalan = ''
  }

  onRowAction(item: any): void {

  }

  onSuratKemudahanClick(): void {
    console.log('Redirect to Permohonan Baru Page')
    this.currentStep += 1;
    this.router.navigate(['./permohonan-baru'], {
      relativeTo: this.route,
      state: {
        currentStep: this.currentStep,
      },
    });
    console.log('Step value:', this.currentStep)
  }  

  handleConfirmSubmit(): void {
    this.modalVisible = false;
    this.router.navigate([
      '/sec/pengurusan-surat/pengurusan-surat-kemudahan-berlepas',
    ]);
  }  

  handleCancelModal(): void {
    this.modalVisible = false;
    console.log('User clicked Batal / Ok');
  }  

  onSubmit(): void {
    const currentUrl = this.router.url.replace('/', '');
    const kategoriCarian = this.selectedCategory
    const noPengenalan = this.noPengenalan.trim();
    console.log("Current URL:", currentUrl)
    console.log("Kategori Carian:", kategoriCarian)
    console.log("No Pengenalan:", noPengenalan)

    if (!noPengenalan || !kategoriCarian) {
      console.log("Tidak lengkap.")
    }

    this.subjectService.searchByPengenalan(noPengenalan, kategoriCarian, currentUrl)
      .subscribe((results) => {
        if (results.length === 0) {
          this.modalMessage = 'Tiada rekod dijumpai';
          this.modalMode = 'ok';
          this.modalVisible = true;
        } else {
          this.searchResults = results;
        }
      }, (err) => {
        console.error('Error fetching data:', err);
        this.modalMessage = 'Ralat semasa mencari data';
        this.modalMode = 'ok';
        this.modalVisible = true;
      });
  }
}
