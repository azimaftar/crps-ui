import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maklumat-radius',
  imports: [FormsModule, CommonModule],
  templateUrl: './maklumat-radius.component.html',
  styleUrls: [
    '../../../bkp.scss'
  ],
})
export class MaklumatRadiusComponent {
  radius = {
    lokasi: 'Prima 10',
    koordinat: '2°54\'51.8"N 101°39\'23.8"E',
    julat: '15000 meter',
  };

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
