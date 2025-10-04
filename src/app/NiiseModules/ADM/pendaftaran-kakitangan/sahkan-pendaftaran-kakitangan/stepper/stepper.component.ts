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
  @Input() currentMainStep = 4;
  @Input() currentSubStep = 0;

  // Main steps only
  mainSteps = [
    { mainStep: 1, mainLabel: 'Profil' },
    { mainStep: 2, mainLabel: 'Tandatangan Digital' },
    { mainStep: 3, mainLabel: 'Biometrik' },
    { mainStep: 4, mainLabel: 'Sahkan Pendaftaran Kakitangan' },
  ];

  ngOnInit(): void {}

  //this is for stepper auto assign path
  navigatePageStepper(path: String) {
    this.router.navigate([path]);
  }
}
