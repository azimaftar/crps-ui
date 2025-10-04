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
  selector: 'app-maklumat-permohonan-gantian',
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
  templateUrl: './maklumat-permohonan-gantian.component.html',
  styleUrl: './maklumat-permohonan-gantian.component.scss',
})
export class MaklumatPermohonanGantianComponent {

  currentMainStep = 3; // Main step (1,2,3,4,5,6)

  // Structured breadcrumb data
  breadcrumbSections = [
    {
      mainStep: 1,
      mainLabel: 'Maklumat Pemohon',
      subSteps: [],
    },
    {
      mainStep: 2,
      mainLabel: 'Pengambilan FLC',
      subSteps: [],
    },
        {
      mainStep: 3,
      mainLabel: 'Permohonan Gantian Kad Kuasa',
      subSteps: [],
    },
  ];

  // Staff Profile Field
  readonlyField: boolean = true;

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
