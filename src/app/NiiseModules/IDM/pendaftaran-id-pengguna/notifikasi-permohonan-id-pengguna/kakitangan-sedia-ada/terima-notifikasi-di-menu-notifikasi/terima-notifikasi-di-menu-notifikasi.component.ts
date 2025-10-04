import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ColComponent,
  FormControlDirective,
  RowComponent,
  TableDirective,
  ButtonDirective,
  ButtonModule,
  FormModule,
  TableModule,
  InputGroupComponent,
  PaginationModule
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
    PaginationModule
  ],
  templateUrl: './terima-notifikasi-di-menu-notifikasi.component.html',
  styleUrls: ['./terima-notifikasi-di-menu-notifikasi.component.scss']
})
export class TerimaNotifikasiDiMenuNotifikasiComponent implements OnInit {
  notificationForm: FormGroup;

  // Notification data with enhanced structure
  notifikasiList: NotifikasiItem[] = [
    {
      id: 1,
      bil: 1,
      tarikhMasa: new Date('2025-05-07 10:00'),
      mesej: 'Permohonan ID pengguna baharu telah dihantar untuk semakan',
      selected: false
    },
    {
      id: 2,
      bil: 2,
      tarikhMasa: new Date('2025-05-08 11:00'),
      mesej: 'Dokumen sokongan untuk permohonan ID telah diluluskan',
      selected: false
    },
    {
      id: 3,
      bil: 3,
      tarikhMasa: new Date('2025-05-09 12:00'),
      mesej: 'Kata laluan akan tamat tempoh dalam 7 hari', selected: false
    },
    {
      id: 4,
      bil: 4,
      tarikhMasa: new Date('2025-05-10 13:00'),
      mesej: 'Sistem akan diselenggara pada 15 Mei 2025', selected: false
    },
    {
      id: 5,
      bil: 5,
      tarikhMasa: new Date('2025-05-11 14:00'),
      mesej: 'Percubaan log masuk yang gagal telah dikesan', selected: false
    },
    {
      id: 6,
      bil: 6,
      tarikhMasa: new Date('2025-05-12 15:00'),
      mesej: 'Profil pengguna telah dikemaskini dengan jayanya', selected: false
    },
    {
      id: 7,
      bil: 7,
      tarikhMasa: new Date('2025-05-13 10:00'),
      mesej: 'Permohonan akses sistem tambahan sedang diproses', selected: false
    },
    {
      id: 8,
      bil: 8,
      tarikhMasa: new Date('2025-05-14 11:00'),
      mesej: 'Backup data harian telah selesai,', selected: false
    },
    {
      id: 9,
      bil: 9,
      tarikhMasa: new Date('2025-05-15 12:00'),
      mesej: 'Permohonan reset kata laluan telah ditolak', selected: false
    },
    {
      id: 10,
      bil: 10,
      tarikhMasa: new Date('2025-05-16 13:00'),
      mesej: 'ID pengguna telah diaktifkan semula', selected: false
    },
    {
      id: 11,
      bil: 11,
      tarikhMasa: new Date('2025-05-17 14:00'),
      mesej: 'Laporan bulanan telah dijana', selected: false
    },
    {
      id: 12,
      bil: 12,
      tarikhMasa: new Date('2025-05-18 15:00'),
      mesej: 'Kemas kini sistem telah selesai', selected: false
    },
    {
      id: 13,
      bil: 13,
      tarikhMasa: new Date('2025-05-19 10:00'),
      mesej: 'Ruang storan hampir penuh', selected: false
    },
    {
      id: 14,
      bil: 14,
      tarikhMasa: new Date('2025-05-20 11:00'),
      mesej: 'Dokumen telah diverifikasi dan diluluskan', selected: false
    },
    {
      id: 15,
      bil: 15,
      tarikhMasa: new Date('2025-05-21 12:00'),
      mesej: 'Akses sistem akan ditamatkan pada 30 Mei 2025', selected: false
    },
  ];

  // Pagination properties (adapted from sejarah-id)
  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;

  constructor(private fb: FormBuilder) {
    this.notificationForm = this.fb.group({
      carian: [''],
      tarikhMula: [''],
      tarikhAkhir: [''],
      jenis: [''],
      status: ['']
    });
  }

  ngOnInit(): void {
    // Initialize component
    this.goToPageNumber = this.currentPage;
  }

  /**
   * Get notification type color for styling
   */
  getJenisColor(jenis: string): string {
    switch (jenis) {
      case 'Kejayaan': return 'success';
      case 'Amaran': return 'warning';
      case 'Kritikal': return 'danger';
      case 'Info': return 'info';
      default: return 'primary';
    }
  }

  /**
   * Get status color for styling
   */
  getStatusColor(status: string): string {
    switch (status) {
      case 'Dibaca': return 'secondary';
      case 'Belum Dibaca': return 'primary';
      default: return 'light';
    }
  }

  /**
   * Get paginated notification data
   */
  get paginatedNotifications(): NotifikasiItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.notifikasiList.slice(startIndex, endIndex);
  }

  /**
   * Get total number of items
   */
  get totalItems(): number {
    return this.notifikasiList.length;
  }

  /**
   * Get total number of pages
   */
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  /**
   * Get display range text for pagination info
   */
  getDisplayRange(): string {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage + 1;
    const endIndex = Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
    return `${startIndex}-${endIndex}`;
  }

  /**
   * Handle pagination navigation
   */
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

  /**
   * Go to specific page number
   */
  goToSpecificPage(): void {
    if (this.goToPageNumber >= 1 && this.goToPageNumber <= this.totalPages) {
      this.currentPage = this.goToPageNumber;
    } else {
      // Reset to current page if invalid
      this.goToPageNumber = this.currentPage;
    }
  }

  /**
   * Handle items per page change
   */
  onItemsPerPageChange(): void {
    this.currentPage = 1;
    this.goToPageNumber = 1;
  }

  /**
   * Delete notification
   */
  deleteNotification(id: number): void {
    if (confirm('Adakah anda pasti untuk memadam notifikasi ini?')) {
      this.notifikasiList = this.notifikasiList.filter(item => item.id !== id);

      // Renumber bil after deletion
      this.notifikasiList.forEach((item, index) => {
        item.bil = index + 1;
      });

      // Adjust current page if necessary
      if (this.paginatedNotifications.length === 0 && this.currentPage > 1) {
        this.currentPage--;
        this.goToPageNumber = this.currentPage;
      }
    }
  }

  /**
   * Select/Deselect all items
   */
  toggleSelectAll(selectAll: boolean): void {
    this.paginatedNotifications.forEach(item => {
      item.selected = selectAll;
    });
  }

  /**
   * Get selected items count
   */
  getSelectedCount(): number {
    return this.notifikasiList.filter(item => item.selected).length;
  }

  /**
   * Delete selected notifications
   */
  deleteSelected(): void {
    const selectedCount = this.getSelectedCount();
    if (selectedCount === 0) {
      alert('Sila pilih notifikasi untuk dipadam.');
      return;
    }

    if (confirm(`Adakah anda pasti untuk memadam ${selectedCount} notifikasi yang dipilih?`)) {
      this.notifikasiList = this.notifikasiList.filter(item => !item.selected);

      // Renumber bil after deletion
      this.notifikasiList.forEach((item, index) => {
        item.bil = index + 1;
      });

      // Adjust current page if necessary
      if (this.paginatedNotifications.length === 0 && this.currentPage > 1) {
        this.currentPage--;
        this.goToPageNumber = this.currentPage;
      }
    }
  }

  /**
   * Mark all selected as read
   */
  markSelectedAsRead(): void {
    const selectedCount = this.getSelectedCount();
    if (selectedCount === 0) {
      alert('Sila pilih notifikasi untuk ditandakan sebagai dibaca.');
      return;
    }

    alert(`${selectedCount} notifikasi telah ditandakan sebagai dibaca.`);
  }


  /**
   * Filter notifications by status
   */
  filterByStatus(status: string): void {
    // This would typically filter the data, but for now we'll just update the form
    this.notificationForm.patchValue({ status: status });
    this.onSubmit();
  }

  /**
   * Filter notifications by type
   */
  filterByJenis(jenis: string): void {
    // This would typically filter the data, but for now we'll just update the form
    this.notificationForm.patchValue({ jenis: jenis });
    this.onSubmit();
  }

  /**
   * Export notifications data
   */
  exportNotifications(): void {
    console.log('Exporting notifications data');
    const dataStr = JSON.stringify(this.notifikasiList, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `notifikasi-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  }

  /**
   * Refresh notifications data
   */
  refreshNotifications(): void {
    console.log('Refreshing notifications data');
    // For demo purposes, just reset selections
    this.notifikasiList.forEach(item => item.selected = false);
    alert('Data notifikasi telah dikemaskini.');
  }

  /**
   * Handle form submission for search/filter
   */
  onSubmit(): void {
    console.log('Search/Filter criteria:', this.notificationForm.value);
    // Implement search/filter logic here
    // For now, just log the form values

    const formValues = this.notificationForm.value;
    let filteredData = [...this.notifikasiList];

    // Apply search filter
    if (formValues.carian) {
      const searchTerm = formValues.carian.toLowerCase();
      filteredData = filteredData.filter(item =>
        item.mesej.toLowerCase().includes(searchTerm)
      );
    }


    // Apply date range filter
    if (formValues.tarikhMula || formValues.tarikhAkhir) {
      const startDate = formValues.tarikhMula ? new Date(formValues.tarikhMula) : null;
      const endDate = formValues.tarikhAkhir ? new Date(formValues.tarikhAkhir) : null;

      filteredData = filteredData.filter(item => {
        if (startDate && item.tarikhMasa < startDate) return false;
        if (endDate && item.tarikhMasa > endDate) return false;
        return true;
      });
    }

    // Update the display list (in a real app, you might want to store this separately)
    console.log(`Filter applied. ${filteredData.length} notifications found.`);
  }

  /**
   * Clear all filters
   */
  clearFilters(): void {
    this.notificationForm.reset();
    this.currentPage = 1;
    this.goToPageNumber = 1;
    console.log('All filters cleared');
  }
}