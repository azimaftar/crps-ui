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
  selector: 'app-dokumen-sokongan',
  templateUrl: './dokumen-sokongan.component.html',
  styleUrl: './dokumen-sokongan.component.scss',
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
export class DokumenSokonganComponent {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 0; // Main step (1,2,3,4,5,6)
  currentSubStep = 0; // Sub step (1-15)

  // Staff Profile Field
  readonlyField: boolean = false;

   tableData = [
    {
      namaDokumen: 'Kad Pengenalan',
      format: '.jpg',
    },
     {
      namaDokumen: 'Surat Lantikan',
      format: '.pdf',
    },
     {
      namaDokumen: 'Surat Pewartaan',
      format: '.pdf',
    },
  ];

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/permohonan-kad-kuasa/hantar-permohonan-kad-kuasa/maklumat-pemohonan',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/permohonan-kad-kuasa/hantar-permohonan-kad-kuasa/dokumen-sokongan',
    ]);
  }

  navigateClosePage() {
    this.router.navigate([
      'adm/permohonan-kad-kuasa/hantar-permohonan-kad-kuasa/maklumat-pemohonan',
    ]);
  }
}
