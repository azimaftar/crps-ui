import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-dashboard-pengguna-dalaman',
  templateUrl: './dashboard-pengguna-dalaman.component.html',
  styleUrls: ['./dashboard-pengguna-dalaman.component.scss'],
  imports: [CommonModule, FormsModule]
})

export class DashboardPenggunaDalamanComponent {
  search = {
    tarikhPermohonan: '',
    jenisPermohonan: '',
    keutamaan: '',
    status: ''
  };

  permohonanList = [
    { tarikh: '01/07/2025', jenis: 'Permohonan Visa Pelajar', keutamaan: 'Tinggi', status: 'Semakan' },
    { tarikh: '28/06/2025', jenis: 'Permohonan Pas Lawatan', keutamaan: 'Sederhana', status: 'Selesai' },
    { tarikh: '25/06/2025', jenis: 'Permohonan Pekerja Asing', keutamaan: 'Rendah', status: 'Tolak' },
    { tarikh: '22/06/2025', jenis: 'Permohonan Permit Masuk', keutamaan: 'Tinggi', status: 'Semakan' },
    { tarikh: '20/06/2025', jenis: 'Pembaharuan Pas Lawatan', keutamaan: 'Sederhana', status: 'Selesai' }
  ];

  onSearch() {
    console.log('Search form submitted:', this.search);
  }

currentPage = 1;
totalPages = 3;

goToPage(page: number) {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
    // Add your data loading logic here
  }
}

onPageJump(event: any) {
  const page = parseInt(event.target.value);
  if (!isNaN(page)) {
    this.goToPage(page);
  }
  event.target.value = '';
}

}
