import { Component, OnInit } from '@angular/core';
import { StepperComponent } from '../stepper/stepper.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pengambilan-biometrik',
  templateUrl: './pengambilan-biometrik.component.html',
  styleUrl: './pengambilan-biometrik.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    StepperComponent,
  ],
})
export class PengambilanBiometrikComponent {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 3; // Main step (1,2,3,4,5,6)
  currentSubStep = 0; // Sub step (1-15)

  // Structured breadcrumb data
  breadcrumbSections = [
    {
      mainStep: 1,
      mainLabel: 'Maklumat Profil Kakitangan',
      subSteps: [],
    },
    {
      mainStep: 2,
      mainLabel: 'Tandatangan Digital',
      subSteps: [],
    },
    {
      mainStep: 3,
      mainLabel: 'Pengambilan Biometrik',
      subSteps: [
        { subStep: 1, label: 'Semak Biometrik' },
        { subStep: 2, label: 'Ambil Biometrik' },
      ],
    },
  ];

  // Input Field Logic
  readonlyField = true;

  maklumatBiometrik = {
    statusCapJari: '(Wujud/ Tidak Wujud/ Tidak Lengkap)',
    statusWajah: '(Wujud/ Tidak Wujud/ Tidak Lengkap)',
    statusIris: '(Wujud/ Tidak Wujud/ Tidak Lengkap)',
  };

  //Modal Logic
  capJariModalVisible = false;
  irisModalVisible = false;
  wajahModalVisible = false;
  carianModalVisible = false;

  //capJariModalVisible modal logic
  capJariModalconfirm(visibility: boolean) {
    this.capJariModalVisible = visibility;
  }

  //irisModalVisible modal logic
  irisModalconfirm(visibility: boolean) {
    this.irisModalVisible = visibility;
  }

  //wajahModalVisible modal logic
  wajahModalconfirm(visibility: boolean) {
    this.wajahModalVisible = visibility;
  }

  //carianModalVisible modal logic
  carianModalconfirm(visibility: boolean) {
    this.carianModalVisible = visibility;
  }

  navigateClosePage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pendaftaran-kakitangan',
    ]);
  }
}
