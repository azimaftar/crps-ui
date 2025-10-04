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

import { RekodBerjayaDihantarComponent } from '../../pendaftaran-kakitangan/notification-modal/rekod-berjaya-dihantar/rekod-berjaya-dihantar.component';

@Component({
  selector: 'app-pengesahan-kad-kuasa',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    RekodBerjayaDihantarComponent
  ],
  templateUrl: './pengesahan-kad-kuasa.component.html',
  styleUrl: './pengesahan-kad-kuasa.component.scss'
})
export class PengesahanKadKuasaComponent {
 // Current active step tracking
  currentMainStep = 4; // Main step (1,2,3,4,5,6)

  // Structured breadcrumb data
  mainSteps = [
    { mainStep: 1, mainLabel: 'Maklumat Pemohon' },
    { mainStep: 2, mainLabel: 'Kemas Kini Nombor Warta' },
    { mainStep: 3, mainLabel: 'Pengambilan FLC' },
    { mainStep: 4, mainLabel: 'Sahkan Permohonan Kad Kuasa' },
  ];

  // Staff Profile Field
  readonlyField: boolean = true;

  maklumatPemohon = {
    namaPenuh: 'Faizal Bin Salleh',
  };

  HantarRekodDihantar= false;

  showRekodDihantar() {
    // Reset and reopen to ensure visibility
    this.HantarRekodDihantar = false;
    setTimeout(() => {
      this.HantarRekodDihantar = true;
    }, 0); // Short delay allows Angular change detection to register state change
  }

  closeModal() {
    this.HantarRekodDihantar= false;
  }

}
