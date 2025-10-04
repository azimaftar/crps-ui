import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

type StepItem = { number: number; title: string; route?: string };

@Component({
  selector: 'app-progress-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-flow.component.html',
  styleUrls: ['./progress-flow.component.scss'],
})
export class ProgressFlowComponent {
   @Input() currentStep = 1;
  @Input() steps: StepItem[] = [
    { number: 1, title: 'Carian Permohonan' },
    { number: 2, title: 'Maklumat Pemohon' },
    { number: 3, title: 'Dokumen Sokongan' },
    { number: 4, title: 'Keputusan Permohonan' },
  ];

  @Output() stepChange = new EventEmitter<number>();
  setStep(step: number) { this.stepChange.emit(step); }
  isStepActive(n: number) { return this.currentStep === n; }
  isStepCompleted(n: number) { return this.currentStep > n; }
}