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
  @Input() currentSubStep = 0;

  // Main steps only
  mainSteps = [
    { mainStep: 1, mainLabel: 'Maklumat Pejabat' },
    { mainStep: 2, mainLabel: 'Pengesahan Maklumat Pejabat' },
  ];

  // Sub-steps (flattened, with reference to parent mainStep)
  subSteps = [
    {
      mainStep: 1,
      subStep: 1,
      subLabel: 'Maklumat Kontrak Sewaan Pejabat',
      path: 'adm/pendaftaran-pejabat/daftar-kemas-kini-maklumat-pejabat/maklumat-kontrak-sewaan-pejabat',
    },
    {
      mainStep: 1,
      subStep: 2,
      subLabel: 'Maklumat Kontrak Penyelenggaraan',
      path: 'adm/pendaftaran-pejabat/daftar-kemas-kini-maklumat-pejabat/maklumat-kontrak-penyelenggaraan',
    },
    {
      mainStep: 1,
      subStep: 3,
      subLabel: 'Maklumat Kontrak Pembersihan',
      path: 'adm/pendaftaran-pejabat/daftar-kemas-kini-maklumat-pejabat/maklumat-kontrak-pembersihan',
    },
    {
      mainStep: 1,
      subStep: 4,
      subLabel: 'Maklumat Kontrak Pembekalan Makanan',
      path: 'adm/pendaftaran-pejabat/daftar-kemas-kini-maklumat-pejabat/maklumat-kontrak-pembekalan-makanan',
    },
  ];

  ngOnInit(): void {}

  //this is for stepper auto assign path
  navigatePageStepper(path: String) {
    this.router.navigate([path]);
  }
}
