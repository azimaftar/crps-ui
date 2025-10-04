import { Component, OnInit } from '@angular/core';
import { StepperComponent } from './stepper/stepper.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';

@Component({
  selector: 'app-luluskan-pendaftaran-kakitangan',
  templateUrl: './luluskan-pendaftaran-kakitangan.component.html',
  styleUrl: './luluskan-pendaftaran-kakitangan.component.scss',
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
export class LuluskanPendaftaranKakitanganComponent {
  // Current active step tracking
  currentMainStep = 5; // Main step (1,2,3,4,5,6)
  currentSubStep = 0; // Sub step (1-15)

  // Structured breadcrumb data
  breadcrumbSections = [
    {
      mainStep: 1,
      mainLabel: 'Maklumat Profil Kakitangan',
    },
    {
      mainStep: 2,
      mainLabel: 'Tandatangan Digital',
    },
    {
      mainStep: 3,
      mainLabel: 'Pengambilan Biometrik',
    },
    {
      mainStep: 4,
      mainLabel: 'Sahkan Pendaftaran Kakitangan',
    },
    {
      mainStep: 5,
      mainLabel: 'Luluskan Pendaftaran Kakitangan',
    },
    {
      mainStep: 6,
      mainLabel: 'Jana Nombor Perkhidmatan',
    },
  ];

  // Staff Profile Field
  readonlyField: boolean = true;

  maklumatKakitangan = {
    nama: 'Faridah Binti Jamil',
    noDokumenID: '890101145678',
    jawatan: 'Penolong Pegawai Imigresen',
    gred: 'KP29',
    disahkanOleh: 'Amirul Bin Roslan',
  };
}
