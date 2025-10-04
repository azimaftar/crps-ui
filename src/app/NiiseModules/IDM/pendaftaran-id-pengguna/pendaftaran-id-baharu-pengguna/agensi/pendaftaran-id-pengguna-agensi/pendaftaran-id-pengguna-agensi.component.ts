import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule, GridModule, NavModule } from '@coreui/angular';

@Component({
  selector: 'app-pendaftaran-id-pengguna-agensi',
  templateUrl: './pendaftaran-id-pengguna-agensi.component.html',
  styleUrl: './pendaftaran-id-pengguna-agensi.component.scss',
  standalone: true,
  imports: [CommonModule, CardModule, GridModule, NavModule],
})
export class PendaftaranIdPenggunaAgensiComponent {
  static title: string = 'Pendaftaran ID Pengguna Agensi';
}
