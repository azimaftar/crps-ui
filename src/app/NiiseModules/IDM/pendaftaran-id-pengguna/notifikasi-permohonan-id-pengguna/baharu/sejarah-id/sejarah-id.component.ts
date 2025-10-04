import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReusableTabComponent } from '../../../../shared/reusable-tab/reusable-tab.component'
import { PermohonanDetailService } from '../../../services/permohonan-detail-api.service';

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
    RouterModule,
    ReusableTabComponent
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

  currentStep = 5;

  steps = [
    'Maklumat Profil Pegawai',
    'Maklumat Penetapan Peranan',
    'Maklumat PTJ',
    'Dokumen Sokongan',
    'Sejarah ID'
  ];

  // ID History data
  sejarahIDList: SejarahIDItem[] = [
    
  ];


  // Pagination properties
  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;

  // Modal/Dialog state
  showCodeSelection: boolean = false;

  // File upload
  selectedFile: File | null = null;

  constructor(private router: Router,  private permohonanDetailService: PermohonanDetailService) { }

  ngOnInit(): void {
    // Initialize component
    this.goToPageNumber = this.currentPage;
    const draft = this.permohonanDetailService.getDraft();
    console.log('Existing draft from P1-5:', draft);
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
    this.router.navigate(['/IDM/pendaftaran-id-pengguna/baharu/dokumen-sokongan']);
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
    this.router.navigate(['/IDM/shared/senarai-permohonan-id']);
    // Process completion
    if (confirm('Adakah anda pasti untuk menyelesaikan permohonan ID pengguna ini?')) {
      // Implement completion logic here
      // Example: this.submitApplication();
      alert('Permohonan ID pengguna telah berjaya diselesaikan!');
    }
  }

  private buildPayload(): any {
  
  const draft = this.permohonanDetailService.getDraft() || {};

  return {
    ...draft
  }
  }

  showWujudID(): void {
     console.log('Completing the ID application process');

  if (confirm('Adakah anda pasti untuk menyelesaikan permohonan ID pengguna ini?')) {
    // Build final payload
    const finalPayload = this.buildPayload();
    console.log('Final payload to send:', finalPayload);

    // Call API
    this.permohonanDetailService.hantarPermohonan(finalPayload).subscribe({
      next: (response) => {
        alert('Permohonan ID pengguna telah berjaya diselesaikan!');
        // Navigate to senarai permohonan
        this.router.navigate(['/IDM/shared/senarai-permohonan-id']);
      },
      error: (err) => {
        console.error('Error submitting application:', err);
        alert('Ralat berlaku semasa menyimpan permohonan. Sila cuba lagi.');
      }
    });
  }
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

