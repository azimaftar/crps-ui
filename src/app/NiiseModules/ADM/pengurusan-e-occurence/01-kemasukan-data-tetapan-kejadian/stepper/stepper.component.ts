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
    { mainStep: 1, mainLabel: 'Daftar Tetapan Kejadian e-Occurence' },
    { mainStep: 2, mainLabel: 'Pengesahan Tetapan Kejadian e-Occurence' }
  ];

  // Sub-steps (flattened, with reference to parent mainStep)
  subSteps = [];

  ngOnInit(): void {}

  //this is for stepper auto assign path
  navigatePageStepper(path: String) {
    this.router.navigate([path]);
  }
}
