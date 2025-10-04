import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
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
  ],
})
export class AdmDashboardComponent {
  // Search inputs (to send to backend)
  searchNama = '';
  searchJenisDokumen = '';
  searchNoDokumen = '';

  // Pagination
  pageSize = 10;
  currentPage = 1;

  // Table Data
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

  // Backend search trigger
  search() {
    // Call backend API here with searchNama, searchJenisDokumen, searchNoDokumen
    this.currentPage = 1;
  }

  resetSearch() {
    this.searchNama = '';
    this.searchJenisDokumen = '';
    this.searchNoDokumen = '';
    this.currentPage = 1;
  }

  // Pagination methods
  previousPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  goToPage(p: number | string) {
    if (typeof p === 'number') this.currentPage = p;
  }
}
