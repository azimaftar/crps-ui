import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-face-biometrik',
  imports: [FormsModule, PopupComponent],
  templateUrl: './face-biometrik.component.html',
  styleUrl: './face-biometrik.component.scss',
})
export class FaceBiometrikComponent {
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

  selectedCategory: string = 'pengenalan';

categoryMap: { [key: string]: string } = {
  pengenalan: 'No. Pengenalan',
  dokumen: 'No. Dokumen',
  pas: 'No. Pas',
  badan: 'No. Badan'
};

  currentStep = 1;
  maxStep = 2;

  HantarSubmitPopup = false;

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

  goToStatusBiometrik() {
    this.router.navigate(['./status-biometrik'], { relativeTo: this.route });
  }

  goToMaklumatPengganti(){
    
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
