import { Component, NgModule, OnInit } from '@angular/core';
import { BadgeModule, ColComponent, RowComponent } from '@coreui/angular'; // For <c-badge>
import { FormsModule } from '@angular/forms'; // For [(ngModel)]
import { CommonModule } from '@angular/common'; // For *ngIf, *ngFor
import { CardModule } from '@coreui/angular';
import { GridModule } from '@coreui/angular';
import { ButtonModule } from '@coreui/angular';
import { Router, RouterModule } from '@angular/router';

interface SejarahIDItem {
  id: number;
  tarikh: Date;
  perkara: string;
  tempatBertugas: string;
  dilaksanakanOleh: string;
  diluluskanOleh: string;
  status: 'Aktif' | 'Tidak Aktif' | 'Pending' | 'Ditolak';
  selected: boolean;
}

@Component({
  selector: 'sejarah-id',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BadgeModule,
    ButtonModule,
    ColComponent,
    RowComponent,
    CardModule,
    GridModule,
    ButtonModule,
    RouterModule
  ],
  templateUrl: './sejarah-id.component.html',
  styleUrls: ['./sejarah-id.component.scss']
})
export class SejarahIdComponent implements OnInit {

  getStatusColor(status: string): string {
    switch (status) {
      case 'Aktif': return 'success';
      case 'Pending': return 'warning';
      case 'Tidak Aktif': return 'danger';
      case 'Ditolak': return 'secondary';
      default: return 'primary';
    }
  }

  // ID History data
  sejarahIDList: SejarahIDItem[] = [
    {
      id: 1,
      tarikh: new Date('2024-01-15'),
      perkara: 'Permohonan ID Pengguna Baru',
      tempatBertugas: 'PEJABAT IMIGRESEN KEDAH',
      dilaksanakanOleh: 'Ahmad bin Ali',
      diluluskanOleh: 'Siti Aminah',
      status: 'Aktif',
      selected: false
    },
    {
      id: 2,
      tarikh: new Date('2024-02-20'),
      perkara: 'Kemaskini Maklumat Profil',
      tempatBertugas: 'PEJABAT IMIGRESEN PENANG',
      dilaksanakanOleh: 'Fatimah binti Hassan',
      diluluskanOleh: 'Mohd Rizal',
      status: 'Aktif',
      selected: false
    },
    {
      id: 3,
      tarikh: new Date('2024-03-10'),
      perkara: 'Reset Kata Laluan',
      tempatBertugas: 'PEJABAT IMIGRESEN PERAK',
      dilaksanakanOleh: 'Nurul Aina',
      diluluskanOleh: 'Hassan bin Omar',
      status: 'Pending',
      selected: false
    },
    {
      id: 4,
      tarikh: new Date('2024-04-05'),
      perkara: 'Permohonan Akses Tambahan',
      tempatBertugas: 'PEJABAT IMIGRESEN SELANGOR',
      dilaksanakanOleh: 'Azman bin Idris',
      diluluskanOleh: 'Pending',
      status: 'Pending',
      selected: false
    },
    {
      id: 5,
      tarikh: new Date('2024-05-12'),
      perkara: 'Pembatalan ID',
      tempatBertugas: 'PEJABAT IMIGRESEN JOHOR',
      dilaksanakanOleh: 'Mariam binti Yusof',
      diluluskanOleh: 'Rejected',
      status: 'Ditolak',
      selected: false
    },
    {
      id: 6,
      tarikh: new Date('2024-05-20'),
      perkara: 'Permohonan ID Sementara',
      tempatBertugas: 'PEJABAT IMIGRESEN MELAKA',
      dilaksanakanOleh: 'Razak bin Abdullah',
      diluluskanOleh: 'Pending',
      status: 'Pending',
      selected: false
    },
    {
      id: 7,
      tarikh: new Date('2024-06-01'),
      perkara: 'Tukar Jawatan',
      tempatBertugas: 'PEJABAT IMIGRESEN NEGERI SEMBILAN',
      dilaksanakanOleh: 'Ali bin Zahari',
      diluluskanOleh: 'Siti Aminah',
      status: 'Aktif',
      selected: false
    },
    {
      id: 8,
      tarikh: new Date('2024-06-03'),
      perkara: 'Permohonan Akses Sistem Tambahan',
      tempatBertugas: 'PEJABAT IMIGRESEN TERENGGANU',
      dilaksanakanOleh: 'Husna binti Azhar',
      diluluskanOleh: 'Pending',
      status: 'Pending',
      selected: false
    },
    {
      id: 9,
      tarikh: new Date('2024-06-10'),
      perkara: 'Reset ID Sementara',
      tempatBertugas: 'PEJABAT IMIGRESEN PERLIS',
      dilaksanakanOleh: 'Zulkifli bin Kassim',
      diluluskanOleh: 'Mohd Rizal',
      status: 'Tidak Aktif',
      selected: false
    },
    {
      id: 10,
      tarikh: new Date('2024-06-15'),
      perkara: 'Aktifkan Semula ID Lama',
      tempatBertugas: 'PEJABAT IMIGRESEN KELANTAN',
      dilaksanakanOleh: 'Aisyah binti Karim',
      diluluskanOleh: 'Hassan bin Omar',
      status: 'Aktif',
      selected: false
    },
    {
      id: 11,
      tarikh: new Date('2024-06-18'),
      perkara: 'Tamatkan ID Sementara',
      tempatBertugas: 'PEJABAT IMIGRESEN LABUAN',
      dilaksanakanOleh: 'Roslan bin Ramli',
      diluluskanOleh: 'Pending',
      status: 'Ditolak',
      selected: false
    },
    {
      id: 12,
      tarikh: new Date('2024-06-20'),
      perkara: 'Pengesahan Dokumen',
      tempatBertugas: 'PEJABAT IMIGRESEN PUTRAJAYA',
      dilaksanakanOleh: 'Fatin binti Ali',
      diluluskanOleh: 'Mohd Rizal',
      status: 'Aktif',
      selected: false
    },
    {
      id: 13,
      tarikh: new Date('2024-06-21'),
      perkara: 'Kemaskini Emel Rasmi',
      tempatBertugas: 'PEJABAT IMIGRESEN SABAH',
      dilaksanakanOleh: 'Amir bin Hassan',
      diluluskanOleh: 'Siti Aminah',
      status: 'Pending',
      selected: false
    },
    {
      id: 14,
      tarikh: new Date('2024-06-22'),
      perkara: 'Kemasukan Data Manual',
      tempatBertugas: 'PEJABAT IMIGRESEN SARAWAK',
      dilaksanakanOleh: 'Liyana binti Zainal',
      diluluskanOleh: 'Hassan bin Omar',
      status: 'Aktif',
      selected: false
    },
    {
      id: 15,
      tarikh: new Date('2024-06-25'),
      perkara: 'Padamkan Akses Lama',
      tempatBertugas: 'PEJABAT IMIGRESEN WP KUALA LUMPUR',
      dilaksanakanOleh: 'Ismail bin Musa',
      diluluskanOleh: 'Pending',
      status: 'Tidak Aktif',
      selected: false
    }
  ];


  // Pagination properties
  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;

  // Modal/Dialog state
  showCodeSelection: boolean = false;

  // File upload
  selectedFile: File | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialize component
    this.goToPageNumber = this.currentPage;
  }

  /**
   * Get paginated history data
   */
  get paginatedHistory(): SejarahIDItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.sejarahIDList.slice(startIndex, endIndex);
  }

  /**
   * Get total number of items
   */
  get totalItems(): number {
    return this.sejarahIDList.length;
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
   * Remove history item by ID
   */
  removeHistory(id: number): void {
    if (confirm('Adakah anda pasti untuk memadam rekod sejarah ini?')) {
      this.sejarahIDList = this.sejarahIDList.filter(item => item.id !== id);

      // Adjust current page if necessary
      if (this.paginatedHistory.length === 0 && this.currentPage > 1) {
        this.currentPage--;
        this.goToPageNumber = this.currentPage;
      }
    }
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
   * Navigate to previous step
   */
  goToPrevious(): void {
    // Handle navigation to previous step (Step 4 - Dokumen Sokongan)
    console.log('Going to previous step - Dokumen Sokongan');
    // You can emit an event or use router navigation here
    // Example: this.router.navigate(['/dokumen-sokongan']);
    this.router.navigate(['/IDM/pendaftaran-id-pengguna/sokongan-permohonan-id/dokumen-sokongan']);
  }

  /**
   * Navigate to next step or complete the process
   */
  goToNext(): void {
    // Handle completion of the process since this is the last step
    console.log('Completing the ID application process');

    // Validate if any required actions are needed
    // const pendingItems = this.sejarahIDList.filter(item => item.status === 'Pending');
    // if (pendingItems.length > 0) {
    //   alert(`Terdapat ${pendingItems.length} item yang masih dalam status pending. Sila pastikan semua item telah diproses.`);
    //   return;
    // }
    this.router.navigate(['/IDM/pendaftaran-id-pengguna/sokongan-permohonan-id/senarai-permohonan-id']);
    // Process completion
    if (confirm('Adakah anda pasti untuk menyelesaikan permohonan ID pengguna ini?')) {
      // Implement completion logic here
      // Example: this.submitApplication();
      alert('Permohonan ID pengguna telah berjaya diselesaikan!');
    }
  }

  /**
   * Show Wujud ID functionality
   */
  showWujudID(): void {
    // Handle existing ID check
    console.log('Checking for existing ID');
    alert('Fungsi semakan ID sedia ada akan dilaksanakan.');
    // Implement your logic here to check for existing IDs
  }

  /**
   * Handle file selection for upload
   */
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log('File selected:', file.name);
    }
  }

  /**
   * Upload selected file
   */
  // uploadFile(): void {
  //   if (this.selectedFile) {
  //     // Implement file upload logic here
  //     console.log('Uploading file:', this.selectedFile.name);

  //     // Simulate upload process
  //     setTimeout(() => {
  //       alert('Fail berjaya dimuat naik!');
  //       this.selectedFile = null;
  //       this.showCodeSelection = false;

  //       // Add new history entry for file upload
  //       const newHistoryItem: SejarahIDItem = {
  //         id: this.sejarahIDList.length + 1,
  //         tarikh: new Date(),
  //         perkara: 'Muat Naik Dokumen - ' + this.selectedFile?.name,
  //         tempatBertugas: 'SISTEM',
  //         dilaksanakanOleh: 'Pengguna',
  //         diluluskanOleh: 'Pending',
  //         status: 'Pending',
  //         selected: false
  //       };

  //       this.sejarahIDList.unshift(newHistoryItem);
  //     }, 1000);
  //   } else {
  //     alert('Sila pilih fail untuk dimuat naik.');
  //   }
  // }

  /**
   * Select/Deselect all items
   */
  toggleSelectAll(selectAll: boolean): void {
    this.paginatedHistory.forEach(item => {
      item.selected = selectAll;
    });
  }

  /**
   * Get selected items count
   */
  getSelectedCount(): number {
    return this.sejarahIDList.filter(item => item.selected).length;
  }

  /**
   * Delete selected items
   */
  deleteSelected(): void {
    const selectedCount = this.getSelectedCount();
    if (selectedCount === 0) {
      alert('Sila pilih item untuk dipadam.');
      return;
    }

    if (confirm(`Adakah anda pasti untuk memadam ${selectedCount} item yang dipilih?`)) {
      this.sejarahIDList = this.sejarahIDList.filter(item => !item.selected);

      // Adjust current page if necessary
      if (this.paginatedHistory.length === 0 && this.currentPage > 1) {
        this.currentPage--;
        this.goToPageNumber = this.currentPage;
      }
    }
  }

  /**
   * Export history data
   */
  exportHistory(): void {
    // Implement export functionality
    console.log('Exporting history data');
    const dataStr = JSON.stringify(this.sejarahIDList, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `sejarah-id-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  }

  /**
   * Refresh history data
   */
  refreshHistory(): void {
    // Implement refresh logic - typically would fetch from API
    console.log('Refreshing history data');
    // For demo purposes, just reset selections
    this.sejarahIDList.forEach(item => item.selected = false);
    alert('Data sejarah telah dikemaskini.');
  }
}

