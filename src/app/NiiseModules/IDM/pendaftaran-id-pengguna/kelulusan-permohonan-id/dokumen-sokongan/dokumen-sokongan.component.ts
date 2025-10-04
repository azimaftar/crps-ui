import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReusableTabComponent } from '../../../shared/reusable-tab/reusable-tab.component'

interface DokumenItem {
  id: number;
  namadokumen: string;
  format: string;
}

@Component({
  selector: 'dokumen-sokongan',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReusableTabComponent
  ],
  templateUrl: './dokumen-sokongan.component.html',
  styleUrls: ['./dokumen-sokongan.component.scss'],
})
export class IDMDokumenSokonganComponent implements OnInit {
  dokumenList: DokumenItem[] = [
    { id: 1, namadokumen: 'Surat_Pengesahan.pdf', format: 'PDF' },
    { id: 2, namadokumen: 'Borang_Permohonan.docx', format: 'DOCX' },
    { id: 3, namadokumen: 'Resit_Bayaran.jpg', format: 'JPG' },
    { id: 4, namadokumen: 'Laporan_Tahunan.xlsx', format: 'XLSX' },
    { id: 5, namadokumen: 'Invoice_Mac2025.pdf', format: 'PDF' },
    { id: 6, namadokumen: 'Kontrak_Kerja.docx', format: 'DOCX' },
    { id: 7, namadokumen: 'Gambar_Profil.png', format: 'PNG' },
    { id: 8, namadokumen: 'Surat_Rujukan.pdf', format: 'PDF' },
    { id: 9, namadokumen: 'Carta_Organisasi.pptx', format: 'PPTX' },
    { id: 10, namadokumen: 'Bukti_Pembayaran.jpeg', format: 'JPEG' },
    { id: 11, namadokumen: 'Dokumen_Keselamatan.txt', format: 'TXT' },
    { id: 12, namadokumen: 'Senarai_Hadir.csv', format: 'CSV' },
    { id: 13, namadokumen: 'Nota_Mesyuarat.doc', format: 'DOC' },
    { id: 14, namadokumen: 'Manual_Pengguna.pdf', format: 'PDF' },
  ];

  currentStep = 4;

  steps = [
    'Maklumat Profil Pegawai',
    'Maklumat Penetapan Peranan',
    'Maklumat PTJ',
    'Dokumen Sokongan',
    'Sejarah ID'
  ];
  
  // Pagination properties
  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;

  // Modal/Dialog state
  showCodeSelection: boolean = false;

  // File upload
  selectedFile: File | null = null;

  catatan: string = '';
  isAgreementChecked: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialize component
    this.goToPageNumber = this.currentPage;
  }

  get paginatedDocuments(): DokumenItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.dokumenList.slice(startIndex, endIndex);
  }

  /**
   * Get total number of items
   */
  get totalItems(): number {
    return this.dokumenList.length;
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
  removeDocument(id: number): void {
    if (confirm('Adakah anda pasti untuk memadam rekod sejarah ini?')) {
      this.dokumenList = this.dokumenList.filter(item => item.id !== id);

      // Adjust current page if necessary
      if (this.paginatedDocuments.length === 0 && this.currentPage > 1) {
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
    this.router.navigate(['IDM/pendaftaran-id-pengguna/kelulusan-permohonan-id/maklumat-ptj']);
  }

  /**
   * Navigate to next step or complete the process
   */
  goToNext(): void {
    // Handle completion of the process since this is the last step
    console.log('Completing the ID application process');

    this.router.navigate(['IDM/pendaftaran-id-pengguna/kelulusan-permohonan-id/sejarah-id']);
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
   * Export history data
   */
  exportHistory(): void {
    // Implement export functionality
    console.log('Exporting history data');
    const dataStr = JSON.stringify(this.dokumenList, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `sejarah-id-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  }
}
