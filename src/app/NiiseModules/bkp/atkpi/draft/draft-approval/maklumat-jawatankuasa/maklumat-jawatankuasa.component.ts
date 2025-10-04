import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maklumat-jawatankuasa',
  imports: [FormsModule],
  templateUrl: './maklumat-jawatankuasa.component.html',
  styleUrls: ['../../../../bkp.scss']
})
export class MaklumatJawatankuasaComponent {

  pegawai = {
    nama: 'Siti Nur Afiqah Binti Ramlan',
    noPerkhidmatan: 'J1234567',
    gredJawatan: 'N41 - Pegawai yang Diculik',
    email: 'sitiafiqah@imi.gov.my',
    unit: 'Unit Pemeriksaan Laluan Masuk',
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

  goToMaklumatDraf() {
    this.router.navigate(['../maklumat-draf'], { relativeTo: this.route });
  }

}
