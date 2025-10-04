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
  templateUrl: './permohonan-baru.component.html',
  styleUrls: ['../kebenaran-masuk-israel.component.scss'],
})
export class PermohonanBaruComponent {
  submitted = false;

  // Stepper
  currentStep = 1;
  steps = [
    { number: 1, title: 'Senarai Permohonan' },
    // { number: 2, title: 'Maklumat Kod' },
  ];

  constructor(
    private router: Router
  ) {}

 goToKodPage() {
  this.submitted = true;
  this.router.navigate(
    ['/sec/kebenaran-masuk-israel/maklumat-agensi'],
    { state: { mode: 'tambah' } } // pass mode to form
  );
}

  // ===========================
  // Stepper
  // ===========================
  navigateTo(step: any) {
    this.currentStep = step.number;
  }
  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }
}
