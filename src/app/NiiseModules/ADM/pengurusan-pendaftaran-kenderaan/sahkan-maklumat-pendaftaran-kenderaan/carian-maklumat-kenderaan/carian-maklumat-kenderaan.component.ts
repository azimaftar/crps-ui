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

import { MaklumatCarianTidakWujudComponent } from '../../../pendaftaran-kakitangan/notification-modal/maklumat-carian-tidak-wujud/maklumat-carian-tidak-wujud.component';

@Component({
  selector: 'app-carian-maklumat-kenderaan',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    NgOptimizedImage,
    MaklumatCarianTidakWujudComponent
  ],
  templateUrl: './carian-maklumat-kenderaan.component.html',
  styleUrl: './carian-maklumat-kenderaan.component.scss'
})
export class CarianMaklumatKenderaanComponent {

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

  MaklumatCarianTidakWujud = false;

  ShowMaklumatCarianTidakWujud() {
  // Reset and reopen to ensure visibility
  this.MaklumatCarianTidakWujud = false;
  setTimeout(() => {
    this.MaklumatCarianTidakWujud = true;
  }, 0);
}

  closeModal() {
  this.MaklumatCarianTidakWujud= false;

}

}
