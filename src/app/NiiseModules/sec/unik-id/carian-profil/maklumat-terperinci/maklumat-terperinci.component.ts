import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-maklumat-terperinci',
  imports: [FormsModule, PopupComponent],
  templateUrl: './maklumat-terperinci.component.html',
  styleUrls: ['../../unik-id.component.scss'],
})
export class MaklumatTerperinci {
   searchvalue = {
      carian: '',
      identitytype: [
        { div: 'No. Pengenalan' },
        { div: 'No. Dokumen' },
        { div: 'No. Pas' },
        { div: 'No. Badan' }
      ],
    };

  selectedIdentityType: string = '';
  HantarSubmitPopup = false;

  selectedCategory: string = 'pengenalan';

categoryMap: { [key: string]: string } = {
  pengenalan: 'No. Pengenalan',
  dokumen: 'No. Dokumen',
  pas: 'No. Pas',
  badan: 'No. Badan'
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

  goToMaklumatPengganti() {
    // this.router.navigate(['./maklumat-pegawai-pengganti'], { relativeTo: this.route });
  }

  gotoFaceBiometrik(): void{ 
    this.router.navigate(['face-biometrik'], { relativeTo: this.route });
  }

  closeModal() {
    this.HantarSubmitPopup = false;
  }

  showHantarSubmit() {
  // Reset and reopen to ensure visibility
  this.HantarSubmitPopup = false;
  setTimeout(() => {
    this.HantarSubmitPopup = true;
  }, 0); // Short delay allows Angular change detection to register state change
}
}
