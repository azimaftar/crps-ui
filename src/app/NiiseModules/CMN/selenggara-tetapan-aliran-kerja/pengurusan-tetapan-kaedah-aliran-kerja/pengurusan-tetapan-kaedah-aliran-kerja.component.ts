import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DataItem {
  id: number;
  unit: string;
  transaksi: string;
  aliran: string;
  kaedah: string;
  status: string;
}

@Component({
  standalone: true,
  selector: 'app-pengurusan-tetapan-kaedah-aliran-kerja',
  imports: [CommonModule, FormsModule],
  templateUrl: './pengurusan-tetapan-kaedah-aliran-kerja.component.html',
  styleUrls: ['./pengurusan-tetapan-kaedah-aliran-kerja.component.scss']
})
export class PengurusanTetapanKaedahAliranKerjaComponent {

  originalData: DataItem[] = [
    { id: 1, unit: "PPA", transaksi: "PERMOHONAN KELULUSAN VISA ... (SEMENANJUNG)", aliran: "SEMAKAN PERMOHONAN", kaedah: "TUGASAN MANUAL", status: "AKTIF" },
    { id: 2, unit: "PPA", transaksi: "PERMOHONAN KELULUSAN VISA ... (SEMENANJUNG)", aliran: "LULUSAN PERMOHONAN", kaedah: "TUNTUTAN", status: "AKTIF" },
    { id: 3, unit: "ESD", transaksi: "PERMOHONAN JAWATAN KELAYAKAN EKSPATRIAT", aliran: "SEMAKAN PERMOHONAN", kaedah: "TUGASAN MANUAL", status: "AKTIF" },
    { id: 4, unit: "ESD", transaksi: "PERMOHONAN PAS LAWATAN KERJA SEMENTARA (PLKS) PRA", aliran: "ULASAN DAN KEPUTUSAN PERMOHONAN", kaedah: "EDARAN AUTO", status: "AKTIF" },
  ];

  filteredData: DataItem[] = [...this.originalData];
  currentPage = 1;
  recordsPerPage = 10;
  isSearchActive = false;

  searchUnit = '';
  searchTransaksi = '';
  searchAliran = '';

  // Modal states
  isEditModalOpen = false;
  editItem: DataItem | null = null;
  isSearchModalOpen = false;
  isSuccessModalOpen = false;
  successMessage = '';

  // NyahAktif Confirmation
  isConfirmNyahAktifOpen = false;
  selectedNyahAktifItem: DataItem | null = null;

  // Tambah
  showTambahButton = false;
  isTambahModalOpen = false;
  newItem: DataItem = { id: 0, unit: '', transaksi: '', aliran: '', kaedah: '', status: 'AKTIF' };

  // Getter
  get pageData() {
    const start = (this.currentPage - 1) * this.recordsPerPage;
    return this.filteredData.slice(start, start + this.recordsPerPage);
  }

  get totalRecords() {
    return this.filteredData.length;
  }

  get totalPages() {
    return Math.ceil(this.filteredData.length / this.recordsPerPage);
  }

  // Search
  performSearch() {
    this.filteredData = this.originalData.filter(item => {
      const matchUnit = !this.searchUnit || item.unit.toLowerCase().includes(this.searchUnit.toLowerCase());
      const matchTransaksi = !this.searchTransaksi || item.transaksi.toLowerCase().includes(this.searchTransaksi.toLowerCase());
      const matchAliran = !this.searchAliran || item.aliran.toLowerCase().includes(this.searchAliran.toLowerCase());
      return matchUnit && matchTransaksi && matchAliran;
    });

    this.currentPage = 1;
    this.isSearchActive = !!(this.searchUnit || this.searchTransaksi || this.searchAliran);

    if (this.isSearchActive && this.filteredData.length === 0) {
      this.isSearchModalOpen = true;
    }
  }

  clearSearch() {
    this.searchUnit = '';
    this.searchTransaksi = '';
    this.searchAliran = '';
    this.filteredData = [...this.originalData];
    this.currentPage = 1;
    this.isSearchActive = false;
  }

  // Pagination
  changeRecordsPerPage(size: number) {
    this.recordsPerPage = size;
    this.currentPage = 1;
  }

  goToPage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // Actions
  kemasKini(id: number) {
    const item = this.originalData.find(d => d.id === id);
    if (item) {
      this.editItem = { ...item };
      this.isEditModalOpen = true;
    }
  }

  simpanKemasKini() {
    if (this.editItem) {
      const index = this.originalData.findIndex(d => d.id === this.editItem!.id);
      if (index !== -1) {
        this.originalData[index] = { ...this.editItem };
        this.performSearch();
      }
      this.tutupModal();
      this.successMessage = "Kemas Kini Rekod Berjaya!";
      this.isSuccessModalOpen = true;
    }
  }

  // --- NYAHAKTIF Flow ---
  confirmNyahAktif(item: DataItem) {
    this.selectedNyahAktifItem = item;
    this.isConfirmNyahAktifOpen = true;
  }

  proceedNyahAktif() {
    if (this.selectedNyahAktifItem) {
      this.selectedNyahAktifItem.status = "NYAHAKTIF";
      this.performSearch();
    }
    this.isConfirmNyahAktifOpen = false;
    this.selectedNyahAktifItem = null;
  }

  aktifSemula(id: number) {
    const item = this.originalData.find(d => d.id === id);
    if (item) {
      item.status = "AKTIF";
      this.performSearch();
    }
  }

  openLibrary() {
    alert("Fungsi Library akan membuka modal untuk menambah rekod baru.");
  }

  tutupModal() {
    this.isEditModalOpen = false;
    this.isTambahModalOpen = false;
    this.editItem = null;
  }

  // Tambah Flow
  continueTambah() {
    this.isSearchModalOpen = false;
    this.showTambahButton = true;
  }

  openTambahForm() {
    this.isTambahModalOpen = true;
    this.newItem = { id: 0, unit: '', transaksi: '', aliran: '', kaedah: '', status: 'AKTIF' };
  }

  simpanTambah() {
    this.newItem.id = this.originalData.length + 1;
    this.originalData.push({ ...this.newItem });
    this.filteredData = [...this.originalData];
    this.tutupModal();
    this.successMessage = "Maklumat berjaya disimpan!";
    this.isSuccessModalOpen = true;
    this.showTambahButton = false; // hide selepas simpan
  }
}
