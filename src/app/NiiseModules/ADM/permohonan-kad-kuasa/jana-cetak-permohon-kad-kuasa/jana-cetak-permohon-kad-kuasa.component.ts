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
  selector: 'app-jana-cetak-permohon-kad-kuasa',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
  ],
  templateUrl: './jana-cetak-permohon-kad-kuasa.component.html',
  styleUrl: './jana-cetak-permohon-kad-kuasa.component.scss'
})

export class JanaCetakPermohonKadKuasaComponent {
  // Pagination
  pageSize = 10;
  currentPage = 1;
  
    tableData = [
    {
      nama: 'Faridah Binti Jamil',
      noDokumenID: '890101145678',
      bahagian: 'Pemeriksaan Masuk & Kawalan',
      jawatanGred: 'Penolongan Pegawai Imigresen / KP29',
      nomborWatra: '8901/17(2020)',
      nomborPerkhidmatan: '777-25',
    },
    {
      nama: 'Ahmad Bin Zulkifli',
      noDokumenID: '920322083344',
      bahagian: 'Khidmat Ekspatriat',
      jawatanGred: 'Pegawai Teknologi Maklumat / F41',
      nomborWatra: '8950/17(2020)',
      nomborPerkhidmatan: '778-25',
    },
    {
      nama: 'Muhammad Rizal Bin Rahman',
      noDokumenID: '890101145678',
      bahagian: 'Khidmat Pengurusan',
      jawatanGred: 'Pembantu Imigresen / KP19',
      nomborWatra: '8988/16(2020)',
      nomborPerkhidmatan: '779-25',
    },
  ];

   // Paginated data
  get pagedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.tableData.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.tableData.length / this.pageSize) || 1;
  }

  get paginationNumbers() {
    const pages: (number | string)[] = [];
    const total = this.totalPages;

    if (total <= 6) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      if (this.currentPage > 3) pages.push(1, '...');
      for (
        let i = Math.max(1, this.currentPage - 1);
        i <= Math.min(total, this.currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (this.currentPage < total - 2) pages.push('...', total);
    }
    return pages;
  }

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
