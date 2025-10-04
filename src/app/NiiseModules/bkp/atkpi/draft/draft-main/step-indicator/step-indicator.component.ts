import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-indicator',
  imports: [],
  templateUrl: './step-indicator.component.html',
  styleUrls: [
    '../../../../bkp.scss'
  ]
})
export class StepIndicatorComponent {
  steps = [
  { label: 'Maklumat Pegawai Mendaftar' },
  { label: 'Maklumat Draf Cadangan' }
  ];

 @Input() currentStep = 1;

  isStepActive(stepIndex: number): boolean {
    return this.currentStep === stepIndex;
  }

  isStepCompleted(stepIndex: number): boolean {
    return stepIndex < this.currentStep;
  }
}