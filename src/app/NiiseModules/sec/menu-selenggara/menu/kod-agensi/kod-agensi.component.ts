// src/app/.../kod-agensi/kod-agensi.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
} from '@coreui/angular';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kod-agensi',
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
  ],
  templateUrl: './kod-agensi.component.html',
  styleUrls: ['./kod-agensi.component.scss'],
})
export class KodAgensiComponent {
  title = 'Kod Agensi';

  // Form fields
  kod: string = '';
  agensi: string = '';
  submitted = false;

  // Modal state
  modalVisible = false;
  modalMessage = '';

  constructor(private router: Router) {}

  // Save form action
  saveForm() {
    this.submitted = true;

    // Check required fields
    if (!this.kod || !this.agensi) {
      this.modalMessage = 'Sila isi semua maklumat wajib sebelum hantar.';
      this.modalVisible = true;
      return;
    }

    // If all fields filled
    console.log('Form submitted:', {
      kod: this.kod,
      agensi: this.agensi,
    });

    this.modalMessage = 'Data berjaya disimpan.';
    this.modalVisible = true;
  }

  // Modal OK button
  onModalOk() {
    this.modalVisible = false;
  }

  // Navigation buttons
  goBack() {
    this.router.navigate(['/sec/menu-selenggara/menu']);
  }

  // Stepper props
  currentStep = 2;
  steps = [
    { number: 1, title: 'Carian & Senarai Kod', route: '/sec/menu-selenggara/menu' },
    { number: 2, title: 'Maklumat Kod', route: '' },
  ];

  navigateTo(step: any) {
    this.currentStep = step.number;
    if (step.route) {
      this.router.navigate([step.route]);
    }
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }
}
