import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-flow.component.html',
  styleUrls: ['../../bkp.scss']
})
export class ProgressFlowComponent {
  @Input() currentStep: number = 1;
  @Output() stepChange = new EventEmitter<number>();

  setStep(step: number) {
    this.stepChange.emit(step);
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }
}