import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';
import { BreadcrumbClockoutlocationComponent } from './breadcrumb-Clockoutlocation.component';
import { ModalSucessSendSaveComponent } from '../../../modal/modal-sucess-send-save/modal-sucess-send-save.component';
import { ModalSucessSendComponent } from '../../../modal/modal-sucess-send/modal-sucess-send.component';

@Component({
  selector: 'app-maklumat-clock-out-location',
  templateUrl: './maklumat-clock-out-location.component.html',
  styleUrls: [
    '../../../bkp.scss'
  ],
    standalone: true,
    imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    BreadcrumbClockoutlocationComponent,
    ModalSucessSendSaveComponent,
    ModalSucessSendComponent
  ]
})
export class MaklumatClockOutLocationComponent {

  // Stepper props
  currentStep = 1;
  steps = [
    { number: 1, title: 'Maklumat Clock Out', route: '' },
  ];

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }
 nama = '';
  bahagian = '';
  ic = '';
  sebabluarkawasan = '';
  catatan = '';
  unit = '';
  gred = '';
  kumpulan = '';
  tarikh = '';
  masaMula = '';
  masaAkhir = '';
  lokasiin = '';
  lokasiout = '';
  syif = '';
  alasan = '';
  digitalSign = '';
// rekod sucess modal
 HantarModalsave = false;
 HantarModalsend = false;

  
  showHantarModal() {
  // Reset and reopen to ensure visibility
  this.HantarModalsave = false;
  setTimeout(() => {
    this.HantarModalsave = true;
  }, 0); // Short delay allows Angular change detection to register state change
}
 showHantarModalsend() {
  // Reset and reopen to ensure visibility
  this.HantarModalsend = false;
  setTimeout(() => {
    this.HantarModalsend = true;
  }, 0); // Short delay allows Angular change detection to register state change
}

  closeModal() {
    this.HantarModalsave = false;
    this.HantarModalsend = false;

  }
  //end modal
}
