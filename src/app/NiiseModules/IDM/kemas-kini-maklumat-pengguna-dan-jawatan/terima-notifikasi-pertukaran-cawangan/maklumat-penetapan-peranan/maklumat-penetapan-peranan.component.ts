import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BadgeModule, ColComponent, RowComponent, CardModule, GridModule, ButtonModule, PaginationModule } from '@coreui/angular';
import { ReusableTabComponent } from './../../../shared/reusable-tab/reusable-tab.component'

interface NotifikasiItem { 
  id: number; 
  bil: number; 
  bahagian: string; 
  unit: string; 
  peranan: string; 
}

interface NewPeranan {
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
  selector: 'permohonan-tambah-peranan',
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
    ReusableTabComponent,
    PaginationModule
  ],
  templateUrl: './maklumat-penetapan-peranan.component.html',
  styleUrls: ['./maklumat-penetapan-peranan.component.scss']
})
export class MaklumatPenetapanPerananComponent implements OnInit {

  // Stepper properties
  currentStep = 3;

  steps = [
    'Permohanan Pertukaran Unit/ Cawangan',
    'Maklumat Profil Pegawai',
    'Maklumat Penetapan Peranan',
    'Maklumat PTJ',
    'Sejarah ID'
  ];

  // Form data 
  formData = {};

  // Modal states - Fixed to match HTML
  isFileUploadModalOpen = false;
  isTambahPerananModalOpen = false; // Changed from isTambahPerananModalOpen to match HTML

  // Modal form (reusing from original structure)
  modalForm: ModalForm = {
    bahagian: '',
    unit: '',
    peranan: '',
    urusniaga: {
      tambahPeranan: false,
      kemaskiniMaklumat: false
    }
  };

  newPerananList: NewPeranan[] = [
    {
      id: 1,
      bahagian: 'Visa, Pas dan Permit',
      unit: 'Pas',
      peranan: 'Kerani',
      selected: false
    },
    {
      id: 2,
      bahagian: 'Visa, Pas dan Permit',
      unit: 'Pas',
      peranan: 'Pegawai Tadbir',
      selected: false
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
    this.router.navigate(['/IDM/kemas-kini-maklumat-pengguna-dan-jawatan/terima-notifikasi-pertukaran-cawangan/maklumat-profil-pegawai']);
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
    this.router.navigate(['/IDM/kemas-kini-maklumat-pengguna-dan-jawatan/terima-notifikasi-pertukaran-cawangan/maklumat-ptj']);
  }

  // Tambah peranan methods - Fixed method names to match HTML
  openTambahPerananModal(): void {
    this.isTambahPerananModalOpen = true; // Changed from isTambahPerananModalOpen
    this.resetModalForm();
    document.body.classList.add('modal-open');
  }

  closePenetapanPerananModal(): void {
    this.isTambahPerananModalOpen = false; // Changed from isTambahPerananModalOpen
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

  // Selection methods
  toggleSelectAll(event: any): void {
    const isChecked = event.target.checked;
    this.newPerananList.forEach(peranan => {
      peranan.selected = isChecked;
    });
  }

  hasSelectedItems(): boolean {
    return this.newPerananList.some(peranan => peranan.selected);
  }

  getSelectedCount(): number {
    return this.newPerananList.filter(peranan => peranan.selected).length;
  }

  // Form actions
  resetForm(): void {
    if (confirm('Adakah anda pasti untuk set semula borang ini? Semua data akan hilang.')) {
      this.formData = {
        
      };
      this.newPerananList = [];
      alert('Borang telah di set semula.');
    }
  }

  submitRequest(): void {
    // Validate form

    if (this.newPerananList.length === 0) {
      alert('Sila tambah sekurang-kurangnya satu peranan');
      return;
    }

    if (confirm('Adakah anda pasti untuk menghantar permohonan ini?')) {
      const submissionData = {
        formData: {

        },
        newRoles: this.newPerananList
      };

      console.log('Submitting request:', submissionData);

      // Here you would typically call a service to submit the data
      // this.roleService.submitRoleAdditionRequest(submissionData).subscribe(...)

      alert('Permohonan telah dihantar berjaya!');
    }
  }

  // Pagination properties (adapted from sejarah-id)
  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;

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

  // Notification data with enhanced structure
  notifikasiList: NotifikasiItem[] = [
  { id: 1, bil: 1, bahagian: 'Pentadbiran', unit: 'Sumber Manusia', peranan: 'Pengurus' },
  { id: 2, bil: 2, bahagian: 'Kewangan', unit: 'Akaun', peranan: 'Eksekutif' },
  { id: 3, bil: 3, bahagian: 'IT', unit: 'Sokongan Teknikal', peranan: 'Juruteknik' },
  { id: 4, bil: 4, bahagian: 'IT', unit: 'Pembangunan Sistem', peranan: 'Pembangun' },
  { id: 5, bil: 5, bahagian: 'Kewangan', unit: 'Audit', peranan: 'Pegawai Audit' },
  { id: 6, bil: 6, bahagian: 'Pentadbiran', unit: 'Khidmat Pelanggan', peranan: 'Pegawai Khidmat' },
  { id: 7, bil: 7, bahagian: 'Operasi', unit: 'Logistik', peranan: 'Penyelia' },
  { id: 8, bil: 8, bahagian: 'Operasi', unit: 'Pengurusan Aset', peranan: 'Pegawai Aset' },
  { id: 9, bil: 9, bahagian: 'Kewangan', unit: 'Perolehan', peranan: 'Pegawai Perolehan' },
  { id: 10, bil: 10, bahagian: 'IT', unit: 'Keselamatan Sistem', peranan: 'Pegawai Keselamatan' },
  { id: 11, bil: 11, bahagian: 'Pemasaran', unit: 'Media Sosial', peranan: 'Eksekutif Media' },
];

// jumlah item berdasarkan newPerananList
get totalItems(): number {
  return this.newPerananList.length;
}

// total pages (paling kurang 1 supaya kawalan pagination tak break)
get totalPages(): number {
  const pages = Math.ceil(this.totalItems / this.itemsPerPage);
  return pages > 0 ? pages : 1;
}

// data yang akan dipaparkan untuk page sekarang
get pagedPerananList(): NewPeranan[] {
  const start = (this.currentPage - 1) * this.itemsPerPage;
  const end = start + this.itemsPerPage;
  return this.newPerananList.slice(start, end);
}

tambahPeranan(): void {
  if (this.modalForm.bahagian && this.modalForm.unit && this.modalForm.peranan) {
    const newId = Math.max(...this.newPerananList.map(p => p.id), 0) + 1;
    const newPeranan: NewPeranan = {
      id: newId,
      bahagian: this.modalForm.bahagian,
      unit: this.modalForm.unit,
      peranan: this.modalForm.peranan,
      selected: false
    };

    this.newPerananList.push(newPeranan);

    // lompat ke page terakhir supaya item baru dapat dilihat
    this.currentPage = Math.ceil(this.newPerananList.length / this.itemsPerPage);
    this.goToPageNumber = this.currentPage;

    this.closePenetapanPerananModal();
    alert('Peranan baru telah berjaya ditambah.');
  } else {
    alert('Sila lengkapkan semua maklumat yang diperlukan.');
  }
}

removePeranan(index: number): void {
  if (confirm('Adakah anda pasti untuk memadam peranan ini?')) {
    this.newPerananList.splice(index, 1);

    // jika page sekarang melebihi totalPages (contoh: padam item terakhir di page terakhir),
    // bawa turun currentPage supaya tidak kosong
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
      this.goToPageNumber = this.currentPage;
    }
  }
}

deleteSelected(): void {
  const count = this.getSelectedCount();
  if (count === 0) {
    alert('Sila pilih item untuk dipadam.');
    return;
  }
  if (confirm(`Adakah anda pasti untuk memadam ${count} item yang dipilih?`)) {
    this.newPerananList = this.newPerananList.filter(peranan => !peranan.selected);

    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
      this.goToPageNumber = this.currentPage;
    }
  }
}
}