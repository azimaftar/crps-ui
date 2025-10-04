import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  CardModule,
  GridModule,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,
  TableDirective,
} from '@coreui/angular';

@Component({
  selector: 'app-papar-maklumat',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,

    // CoreUI
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    CardModule,
    GridModule,
    ButtonDirective,
  ], 
  templateUrl: './papar-maklumat.component.html',
  styleUrls: ['../menu-pertanyaan.component.scss']
})

export class PaparMaklumatComponent implements OnInit {
  itemData: any;
  currentStep: number = 1;
  pageTitle: string = '';


  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
  }

  steps = [
    { number: 1, title: 'Kategori Carian', route: '/sec/permohonan-surat-kemudahan/menu-pertanyaan' },
    { number: 2, title: 'Menu Carian', route: '/sec/permohonan-surat-kemudahan/senarai-syak' },
  ];

  ngOnInit(): void {

    const state = history.state;

    this.itemData = state.data;
    this.pageTitle = (state.pageTitle || '').replace('Senarai Permohonan', '').trim();

    console.log('Processed pageTitle:', this.pageTitle);

    const stepFromState = history.state.currentStep;
    if (stepFromState && typeof stepFromState === 'number') {
      this.currentStep = stepFromState;
    }
    console.log('Received currentStep:', this.currentStep);
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }
}
