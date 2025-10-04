import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BadgeModule, ColComponent, RowComponent, GridModule } from '@coreui/angular';
import { ReusableTabComponent } from './../../../shared/reusable-tab/reusable-tab.component'

import {
  ButtonModule,
  CardModule,
  FormModule,
  HeaderModule,
  AvatarModule,
} from '@coreui/angular';

interface FormData {
  kategoriPegawai: string;
  jenisDokumen: string;
  noDokumen: string;
  warganegara: string;
  nama: string;
  tarikhLahir: string;
  jantina: string;
  noPengenalan: string;
  noPerkhidmatan: string;
  noTelefon: string;
  email: string;
  lokasi: string;
  tempatBertugas: string;
  bahagian: string;
  unit: string;
  jawatan: string;
  gred: string;
  gradMelebihiAda: string;
  keperluanBiometrik: string;
  jenisBiometrik: {
    capJari: boolean;
    wajah: boolean;
  };
  kaedahLog: {
    capJari: boolean;
    wajah: boolean;
    otp: boolean;
  };
}

interface PembatalanID {
  sebabPembatalan: string;
  noPermohonan: string;
  lainSebab: string;
  tarikhTamatPembatalan: string;
  catatan: string;
}

interface UploadedDocument {
  id: number;
  keterangan: string;
  namaFail: string;
  format: string;
  file?: File;
}

@Component({
  selector: 'maklumat-profil-pegawai',
  standalone: true,
  imports: [CommonModule,
    ButtonModule,
    CardModule,
    FormModule,
    HeaderModule,
    AvatarModule,
    FormsModule,
    RouterModule,
    BadgeModule,
    GridModule,
    ReusableTabComponent],
  templateUrl: './maklumat-profil-pegawai.component.html',
  styleUrls: ['./maklumat-profil-pegawai.component.scss']
})
export class MaklumatProfilPegawaiComponent implements OnInit {

  formData: FormData = {
    kategoriPegawai: 'Pegawai JIM',
    jenisDokumen: 'MyKad',
    noDokumen: '930330025489',
    warganegara: 'Warganegara',
    nama: 'Mohd Russaini Bin Idrus',
    tarikhLahir: '30 Januari 1993',
    jantina: 'Lelaki',
    noPengenalan: 'AB123456',
    noPerkhidmatan: 'AB123456',
    noTelefon: '0112345678',
    email: 'poh.lim@gov.my',
    lokasi: 'Putrajaya',
    tempatBertugas: 'Putrajaya',
    bahagian: 'Visa, Pas dan Permit',
    unit: 'VPP',
    jawatan: 'Pembantu Tadbir',
    gred: 'KP19',
    gradMelebihiAda: 'Sila Pilih-',
    keperluanBiometrik: 'Ya',
    jenisBiometrik: {
      capJari: true,
      wajah: false
    },
    kaedahLog: {
      capJari: true,
      wajah: true,
      otp: true
    }
  };

  isFormValid: boolean = false;

  currentStep = 1;

  steps = [
    'Maklumat Profil Pegawai',
    'Maklumat Penetapan Peranan',
    'Maklumat PTJ'
  ];

  isMaklumatPegawaiModalOpen = false;

  isPembatalanIDModalOpen = false;
  newPembatalanID: PembatalanID = {
    sebabPembatalan: '',
    noPermohonan: '',
    lainSebab: '',
    tarikhTamatPembatalan: '',
    catatan: ''
  };
  pembatalanIDList: PembatalanID[] = [];

  isFileUploadModalOpen = false;
  fileUploadForm = {
    keterangan: '',
    selectedFile: null as File | null
  };

  uploadedDocuments: UploadedDocument[] = [
    {
      id: 1,
      keterangan: 'Surat Permohonan',
      namaFail: 'surat_tambah_peranan',
      format: '.pdf'
    }
  ];

  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;
  selectedUploadDokumen: UploadedDocument | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('Maklumat Profil Pegawai component initialized');
    this.newPembatalanID = {
      sebabPembatalan: 'Salah maklumat',
      noPermohonan: 'PRM-2025-001',
      lainSebab: 'Kesilapan teknikal semasa pendaftaran',
      tarikhTamatPembatalan: '2025-08-31',
      catatan: 'Dibatalkan atas permintaan pengguna'
    };
  }

  openMaklumatPegawaiModal(): void {
    this.isMaklumatPegawaiModalOpen = true;
    document.body.classList.add('modal-open');
  }

  closeMaklumatPegawaiModal(): void {
    this.isMaklumatPegawaiModalOpen = false;
    document.body.classList.remove('modal-open');
  }

  openPembatalanIDModal(): void {
    this.isPembatalanIDModalOpen = true;
  }

  closePembatalanIDModal(): void {
    this.isPembatalanIDModalOpen = false;
  }

  addPembatalanID(): void {
    if (
      this.newPembatalanID.noPermohonan &&
      this.newPembatalanID.sebabPembatalan &&
      this.newPembatalanID.tarikhTamatPembatalan
    ) {
      this.pembatalanIDList.push({ ...this.newPembatalanID });
      this.newPembatalanID = {
        sebabPembatalan: '',
        noPermohonan: '',
        lainSebab: '',
        tarikhTamatPembatalan: '',
        catatan: ''
      };
      this.closePembatalanIDModal();
    } else {
      alert('Sila isi semua maklumat pembatalan ID.');
    }
  }

  openFileUpload(): void {
    this.isFileUploadModalOpen = true;
    this.fileUploadForm = { keterangan: '', selectedFile: null };
    document.body.classList.add('modal-open');
  }

  closeFileUploadModal(): void {
    this.isFileUploadModalOpen = false;
    document.body.classList.remove('modal-open');
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.fileUploadForm.selectedFile = file;
    }
  }

  uploadDocument(): void {
    if (this.fileUploadForm.selectedFile && this.fileUploadForm.keterangan) {
      const newId = Math.max(...this.uploadedDocuments.map(d => d.id), 0) + 1;
      const newDoc: UploadedDocument = {
        id: newId,
        keterangan: this.fileUploadForm.keterangan,
        namaFail: this.fileUploadForm.selectedFile.name,
        format: this.getFileExtension(this.fileUploadForm.selectedFile.name),
        file: this.fileUploadForm.selectedFile
      };

      this.uploadedDocuments.push(newDoc);
      this.closeFileUploadModal();
      alert('Dokumen telah berjaya dimuat naik.');
    } else {
      alert('Sila lengkapkan semua maklumat yang diperlukan.');
    }
  }

  removeDocument(index: number): void {
    if (confirm('Adakah anda pasti untuk memadam dokumen ini?')) {
      this.uploadedDocuments.splice(index, 1);
    }
  }

  private getFileExtension(filename: string): string {
    return filename.substring(filename.lastIndexOf('.'));
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

  goToPrevious(): void {
    console.log('Navigating to previous step');
    this.router.navigate(['/IDM/tambah-peranan-tugasan-pegawai-bantuan/lulus-tambah-cawangan-tugasan-baru/permohonan-pegawai-bantuan']);
  }

  goToNext(): void {
    console.log('Navigating to next step');
    console.log('Form data:', this.formData);
    if (confirm('Adakah anda pasti untuk menyelesaikan permohonan ID pengguna ini?')) {
      alert('Permohonan ID pengguna telah berjaya diselesaikan!');
    }
    this.router.navigate(['/IDM/tambah-peranan-tugasan-pegawai-bantuan/lulus-tambah-cawangan-tugasan-baru/maklumat-penetapan-peranan']);
  }

  showWujudID(): void {
    console.log('Show Wujud ID clicked');
  }

  canProceedToNext(): boolean {
    return this.isFormValid;
  }
}