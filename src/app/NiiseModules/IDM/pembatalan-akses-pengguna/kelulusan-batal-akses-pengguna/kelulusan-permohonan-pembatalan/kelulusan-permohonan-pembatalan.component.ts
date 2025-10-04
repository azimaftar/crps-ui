import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BadgeModule, ColComponent, RowComponent, CardModule, GridModule, ButtonModule } from '@coreui/angular';

interface UploadedDocument {
  id: number;
  keterangan: string;
  namaFail: string;
  format: string;
  file?: File;
}

interface PembatalanID {
  sebabPembatalan: string;
  noPermohonan: string;
  lainSebab: string;
  tarikhTamatPembatalan: string;
  catatan: string;
}

@Component({
  selector: 'permohonan-pegawai-bantuan',
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
    RouterModule
  ],
  templateUrl: './kelulusan-permohonan-pembatalan.component.html',
  styleUrls: ['./kelulusan-permohonan-pembatalan.component.scss']
})
export class KelulusanPermohonanPembatalanComponent implements OnInit {

  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;

  // Form data - Updated to include Maklumat Keputusan fields
  formData = {
    // Maklumat Keputusan fields
    disahkan: 'Hanif bin Rahman',
    tarikhPemulangan: '21 September 2022',

    // Existing form fields
    gredSediaAda: 'KP19',
    gredMelebihi: '',
    catatan: 'Tambah Peranan'
  };

  newPembatalanID: PembatalanID = {
    sebabPembatalan: '',
    noPermohonan: '',
    lainSebab: '',
    tarikhTamatPembatalan: '',
    catatan: ''
  };


  // File upload form
  fileUploadForm = {
    keterangan: '',
    selectedFile: null as File | null
  };

  // Data arrays
  uploadedDocuments: UploadedDocument[] = [
    {
      id: 1,
      keterangan: 'Surat Permohonan',
      namaFail: 'surat_tambah_peranan',
      format: '.pdf'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialize component
  }

  /**
     * Navigate to previous step
     */
  goToPrevious(): void {
    console.log('Navigating to previous step');
    // Add your navigation logic here
    // Example: this.router.navigate(['/previous-step']);
    this.router.navigate(['/IDM/tambah-peranan-tugasan-id-pengguna/kelulusan-tambah-peranan-tugasan/maklumat-penetapan-peranan']);
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
    this.router.navigate(['/IDM/tambah-peranan-tugasan-id-pengguna/kelulusan-tambah-peranan-tugasan/maklumat-profil-pegawai']);
  }

  get totalUploadDokumenItems(): number {
    return this.uploadedDocuments.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalUploadDokumenItems / this.itemsPerPage);
  }

  get paginatedUploadDokumen(): UploadedDocument[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.uploadedDocuments.slice(startIndex, endIndex);
  }

  getUploadDokumenDisplayRange(): string {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage + 1;
    const endIndex = Math.min(this.currentPage * this.itemsPerPage, this.totalUploadDokumenItems);
    return `${startIndex}-${endIndex}`;
  }

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
}