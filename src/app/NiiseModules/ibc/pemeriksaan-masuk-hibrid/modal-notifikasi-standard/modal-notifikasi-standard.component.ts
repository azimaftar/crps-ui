import { Component, Input } from '@angular/core';
import {ModalComponent, ModalHeaderComponent} from '@coreui/angular';

@Component({
  selector: 'app-modal-notifikasi-standard',
  standalone: true,
  imports: [
    ModalComponent,
    ModalHeaderComponent,
  ],
  templateUrl: './modal-notifikasi-standard.component.html',
  styleUrl: './modal-notifikasi-standard.component.scss'
})
export class ModalNotifikasiStandardComponent {
  @Input() visible: boolean = false;
  @Input() responseCode: string = 'success';

  // Hardcoded mappings with STRING keys
  private titleMappings: { [key: string]: string } = {
    'IBC-N001': 'Sila Letak Pasport',
    'WFR-IBC-02.9-2': 'Sila Masuk Ke Dalam eGate',
    'IBC-N008': 'Sila Imbas Semula Pasport',
    'IBC-N006': 'Sila Rujuk Ke Kaunter Manual',
    'IBC-S038': 'Sila lengkapkan e-IMM.26.',
    'WFR-IBC-02.9-3': 'Sila Lihat Ke Arah Kamera Untuk Imbaskan Biometrik',
    'WFR-IBC-02.9-6': 'Imbasan Wajah dan Iris Gagal!<br>Sila letakkan Dua (2) Jari Telunjuk<br>di Pengimbas Cap Jari.',
    'WFR-IBC-02.9-10': 'Verifikasi Biometrik Gagal!'
  };
  
  get modalTitle(): string {
    return this.titleMappings[this.responseCode || 'No Modal'];
  }

}
