import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maklumat-draf',
  imports: [FormsModule, CommonModule],
  templateUrl: './maklumat-draf.component.html',
  styleUrls: [
    '../../../../../bkp.scss'
  ]
})
export class MaklumatDrafComponent {

  currentStep = 2;
    maxStep = 2;
    showSuccessPopup = false;
    showSavePopup = false;
  
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
  
    goToMaklumatPegawai() {
      this.router.navigate(['../maklumat-pegawai'], { relativeTo: this.route });
    }
  
    onSubmit() {
      this.showSuccessPopup = true;
    }
  
    onSave() {
      this.showSavePopup = true;
    }
  
    closePopup() {
      this.showSuccessPopup = false;
      this.showSavePopup = false;
    }

}
