import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReusableTabComponent } from './../../../shared/reusable-tab/reusable-tab.component'

interface PerananItem {
  id: number;
  bahagian: string;
  unit: string;
  peranan: string;
  selected: boolean;
}

interface ModalForm {
  bahagian: string;
  unit: string;
  peranan: string;
  urusniaga: {
    tambahPeranan: boolean;
    kemaskiniMaklumat: boolean;
  };
}

@Component({
  selector: 'maklumat-penetapan-peranan',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReusableTabComponent

  ],
  templateUrl: './maklumat-penetapan-peranan.component.html',
  styleUrls: ['./maklumat-penetapan-peranan.component.scss']
})
export class MaklumatPenetapanPerananComponent implements OnInit {
  perananList: PerananItem[] = [
    { id: 1, bahagian: 'Visa, Pas & Permit', unit: 'PLS', peranan: 'Penyelia Kanan', selected: false },
    { id: 2, bahagian: 'Pengurusan ID', unit: 'Pasport', peranan: 'Penyelia', selected: false },
    { id: 3, bahagian: 'Operasi', unit: 'Pasport', peranan: 'Pegawai', selected: false },
    { id: 4, bahagian: 'Teknologi Maklumat', unit: 'Sistem', peranan: 'Pentadbir Sistem', selected: false },
    { id: 5, bahagian: 'Keselamatan', unit: 'Kawalan Akses', peranan: 'Pengawal Keselamatan', selected: false },
    { id: 6, bahagian: 'Visa, Pas & Permit', unit: 'PLS', peranan: 'Pegawai Penyelia', selected: false },
    { id: 7, bahagian: 'Pengurusan ID', unit: 'Pasport', peranan: 'Pembantu Tadbir', selected: false },
    { id: 8, bahagian: 'Operasi', unit: 'Pasport', peranan: 'Juruteknik', selected: false },
    { id: 9, bahagian: 'Teknologi Maklumat', unit: 'Sistem', peranan: 'Pembangun Perisian', selected: false },
    { id: 10, bahagian: 'Keselamatan', unit: 'Kawalan Akses', peranan: 'Penyelia', selected: false },
    { id: 11, bahagian: 'Visa, Pas & Permit', unit: 'PLS', peranan: 'Ketua Unit', selected: false },
    { id: 12, bahagian: 'Pengurusan ID', unit: 'Pasport', peranan: 'Pegawai', selected: false },
    { id: 13, bahagian: 'Operasi', unit: 'Pasport', peranan: 'Pekerja Kontrak', selected: false },
    { id: 14, bahagian: 'Teknologi Maklumat', unit: 'Sistem', peranan: 'Analyst', selected: false },
    { id: 15, bahagian: 'Keselamatan', unit: 'Kawalan Akses', peranan: 'Pembantu Keselamatan', selected: false }
  ];

  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;
  selectedPeranan: PerananItem | null = null;

  currentStep = 2;

  steps = [
    'Maklumat Profil Pegawai',
    'Maklumat Penetapan Peranan',
    'Dokumen Sokongan',
    'Sejarah ID'
  ];



  // Modal properties
  isModalOpen: boolean = false;
  modalForm: ModalForm = {
    bahagian: '',
    unit: '',
    peranan: '',
    urusniaga: {
      tambahPeranan: false,
      kemaskiniMaklumat: false
    }
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.goToPageNumber = this.currentPage;
  }

  get totalItems(): number {
    return this.perananList.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get paginatedPeranan(): PerananItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.perananList.slice(startIndex, endIndex);
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

  toggleSelectAll(selectAll: boolean): void {
    this.paginatedPeranan.forEach(item => (item.selected = selectAll));
  }

  getSelectedCount(): number {
    return this.perananList.filter(item => item.selected).length;
  }

  deleteSelected(): void {
    const count = this.getSelectedCount();
    if (count === 0) {
      alert('Sila pilih item untuk dipadam.');
      return;
    }
    if (confirm(`Adakah anda pasti untuk memadam ${count} item yang dipilih?`)) {
      this.perananList = this.perananList.filter(item => !item.selected);
      if (this.paginatedPeranan.length === 0 && this.currentPage > 1) {
        this.currentPage--;
        this.goToPageNumber = this.currentPage;
      }
    }
  }

  refreshPeranan(): void {
    this.perananList.forEach(item => (item.selected = false));
    alert('Data peranan telah dikemaskini.');
  }

  selectPTJ(ptj: PerananItem): void {
    this.selectedPeranan = { ...ptj };
  }

  removePeranan(id: number): void {
    if (confirm('Adakah anda pasti untuk memadam rekod sejarah ini?')) {
      this.perananList = this.perananList.filter(item => item.id !== id);
      if (this.paginatedPeranan.length === 0 && this.currentPage > 1) {
        this.currentPage--;
        this.goToPageNumber = this.currentPage;
      }
    }
  }

  goToPrevious(): void {
    // Navigation logic to previous step (not in template)
    console.log('Navigating to previous step');
    this.router.navigate(['/IDM/pendaftaran-id-pentadbir-utama/daftar-id-pengguna-kata-laluan/maklumat-profil-pegawai']);
  }

  goToNext(): void {
    // Navigation logic to previous step (not in template)
    console.log('Navigating to previous step');
    this.router.navigate(['/IDM/pendaftaran-id-pentadbir-utama/daftar-id-pengguna-kata-laluan/dokumen-sokongan']);

    // Process completion
    if (confirm('Adakah anda pasti untuk menyelesaikan permohonan ID pengguna ini?')) {
      // Implement completion logic here
      // Example: this.submitApplication();
      alert('Permohonan ID pengguna telah berjaya diselesaikan!');
    }
  }

  showWujudID(): void {
    // Show ID existence check (not in template)
    console.log('Show Wujud ID function triggered');
    alert('Fungsi semakan ID sedia ada akan dilaksanakan.');
  }

  // Modal Methods
  goToPermohonanTambahPeranan(): void {
    this.router.navigate(['/IDM/tambah-peranan-tugasan-id-pengguna/permohonan-tambah-peranan-tugasan/permohonan-tambah-peranan']);
  }

  closePenetapanPerananModal(): void {
    this.isModalOpen = false;
    document.body.classList.remove('modal-open');
    this.resetModalForm();
  }

  resetModalForm(): void {
    this.modalForm = {
      bahagian: '',
      unit: '',
      peranan: '',
      urusniaga: {
        tambahPeranan: false,
        kemaskiniMaklumat: false
      }
    };
  }

  tambahPeranan(): void {
    // Validation
    if (!this.modalForm.bahagian || !this.modalForm.unit || !this.modalForm.peranan) {
      alert('Sila lengkapkan semua maklumat yang diperlukan.');
      return;
    }

    // Generate new ID
    const newId = Math.max(...this.perananList.map(p => p.id), 0) + 1;

    // Add new peranan
    const newPeranan: PerananItem = {
      id: newId,
      bahagian: this.modalForm.bahagian,
      unit: this.modalForm.unit,
      peranan: this.modalForm.peranan,
      selected: false
    };

    this.perananList.push(newPeranan);

    // Show success message
    alert('Peranan baru telah berjaya ditambah.');

    // Close modal
    this.closePenetapanPerananModal();

    // Optionally, navigate to the last page to show the new item
    this.currentPage = this.totalPages;
    this.goToPageNumber = this.currentPage;
  }
}