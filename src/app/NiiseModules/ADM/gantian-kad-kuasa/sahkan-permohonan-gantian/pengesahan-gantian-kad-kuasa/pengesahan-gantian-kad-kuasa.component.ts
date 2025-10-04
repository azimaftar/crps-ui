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
import { Router } from '@angular/router';
import { RekodBerjayaDihantarComponent } from '../../../pendaftaran-kakitangan/notification-modal/rekod-berjaya-dihantar/rekod-berjaya-dihantar.component';

@Component({
  selector: 'app-pengesahan-gantian-kad-kuasa',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    RekodBerjayaDihantarComponent
  ],
  templateUrl: './pengesahan-gantian-kad-kuasa.component.html',
  styleUrl: './pengesahan-gantian-kad-kuasa.component.scss'
})
export class PengesahanGantianKadKuasaComponent {

  currentMainStep = 4; // Main step (1,2,3,4,5,6)

  breadcrumbSections = [
    {
      mainStep: 1,
      mainLabel: 'Maklumat Pemohon',
      subSteps: [],
    },
    {
      mainStep: 2,
      mainLabel: 'Kemas Kini Nombor Warta',
      subSteps: [],
    },
    {
      mainStep: 3,
      mainLabel: 'Pengambilan FLC',
      subSteps: [],
    },
        {
      mainStep: 4,
      mainLabel: 'Sahkan Permohonan Kad Kuasa',
      subSteps: [],
    },
  ]

  // Staff Profile Field
  readonlyField: boolean = true;

  maklumatPemohon = {
    namaPenuh: 'Faizal Bin Salleh',
  };

  documentType: string = '';
  documentId: string = '';

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

  constructor(private router: Router) { }

  back(): void {
  // Add your navigation logic here
    this.router.navigate(['./adm/gantian-kad-kuasa/sahkan-permohonan-gantian/maklumat-permohonan-untuk-kegunaan-pejabat']);
  }

}
