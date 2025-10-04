import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BadgeModule, GridModule } from '@coreui/angular';
import { ReusableTabComponent } from './../../../shared/reusable-tab/reusable-tab.component';
import {
  ButtonModule,
  CardModule,
  FormModule,
  HeaderModule,
  AvatarModule,
} from '@coreui/angular';

interface PembatalanID {
  sebabPembatalan: string;
  noPermohonan: string;
  lainSebab: string;
  tarikhTamatPembatalan: string;
  catatan: string;
}

interface UploadedDocument {
  id: number;
  namaDokumen: string;
  format: string;
}

@Component({
  selector: 'maklumat-profil-pegawai',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    FormModule,
    HeaderModule,
    AvatarModule,
    FormsModule,
    RouterModule,
    BadgeModule,
    GridModule,
    ReusableTabComponent
  ],
  templateUrl: './pengesahan-permohonan-pembatalan.component.html',
  styleUrls: ['./pengesahan-permohonan-pembatalan.component.scss']
})
export class PengesahanPermohonanPembatalanComponent implements OnInit {


  newPembatalanID: PembatalanID = {
    sebabPembatalan: '',
    noPermohonan: '',
    lainSebab: '',
    tarikhTamatPembatalan: '',
    catatan: ''
  };
  
  pembatalanIDList: PembatalanID[] = [];

  uploadedDocuments: UploadedDocument[] = [
    {
      id: 1,
      namaDokumen: 'Surat Permohonan',
      format: '.pdf'
    }
  ];

  // ===== CORE METHODS =====
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('Maklumat Profil Pegawai component initialized');
    // this.validateForm();
    this.newPembatalanID = {
      sebabPembatalan: 'Salah maklumat',
      noPermohonan: 'PRM-2025-001',
      lainSebab: 'Kesilapan teknikal semasa pendaftaran',
      tarikhTamatPembatalan: '2025-08-31',
      catatan: 'Dibatalkan atas permintaan pengguna'
    };
  }

  goToPrevious(): void {
    this.router.navigate([
      '/IDM/tambah-peranan-tugasan-pegawai-bantuan/lulus-tambah-cawangan-tugasan-baru/permohonan-pegawai-bantuan'
    ]);
  }

  goToNext(): void {
    console.log('Form data:', this.pembatalanIDList);
    
    this.router.navigate([
      '/IDM/tambah-peranan-tugasan-pegawai-bantuan/lulus-tambah-cawangan-tugasan-baru/maklumat-penetapan-peranan'
    ]);
  }

  showWujudID(): void {
    console.log('Show Wujud ID clicked');
  }

    // ===== VALIDATION =====
  isFormValid: boolean = false;

  canProceedToNext(): boolean {
    // this.validateForm();
    return this.isFormValid;
  }

  // validateForm(): void {
  //   const requiredFields = [
  //     this.formData.kategoriPegawai,
  //     this.formData.jenisDokumen,
  //     this.formData.noDokumen,
  //     this.formData.nama,
  //     this.formData.tarikhLahir,
  //     this.formData.jantina,
  //     this.formData.noPengenalan,
  //     this.formData.noTelefon,
  //     this.formData.email,
  //     this.formData.lokasi,
  //     this.formData.tempatBertugas,
  //     this.formData.bahagian,
  //     this.formData.unit,
  //     this.formData.jawatan,
  //     this.formData.gred,
  //     this.formData.keperluanBiometrik,
  //     this.formData.kaedahLog
  //   ];
  //   this.isFormValid = requiredFields.every(field => !!field);
  // }

  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;
  selectedUploadDokumen: UploadedDocument | null = null;

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
