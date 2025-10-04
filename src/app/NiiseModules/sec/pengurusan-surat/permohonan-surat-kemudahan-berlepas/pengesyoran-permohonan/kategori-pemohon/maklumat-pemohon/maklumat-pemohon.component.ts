import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IconDirective } from '@coreui/icons-angular';

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
} from '@coreui/angular';

@Component({
  selector: 'app-maklumat-pemohon',
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
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    CardModule,
    GridModule,
    IconDirective,
  ],
  templateUrl: './maklumat-pemohon.component.html',
  styleUrls: ['../../../../pengurusan-surat-component.scss']
})
export class MaklumatPemohonComponent implements OnInit {

  // State & Navigation
  submissionData: any = {};
  currentStep: number = 3;
  pageTitle: string = 'Maklumat Pemohon';

  // Form Data
  nama = '';
  jenisDokumen = '';
  noDokumen = '';
  jantina = '';
  nomborTelefon = '';
  alamat1 = '';
  alamat2 = '';
  alamat3 = '';
  poskod = '';
  bandar = '';
  negeri = '';
  tujuanPermohonan = '';
  sahkanChecked = false;
  negeriBerlepas = '';
  selectedCategory = '';

  steps = [
    { number: 1, title: 'Carian Pemohon', route: '' },
    { number: 3, title: 'Kategori Pemohon', route: '' },
    { number: 3, title: 'Maklumat Pemohon', route: '' },
    { number: 4, title: 'Pengesyoran', route: '' }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const state = history.state;

    if (state && Object.keys(state).length > 0) {
      this.submissionData = state;

      this.nama = state.nama || '';
      this.jenisDokumen = state.jenisDokumen || '';
      this.noDokumen = state.noDokumen || '';
      this.jantina = state.jantina || '';
      this.nomborTelefon = state.nomborTelefon || '';
      this.alamat1 = state.alamat1 || '';
      this.alamat2 = state.alamat2 || '';
      this.alamat3 = state.alamat3 || '';
      this.poskod = state.poskod || '';
      this.bandar = state.bandar || '';
      this.negeri = state.negeri || '';
      this.tujuanPermohonan = state.tujuanPermohonan || '';
      this.sahkanChecked = state.sahkanChecked || false;

      this.negeriBerlepas = state.negeriBerlepas || '';
      this.selectedCategory = state.selectedCategory || '';
      this.currentStep = state.currentStep || 3;

      console.log('Received state:', this.submissionData);
    } else {
      console.warn('No state received from previous route');
    }
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }

  navigateToStep1(): void {
    const step1 = this.steps.find(step => step.number === 1);
    if (step1) {
      this.router.navigate([step1.route]);
    }
  }

  goBack(): void {
    const navState = {
      ...this.submissionData,
      currentStep: this.currentStep,
      pageTitle: this.pageTitle,
    };

    this.router.navigate(['../'], {
      relativeTo: this.route,
      state: navState
    });

    console.log('⬅️ Navigate to previous page with:', navState);
  }

  private getCurrentTimestamp(): { tarikhHantar: string; waktuHantar: string } {
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');

    return {
      tarikhHantar: `${pad(now.getDate())}:${pad(now.getMonth() + 1)}:${now.getFullYear()}`,
      waktuHantar: `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
    };
  }

  private buildSubmissionData(timestamp: { tarikhHantar: string; waktuHantar: string }) {
    return {
      ...this.submissionData, // retain existing values
      fullUrl: this.router.url,
      tarikhHantar: timestamp.tarikhHantar,
      waktuHantar: timestamp.waktuHantar,
      nama: this.nama,
      jenisDokumen: this.jenisDokumen,
      noDokumen: this.noDokumen,
      jantina: this.jantina,
      nomborTelefon: this.nomborTelefon,
      alamat1: this.alamat1,
      alamat2: this.alamat2,
      alamat3: this.alamat3,
      poskod: this.poskod,
      bandar: this.bandar,
      negeri: this.negeri,
      tujuanPermohonan: this.tujuanPermohonan,
      sahkanChecked: this.sahkanChecked,
      negeriBerlepas: this.negeriBerlepas,
      selectedCategory: this.selectedCategory
    };
  }

  nextPage(): void {
    const timestamp = this.getCurrentTimestamp();
    const updatedSubmission = this.buildSubmissionData(timestamp);

    this.router.navigate(['pengesyoran-permohonan-2'], {
      relativeTo: this.route,
      state: updatedSubmission
    });

    console.log('Navigate to next page with:', updatedSubmission);
  }
}
