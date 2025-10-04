import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { OnSubmitComponent } from '../on-submit/on-submit.component';
// import { ModalSucessSendComponent } from "../../../modal-sucess-send/modal-sucess-send.component";

@Component({
  selector: 'app-maklumat-pegawai-pengganti',
  imports: [FormsModule, CommonModule,OnSubmitComponent],
  standalone: true,
  templateUrl: './maklumat-pegawai-pengganti.component.html',
  styleUrls: [
    '../../../bkp.scss'
  ],
})
export class MaklumatPegawaiPenggantiComponent {
  pengganti = {
  nama: 'Muhammad Hilmi Bin Hashim',
  ic: '780514-10-5649',
  bahagian: [
    { div: 'Bahagian Dasar & Perancangan' }
  ],
  unit: [
    { nit: 'Unit Pengurusan Aset' }
  ],
  gred: 'N41-Penolong Kanan Tadbir',
  group: [
    { kumpulan: 'A' },
    { kumpulan: 'B' },
    { kumpulan: 'C' }
  ],
  setuju: ''
};

  keputusan: string | null = null;
  catatan: string = '';
  setuju: boolean = false;

  currentStep = 2;
  maxStep = 2;

  HantarSubmitPopup = false;
  HantarSimpanPopup = false;

  toggleRadio(value: string): void {
  if (this.keputusan === value) {
    this.keputusan = null;  // unselect if clicked again
  } else {
    this.keputusan = value;
  }
}

  constructor(private router: Router, private route: ActivatedRoute) {}

  goToNextStep() {}

  goToPreviousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  isStepActive(step: number): boolean {
    return this.currentStep === step;
  }

  isStepCompleted(step: number): boolean {
    return this.currentStep > step;
  }

  goToMaklumatPemohon() {
    this.router.navigate(['/permohonan-gantian-tugas'], { relativeTo: this.route });
  }

 closeModal() {
    this.HantarSubmitPopup = false;
    this.HantarSimpanPopup = false;
  }

  showHantarSubmit() {
  // Reset and reopen to ensure visibility
  this.HantarSubmitPopup = false;
  setTimeout(() => {
    this.HantarSubmitPopup = true;
  }, 0); // Short delay allows Angular change detection to register state change
}

showHantarSimpan() {
  // Reset and reopen to ensure visibility
  this.HantarSimpanPopup = false;
  setTimeout(() => {
    this.HantarSimpanPopup = true;
  }, 0); // Short delay allows Angular change detection to register state change
}
}
