import { Component, NgModule, OnInit } from '@angular/core';
import { BadgeModule, ColComponent, RowComponent } from '@coreui/angular'; // For <c-badge>
import { FormsModule } from '@angular/forms'; // For [(ngModel)]
import { CommonModule } from '@angular/common'; // For *ngIf, *ngFor
import { CardModule } from '@coreui/angular';
import { GridModule } from '@coreui/angular';
import { ButtonModule } from '@coreui/angular';
import { Router, RouterModule } from '@angular/router';

interface PermohonanIDItem {
  id: string;
  nama: string;
  noPermohonan: string;
  jenisPermohonan: string;
  tarikhPermohonan: Date;
  status: 'baharu' | 'dalam_proses' | 'lulus' | 'tolak' | 'pending';
  selected: boolean;
}

interface SearchFilters {
  carian: string;
  jenisPermohonan: string;
  noPermohonan: string;
  tarikhPermohonan: string;
  status: string;
}

@Component({
  selector: 'senarai-permohonan-id',
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
  templateUrl: './senarai-permohonan-id.component.html',
  styleUrls: ['./senarai-permohonan-id.component.scss']
})
export class SenaraiPermohonanIdComponent implements OnInit {

  getStatusColor(status: string): string {
    switch (status) {
      case 'baharu': return 'primary';
      case 'dalam_proses': return 'warning';
      case 'lulus': return 'success';
      case 'tolak': return 'danger';
      case 'pending': return 'secondary';
      default: return 'primary';
    }
  }

  // Application data
  applicationsList: PermohonanIDItem[] = [
    {
      id: '1',
      nama: 'Mohd Nu\'man Bin Mohd Luki',
      noPermohonan: 'IDM/PUTRAJAYAKND912/2022/09/08709',
      jenisPermohonan: 'Permohonan ID Pengguna',
      tarikhPermohonan: new Date('2022-02-11'),
      status: 'baharu',
      selected: false
    },
    {
      id: '2',
      nama: 'Zainul Arif Bin Abu',
      noPermohonan: 'IDM/PUTRAJAYAKND912/2022/08/05655',
      jenisPermohonan: 'Permohonan ID Pengguna',
      tarikhPermohonan: new Date('2021-12-12'),
      status: 'baharu',
      selected: false
    },
    {
      id: '3',
      nama: 'Nur Qistina Binti Harun',
      noPermohonan: 'IDM/PUTRAJAYAKND912/2022/07/05655',
      jenisPermohonan: 'Permohonan ID Pengguna',
      tarikhPermohonan: new Date('2021-12-03'),
      status: 'baharu',
      selected: false
    },
    {
      id: '4',
      nama: 'Ahmad Farid Bin Hassan',
      noPermohonan: 'IDM/PUTRAJAYAKND912/2023/01/12345',
      jenisPermohonan: 'Kemaskini ID Pengguna',
      tarikhPermohonan: new Date('2023-01-15'),
      status: 'dalam_proses',
      selected: false
    },
    {
      id: '5',
      nama: 'Siti Nurhaliza Binti Mahmud',
      noPermohonan: 'IDM/PUTRAJAYAKND912/2023/02/54321',
      jenisPermohonan: 'Reset Password',
      tarikhPermohonan: new Date('2023-02-20'),
      status: 'lulus',
      selected: false
    },
    {
      id: '6',
      nama: 'Muhammad Hafiz Bin Abdullah',
      noPermohonan: 'IDM/PUTRAJAYAKND912/2023/03/67890',
      jenisPermohonan: 'Permohonan ID Pengguna',
      tarikhPermohonan: new Date('2023-03-10'),
      status: 'tolak',
      selected: false
    },
    {
      id: '7',
      nama: 'Fatimah Az-Zahra Binti Omar',
      noPermohonan: 'IDM/PUTRAJAYAKND912/2023/04/11111',
      jenisPermohonan: 'Kemaskini ID Pengguna',
      tarikhPermohonan: new Date('2023-04-05'),
      status: 'pending',
      selected: false
    },
    {
      id: '8',
      nama: 'Razak Bin Ismail',
      noPermohonan: 'IDM/PUTRAJAYAKND912/2023/05/22222',
      jenisPermohonan: 'Permohonan ID Pengguna',
      tarikhPermohonan: new Date('2023-05-12'),
      status: 'dalam_proses',
      selected: false
    },
    {
      id: '9',
      nama: 'Noraini Binti Yahya',
      noPermohonan: 'IDM/PUTRAJAYAKND912/2023/06/33333',
      jenisPermohonan: 'Reset Password',
      tarikhPermohonan: new Date('2023-06-01'),
      status: 'lulus',
      selected: false
    },
    {
      id: '10',
      nama: 'Khairul Anwar Bin Zainal',
      noPermohonan: 'IDM/PUTRAJAYAKND912/2023/07/44444',
      jenisPermohonan: 'Permohonan ID Pengguna',
      tarikhPermohonan: new Date('2023-07-15'),
      status: 'baharu',
      selected: false
    },
    {
      id: '11',
      nama: 'Mariam Binti Yusof',
      noPermohonan: 'IDM/PUTRAJAYAKND912/2023/08/55555',
      jenisPermohonan: 'Kemaskini ID Pengguna',
      tarikhPermohonan: new Date('2023-08-20'),
      status: 'dalam_proses',
      selected: false
    },
    {
      id: '12',
      nama: 'Ali Bin Rahman',
      noPermohonan: 'IDM/PUTRAJAYAKND912/2023/09/66666',
      jenisPermohonan: 'Permohonan ID Pengguna',
      tarikhPermohonan: new Date('2023-09-05'),
      status: 'tolak',
      selected: false
    },
    {
      id: '13',
      nama: 'Aisha Binti Karim',
      noPermohonan: 'IDM/PUTRAJAYAKND912/2023/10/77777',
      jenisPermohonan: 'Reset Password',
      tarikhPermohonan: new Date('2023-10-12'),
      status: 'lulus',
      selected: false
    },
    {
      id: '14',
      nama: 'Hassan Bin Ahmad',
      noPermohonan: 'IDM/PUTRAJAYAKND912/2023/11/88888',
      jenisPermohonan: 'Permohonan ID Pengguna',
      tarikhPermohonan: new Date('2023-11-18'),
      status: 'pending',
      selected: false
    },
    {
      id: '15',
      nama: 'Zuraida Binti Ibrahim',
      noPermohonan: 'IDM/PUTRAJAYAKND912/2023/12/99999',
      jenisPermohonan: 'Kemaskini ID Pengguna',
      tarikhPermohonan: new Date('2023-12-25'),
      status: 'baharu',
      selected: false
    }
  ];

  // Filtered applications for search results
  filteredApplications: PermohonanIDItem[] = [...this.applicationsList];

  // Search filter properties
  searchFilters: SearchFilters = {
    carian: '',
    jenisPermohonan: '',
    noPermohonan: '',
    tarikhPermohonan: '',
    status: ''
  };

  // Pagination properties
  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;
  selectAll: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialize component
    this.goToPageNumber = this.currentPage;
    this.searchApplications(); // Initialize filtered data
  }

  /**
   * Get paginated applications data
   */
  get paginatedApplications(): PermohonanIDItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredApplications.slice(startIndex, endIndex);
  }

  /**
   * Get total number of filtered items
   */
  get totalItems(): number {
    return this.filteredApplications.length;
  }

  /**
   * Get total number of pages
   */
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  /**
   * Search applications based on filters
   */
  searchApplications(): void {
    this.filteredApplications = this.applicationsList.filter(app => {
      // Search in name and application number
      const matchesCarian = !this.searchFilters.carian ||
        app.nama.toLowerCase().includes(this.searchFilters.carian.toLowerCase()) ||
        app.noPermohonan.toLowerCase().includes(this.searchFilters.carian.toLowerCase());

      // Filter by application type
      const matchesJenis = !this.searchFilters.jenisPermohonan ||
        app.jenisPermohonan === this.searchFilters.jenisPermohonan;

      // Filter by application number
      const matchesNo = !this.searchFilters.noPermohonan ||
        app.noPermohonan.toLowerCase().includes(this.searchFilters.noPermohonan.toLowerCase());

      // Filter by status
      const matchesStatus = !this.searchFilters.status ||
        app.status === this.searchFilters.status;

      // Filter by date (basic date comparison)
      let matchesDate = true;
      if (this.searchFilters.tarikhPermohonan) {
        const filterDate = new Date(this.searchFilters.tarikhPermohonan);
        const appDate = new Date(app.tarikhPermohonan);
        matchesDate = appDate.toDateString() === filterDate.toDateString();
      }

      return matchesCarian && matchesJenis && matchesNo && matchesStatus && matchesDate;
    });

    this.currentPage = 1;
    this.goToPageNumber = 1;
    this.selectAll = false;
  }

  /**
   * Reset search filters
   */
  resetFilters(): void {
    this.searchFilters = {
      carian: '',
      jenisPermohonan: '',
      noPermohonan: '',
      tarikhPermohonan: '',
      status: ''
    };
    this.searchApplications();
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
   * Handle select all checkbox change
   */
  onSelectAllChange(): void {
    this.paginatedApplications.forEach(app => {
      app.selected = this.selectAll;
    });
  }

  /**
   * Get selected applications count
   */
  getSelectedCount(): number {
    return this.applicationsList.filter(app => app.selected).length;
  }

  /**
   * View application details
   */
  viewApplication(applicationId: string): void {
    const application = this.applicationsList.find(app => app.id === applicationId);
    if (application) {
      console.log('Viewing application:', application);
      // Navigate to application details page
      // Example: this.router.navigate(['/permohonan-id', applicationId]);
      alert(`Melihat butiran permohonan: ${application.nama}\nNo. Permohonan: ${application.noPermohonan}`);
    }
  }

  /**
   * Edit application
   */
  editApplication(applicationId: string): void {
    const application = this.applicationsList.find(app => app.id === applicationId);
    if (application) {
      console.log('Editing application:', application);
      // Navigate to edit page
      // Example: this.router.navigate(['/permohonan-id/edit', applicationId]);
      alert(`Mengedit permohonan: ${application.nama}`);
    }
  }

  /**
   * Delete application
   */
  deleteApplication(applicationId: string): void {
    const application = this.applicationsList.find(app => app.id === applicationId);
    if (application) {
      if (confirm(`Adakah anda pasti untuk memadam permohonan ini?\n\nNama: ${application.nama}\nNo. Permohonan: ${application.noPermohonan}`)) {
        this.applicationsList = this.applicationsList.filter(app => app.id !== applicationId);
        this.searchApplications(); // Refresh filtered data
        alert('Permohonan telah berjaya dipadam.');
      }
    }
  }

  /**
   * Process selected applications
   */
  processSelectedApplications(action: string): void {
    const selectedApps = this.applicationsList.filter(app => app.selected);

    if (selectedApps.length === 0) {
      alert('Sila pilih permohonan untuk diproses.');
      return;
    }

    let confirmMessage = '';
    let successMessage = '';
    let newStatus: any = null;

    switch (action) {
      case 'approve':
        confirmMessage = `Adakah anda pasti untuk meluluskan ${selectedApps.length} permohonan yang dipilih?`;
        successMessage = `${selectedApps.length} permohonan telah berjaya diluluskan.`;
        newStatus = 'lulus';
        break;
      case 'reject':
        confirmMessage = `Adakah anda pasti untuk menolak ${selectedApps.length} permohonan yang dipilih?`;
        successMessage = `${selectedApps.length} permohonan telah berjaya ditolak.`;
        newStatus = 'tolak';
        break;
      case 'process':
        confirmMessage = `Adakah anda pasti untuk memproses ${selectedApps.length} permohonan yang dipilih?`;
        successMessage = `${selectedApps.length} permohonan sedang diproses.`;
        newStatus = 'dalam_proses';
        break;
      case 'delete':
        confirmMessage = `Adakah anda pasti untuk memadam ${selectedApps.length} permohonan yang dipilih?`;
        successMessage = `${selectedApps.length} permohonan telah berjaya dipadam.`;
        break;
    }

    if (confirm(confirmMessage)) {
      if (action === 'delete') {
        // Remove selected applications
        const selectedIds = selectedApps.map(app => app.id);
        this.applicationsList = this.applicationsList.filter(app => !selectedIds.includes(app.id));
      } else {
        // Update status of selected applications
        selectedApps.forEach(app => {
          app.status = newStatus;
          app.selected = false;
        });
      }

      this.selectAll = false;
      this.searchApplications(); // Refresh filtered data
      alert(successMessage);
    }
  }

  /**
   * Export applications data
   */
  exportApplications(): void {
    const dataToExport = this.filteredApplications.map(app => ({
      'Nama': app.nama,
      'No. Permohonan': app.noPermohonan,
      'Jenis Permohonan': app.jenisPermohonan,
      'Tarikh Permohonan': app.tarikhPermohonan.toLocaleDateString('ms-MY'),
      'Status': app.status
    }));

    const dataStr = JSON.stringify(dataToExport, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `senarai-permohonan-id-${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    console.log('Exporting applications data');
  }

  /**
   * Refresh applications data
   */
  refreshApplications(): void {
    // Implement refresh logic - typically would fetch from API
    console.log('Refreshing applications data');

    // For demo purposes, reset selections and refresh filtered data
    this.applicationsList.forEach(app => app.selected = false);
    this.selectAll = false;
    this.searchApplications();

    alert('Data permohonan telah dikemaskini.');
  }

  /**
   * Send notification/email to selected applicants
   */
  sendNotification(): void {
    const selectedApps = this.applicationsList.filter(app => app.selected);

    if (selectedApps.length === 0) {
      alert('Sila pilih permohonan untuk menghantar notifikasi.');
      return;
    }

    if (confirm(`Adakah anda pasti untuk menghantar notifikasi kepada ${selectedApps.length} pemohon yang dipilih?`)) {
      // Implement notification sending logic
      console.log('Sending notifications to:', selectedApps);
      alert(`Notifikasi telah berjaya dihantar kepada ${selectedApps.length} pemohon.`);

      // Reset selections
      selectedApps.forEach(app => app.selected = false);
      this.selectAll = false;
    }
  }

  /**
   * Generate report
   */
  generateReport(): void {
    console.log('Generating applications report');

    const reportData = {
      totalApplications: this.applicationsList.length,
      filteredApplications: this.filteredApplications.length,
      statusBreakdown: {
        baharu: this.applicationsList.filter(app => app.status === 'baharu').length,
        dalam_proses: this.applicationsList.filter(app => app.status === 'dalam_proses').length,
        lulus: this.applicationsList.filter(app => app.status === 'lulus').length,
        tolak: this.applicationsList.filter(app => app.status === 'tolak').length,
        pending: this.applicationsList.filter(app => app.status === 'pending').length
      },
      jenisBreakdown: {
        'Permohonan ID Pengguna': this.applicationsList.filter(app => app.jenisPermohonan === 'Permohonan ID Pengguna').length,
        'Kemaskini ID Pengguna': this.applicationsList.filter(app => app.jenisPermohonan === 'Kemaskini ID Pengguna').length,
        'Reset Password': this.applicationsList.filter(app => app.jenisPermohonan === 'Reset Password').length
      }
    };

    const reportStr = JSON.stringify(reportData, null, 2);
    const reportBlob = new Blob([reportStr], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(reportBlob);
    link.download = `laporan-permohonan-id-${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    alert('Laporan telah berjaya dijana dan dimuat turun.');
  }

  /**
   * Navigate to daftar page
   */
  openMaklumatProfilPegawai(): void {
    // Add your navigation logic here
    this.router.navigate(['/IDM/baharu/maklumat-profil-pegawai']);
  }

}