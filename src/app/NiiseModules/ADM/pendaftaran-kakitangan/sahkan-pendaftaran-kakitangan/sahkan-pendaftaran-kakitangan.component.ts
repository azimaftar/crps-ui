import { Component, OnInit } from '@angular/core';
import { StepperComponent } from './stepper/stepper.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';

@Component({
  selector: 'app-sahkan-pendaftaran-kakitangan',
  templateUrl: './sahkan-pendaftaran-kakitangan.component.html',
  styleUrl: './sahkan-pendaftaran-kakitangan.component.scss',
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
export class SahkanPendaftaranKakitanganComponent {
  // Current active step tracking
  currentMainStep = 4; // Main step (1,2,3,4,5,6)
  currentSubStep = 0; // Sub step (1-15)

  // Staff Profile Field
  readonlyField: boolean = true;

  maklumatKakitangan = {
    nama: 'Faridah Binti Jamil',
    noDokumenID: '890101145678',
    jawatan: 'Penolong Pegawai Imigresen',
    gred: 'KP29',
    disahkanOleh: 'Faizal Bin Salleh',
  };

  statusValue: boolean = false;

  setStatus(statusButton: boolean) {
    this.statusValue = statusButton;
  }
}
