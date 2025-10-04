import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-navigation-flow',
  standalone: true,                
  imports: [NgIf, NgForOf],      
  templateUrl: './navigation-flow.component.html',
  styleUrls: ['../../../bkp.scss'] 
})
export class NavigationFlowComponent {
  @Input() currentStep = 1;
  @Output() stepChange = new EventEmitter<number>();

  steps = [
    { number: 1, title: 'Carian Vaksin', route: '/bkp/pengurusan-vaksin/daftar-kemaskini-vaksin' },
    { number: 2, title: 'Daftar Maklumat Vaksin', route: '/bkp/pengurusan-vaksin/daftar-kemaskini-vaksin/daftar-vaksin' }
  ];

  step = 1; 
  private router = inject(Router);
  private stepRoutes = [
    'bkp/pengurusan-vaksin/daftar-kemaskini-vaksin',
    'bkp/pengurusan-vaksin/daftar-kemaskini-vaksin/daftar-vaksin'
  ];

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

   onStepChange(newStep: number) {
    this.step = newStep;
    this.navigateToStep();
  }

  private navigateToStep(): void {
    this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
      window.scrollTo(0, 0);
    });
  }

    navigateTo(step: any) {
    this.currentStep = step.number;
    if (step.route) {
      this.router.navigate([step.route]);
    }
  }

  nextStep(): void {
    if (this.step < this.stepRoutes.length) {
      this.router.navigate([this.stepRoutes[this.step]]).then(() => {
        this.step++;
      });
    }
  }

  previousStep(): void {
    if (this.step > 1) {
      this.step--;
      this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
        window.scrollTo(0, 0);
      });
    }
  }
}
