import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BadgeModule, ColComponent, RowComponent, CardModule, GridModule, ButtonModule } from '@coreui/angular';
import { ModalButton,ModalPopupComponent } from './../../../shared/modal-popup/modal-popup.component';

interface UploadedDocument {
  id: number;
  keterangan: string;
  namaFail: string;
  format: string;
  file?: File;
}

interface PegawaiBaru {
  id: number;
  nama: string;
}

interface SenaraiPegawai {
  id: number;
  nama: string;
  bahagian: string;
  unit: string;
  negeri: string;
  cawangan: string;
  selected?: boolean; // for checkbox
}

interface ModalForm {
  negeri: string;
  cawangan: string;
  unit: string;
  bahagian: string;
}

@Component({
  selector: 'pengesahan-permohonan-lanjutan-masa-operasi',
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
    ModalPopupComponent
  ],
  templateUrl: './pengesahan-permohonan-lanjutan-masa-operasi.component.html',
  styleUrls: ['./pengesahan-permohonan-lanjutan-masa-operasi.component.scss']
})
export class PengesahanPermohonanLanjutanMasaOperasiComponent implements OnInit {

  // Form data
  formData = {
    // Maklumat Pegawai
    noPermohonan: 'ABC123',
    segeraAdHoc: 'segeraAdHoc',
    negeri: 'Selangor',
    cawangan: 'Cyberjaya',
    bahagian: 'Teknikal',
    tarikhMula: new Date('2025-08-14'),
    masaMula: '9',
    unit: 'Unit Senarai Syak',
    tarikhAkhir: new Date('14-08-2025'),
    masaTamat: '12',
    catatan: 'Perlukan lebih masa'
  };

  // Modal states - Fixed to match HTML
  isFileUploadModalOpen = false;
  // Changed from isTambahPegawaiModalOpen to match HTML
  isTambahPegawaiModalOpen = false;

  // File upload form
  fileUploadForm = {
    keterangan: '',
    selectedFile: null as File | null
  };

  // Modal form (reusing from original structure)
  modalForm: ModalForm = {
    negeri: this.formData.negeri,
    cawangan: this.formData.cawangan,
    unit: this.formData.unit,
    bahagian: this.formData.bahagian,
  };

  // Data arrays
  uploadedDocuments: UploadedDocument[] = [
    {
      id: 1,
      keterangan: 'Surat Permohonan',
      namaFail: 'surat_lanjutan_masa',
      format: '.pdf'
    }
  ];

  newPegawaiList: PegawaiBaru[] = [
    {
      id: 1,
      nama: 'Ali Ahmad',
    },
    {
      id: 2,
      nama: 'Siti Aminah',
    },
    {
      id: 3,
      nama: 'Ahmad Zaki',
    },
  ];

  // List of all officers to choose from
  senaraiPegawai: SenaraiPegawai[] = [
    { id: 1, nama: 'Ali Ahmad', bahagian: 'Bahagian ICT', unit: 'Unit Sistem', negeri: 'Selangor', cawangan: 'Cawangan A' },
    { id: 2, nama: 'Siti Aminah', bahagian: 'Bahagian ICT', unit: 'Unit Sistem', negeri: 'Selangor', cawangan: 'Cawangan A' },
    { id: 3, nama: 'Ahmad Zaki', bahagian: 'Bahagian ICT', unit: 'Unit Sistem', negeri: 'Selangor', cawangan: 'Cawangan A' }
  ];

  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;
  // selectedPeranan: PerananItem | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialize component
    this.goToPageNumber = this.currentPage;
  }

  get totalItems(): number {
    return this.newPegawaiList.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get paginatedPegawai(): SenaraiPegawai[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.senaraiPegawai.slice(startIndex, endIndex);
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

  // /**
  //    * Navigate to previous step
  //    */
  // goToPrevious(): void {
  //   console.log('Navigating to previous step');
  //   // Add your navigation logic here
  //   // Example: this.router.navigate(['/previous-step']);
  //   this.router.navigate(['/IDM/tambah-peranan-tugasan-id-pengguna/kelulusan-tambah-peranan-tugasan/maklumat-penetapan-peranan']);
  // }

  // /**
  //  * Navigate to next step
  //  */
  // goToNext(): void {
  //   console.log('Navigating to next step');
  //   console.log('Form data:', this.formData);
  //   // Process completion
  //   if (confirm('Adakah anda pasti untuk menyelesaikan permohonan ID pengguna ini?')) {
  //     // Implement completion logic here
  //     // Example: this.submitApplication();
  //     alert('Permohonan ID pengguna telah berjaya diselesaikan!');
  //   }
  //   // Add your navigation logic here
  //   this.router.navigate(['/IDM/tambah-peranan-tugasan-id-pengguna/kelulusan-tambah-peranan-tugasan/maklumat-profil-pegawai']);
  // }

  // File upload methods
  openFileUpload(): void {
    this.isFileUploadModalOpen = true;
    this.fileUploadForm = {
      keterangan: '',
      selectedFile: null
    };
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

  // Tambah peranan methods - Fixed method names to match HTML
  openTambahPegawaiModal(): void {
    this.isTambahPegawaiModalOpen = true; // Changed from isTambahPegawaiModalOpen
    this.openModalForm();
    document.body.classList.add('modal-open');
  }

  openModalForm(): void {
    this.modalForm = {
      negeri: this.formData.negeri,
      cawangan: this.formData.cawangan,
      unit: this.formData.unit,
      bahagian: this.formData.bahagian
    };
  }

  closeTambahPegawaiModal(): void {
    this.isTambahPegawaiModalOpen = false; // Changed from isTambahPegawaiModalOpen
    document.body.classList.remove('modal-open');
    this.resetModalForm();
  }

  resetModalForm(): void {
    this.modalForm = {
      negeri: '',
      cawangan: '',
      unit: '',
      bahagian: ''
    };
  }

  tambahPegawai(): void {
    // Filter only selected officers
    const selectedPegawai = this.senaraiPegawai.filter(p => p.selected);

    // Push only nama into newPegawaiList
    selectedPegawai.forEach(p => {
      this.newPegawaiList.push({ id: p.id, nama: p.nama });
    });


      // const newId = Math.max(...this.pegawaiList.map(p => p.id), 0) + 1;
      // const pegawaiList: SenaraiPegawai = {
      //   id: newId,
      //   nama: this.pegawaiList.nama,
      //   bahagian: this.pegawaiList.bahagian,
      //   unit: this.pegawaiList.unit,
      //   selected: this.pegawaiList.selected,
      // };

    // this.pegawaiList.push(newPegawaiList);


      this.closeTambahPegawaiModal();
      alert('Pegawai baru telah berjaya ditambah.');
  }

  removePegawai(index: number): void {
    if (confirm('Adakah anda pasti untuk memadam pegawai ini?')) {
      this.newPegawaiList.splice(index, 1);
    }
  }

  // Selection methods
  toggleSelectAll(event: any): void {
    const isChecked = event.target.checked;
    this.senaraiPegawai.forEach(pegawai => {
      pegawai.selected = isChecked;
    });
  }

  hasSelectedItems(): boolean {
    return this.senaraiPegawai.some(pegawai => pegawai.selected);
  }

  // getSelectedCount(): number {
  //   return this.pegawaiList.filter(pegawai => pegawai.selected).length;
  // }

  // deleteSelected(): void {
  //   const count = this.getSelectedCount();
  //   if (count === 0) {
  //     alert('Sila pilih item untuk dipadam.');
  //     return;
  //   }
  //   if (confirm(`Adakah anda pasti untuk memadam ${count} item yang dipilih?`)) {
  //     this.newPegawaiList = this.newPegawaiList.filter(pegawai => !pegawai.selected);
  //   }
  // }

  // Form actions
  resetForm(): void {
    if (confirm('Adakah anda pasti untuk set semula borang ini? Semua data akan hilang.')) {
      this.formData = {
        // Reset Maklumat Pegawai
        noPermohonan: 'ABC123',
        segeraAdHoc: '',
        negeri: '',
        cawangan: '',
        bahagian: '',
        tarikhMula: new Date(),
        masaMula: '',
        unit: '',
        tarikhAkhir: new Date(),
        masaTamat: '',
        catatan: ''
      };
      this.uploadedDocuments = [
        {
          id: 1,
          keterangan: 'Surat Permohonan',
          namaFail: 'surat_lanjutan_masa',
          format: '.pdf'
        }
      ];
      this.newPegawaiList = [];
      alert('Borang telah di set semula.');
    }
  }

  // rejectForm(): void {
  //   if (confirm('Adakah anda pasti untuk menolak permohonan ini?')) {
  //     alert('Sila isi catatan permohonan anda disini');
  //   }
  // }

  modalTitle = '';
  modalMessage = '';
  modalButtons: ModalButton[] = [];
  modalIcon = '';
  showModalPopup = false;
  showComment = false;
  commentPlaceholder = '';

  submitRequest(): void {

      const submissionData = {
        formData: {
          noPermohonan: this.formData.noPermohonan,
          segeraAdHoc: this.formData.segeraAdHoc,
          cawangan: this.formData.cawangan,
          bahagian: this.formData.bahagian,
          tarikhMula: this.formData.tarikhMula,
          masaMula: this.formData.masaMula,
          unit: this.formData.unit,
          tarikhAkhir: this.formData.tarikhMula,
          masaTamat: this.formData.masaTamat,
          catatan: this.formData.catatan
        },
        documents: this.uploadedDocuments,
        staff: this.newPegawaiList
      };

      console.log('Submitting request:', submissionData);

      // Here you would typically call a service to submit the data
      // this.roleService.submitRoleAdditionRequest(submissionData).subscribe(...)
    this.modalTitle = 'Rekod telah berjaya disimpan.';
    this.modalButtons = [
      { label: 'Tutup', action: 'closeSah', class: 'btn-submit' },
    ];
    this.showComment = false;
    this.modalIcon = 'success'; // warning icon
    this.showModalPopup = true;
      // alert('Rekod telah berjaya disimpan.');
    // }
  }

  rejectForm(): void {
    // if (confirm('Adakah anda pasti untuk menolak permohonan ini?')) {
    //   alert('Sila isi catatan permohonan anda disini');
    // }

    this.modalTitle = 'Adakah anda pasti untuk menolak permohonan ini?';
    this.modalButtons = [
      { label: 'Tidak', action: 'close', class: 'btn-submit' },
      { label: 'Ya', action: 'submitTolak', class: 'btn-all' },
    ];
    this.modalIcon = 'warning'; // warning icon
    this.showComment = true;
    this.commentPlaceholder = 'Sila isi catatan permohonan anda disini';
    this.showModalPopup = true;
  }

  successRejectForm(): void {

    this.modalTitle = 'Rekod telah berjaya disimpan.';
    this.modalButtons = [
      { label: 'Tutup', action: 'close', class: 'btn-submit' },
    ];
    this.modalIcon = 'success'; // warning icon
    this.showModalPopup = true;
    this.showComment = false;
      // alert('Rekod telah berjaya disimpan.');
    // }
  }


handleModalPopupAction(event: any) {
  console.log('Button clicked:', event);

  if (event.action === 'closeSah') {
    this.showModalPopup = false;
    this.showComment= false;
  } else if (event.action === 'submitTolak') {
    const submissionData = {
      formData: {
        modalCommentText: event.commentText, // ✅ get from event
      },
    };

    console.log('Submitting request:', submissionData);
    this.successRejectForm();
  }
}

  // Helper methods for Maklumat Keputusan (if needed for future functionality)

  // updateDisahkan(disahkan: string): void {
  //   this.formData.disahkan = disahkan;
  // }

  // updateTarikhPemulangan(tarikh: string): void {
  //   this.formData.tarikhPemulangan = tarikh;
  // }

}