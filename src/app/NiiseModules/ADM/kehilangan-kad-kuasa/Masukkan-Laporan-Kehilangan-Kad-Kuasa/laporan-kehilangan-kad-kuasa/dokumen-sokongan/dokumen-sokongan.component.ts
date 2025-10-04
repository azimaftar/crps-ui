import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@coreui/icons-angular';
import { 
  CardModule, 
  NavModule, 
  GridModule, 
  ModalModule, 
  ButtonModule, 
  TableModule, 
  TableDirective, 
  FormCheckLabelDirective, 
  FormCheckComponent, 
  FormCheckInputDirective
} from '@coreui/angular';

import { StepperComponent } from '../stepper/stepper.component';
import { ModalComponentComponent } from '../modal-component/modal-component.component';

@Component({
  selector: 'app-dokumen-sokongan',
  templateUrl: './dokumen-sokongan.component.html',
  styleUrls: ['./dokumen-sokongan.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    GridModule,
    NavModule,
    TableModule, 
    TableDirective,
    FormCheckLabelDirective, 
    FormCheckComponent, 
    FormCheckInputDirective,
    IconModule,
    ButtonModule,
    MatIconModule,
    ModalModule,
    StepperComponent,
    ModalComponentComponent, // ✅ popup modal usable here
  ],
})
export class DokumenSokonganComponent {
  currentMainStep = 3;
  readonlyField = false;

  // === popup state ===
  simpanRekodModal = false;
  hantarRekodModal = false;

  tableData = [
    {
      namaDokumen: 'Laporan Polis Kehilangan Kad Kuasa',
      format: '.jpg',
    },
  ];

  constructor(private router: Router) {}

  // === popup methods ===
  openSimpanRekod() {
    this.simpanRekodModal = true;
  }
  closeSimpanRekodModal() {
    this.simpanRekodModal = false;
  }

  openHantarRekod() {
    this.hantarRekodModal = true;
  }
  closeHantarRekodModal() {
    this.hantarRekodModal = false;
  }

  // === navigation ===
  navigatePreviousPage() {
    this.router.navigate([
      'adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa/maklumat-laporan',
    ]);
  }

  navigateNextPage() {
    this.router.navigate([
      'adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa/maklumat',
    ]);
  }

  navigateClosePage() {
    this.router.navigate([
      'adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa/maklumat-laporan',
    ]);
  }
}
