import { Component, Input, OnInit } from '@angular/core';
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
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
  ],
})
export class StepperComponent implements OnInit {
  constructor(private router: Router) {}

  // Current active step tracking
  @Input() currentMainStep = 1;
  @Input() currentSubStep = 1;

  // Main steps only
  mainSteps = [
    {
      mainStep: 1,
      mainLabel: 'Profil',
      mainPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-peribadi',
    },
    {
      mainStep: 2,
      mainLabel: 'Tandatangan Digital',
      mainPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/tandatangan-digital',
    },
    {
      mainStep: 3,
      mainLabel: 'Biometrik',
      mainPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pengambilan-biometrik',
    },
  ];

  // Sub-steps (flattened, with reference to parent mainStep)
  subSteps = [
    {
      mainStep: 1,
      subStep: 1,
      subLabel: 'Maklumat Peribadi',
      subPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-peribadi',
    },
    {
      mainStep: 1,
      subStep: 2,
      subLabel: 'Perkhidmatan/ Perjawatan',
      subPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-peribadi',
    },
    {
      mainStep: 1,
      subStep: 3,
      subLabel: 'Penempatan',
      subPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-peribadi',
    },
    {
      mainStep: 1,
      subStep: 4,
      subLabel: 'Akademik',
      subPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-akademik',
    },
    {
      mainStep: 1,
      subStep: 5,
      subLabel: 'Bahasa',
      subPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-penguasaan-bahasa',
    },
    {
      mainStep: 1,
      subStep: 6,
      subLabel: 'Pasport',
      subPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-pasport',
    },
    {
      mainStep: 1,
      subStep: 7,
      subLabel: 'Anugerah',
      subPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-anugerah',
    },
    {
      mainStep: 1,
      subStep: 8,
      subLabel: 'Akaun Bank',
      subPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-akaun-bank',
    },
    {
      mainStep: 1,
      subStep: 9,
      subLabel: 'Kegiatan Luar',
      subPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-kegiatan-luar',
    },
    {
      mainStep: 1,
      subStep: 10,
      subLabel: 'Harta',
      subPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-harta',
    },
    {
      mainStep: 1,
      subStep: 11,
      subLabel: 'Keluarga',
      subPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-keluarga',
    },
    {
      mainStep: 1,
      subStep: 12,
      subLabel: 'Vaksin',
      subPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/dokumen-sokongan',
    },
    {
      mainStep: 1,
      subStep: 13,
      subLabel: 'Pakaian Seragam',
      subPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-pakaian-seragam',
    },
    {
      mainStep: 2,
      subStep: 1,
      subLabel: 'Semak Tandatangan Digital',
      subPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/tandatangan-digital',
    },
    {
      mainStep: 2,
      subStep: 2,
      subLabel: 'Ambil Tandatangan Digital',
      subPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/tandatangan-digital',
    },
    {
      mainStep: 3,
      subStep: 1,
      subLabel: 'Semak Biometrik',
      subPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pengambilan-biometrik',
    },
    {
      mainStep: 3,
      subStep: 2,
      subLabel: 'Ambil Biometrik',
      subPath:
        'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pengambilan-biometrik',
    },
  ];

  get filteredSubSteps() {
    return this.subSteps.filter((s) => s.mainStep === this.currentMainStep);
  }

  ngOnInit(): void {}

  //this is for stepper auto assign path
  navigatePageMainStepper(mainPath: String) {
    this.router.navigate([mainPath]);
  }

  navigatePageSubStepper(subPath: String) {
    this.router.navigate([subPath]);
  }
}
