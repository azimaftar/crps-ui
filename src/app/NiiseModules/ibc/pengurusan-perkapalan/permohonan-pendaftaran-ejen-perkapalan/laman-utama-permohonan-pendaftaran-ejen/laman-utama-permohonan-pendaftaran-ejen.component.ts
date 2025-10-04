import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-laman-utama-permohonan-pendaftaran-ejen',
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
  templateUrl: './laman-utama-permohonan-pendaftaran-ejen.component.html',
  styleUrl: './laman-utama-permohonan-pendaftaran-ejen.component.scss'
})
export class LamanUtamaPermohonanPendaftaranEjenComponent {

}
