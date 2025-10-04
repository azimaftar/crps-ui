import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule, GridModule, NavModule } from '@coreui/angular';

@Component({
  selector: 'app-pendaftaran-id-pengguna',
  templateUrl: './pendaftaran-id-pengguna.component.html',
  styleUrl: './pendaftaran-id-pengguna.component.scss',
  standalone: true,
  imports: [CommonModule, CardModule, GridModule, NavModule],
})
export class PendaftaranIdPenggunaComponent {
  static title: string = 'Pendaftaran ID Pengguna';
}
