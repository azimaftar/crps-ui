import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  CardModule,
  GridModule,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,
  TooltipModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    CardModule,
    GridModule,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    TooltipModule,
    IconModule,
  ],
  templateUrl: './maklumat-agensi.component.html',
  styleUrls: ['../../kebenaran-masuk-israel.component.scss'],
})
export class MaklumatAgensiComponent {
  submitted = false;

  // Stepper
  currentStep = 1;
  steps = [
    { number: 1, title: 'Maklumat Agensi' },
    { number: 2, title: 'Senarai Individu' },
    { number: 3, title: 'Maklumat Individu' },
  ];

  constructor(
    private router: Router
  ) {}


  // ===========================
  // Stepper
  // ===========================
  navigateTo(step: any) {
    this.currentStep = step.number;
  }
  goBack() { this.router.navigate(['/sec/kebenaran-masuk-israel/permohonan-baru']); }

  goToSSMPage() {
  this.submitted = true;
  this.router.navigate(
    ['/sec/kebenaran-masuk-israel/maklumat-ssm'],
  );
}

goToIndividuPage() {
  this.submitted = true;
  this.router.navigate(
    ['/sec/kebenaran-masuk-israel/senarai-individu'],
  );
}

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }
}
