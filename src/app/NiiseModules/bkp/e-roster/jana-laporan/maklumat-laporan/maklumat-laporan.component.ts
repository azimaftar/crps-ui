import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';
@Component({
  selector: 'app-maklumat-laporan',
  templateUrl: './maklumat-laporan.component.html',
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
  ]
})
export class MaklumatLaporanComponent {
 nama = '';
  bahagian = '';
  ic = '';
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
