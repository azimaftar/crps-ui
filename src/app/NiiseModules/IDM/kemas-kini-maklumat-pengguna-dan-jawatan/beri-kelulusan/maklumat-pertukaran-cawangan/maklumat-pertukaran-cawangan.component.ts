import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BadgeModule, ColComponent, RowComponent, CardModule, GridModule, ButtonModule } from '@coreui/angular';
import { ReusableTabComponent } from './../../../shared/reusable-tab/reusable-tab.component'


interface DokumenItem {
  id: number;
  namadokumen: string;
  format: string;
}

@Component({
  selector: 'maklumat-pertukaran-cawangan',
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
    RouterModule,
    ReusableTabComponent
  ],
  templateUrl: './maklumat-pertukaran-cawangan.component.html',
  styleUrls: ['./maklumat-pertukaran-cawangan.component.scss']
})
export class MaklumatPertukaranCawanganComponent implements OnInit {
   dokumenList: DokumenItem[] = [
    { id: 1, namadokumen: 'Surat_Pengesahan.pdf', format: 'PDF' },
    { id: 2, namadokumen: 'Borang_Permohonan.docx', format: 'DOCX' },
  ];

  // Form data
  formData = {
     // Maklumat Keputusan fields
  disahkan: 'Hanif bin Rahman',
  tarikhPemulangan: '21 September 2022',

    // Existing form fields
  gredSediaAda: 'KP19',
  gredMelebihi: '',
  catatan: '',

  // Tambahan berdasarkan input form kamu
  jenisPertukaran: 'cawangan', // untuk radio button
  lokasi: 'Putrajaya',
  tempatBertugas: 'Cawangan Imigresen Putrajaya',
  bahagianBaharu: 'Bahagian Sumber Manusia',
  unitBaharu: 'Unit Pentadbiran',
  gred: 'N41',
  tarikhMula: '1 Januari 2023',
  tarikhPenangguhan: '1 Januari 2023'
};

  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;

  // File upload
  selectedFile: File | null = null;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialize component
    this.goToPageNumber = this.currentPage;
  }

    // Step navigation
  currentStep = 1;
  steps = [
    'Permohanan Pertukaran Unit/ Cawangan',
    'Maklumat Profil Pegawai',
    'Maklumat Penetapan Peranan',
    'Maklumat PTJ',
    'Sejarah ID'
  ];

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
        if (this.currentPage > 1) this.currentPage--;
        break;
      case 'next':
        if (this.currentPage < this.totalPages) this.currentPage++;
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
    console.log('Navigating to previous step');
    // Add your navigation logic here
    // Example: this.router.navigate(['/previous-step']);
    this.router.navigate(['/IDM/kemas-kini-maklumat-pengguna-dan-jawatan/beri-kelulusan/maklumat-pertukaran-cawangan']);
  }

  /**
   * Navigate to next step
   */
  goToNext(): void {
    console.log('Navigating to next step');
    console.log('Form data:', this.formData);
    // Process completion
    if (confirm('Adakah anda pasti untuk menyelesaikan permohonan ID pengguna ini?')) {
      // Implement completion logic here
      // Example: this.submitApplication();
      alert('Permohonan ID pengguna telah berjaya diselesaikan!');
    }
    // Add your navigation logic here
    this.router.navigate(['/IDM/kemas-kini-maklumat-pengguna-dan-jawatan/beri-kelulusan/maklumat-profil-pegawai']);
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
}