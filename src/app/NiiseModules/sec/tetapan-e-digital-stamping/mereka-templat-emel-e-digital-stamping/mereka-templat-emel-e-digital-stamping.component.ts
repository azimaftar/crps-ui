import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this import
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
import { ProgressFlowComponent } from './progress-flow/progress-flow.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mereka-templat-emel-e-digital-stamping',
  standalone: true, // Add this line
  imports: [
    CommonModule, // Add this import
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
    FormDirective,
    FormLabelDirective,
    FormControlDirective,
    FormTextDirective,
    FormSelectDirective,
    ProgressFlowComponent,
  ],
  templateUrl: './mereka-templat-emel-e-digital-stamping.component.html',
  styleUrls: ['../tetapan-e-digital-stamping.component.scss']
})
export class MerekaTemplatEmelEDigitalStampingComponent {
  showCcBccLinks = false;
  showCcField = false;
  showBccField = false;

  constructor(private router: Router) {}

  onToFieldFocus() {
    this.showCcBccLinks = true;
  }

  onToFieldBlur() {
    // You can choose to hide the links when losing focus
    // this.showCcBccLinks = false;
  }

  showCc() {
    this.showCcField = true;
  }

  showBcc() {
    this.showBccField = true;
  }

  //side flow
  step = 1;

  private stepRoutes = [
    '/sec/tetapan-e-digital-stamping/mereka-templat-emel-e-digital-stamping',
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

  navigateToTetapanEdigital(): void {
    this.router.navigate(['sec/tetapan-e-digital-stamping']);
  }
}
