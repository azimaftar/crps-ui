import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';
import { ModalSucessSendSaveComponent } from '../../../modal/modal-sucess-send-save/modal-sucess-send-save.component';
import { ModalSucessSendComponent } from '../../../modal/modal-sucess-send/modal-sucess-send.component';
import { BreadcrumbKPOTComponent } from './breadcrumb-KPOT.component';

@Component({
  selector: 'app-kelulusan-permohonan-ot',
  templateUrl: './kelulusan-permohonan-ot.component.html',
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
      ModalSucessSendSaveComponent,
      ModalSucessSendComponent,
      BreadcrumbKPOTComponent
    ],
})
export class KelulusanPermohonanOtComponent {

   // Stepper props
  currentStep = 1;
  steps = [
    { number: 1, title: 'Maklumat lewat', route: '' },
  ];

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  
  kelulusan: string = '';
  // Form model properties
  nama = '';
  bahagian = '';
  ic = '';
  unit = '';
  gred = '';
  kumpulan = '';
  tarikh = '';
  masaMula = '';
  masaAkhir = '';
  syif = '';
  alasan = '';
  digitalSign = '';

 // untuk modalsave
  HantarModalsave = false;

  showHantarModal() {
  // Reset and reopen to ensure visibility
  this.HantarModalsave = false;
  setTimeout(() => {
    this.HantarModalsave = true;
  }, 0); // Short delay allows Angular change detection to register state change
}

  closeModal() {
    this.HantarModalsave = false;
    this.HantarModalsend = false;
  }
// modal end save
//modal send
 HantarModalsend = false;
 showHantarModalsend() {
  // Reset and reopen to ensure visibility
  this.HantarModalsend = false;
  setTimeout(() => {
    this.HantarModalsend = true;
  }, 0); // Short delay allows Angular change detection to register state change
}
// modal end send
 

}
