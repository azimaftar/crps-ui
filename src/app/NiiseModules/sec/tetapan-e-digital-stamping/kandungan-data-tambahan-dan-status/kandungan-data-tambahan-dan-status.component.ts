import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilPlus } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import {
  BorderDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  RowComponent,
  ContainerComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormCheckComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormTextDirective,
  FormSelectDirective,
} from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgressFlowComponent } from '../progress-flow/progress-flow.component';

@Component({
  selector: 'app-kandungan-data-tambahan-dan-status',
  imports: [
    IconDirective,
    IconModule,
    RowComponent,
    ColComponent,
    CardComponent,
    BorderDirective,
    CardHeaderComponent,
    CardBodyComponent,
    CardTitleDirective,
    CardTextDirective,
    ButtonDirective,
    ContainerComponent,
    DropdownComponent,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    ReactiveFormsModule,
    FormsModule,
    FormDirective,
    FormLabelDirective,
    FormControlDirective,
    FormTextDirective,
    FormSelectDirective,
    CommonModule,
    ProgressFlowComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    FormCheckComponent,
  ],
   providers: [IconSetService],
  templateUrl: './kandungan-data-tambahan-dan-status.component.html',
  styleUrls: ['../tetapan-e-digital-stamping.component.scss']
})
export class KandunganDataTambahanDanStatusComponent {
  icons = { cilPlus };
  constructor(private router: Router) {}

  step = 1;

  private stepRoutes = [
    '/sec/tetapan-e-digital-stamping',
    '/sec/tetapan-e-digital-stamping/kandungan-asas-mrz',
    '/sec/tetapan-e-digital-stamping/kandungan-data-tambahan-dan-status',
  ];

  // OnInitialized
  ngOnInit(): void {
    this.syncStepWithRoute();
  }

  private syncStepWithRoute(): void {
    const currentPath = this.router.url.split('?')[0]; // Ignore query params
    const currentStep = this.stepRoutes.indexOf(currentPath);
    this.step = currentStep >= 0 ? currentStep + 1 : 1;
  }

  // button next and previous
  onStepChange(newStep: number): void {
    this.step = newStep;
    this.navigateToStep();
  }

  nextStep(): void {
    if (this.step < this.stepRoutes.length) {
      this.step++;
      this.navigateToStep();
    }
  }

  previousStep(): void {
    if (this.step > 1) {
      this.step--;
      this.navigateToStep();
    }
  }

  private navigateToStep(): void {
    this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
      window.scrollTo(0, 0); // Optional: scroll to top
    });
  }
}
