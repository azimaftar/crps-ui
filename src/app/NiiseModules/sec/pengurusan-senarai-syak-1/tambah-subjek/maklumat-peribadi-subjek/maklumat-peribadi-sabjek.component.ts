import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgressFlowComponent } from './progress-flow/progress-flow.component';

@Component({
  selector: 'app-maklumat-peribadi-sabjek',
  standalone: true,
  imports: [CommonModule, FormsModule, ProgressFlowComponent],
  templateUrl: './maklumat-peribadi-sabjek.component.html',
  styleUrls: [
    '../../pengurusan-senarai-syak.component.scss'
  ]
})
export class MaklumatPeribadiSabjekComponent implements OnInit {
  step = 1;
  activeTab: number = 1;

  private stepRoutes = [
    '/sec/sl/tambah-subjek',
    '/sec/sl/tambah-subjek/maklumat-tindakan',
    '/sec/sl/tambah-subjek/dokumen-sokongan',
  ];

  // ======================
  // Form Data: Peribadi
  // ======================
  nama: string = 'Aiman Bin Kasim';
  noKadPengenalan: string = '890211049901';
  jenisPengenalan: string = 'ic';
  noDokumen: string = 'A8032111';
  jenisDokumen: string = 'passport_malaysia';
  warganegara: string = 'malaysia';
  bangsa: string = 'melayu';
  tarikhLahir: string = '1989-02-11';
  jantina: string = 'lelaki';
  negaraLahir: string = 'malaysia';
  tempatLahir: string = 'Pahang';
  unikId: string = '';
  dataBiometrik: string = '';
  catatanFizikal: string = '';
  catatanTambahan: string = '';

  // ======================
  // Form Data: Syarikat
  // ======================
  nomborSyarikat: string = '';
  namaSyarikat: string = '';
  tarikhSuratAgensi: string = '';
  tarikhSijilAgensi: string = '';

  confirmation: boolean = false;
  constructor(private router: Router) {}

  // OnInitialized
  ngOnInit(): void {
    this.syncStepWithRoute();
  }

  private syncStepWithRoute(): void {
  const currentPath = this.router.url.split('?')[0]; // Ignore query params
  const currentStep = this.stepRoutes.indexOf(currentPath);
  this.step = currentStep >= 0 ? currentStep + 1 : 1;
}

//tab maklumat peribadi subjek/Kastam/LhDN
  setActiveTab(tab: number): void {
    this.activeTab = tab;
  }

  resetForm(): void {
    this.nomborSyarikat = '';
    this.namaSyarikat = '';
    this.tarikhSuratAgensi = '';
    this.confirmation = false;
    console.log('Form reset');
  }


// button next and previous
  onStepChange(newStep: number): void {
    this.step = newStep;
    this.navigateToStep();
  }

  nextStep(): void {
    if (this.step < this.stepRoutes.length) {
      this.step++;
      this.navigateToStep();
    }
  }

  previousStep(): void {
    if (this.step > 1) {
      this.step--;
      this.navigateToStep();
    }
  }

  private navigateToStep(): void {
    this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
      window.scrollTo(0, 0); // Optional: scroll to top
    });
  }

  
}
