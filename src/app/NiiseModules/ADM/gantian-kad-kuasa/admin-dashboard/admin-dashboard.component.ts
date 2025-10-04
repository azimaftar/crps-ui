import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  SidebarBrandComponent,
  ModalModule,
} from '@coreui/angular';

@Component({
  selector: 'app-admin-dashboard',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

    tableData = [
    {
      nama: 'Faridah Binti Jamil',
      noDokumenID: '890101145678',
      jawatanGred: 'Penolongan Pegawai Imigresen / KP29',
      tarikhPermohonan: '20/06/2025',
      statusPermohonan: 'Menunggu Pengesahan',
    },
    {
      nama: 'Ahmad Bin Zulkifli',
      noDokumenID: '920322083344',
      jawatanGred: 'Pegawai Teknologi Maklumat / F41',
      tarikhPermohonan: '20/06/2025',
      statusPermohonan: 'Menunggu Pengesahan',
    },
    {
      nama: 'Muhammad Rizal Bin Rahman',
      noDokumenID: '890101145678',
      jawatanGred: 'Pembantu Imigresen / KP19',
      tarikhPermohonan: '20/06/2025',
      statusPermohonan: 'Menunggu Pengesahan',
    },
  ];

}
