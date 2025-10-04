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
  selector: 'app-adm-dashboard-v2',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
  ],
  templateUrl: './adm-dashboard-v2.component.html',
  styleUrl: './adm-dashboard-v2.component.scss'
})
export class AdmDashboardV2Component {

    tableData = [
    {
      nama: 'Faridah Binti Jamil',
      noDokumenID: '890101145678',
      jawatanGred: 'Penolongan Pegawai Imigresen / KP29',
      tarikhPermhonan: '20/06/2025',
      disediakanOleh: 'Mohd Zamri Bin Zainal',
    },
    {
      nama: 'Ahmad Bin Zulkifli',
      noDokumenID: '920322083344',
      jawatanGred: 'Pegawai Teknologi Maklumat / F41',
      tarikhPermhonan: '20/06/2025',
      disediakanOleh: 'Balqis Binti Ahmad',
    },
    {
      nama: 'Muhammad Rizal Bin Rahman',
      noDokumenID: '890101145678',
      jawatanGred: 'Pembantu Imigresen / KP19',
      tarikhPermhonan: '20/06/2025',
      disediakanOleh: 'Fatimah Binti Omar',
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
