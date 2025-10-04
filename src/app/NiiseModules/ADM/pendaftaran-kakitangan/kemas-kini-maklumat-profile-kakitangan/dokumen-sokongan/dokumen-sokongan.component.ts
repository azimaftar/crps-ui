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
      namaDokumen: 'Surat Pengesahan Lantikan KAT-John Alexander Smith',
      format: '.pdf, .jpg',
    },
  ];

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-keluarga',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-pakaian-seragam',
    ]);
  }

  navigateClosePage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pendaftaran-kakitangan',
    ]);
  }
}
