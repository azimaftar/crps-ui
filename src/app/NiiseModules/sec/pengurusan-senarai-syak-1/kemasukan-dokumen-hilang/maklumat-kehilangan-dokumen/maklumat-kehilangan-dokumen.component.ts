import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormSelectDirective,
  ButtonDirective,
} from '@coreui/angular';
import { ProgressFlowComponent } from '../progress-flow/progress-flow.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maklumat-kehilangan-dokumen',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContainerComponent,
    RowComponent,
    ColComponent,
    FormDirective,
    FormControlDirective,
    FormLabelDirective,
    FormSelectDirective,
    ButtonDirective,
    ProgressFlowComponent,
  ],
  templateUrl: './maklumat-kehilangan-dokumen.component.html',
 styleUrls: [
    '../../pengurusan-senarai-syak.component.scss'
  ]})
export class MaklumatKehilanganDokumenComponent {
  private stepRoutes = [
    '/sec/sl/kemasukan-dokumen-hilang',
    '/sec/sl/kemasukan-dokumen-hilang/maklumat-kehilangan-dokumen',
  ];

  step = 1;

  documentForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.documentForm = this.fb.group({
      jenisDocumen: ['101 - PASPORT MALAYSIA SEMENANJUNG'],
      noDokumen: ['AB280960'],
      noFailJim: [''],
      tarikhHilang: [''],
      sebabHilang: [''],
      tarikhTamatDokumen: [''],
      agensiPelapor: [''],
      kodNap: [''],
      nomborNap: [''],
      kodTindakan: [''],
      confirmation: [false],
    });
  }

  resetForm(): void {}

  ngOnInit() {
    this.syncStepWithRoute();
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

  previousStep(): void {
    if (this.step > 1) {
      this.step--;
      this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
        window.scrollTo(0, 0);
      });
    }
  }

  nextStep(): void {
    if (this.step < this.stepRoutes.length) {
      this.router.navigate([this.stepRoutes[this.step]]).then(() => {
        this.step++;
      });
    }
  }

  private syncStepWithRoute(): void {
    const currentPath = this.router.url.split('?')[0]; // Ignore query params
    const currentStep = this.stepRoutes.indexOf(currentPath);
    this.step = currentStep >= 0 ? currentStep + 1 : 1;
  }
}
