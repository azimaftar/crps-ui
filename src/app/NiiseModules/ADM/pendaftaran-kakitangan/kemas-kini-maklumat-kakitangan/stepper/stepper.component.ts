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
    { mainStep: 1, mainLabel: 'Profil' },
    { mainStep: 2, mainLabel: 'Tandatangan Digital' },
    { mainStep: 3, mainLabel: 'Biometrik' },
  ];

  // Sub-steps (flattened, with reference to parent mainStep)
  subSteps = [
    {
      mainStep: 1,
      subStep: 1,
      subLabel: 'Maklumat Peribadi',
      path: 'adm/pendaftaran-kakitangan/kemas-kini-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
    },
    {
      mainStep: 1,
      subStep: 2,
      subLabel: 'Perkhidmatan/ Perjawatan',
      path: 'adm/pendaftaran-kakitangan/kemas-kini-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
    },
    {
      mainStep: 1,
      subStep: 3,
      subLabel: 'Penempatan',
      path: 'adm/pendaftaran-kakitangan/kemas-kini-maklumat-kakitangan/maklumat-penempatan',
    },
    {
      mainStep: 1,
      subStep: 4,
      subLabel: 'Akademik',
      path: 'adm/pendaftaran-kakitangan/kemas-kini-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
    },
    {
      mainStep: 1,
      subStep: 5,
      subLabel: 'Bahasa',
      path: 'adm/pendaftaran-kakitangan/kemas-kini-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
    },
    {
      mainStep: 1,
      subStep: 6,
      subLabel: 'Pasport',
      path: 'adm/pendaftaran-kakitangan/kemas-kini-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
    },
    {
      mainStep: 1,
      subStep: 7,
      subLabel: 'Anugerah',
      path: 'adm/pendaftaran-kakitangan/kemas-kini-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
    },
    {
      mainStep: 1,
      subStep: 8,
      subLabel: 'Akaun Bank',
      path: 'adm/pendaftaran-kakitangan/kemas-kini-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
    },
    {
      mainStep: 1,
      subStep: 9,
      subLabel: 'Kegiatan Luar',
      path: 'adm/pendaftaran-kakitangan/kemas-kini-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
    },
    {
      mainStep: 1,
      subStep: 10,
      subLabel: 'Harta',
      path: 'adm/pendaftaran-kakitangan/kemas-kini-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
    },
    {
      mainStep: 1,
      subStep: 11,
      subLabel: 'Keluarga',
      path: 'adm/pendaftaran-kakitangan/kemas-kini-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
    },
    {
      mainStep: 1,
      subStep: 12,
      subLabel: 'Vaksin',
      path: 'adm/pendaftaran-kakitangan/kemas-kini-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
    },
    {
      mainStep: 1,
      subStep: 13,
      subLabel: 'Pakaian Seragam',
      path: 'adm/pendaftaran-kakitangan/kemas-kini-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
    },
  ];

  ngOnInit(): void {}

  //this is for stepper auto assign path
  navigatePageStepper(path: String) {
    this.router.navigate([path]);
  }
}
