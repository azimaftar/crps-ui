import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Rekod = {
  modul: string;
  submodul: string;
  kodTransaksi: string;
  cawangan: string;
  tarikh: string; // ISO date
};

@Component({
  standalone: true,
  selector: 'app-pengurusan-audit-trail',
  templateUrl: './pengurusan-audit-trail.component.html',
  styleUrls: ['./pengurusan-audit-trail.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class PengurusanAuditTrailComponent {
  // Dropdown data
  modulList = ['PPA', 'ESD', 'VPP'];
  submodulList = [
    'PERMOHONAN KELULUSAN VISA (SEMENANJUNG)',
    'PERMOHONAN KELULUSAN VISA (SABAH/SARAWAK)',
    'PERMOHONAN PLKS',
    'PERMOHONAN JAWATAN EKSPATRIAT',
    'KEMUDAHAN BEKERJA LOKASI KEDUA'
  ];
  cawanganList = ['Putrajaya', 'Kuala Lumpur', 'Johor', 'Sabah', 'Sarawak'];

  // Carian state
  search = {
    modul: '',
    submodul: '',
    kodTransaksi: '',
    cawangan: '',
    tarikhMula: '',
    tarikhAkhir: ''
  };

  // Dummy data (hardcode)
  private allResults: Rekod[] = [
    { modul: 'PPA', submodul: 'PERMOHONAN KELULUSAN VISA (SEMENANJUNG)', kodTransaksi: 'PPA02-0001', cawangan: 'Putrajaya', tarikh: '2024-07-02' },
    { modul: 'PPA', submodul: 'PERMOHONAN KELULUSAN VISA (SEMENANJUNG)', kodTransaksi: 'PPA02-0002', cawangan: 'Kuala Lumpur', tarikh: '2024-07-11' },
    { modul: 'PPA', submodul: 'PERMOHONAN KELULUSAN VISA (SABAH/SARAWAK)', kodTransaksi: 'PPA03-0003', cawangan: 'Sarawak', tarikh: '2024-07-12' },
    { modul: 'PPA', submodul: 'PERMOHONAN KELULUSAN VISA (SABAH/SARAWAK)', kodTransaksi: 'PPA03-0004', cawangan: 'Sabah', tarikh: '2024-08-03' },
    { modul: 'ESD', submodul: 'PERMOHONAN JAWATAN EKSPATRIAT', kodTransaksi: 'ESD01-0001', cawangan: 'Putrajaya', tarikh: '2024-06-09' },
    { modul: 'ESD', submodul: 'PERMOHONAN PLKS', kodTransaksi: 'ESD02-0001', cawangan: 'Johor', tarikh: '2024-06-25' },
    { modul: 'ESD', submodul: 'KEMUDAHAN BEKERJA LOKASI KEDUA', kodTransaksi: 'ESD03-0001', cawangan: 'Kuala Lumpur', tarikh: '2024-05-15' },
    { modul: 'VPP', submodul: 'PERMOHONAN PLKS', kodTransaksi: 'VPP01-0001', cawangan: 'Putrajaya', tarikh: '2024-03-01' },
    { modul: 'VPP', submodul: 'PERMOHONAN PLKS', kodTransaksi: 'VPP01-0002', cawangan: 'Johor', tarikh: '2024-03-12' },
    { modul: 'VPP', submodul: 'KELULUSAN PELAJAR ANTARABANGSA', kodTransaksi: 'VPP02-0001', cawangan: 'Putrajaya', tarikh: '2024-02-20' },
  ];

  // Hasil carian + pagination
  hasSearched = false;
  filteredResults: Rekod[] = [];
  pagedResults: Rekod[] = [];

  pageSize = 10;
  currentPage = 1;
  totalPages = 1;

  // Popup state
  showPopup = false;
  selectedRecord: Rekod | null = null;

  // --- Actions ---
  resetSearch() {
    this.search = { modul: '', submodul: '', kodTransaksi: '', cawangan: '', tarikhMula: '', tarikhAkhir: '' };
    this.hasSearched = false;
    this.filteredResults = [];
    this.pagedResults = [];
    this.currentPage = 1;
    this.totalPages = 1;
  }

  performSearch() {
    const mula = this.search.tarikhMula ? new Date(this.search.tarikhMula) : null;
    const akhir = this.search.tarikhAkhir ? new Date(this.search.tarikhAkhir) : null;

    this.filteredResults = this.allResults.filter(r => {
      const byModul = !this.search.modul || r.modul === this.search.modul;
      const bySubmodul = !this.search.submodul || r.submodul === this.search.submodul;
      const byKod = !this.search.kodTransaksi || r.kodTransaksi.toLowerCase().includes(this.search.kodTransaksi.toLowerCase());
      const byCawangan = !this.search.cawangan || r.cawangan === this.search.cawangan;

      const d = new Date(r.tarikh);
      const byMula = !mula || d >= mula;
      const byAkhir = !akhir || d <= akhir;

      return byModul && bySubmodul && byKod && byCawangan && byMula && byAkhir;
    });

    this.hasSearched = true;
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    const total = this.filteredResults.length;
    this.totalPages = Math.max(1, Math.ceil(total / this.pageSize));
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedResults = this.filteredResults.slice(start, start + this.pageSize);
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagination();
  }

  get totalPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get totalRecords(): number {
    return this.filteredResults.length;
  }

// ...
  // --- Popup control ---
  openPopup(record: Rekod) {
    this.selectedRecord = record;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.selectedRecord = null;
  }
}
