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
      mainLabel: 'Maklumat Permohon',
      mainPath: 'adm/permohonan-kad-kuasa/pengambilan-flc/maklumat-pemohonan',
    },
    {
      mainStep: 2,
      mainLabel: 'Kemas Kini Nombor Warta',
      mainPath: 'adm/permohonan-kad-kuasa/pengambilan-flc/maklumat-pemohonan',
    },
    {
      mainStep: 3,
      mainLabel: 'Pengambilan FLC',
      mainPath: 'adm/permohonan-kad-kuasa/pengambilan-flc/maklumat-pemohonan',
    },
  ];

  // Sub-steps (flattened, with reference to parent mainStep)
  subSteps = [
    {
      mainStep: 10,
      subStep: 10,
      subLabel: 'LABEL HERE',
      subPath: 'URL HERE',
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
