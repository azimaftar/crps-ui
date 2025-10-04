import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-carian-profil',
  imports: [FormsModule, PopupComponent],
  templateUrl: './maklumat-profil-individu.component.html',
  styleUrl: './maklumat-profil-individu.component.scss',
})
export class MaklumatProfilIndividu {
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

  PengecualianPopup = false;

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

  gotoMaklumatTerperinci(){ 
    this.router.navigate(['./maklumat-terperinci'], { relativeTo: this.route });
  }

  gotoBiometrik(){
    this.router.navigate(['./biometrik'], { relativeTo: this.route });
  }
  
  closeModal() {
    this.PengecualianPopup = false;
  }

  showPengecualian() {
  // Reset and reopen to ensure visibility
  this.PengecualianPopup = false;
  setTimeout(() => {
    this.PengecualianPopup = true;
  }, 0); // Short delay allows Angular change detection to register state change
}
}
