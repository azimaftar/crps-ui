import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
} from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { ProgressFlowComponent } from './progress-flow/progress-flow.component';
import { MerekaTemplatEmelEDigitalStampingComponent } from './mereka-templat-emel-e-digital-stamping/mereka-templat-emel-e-digital-stamping.component';
import { QRCodeComponent } from 'angularx-qrcode';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tetapan-e-digital-stamping',
  standalone: true,
  imports: [
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
    RouterLink,
    CommonModule,
    ProgressFlowComponent,
    MerekaTemplatEmelEDigitalStampingComponent,
    QRCodeComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './tetapan-e-digital-stamping.component.html',
  styleUrl: './tetapan-e-digital-stamping.component.scss',
})
export class TetapanEDigitalStampingComponent {
  //qr form
  qrForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.qrForm = this.fb.group({
      inputSize: ['256'],
      JenisFail: ['pdf'],
      ErrCorrection: ['M'],
      dotsColorNormal: ['#000000'],
      cornersStrokeColorNormal: ['#000000'],
      cornersFillColorNormal: ['#000000'],
      dotsShape: ['square'],
      cornersShape: ['square'],
    });
  }

  get qrConfig() {
    return {
      qrdata: 'Qr generator testing',
      width: parseInt(this.qrForm.value.inputSize),
      errorCorrectionLevel: this.qrForm.value.ErrCorrection,
      colorDark: this.qrForm.value.dotsColorNormal,
      colorLight: '#ffffff',
      margin: 0,
      dotsShape: this.qrForm.value.dotsShape, 
      cornersShape: this.qrForm.value.cornersShape, 
    };
  }

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

  onClick() {}

  selectedSaiz: string = '70';

  selectSaiz(value: string) {
    this.selectedSaiz = value;
  }

  personList = [
    {
      bil: '1',
      keterangan: 'logo/imej',
      namadok: '',
      format: 'pdf',
    },
  ];

  //navigate to other pages
  navigateToMerekaTemplat(): void {
    this.router.navigate([
      'sec/tetapan-e-digital-stamping/mereka-templat-emel-e-digital-stamping',
    ]);
  }
}
