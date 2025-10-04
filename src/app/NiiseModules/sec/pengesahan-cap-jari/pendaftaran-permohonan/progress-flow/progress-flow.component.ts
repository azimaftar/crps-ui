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

  // UNTUK STEPPER TEPI
  // @Input() currentStep: number = 1;
  // @Output() stepChange = new EventEmitter<number>();

  // setStep(step: number) {
  //   this.stepChange.emit(step);
  // }

  // isStepCompleted(stepNumber: number): boolean {
  //   return this.currentStep > stepNumber;
  // }

  // isStepActive(stepNumber: number): boolean {
  //   return this.currentStep === stepNumber;
  // }

  // UNTUK STEPPER HORIZONTAL
  @Input() currentStep: number = 1;

  // You can override this from the parent; defaults match your flow
  @Input() steps: StepItem[] = [
    { number: 1, title: 'Carian Permohonan' },
    { number: 2, title: 'Maklumat Pemohon' },
    { number: 3, title: 'Dokumen Sokongan' },
  ];

  @Output() stepChange = new EventEmitter<number>();

  setStep(step: number) {
    this.stepChange.emit(step);
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }

}