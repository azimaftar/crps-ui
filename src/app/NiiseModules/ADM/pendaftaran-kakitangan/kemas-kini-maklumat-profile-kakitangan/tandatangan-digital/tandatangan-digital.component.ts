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
  selector: 'app-tandatangan-digital',
  templateUrl: './tandatangan-digital.component.html',
  styleUrl: './tandatangan-digital.component.scss',
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
export class TandatanganDigitalComponent {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 2; // Main step (1,2,3,4,5,6)
  currentSubStep = 0; // Sub step (1-15)

  // Input Field Logic
  readonlyField = true;

  maklumatTandatangan = {
    sudahTandatangan: 'Telah Ditandatangan / Belum',
  };

  //Temporary until the real API is in specs
  digitalSignatureText: string = 'Tandatangan Digital';

  //tandatanganModalVisible modal logic
  tandatanganModalVisible = false;

  tandatanganModalconfirm() {
    this.tandatanganModalVisible = false;
  }

  navigateClosePage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pendaftaran-kakitangan',
    ]);
  }
}
