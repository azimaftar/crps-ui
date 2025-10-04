import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  SidebarBrandComponent,
  ModalModule,
} from '@coreui/angular';

import { MaklumatCarianTidakWujudComponent } from '../../pendaftaran-kakitangan/notification-modal/maklumat-carian-tidak-wujud/maklumat-carian-tidak-wujud.component';
import { RekodBerjayaDihantarComponent } from '../../pendaftaran-kakitangan/notification-modal/rekod-berjaya-dihantar/rekod-berjaya-dihantar.component';

@Component({
  selector: 'app-kemaskini-maklumat-pendaftaran-kenderaan',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    NgOptimizedImage,
    MaklumatCarianTidakWujudComponent,
    RekodBerjayaDihantarComponent
  ],
  templateUrl: './kemaskini-maklumat-pendaftaran-kenderaan.component.html',
  styleUrl: './kemaskini-maklumat-pendaftaran-kenderaan.component.scss'
})
export class KemaskiniMaklumatPendaftaranKenderaanComponent {

  currentMainStep = 2; 
  currentSubStep = 0; 

  // Structured breadcrumb data
    mainSteps = [
    { mainStep: 1, mainLabel: 'Pendaftaran Kenderaan' },
    { mainStep: 2, mainLabel: 'Maklumat Tounch n Go/ Kad Minyak/ Buku Log' },
    { mainStep: 3, mainLabel: 'Pengesahan Maklumat Pendaftaran Kenderaan' }
    
  ];

    subSteps = [
    { mainStep: 1, subStep: 1, subLabel: 'Borang KEW.PA.3' },
    { mainStep: 1, subStep: 2, subLabel: 'Maklumat Kenderaan' },
    { mainStep: 1, subStep: 3, subLabel: 'Maklumat Sewaan' },
    { mainStep: 1, subStep: 4, subLabel: 'Maklumat Ketua Jabatan' }
  ];

   tableData = [
    {
      bil: '1',
      noPlate: 'ABC 1234',
      model: 'SUV / TOYOTA / CRV',
      jabatan: 'Imigresen',
      cawangan: 'Pentadbiran',
    },
  ]

  MaklumatCarianTidakWujud = false;
  HantarRekodDihantar  = false;

  ShowMaklumatCarianTidakWujud() {
  // Reset and reopen to ensure visibility
  this.MaklumatCarianTidakWujud = false;
  setTimeout(() => {
    this.MaklumatCarianTidakWujud = true;
  }, 0);
}

  showRekodDihantar() {
  // Reset and reopen to ensure visibility
  this.HantarRekodDihantar = false;
  setTimeout(() => {
    this.HantarRekodDihantar = true;
  }, 0); // Short delay allows Angular change detection to register state change
}

  closeModal() {
  this.MaklumatCarianTidakWujud= false;
  this.HantarRekodDihantar= false;

}

}
