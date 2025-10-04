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
  selector: 'app-jana-nombor-perkhidmatan',
  templateUrl: './jana-nombor-perkhidmatan.component.html',
  styleUrl: './jana-nombor-perkhidmatan.component.scss',
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
export class JanaNomborPerkhidmatanComponent {
  // Current active step tracking
  currentMainStep = 6; // Main step (1,2,3,4,5,6)
  currentSubStep = 0; // Sub step (1-15)

  // Staff Profile Field
  readonlyField: boolean = true;

  maklumatKakitangan = {
    nama: 'Faridah Binti Jamil',
    noDokumenID: '890101145678',
    jawatan: 'Penolong Pegawai Imigresen',
    gred: 'KP29',
  };

  maklumatPerkhidmatan = {
    nomborTerakhir: '777-25',
    nomborBaharu: '777-26',
    status:
      'Nombor Perkhidmatan telah dihana secara automatik dan dikemas kini ke profile kakitangan.',
  };
}
