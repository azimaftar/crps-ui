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
  selector: 'app-adm-dashboard',
  templateUrl: './adm-dashboard.component.html',
  styleUrl: './adm-dashboard.component.scss',
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
export class AdmDashboardComponent {
  // Table Data
  tableData = [
    {
      nama: 'Faridah Binti Jamil',
      noDokumenID: '890101145678',
      pangkatGred: 'Penolongan Pegawai Imigresen / KP29',
      tarikhTerimaLaporan: '20/06/2025',
      statusSiasatan: 'Mohd Zamri Bin Zainal',
    },
    {
      nama: 'Ahmad Bin Zulkifli',
      noDokumenID: '920322083344',
      pangkatGred: 'Pegawai Teknologi Maklumat / F41',
      tarikhTerimaLaporan: '20/06/2025',
      statusSiasatan: 'Balqis Binti Ahmad',
    },
    {
      nama: 'Muhammad Rizal Bin Rahman',
      noDokumenID: '890101145678',
      pangkatGred: 'Pembantu Imigresen / KP19',
      tarikhTerimaLaporan: '20/06/2025',
      statusSiasatan: 'Fatimah Binti Omar',
    },
  ];

  //Modal Logic
  berjayaDihantarModalVisible = false;
  kakitanganHantarModalVisible = false;

  //capJariModalVisible modal logic
  berjayaDihantarModalconfirm(visibility: boolean) {
    this.berjayaDihantarModalVisible = visibility;
  }

  //kakitanganHantarModalVisible modal logic
  kakitanganHantarModalconfirm(visibility: boolean) {
    this.kakitanganHantarModalVisible = visibility;
  }
}
