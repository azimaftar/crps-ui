
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
  FormModule
} from '@coreui/angular';
import { ModalSucessSendSaveComponent } from '../../modal/modal-sucess-send-save/modal-sucess-send-save.component';
import { ModalSucessSendComponent } from '../../modal/modal-sucess-send/modal-sucess-send.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pass-ot',
  templateUrl: './pass-ot.component.html',
  styleUrls: ['../../bkp.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    FormModule,
    ModalSucessSendSaveComponent,
    ModalSucessSendComponent
  ],
})
export class PassOtComponent {

  constructor(private router: Router) {}

  isModalVisible = false;

  searchResults: any[] = [];

  searchForm = {
    Bahagian: '',
    Unit: '',
    kumpulan: '',
    namaPegawai: '',
    nomorKad: '',
    GredJawatan: '',
    CatatanPegawai: '',
    Tarikh: '',
    masaMulaOT: '',
    Kelulusan: '',
    masaAkhirOt: '',
  };

  selectAllLulus = false;

  kelewatanList = [
    {
      namaPegawai: 'raziq rashid',
      nomorKad: '991202102312',
      GredJawatan: 'N3',
      Bahagian: 'Kecemasanbetul2',
      Unit: 'Kecemasan',
      kumpulan: 'A',
      Tarikh: '23/01/2025',
      masaMulaOT: '10:30 a.m.',
      masaAkhirOt: '10:30 a.m.',
      Kelulusan: '',
      selected: false
    },
    {
      namaPegawai: 'danial hakimi',
      nomorKad: '991202103442',
      GredJawatan: 'N3',
      Bahagian: 'seal Keeper',
      Unit: 'Kecemasan',
      kumpulan: 'B',
      Tarikh: '23/01/2025',
      masaMulaOT: '10:00 a.m.',
      masaAkhirOt: '10:30 a.m.',
      Kelulusan: '',
      selected: false
    },
    {
      namaPegawai: 'Sanjay Kumar Gupta',
      nomorKad: '991202102020',
      GredJawatan: 'N3',
      Bahagian: 'keeper',
      Unit: 'Kecemasan',
      kumpulan: 'C',
      Tarikh: '23/01/2025',
      masaMulaOT: '9:15 a.m.',
      masaAkhirOt: '10:30 a.m.',
      Kelulusan: '',
      selected: false
    }
  ];
  // untuk modal
  HantarModalsave= false;
  HantarModalsend= false;


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
    this.HantarModalsend =false
  }
// modal end

  setAllLulus(selectAll: boolean) {
    this.kelewatanList.forEach(record => {
      record.selected = selectAll;
    });
  }
  setKelulusan(status: string) {
    this.kelewatanList.forEach(record => {
      if (record.selected) {
        record.Kelulusan = status;
      }
    });
  }

  // button view
  openDetail(): void {
     this.router.navigate(['/bkp/e-roster/pass-ot/kelulusan-permohonan-ot']);
  }
  //end button view
}

