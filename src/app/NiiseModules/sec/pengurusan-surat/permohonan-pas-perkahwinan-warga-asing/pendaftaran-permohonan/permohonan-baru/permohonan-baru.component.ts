import { Component, NgModule, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubjectService } from '../../../../../../services/subject.service';

import { IconDirective } from '@coreui/icons-angular';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PermohonanService } from '../../../../../../core/services/sec-services/PermohonanPasPerkahwinanWargaAsing.services';
import { HttpErrorResponse } from '@angular/common/http';
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
  ModalFooterComponent
} from '@coreui/angular';

@Component({
  standalone: true,
  selector: 'app-permohonan-baru',
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
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './permohonan-baru.component.html',
  styleUrls: ['../../../pengurusan-surat-component.scss']
})

export class PermohonanBaruComponent implements OnInit {
  currentStep: number = 1;
  submissionData: any;
  pageTitle: string = "Kategori Pemohon";
  nama: string = '';
  nationality: string = '';
  docsifforeign: string = '';
  // nama: string = '';
  // nama: string = '';
  // nama: string = '';
  // nama: string = '';
  // nama: string = '';


  showSuccessModal: boolean = false;
  showWarningModal: boolean = false;
  showErrorModal: boolean = false;
  negeriBerlepas: string = ''; // bound to the radio buttons
  selectedCategory: string = ''; // bound to dropdown
  selectedregionOffice: string = ''; // bound to the dropdown for region office
  regionOfficesCategory: string[] = [
    'Jabatan Imigresen Malaysia Putrajaya',
    'Jabatan Imigresen Negeri Johor',
    'Jabatan Imigresen Negeri Kedah',
    'Jabatan Imigresen Negeri Kelantan',
    'Jabatan Imigresen Negeri Melaka',
    'Jabatan Imigresen Negeri Negeri Sembilan',
    'Jabatan Imigresen Negeri Pahang',
    'Jabatan Imigresen Negeri Pulau Pinang',
    'Jabatan Imigresen Negeri Perak',
    'Jabatan Imigresen Negeri Perlis',
    'Jabatan Imigresen Negeri Sabah',
    'Jabatan Imigresen Negeri Sarawak',
    'Jabatan Imigresen Negeri Selangor',
    'Jabatan Imigresen Negeri Terengganu',
    'Cawangan Imigresen KLIA',
    'Cawangan Imigresen Langkawi',
    'Cawangan Imigresen Labuan'
  ];
  categories: [string, string] = ['Warganegara / Penduduk Tetap', 'Warga Asing']; // bound to the dropdown
  gender: [string, string] = ['Lelaki', 'Perempuan']; // bound to the dropdown
  public date: Date = new Date();


  ngOnInit(): void {
    console.log('Permohonan Baru loaded');

    console.log('Current Step:', this.currentStep);
  }


  steps = [
    { number: 1, title: 'Maklumat Pemohon', route: '' },
    { number: 2, title: 'Maklumat Pasangan', route: '' },
    { number: 3, title: 'Document Sokongan', route: '' }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private subjectService: SubjectService,
    private permohonanService: PermohonanService
  ) { }

  submitPermohonan(): void {
    const payload = {
      category: this.selectedCategory,
      regionOffice: this.selectedregionOffice,
      // Add more fields based on PengesahanPasPerkahwinanWargaAsingRequestDTO
    };

    this.permohonanService.submitPermohonan(payload).subscribe({
      next: (response) => {
        console.log('Success:', response);
        this.showSuccessModal = true;
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 400) {
          this.showWarningModal = true;
          console.error('Bad request:', error.error);
        } else {
          this.showErrorModal = true;
          console.error('Server error:', error.error);
        }
      }
    });
  }


  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }

  navigateToStep1(): void {
    const step1 = this.steps.find(step => step.number === 1);
    if (step1) this.router.navigate([step1.route]);
  }


  closeSuccessModal(): void {
    this.showSuccessModal = false;
    this.router.navigate(['/sec/pengurusan-edaran-notis/kemas-kini-edaran-notis/']);
  }

  closeErrorModal(): void {
    this.showErrorModal = false;
  }

  resetForm(): void {
    this.negeriBerlepas = '';
    this.selectedCategory = '';
    this.categories = ['Warganegara / Penduduk Tetap', 'Warga Asing'];

  }

  closeWarningModal(): void {
    this.showWarningModal = false;
  }

  prevPage(): void {
    this.currentStep -= 1;

    const navState = {
      currentStep: this.currentStep,
      pageTitle: this.pageTitle
    };

    console.log('Navigating to Pengurusan Surat Kemudahan Berlepas page with state:', navState);

    this.router.navigate(['../'],
      {
        relativeTo: this.route,
        state: navState
      });
  }

  nextPage(): void {
    this.currentStep += 1;

    if (this.currentStep > 3) {
      // This is the final step, submit the form
      this.submitPermohonan();
    } else {
      const navState = {
        currentStep: this.currentStep,
        pageTitle: this.pageTitle,
        negeriBerlepas: this.negeriBerlepas,
        selectedCategory: this.selectedCategory
      };

      this.router.navigate(['../maklumat-pasangan'], {
        relativeTo: this.route,
        state: navState
      });

      console.log("Navigating with state:", navState);
    }
  }

}