import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';

@Component({
  selector: 'app-maklumat-kenderaan',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    NgOptimizedImage,
  ],
  templateUrl: './maklumat-kenderaan.component.html',
  styleUrl: './maklumat-kenderaan.component.scss'
})
export class MaklumatKenderaanComponent {

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

  documentType = "";

}
