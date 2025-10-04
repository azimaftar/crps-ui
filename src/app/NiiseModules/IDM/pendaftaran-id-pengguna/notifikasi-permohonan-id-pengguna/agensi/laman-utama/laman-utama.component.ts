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
  selector: 'app-laman-utama',
  templateUrl: './laman-utama.component.html',
  styleUrl: './laman-utama.component.scss',
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
export class LamanUtamaComponent {
  //Modal
  visible: boolean = false;

  tableData = [
    {
      bil: 1,
      keterangan: 'Permohonan ID Pengguna - Semakan Permohonan',
      tarikh: '12/12/2021',
      masa: '12:13:25 PM',
      status: 'Label',
      modul: 'IDM',
    },
    {
      bil: 2,
      keterangan: 'Permohonan ID Pengguna - Semakan Permohonan',
      tarikh: '12/12/2021',
      masa: '12:13:25 PM',
      status: 'Label',
      modul: 'IDM',
    },
    {
      bil: 3,
      keterangan: 'Permohonan ID Pengguna - Semakan Permohonan',
      tarikh: '12/12/2021',
      masa: '12:13:25 PM',
      status: 'Label',
      modul: 'IDM',
    },
  ];
}
