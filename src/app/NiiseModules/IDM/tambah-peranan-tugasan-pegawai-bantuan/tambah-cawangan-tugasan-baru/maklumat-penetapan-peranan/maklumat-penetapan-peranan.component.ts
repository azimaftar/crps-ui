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
    'Sejarah ID'
  ];



  // Modal properties
  isTambahPerananModalOpen = false;
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

  refreshPeranan(): void {
    this.perananList.forEach(item => (item.selected = false));
    alert('Data peranan telah dikemaskini.');
  }

  selectPTJ(ptj: PerananItem): void {
    this.selectedPeranan = { ...ptj };
  }



  goToPrevious(): void {
    // Navigation logic to previous step (not in template)
    console.log('Navigating to previous step');
    this.router.navigate(['/IDM/tambah-peranan-tugasan-pegawai-bantuan/tambah-cawangan-tugasan-baru/maklumat-profil-pegawai']);
  }

  goToNext(): void {
    // Navigation logic to previous step (not in template)
    console.log('Navigating to previous step');
    this.router.navigate(['/IDM/tambah-peranan-tugasan-pegawai-bantuan/tambah-cawangan-tugasan-baru/sejarah-id']);

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

  // Tambah peranan methods - Fixed method names to match HTML
  openTambahPerananModal(): void {
    this.isTambahPerananModalOpen = true; // Changed from isTambahPerananModalOpen
    this.resetModalForm();
    document.body.classList.add('modal-open');
  }

  closePenetapanPerananModal(): void {
    this.isTambahPerananModalOpen = false;
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

  toggleSelectAll(event: any): void {
    const isChecked = event.target.checked;
    this.perananList.forEach(peranan => {
      peranan.selected = isChecked;
    });
  }

  tambahPeranan(): void {
    if (this.modalForm.bahagian &&
      this.modalForm.unit &&
      this.modalForm.peranan) {

      const newId = Math.max(...this.perananList.map(p => p.id), 0) + 1;
      const newPeranan: PerananItem = {
        id: newId,
        bahagian: this.modalForm.bahagian,
        unit: this.modalForm.unit,
        peranan: this.modalForm.peranan,
        selected: false
      };

      this.perananList.push(newPeranan);
      this.closePenetapanPerananModal();
      alert('Peranan baru telah berjaya ditambah.');
    } else {
      alert('Sila lengkapkan semua maklumat yang diperlukan.');
    }
  }

  removePeranan(index: number): void {
    if (confirm('Adakah anda pasti untuk memadam peranan ini?')) {
      this.perananList.splice(index, 1);
    }
  }

}