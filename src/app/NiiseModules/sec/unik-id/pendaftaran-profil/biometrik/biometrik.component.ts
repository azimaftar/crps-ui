import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-biometrik',
  imports: [FormsModule],
  templateUrl: './biometrik.component.html',
  styleUrls: ['../../unik-id.component.scss'],
})
export class BiometrikComponent {
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
}
