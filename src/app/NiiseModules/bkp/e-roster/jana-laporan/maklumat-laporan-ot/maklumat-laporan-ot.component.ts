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
  selector: 'app-maklumat-laporan-ot',
  templateUrl: './maklumat-laporan-ot.component.html',
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
export class MaklumatLaporanOTComponent {
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

  //table start
  searchForm = {
    Bahagian: '',
    Unit: '',
    kumpulan: '',
    namaPegawai: '',
    nomorKad: '',
    GredJawatan: '',
    CatatanPegawai: '',
    TarikhLewat: '',
    masaLewat: '',
    Kelulusan: '',
     masain: '',
  };

  selectAllLulus = false;

  kelewatanList = [
    {
      TarikhLewat: '23/01/2025',
      masaLewat: '10:30 a.m.',
      masain: '10:30 a.m.',
    },
    {
      
      TarikhLewat: '23/01/2025',
      masaLewat: '10:00 a.m.',
      masain: '10:59 a.m',
    },
    {
      TarikhLewat: '23/01/2025',
      masaLewat: '9:15 a.m.',
      masain: '12:12 a.m',
    }
  ];
  // end
}
