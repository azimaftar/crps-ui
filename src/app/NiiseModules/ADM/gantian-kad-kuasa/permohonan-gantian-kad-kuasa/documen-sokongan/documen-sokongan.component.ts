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
import { Router, RouterModule } from '@angular/router';
import { MaklumatCarianTidakWujudComponent } from '../../../pendaftaran-kakitangan/notification-modal/maklumat-carian-tidak-wujud/maklumat-carian-tidak-wujud.component';
import { RekodBerjayaDihantarComponent } from '../../../pendaftaran-kakitangan/notification-modal/rekod-berjaya-dihantar/rekod-berjaya-dihantar.component';
import { RekodBerjayaDisimpanComponent } from '../../../pendaftaran-kakitangan/notification-modal/rekod-berjaya-disimpan/rekod-berjaya-disimpan.component';

@Component({
  selector: 'app-documen-sokongan',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    MaklumatCarianTidakWujudComponent,
    RekodBerjayaDihantarComponent,
    RekodBerjayaDisimpanComponent,
  ],
  templateUrl: './documen-sokongan.component.html',
  styleUrl: './documen-sokongan.component.scss'
})
export class DocumenSokonganComponent {

  // Staff Profile Field
  readonlyField: boolean = false;

   tableData = [
    {
      namaDokumen: 'Laporan Polis Kehilangan Kad Kuasa',
      format: '.pdf ',
    },
  ];

   documentType: string = '';
  documentId: string = '';

  HantarMaklumatCarian= false;
  HantarRekodDihantar= false;
  HantarRekodDisimpan= false;

  constructor(private router: Router) { }

   onRegister() {
    console.log('Register clicked');
    // Logic for register action
  }

  onSubmit() {
    console.log('Searching...');
    console.log('Type:', this.documentType);
    console.log('ID:', this.documentId);
    // Logic for search action
  }

  showMaklumatCarian() {
  // Reset and reopen to ensure visibility
  this.HantarMaklumatCarian = false;
  setTimeout(() => {
    this.HantarMaklumatCarian = true;
  }, 0); // Short delay allows Angular change detection to register state change
}

  showRekodDihantar() {
  // Reset and reopen to ensure visibility
  this.HantarRekodDihantar = false;
  setTimeout(() => {
    this.HantarRekodDihantar = true;
  }, 0); // Short delay allows Angular change detection to register state change
}

  showHubungidisimpan() {
  // Reset and reopen to ensure visibility
  this.HantarRekodDisimpan = false;
  setTimeout(() => {
    this.HantarRekodDisimpan = true;
  }, 0); // Short delay allows Angular change detection to register state change
}

    closeModal() {
    this.HantarMaklumatCarian = false;
    this.HantarRekodDihantar= false;
    this.HantarRekodDisimpan= false;

  }

}
