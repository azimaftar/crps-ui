import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-horizontal-stepper',
  imports: [CommonModule],
  templateUrl: './horizontal-stepper.component.html',
  styleUrls: ['../../../../bkp.scss']
})
export class HorizontalStepperComponent {
  // Stepper props
  @Input() currentStep = 1;
  @Input() isInvalid: boolean | null = false;
  steps = [
    { number: 1, title: 'Maklumat Pegawai Mendaftar', route: '../maklumat-pegawai-mendaftar' },
    { number: 2, title: 'Maklumat Draf Cadangan', route: '../maklumat-draf-cadangan' }
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  navigateTo(step: any) {
    this.currentStep = step.number;
    if (step.route) {
      this.router.navigate([step.route], { relativeTo: this.route });
    }
  }
}
