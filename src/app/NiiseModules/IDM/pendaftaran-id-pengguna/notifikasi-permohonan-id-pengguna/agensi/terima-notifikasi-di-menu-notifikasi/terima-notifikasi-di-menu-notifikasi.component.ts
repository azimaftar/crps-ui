import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  SidebarBrandComponent,
  ModalModule,
  ButtonModule,
  TableModule,
} from '@coreui/angular';

@Component({
  selector: 'app-terima-notifikasi-di-menu-notifikasi',
  templateUrl: './terima-notifikasi-di-menu-notifikasi.component.html',
  styleUrl: './terima-notifikasi-di-menu-notifikasi.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    // SidebarBrandComponent,
    // NgOptimizedImage,
    // <-- Correctly import only NavModule
  ],
})
export class TerimaNotifikasiDiMenuNotifikasiComponent {
  tableData = [
    {
      bil: 1,
      tarikhMasa: '11/02/2022 10:20 AM',
      mesej: 'Permohanan ID Pengguna - Semakan Permohanan',
    },
    {
      bil: 2,
      tarikhMasa: '10/02/2022 15:12 PM',
      mesej: 'Permohanan ID Pengguna - Kelulusan',
    },
       {
      bil: 3,
      tarikhMasa: '09/02/2022 12:55 PM',
      mesej: 'Pengesahan Tambah Peranan dan Tugasan - Pemulangan Semula Pengesahan Permohonan',
    },
  ];
}
