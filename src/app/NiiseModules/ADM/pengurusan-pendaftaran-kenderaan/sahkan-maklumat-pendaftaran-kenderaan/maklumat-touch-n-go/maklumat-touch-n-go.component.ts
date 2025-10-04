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

import { RekodBerjayaDihantarComponent } from '../../../pendaftaran-kakitangan/notification-modal/rekod-berjaya-dihantar/rekod-berjaya-dihantar.component';


@Component({
  selector: 'app-maklumat-touch-n-go',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    NgOptimizedImage,
    RekodBerjayaDihantarComponent
  ],
  templateUrl: './maklumat-touch-n-go.component.html',
  styleUrl: './maklumat-touch-n-go.component.scss'
})
export class MaklumatTouchNGoComponent {

  currentMainStep = 3; 
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

  RekodBerjayaDihantar = false;

  showRekodDihantar() {
  this.RekodBerjayaDihantar = false;
  setTimeout(() => {
    this.RekodBerjayaDihantar = true;
  }, 0);
}

  closeModal() {
  this.RekodBerjayaDihantar = false;

}

}
