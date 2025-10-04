import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-laman-utama-semakan-maklumat-pegawai-agensi-perkapalan',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective
  ],
  templateUrl: './laman-utama-semakan-maklumat-pegawai-agensi-perkapalan.component.html',
  styleUrl: './laman-utama-semakan-maklumat-pegawai-agensi-perkapalan.component.scss'
})
export class LamanUtamaSemakanMaklumatPegawaiAgensiPerkapalanComponent {

}
