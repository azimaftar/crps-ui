import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
  ColComponent,
  RowComponent,
  ButtonModule,
  FormModule,
  TableModule,
  PaginationModule,
} from '@coreui/angular';

interface NotifikasiItem {
  id: number;
  bil: number;
  tarikhMasa: Date;
  mesej: string;
  selected: boolean
}

@Component({
  selector: 'app-terima-notifikasi-di-menu-notifikasi',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RowComponent,
    ColComponent,
    ButtonModule,
    FormModule,
    TableModule,
    PaginationModule,
    RouterModule
  ],
  templateUrl: './terima-notifikasi-di-menu-notifikasi.component.html',
  styleUrls: ['./terima-notifikasi-di-menu-notifikasi.component.scss']
})
export class TerimaNotifikasiDiMenuNotifikasiComponent implements OnInit {
  notificationForm: FormGroup;

  notifikasiList: NotifikasiItem[] = [
    {
      id: 1,
      bil: 1,
      tarikhMasa: new Date('2025-05-07 10:00'),
      mesej: 'Permohonan ID pengguna baharu telah dihantar untuk semakan',
      selected: false
    }
  ];

  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;

  constructor(private fb: FormBuilder, private router: Router) {
    this.notificationForm = this.fb.group({
      carian: [''],
      tarikhMula: [''],
      tarikhAkhir: [''],
      jenis: [''],
      status: ['']
    });
  }

  viewDetails(docNo: string) {
    console.log('Clicked MfId:', '900101138232');
    this.router.navigate(['/IDM/pendaftaran-id-pengguna/baharu/maklumat-profil-pegawai', '900101138232']);
  }


  ngOnInit(): void {
    this.goToPageNumber = this.currentPage;
  }

  getJenisColor(jenis: string): string {
    switch (jenis) {
      case 'Kejayaan': return 'success';
      case 'Amaran': return 'warning';
      case 'Kritikal': return 'danger';
      case 'Info': return 'info';
      default: return 'primary';
    }
  }


  getStatusColor(status: string): string {
    switch (status) {
      case 'Dibaca': return 'secondary';
      case 'Belum Dibaca': return 'primary';
      default: return 'light';
    }
  }

  get paginatedNotifications(): NotifikasiItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.notifikasiList.slice(startIndex, endIndex);
  }

  get totalItems(): number {
    return this.notifikasiList.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  getDisplayRange(): string {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage + 1;
    const endIndex = Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
    return `${startIndex}-${endIndex}`;
  }

  goToPage(action: string): void {
    switch (action) {
      case 'first':
        this.currentPage = 1;
        break;
      case 'prev':
        if (this.currentPage > 1) {
          this.currentPage--;
        }
        break;
      case 'next':
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
        break;
      case 'last':
        this.currentPage = this.totalPages;
        break;
    }
    this.goToPageNumber = this.currentPage;
  }

  goToSpecificPage(): void {
    if (this.goToPageNumber >= 1 && this.goToPageNumber <= this.totalPages) {
      this.currentPage = this.goToPageNumber;
    } else {
      this.goToPageNumber = this.currentPage;
    }
  }

  onItemsPerPageChange(): void {
    this.currentPage = 1;
    this.goToPageNumber = 1;
  }

  toggleSelectAll(selectAll: boolean): void {
    this.paginatedNotifications.forEach(item => {
      item.selected = selectAll;
    });
  }

  getSelectedCount(): number {
    return this.notifikasiList.filter(item => item.selected).length;
  }

  filterByStatus(status: string): void {

    this.notificationForm.patchValue({ status: status });
    this.onSubmit();
  }

  filterByJenis(jenis: string): void {

    this.notificationForm.patchValue({ jenis: jenis });
    this.onSubmit();
  }


  onSubmit(): void {
    console.log('Search/Filter criteria:', this.notificationForm.value);

    const formValues = this.notificationForm.value;
    let filteredData = [...this.notifikasiList];

    if (formValues.carian) {
      const searchTerm = formValues.carian.toLowerCase();
      filteredData = filteredData.filter(item =>
        item.mesej.toLowerCase().includes(searchTerm)
      );
    }

    if (formValues.tarikhMula || formValues.tarikhAkhir) {
      const startDate = formValues.tarikhMula ? new Date(formValues.tarikhMula) : null;
      const endDate = formValues.tarikhAkhir ? new Date(formValues.tarikhAkhir) : null;

      filteredData = filteredData.filter(item => {
        if (startDate && item.tarikhMasa < startDate) return false;
        if (endDate && item.tarikhMasa > endDate) return false;
        return true;
      });
    }
    console.log(`Filter applied. ${filteredData.length} notifications found.`);
  }

  clearFilters(): void {
    this.notificationForm.reset();
    this.currentPage = 1;
    this.goToPageNumber = 1;
    console.log('All filters cleared');
  }
}