import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@coreui/angular';

@Component({
  selector: 'app-semakan-permohonan',
  templateUrl: './semakan-permohonan.component.html',
  styleUrls: ['./semakan-permohonan.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, GridModule],
})
export class SemakanPermohonanComponent {


  // Stepper
  currentStep = 1;

  steps = [
    { number: 1, title: 'Carian Permohonan' },
    { number: 2, title: 'Maklumat Permohonan' },
    { number: 3, title: 'Keputusan Permohonan' }
  ];

  // Carian fields
  kategoriCarian: string = '';
  noCarian: string = '';
  nama: string = '';
  warganegara: string = '';
  tarikhLahir: string = '';

  // Dropdown negara contoh
  senaraiNegara: string[] = ['Malaysia', 'Indonesia', 'Thailand', 'Singapura'];

  // Senarai hasil carian
  senaraiPermohonan: any[] = [];

  // Step 2 & 3 data contoh
  maklumatPermohonan: any = null;
  keputusanPermohonan: any = null;

  // ------------------------------
  // Stepper Navigation
  // ------------------------------
  goToStep(step: number) {
    this.currentStep = step;
  }

  goToNextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

  goToPreviousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  // ------------------------------
  // Function Carian
  // ------------------------------
  cariPermohonan() {
  if (this.kategoriCarian === 'dokumen' && this.noCarian.trim() !== '') {
    // Data dummy untuk carian berdasarkan dokumen
    this.senaraiPermohonan = [
      {
        noDokumen: this.noCarian,
        nama: this.nama || 'Milia Dilan',
        warganegara: this.warganegara || 'Indonesia',
        tarikhLahir: this.tarikhLahir || '1990-01-31',
        status: 'Aktif'
      }
    ];
  } 
  else if (this.kategoriCarian === 'ic' && this.noCarian.trim() !== '') {
    // Data dummy untuk carian berdasarkan IC
    this.senaraiPermohonan = [
      {
        noDokumen: this.noCarian,  // IC sebagai noDokumen
        nama: 'Ahmad Firdaus',
        warganegara: 'Malaysia',
        tarikhLahir: '1995-05-21',
        status: 'Selesai'
      },
      {
        noDokumen: this.noCarian,
        nama: 'Siti Aminah',
        warganegara: 'Malaysia',
        tarikhLahir: '1998-03-15',
        status: 'Dalam Proses'
      }
    ];
  } 
  else {
    this.senaraiPermohonan = [];
  }
}

  // ------------------------------
  // Bila pilih satu permohonan
  // ------------------------------
  pilihPermohonan(permohonan: any) {
    this.maklumatPermohonan = permohonan;
    this.goToStep(2);
  }

  // Simpan keputusan (contoh Step 3)
  simpanKeputusan() {
    this.keputusanPermohonan = {
      noRujukan: this.maklumatPermohonan.noRujukan,
      status: 'Lulus',
      tarikh: new Date()
    };
    this.goToStep(3);
  }
}
