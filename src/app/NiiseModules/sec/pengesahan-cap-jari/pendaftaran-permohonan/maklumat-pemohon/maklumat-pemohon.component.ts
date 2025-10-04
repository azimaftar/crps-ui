import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
import { Router } from '@angular/router';
import { ProgressFlowComponent } from '../progress-flow/progress-flow.component';
// import { CardComponent, CardModule, ColComponent, GridModule, NavModule, RowComponent } from '@coreui/angular';
// import { ModalModule, ButtonModule } from '@coreui/angular';
// import { inject } from '@angular/core';
// import { OnInit } from '@angular/core';

@Component({
  selector: 'app-maklumat-pemohon',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule, // Added for [(ngModel)]
    ContainerComponent,
    RowComponent,
    ColComponent,
    FormDirective,
    FormControlDirective,
    // FormLabelDirective,
    // FormSelectDirective,
    // ButtonDirective,
    ProgressFlowComponent,
    // CardModule,
    // GridModule,
    // NavModule,
    // ModalModule,
    // ButtonModule,
    // CardComponent,
  ],
  templateUrl: './maklumat-pemohon.component.html',
  styleUrls: ['./maklumat-pemohon.component.scss']
})
export class MaklumatPemohonComponent {

  step: number = 1;

  documentForm: FormGroup;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
    this.documentForm = this.fb.group({
      jenisPengesahan: [''],
      nama: [''],
      noIc: [''],
      tarikhLahir: [''],
      jantina: [''],
      alamat: [''],
      poskod: [''],
      bandar: [''],
      negeri: [''],
      noRujukan: [''],
      tarikhSurat: [''],
    });
  }

   private stepRoutes = [
    '/sec/pengesahan-cap-jari/pendaftaran-permohonan',
    '/sec/pengesahan-cap-jari/pendaftaran-permohonan/maklumat-pemohon',
    '/sec/pengesahan-cap-jari/pendaftaran-permohonan/dokumen-sokongan',
  ];


  resetForm(): void {
    this.documentForm.reset();
  }

  ngOnInit() {
    this.syncStepWithRoute();
  }

  onStepChange(newStep: number) {
    this.step = newStep;
    this.navigateToStep();
  }

  private navigateToStep(): void {
    // this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
    //   window.scrollTo(0, 0);
    // });

    if (this.step >= 1 && this.step <= this.stepRoutes.length) {
      this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
        window.scrollTo(0, 0);
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

  nextStep(): void {
    if (this.step < this.stepRoutes.length) {
      this.step++; // Increment step first
      this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
        window.scrollTo(0, 0);
      });
    }
  }

  private syncStepWithRoute(): void {
    const currentPath = this.router.url.split('?')[0]; // Ignore query params
    const currentStep = this.stepRoutes.indexOf(currentPath);
    this.step = currentStep >= 0 ? currentStep + 1 : 1;
  }
  
}
