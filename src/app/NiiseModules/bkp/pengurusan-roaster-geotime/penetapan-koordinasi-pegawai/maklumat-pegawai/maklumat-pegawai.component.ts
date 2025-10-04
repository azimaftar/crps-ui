import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maklumat-pegawai',
  imports: [FormsModule],
  templateUrl: './maklumat-pegawai.component.html',
  styleUrls: [
    '../../../bkp.scss'
  ]
,
})
export class MaklumatPegawaiComponent {
  pegawai = {
    nama: 'Siti Nur Afiqah Binti Ramlan',
    bahagian: 'Bahagian Pengurusan Operasi Lanjutan',
    nokp: '971227-10-5416',
    unit: 'Unit Pemeriksaan Laluan Masuk',
    gredJawatan: 'N41 - Pegawai yang Diculik',
    kumpulan: '123',
  };

  currentStep = 1;
  maxStep = 2;

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

  goToMaklumatRadius() {
    this.router.navigate(['../maklumat-radius'], { relativeTo: this.route });
  }
}
