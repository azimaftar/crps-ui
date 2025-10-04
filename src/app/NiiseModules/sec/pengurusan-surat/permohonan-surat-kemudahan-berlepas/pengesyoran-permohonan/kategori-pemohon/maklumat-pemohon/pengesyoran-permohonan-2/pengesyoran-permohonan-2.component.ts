import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { SharedModalComponent } from '../../../../../../shared-modal/shared-modal.component';
import { SubjectService } from '../../../../../../../../services/subject.service';

import {
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,  
  ButtonDirective,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,  
} from '@coreui/angular'
@Component({
  selector: 'app-pengesyoran-permohonan-2',
  imports: [
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    ButtonDirective,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,      
    IconDirective,

    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,  
    SharedModalComponent,
  ],
  templateUrl: './pengesyoran-permohonan-2.component.html',
  styleUrls: ['../../../../../pengurusan-surat-component.scss']
})
export class PengesyoranPermohonan2Component implements OnInit{
  pageTitle: string = 'Pengesyoran Permohonan';
  statusPengesyoran: string = '';
  catatanPengesyoran: string = '';
  nama: string = '';
  idPengguna: string = '';
  tarikhPengesyoranPermohonan: string = '';
  submissionData: any;

  currentStep: number = 4;

  modalVisible = false;
  modalMessage = '';
  modalMode: 'ok' | 'confirm' = 'ok';

  steps = [
    { number: 1, title: 'Carian Pemohon', route: '' },
    { number: 3, title: 'Kategori Pemohon', route: '' },
    { number: 3, title: 'Maklumat Pemohon', route: '' },
    { number: 4, title: 'Pengesyoran', route: '' }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit triggered');
    const state = history.state;
    console.log('history.state:', state);

    if (state && state.nama) {
      this.submissionData = state;
      this.nama = state.nama || '';

      console.log('Data received from previous page:', state);
      console.log("Submission Data Nama:", state.nama);
      console.log('Nama:', this.nama);
    } else {
      console.warn('No usable data in history.state');
    }

    this.tarikhPengesyoranPermohonan = this.getCurrentTimestamp();
  }

  // Generate Date and Time Functions
  /*************************************************************/
  private getCurrentTimestamp(): string {
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');

    const tarikhPengesyoranPermohonan = `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`;
    const waktuPengesyoranPermohonan = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    return `${tarikhPengesyoranPermohonan} ${waktuPengesyoranPermohonan}`;
  }
  /*************************************************************/

  // Stepper Functions
  /*************************************************************/
  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }
  /*************************************************************/

  // Reset Input Function
  /*************************************************************/
  setSemula(): void {
    this.statusPengesyoran = '';
    this.catatanPengesyoran = '';
  }


  // Go to Prev Page Function
  /*************************************************************/
  goBack(): void {
  const navState = {
    pageTitle: this.pageTitle,
    data: {
      ...this.submissionData,
      statusPengesyoran: this.statusPengesyoran,
      catatanPengesyoran: this.catatanPengesyoran
    }
  };

  this.router.navigate(['../'], {
    relativeTo: this.route,
    state: navState
  });

  console.log("Navigate to prev page with:", navState) 
  }
  /*************************************************************/

  // Submit Function
  /*************************************************************/
  openSubmitModal(): void {
    this.modalMessage = 'Permohonan telah disyorkan'; // SEC-S005
    this.modalMode = 'ok';
    this.modalVisible = true;
  }

  hantar(): void {
  const fullSubmission = {
    ...this.submissionData,
    pageTitle: this.pageTitle,
    statusPengesyoran: this.statusPengesyoran,
    catatanPengesyoran: this.catatanPengesyoran
  };

  this.subjectService.submitAll(fullSubmission).subscribe({
    next: (res) => {
      console.log('Final submission successful:', res);
    },
    error: (err: any) => {
      console.error('Final submission failed:', err);
    },
  });  

  this.router.navigate(['../../../'], {
    relativeTo: this.route,
    state: fullSubmission
  });

  console.log("Navigate back to main page:", fullSubmission) 
  }
  /*************************************************************/  

  // Ya Modal Function
  /*************************************************************/  
  handleConfirmSubmit(): void {
    this.modalVisible = false;
    this.hantar();
  }  
  /*************************************************************/  

  // Tidak Modal Function
  /*************************************************************/  
  handleCancelModal(): void {
    this.modalVisible = false;
    console.log('User clicked Batal / Ok');
  }
  /*************************************************************/  
}
