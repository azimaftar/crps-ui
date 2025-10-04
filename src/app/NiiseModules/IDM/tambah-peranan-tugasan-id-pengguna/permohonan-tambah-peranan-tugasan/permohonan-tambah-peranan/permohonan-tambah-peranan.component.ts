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
    RouterModule
  ],
  templateUrl: './permohonan-tambah-peranan.component.html',
  styleUrls: ['./permohonan-tambah-peranan.component.scss']
})
export class PermohonanTambahPerananComponent implements OnInit {
  // Form data
  formData = {
    gredSediaAda: 'KP19',
    gredMelebihi: '',
    catatan: 'Tambah Peranan'
  };

  // Modal states - Fixed to match HTML
  isFileUploadModalOpen = false;
  isTambahPerananModalOpen = false; // Changed from isTambahPerananModalOpen to match HTML

  // File upload form
  fileUploadForm = {
    keterangan: '',
    selectedFile: null as File | null
  };

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

  // Data arrays
  uploadedDocuments: UploadedDocument[] = [
    {
      id: 1,
      keterangan: 'Surat Permohonan',
      namaFail: 'surat_tambah_peranan',
      format: '.pdf'
    }
  ];

  newPerananList: NewPeranan[] = [
    {
      id: 1,
      bahagian: 'Visa, Pas dan Permit',
      unit: 'Pas',
      peranan: 'Penyelia Kanan',
      selected: false
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialize component
  }

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

  tambahPeranan(): void {
    if (this.modalForm.bahagian && 
        this.modalForm.unit && 
        this.modalForm.peranan) {
      
      const newId = Math.max(...this.newPerananList.map(p => p.id), 0) + 1;
      const newPeranan: NewPeranan = {
        id: newId,
        bahagian: this.modalForm.bahagian,
        unit: this.modalForm.unit,
        peranan: this.modalForm.peranan,
        selected: false
      };
      
      this.newPerananList.push(newPeranan);
      this.closePenetapanPerananModal();
      alert('Peranan baru telah berjaya ditambah.');
    } else {
      alert('Sila lengkapkan semua maklumat yang diperlukan.');
    }
  }

  removePeranan(index: number): void {
    if (confirm('Adakah anda pasti untuk memadam peranan ini?')) {
      this.newPerananList.splice(index, 1);
    }
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

  deleteSelected(): void {
    const count = this.getSelectedCount();
    if (count === 0) {
      alert('Sila pilih item untuk dipadam.');
      return;
    }
    if (confirm(`Adakah anda pasti untuk memadam ${count} item yang dipilih?`)) {
      this.newPerananList = this.newPerananList.filter(peranan => !peranan.selected);
    }
  }

  // Form actions
  resetForm(): void {
    if (confirm('Adakah anda pasti untuk set semula borang ini? Semua data akan hilang.')) {
      this.formData = {
        gredSediaAda: 'KP19',
        gredMelebihi: '',
        catatan: 'Tambah Peranan'
      };
      this.uploadedDocuments = [];
      this.newPerananList = [];
      alert('Borang telah di set semula.');
    }
  }

  submitRequest(): void {
    // Validate form
    if (!this.formData.gredMelebihi) {
      alert('Sila pilih Gred (Melebihi Gred Sedia Ada)');
      return;
    }

    if (this.newPerananList.length === 0) {
      alert('Sila tambah sekurang-kurangnya satu peranan');
      return;
    }

    if (confirm('Adakah anda pasti untuk menghantar permohonan ini?')) {
      // Prepare submission data
      const submissionData = {
        formData: this.formData,
        documents: this.uploadedDocuments,
        newRoles: this.newPerananList
      };

      console.log('Submitting request:', submissionData);
      
      // Here you would typically call a service to submit the data
      // this.roleService.submitRoleAdditionRequest(submissionData).subscribe(...)
      
      alert('Permohonan telah dihantar berjaya!');
    }
  }
}