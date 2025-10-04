import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@coreui/angular';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kategori-permohonan',
  templateUrl: './kategori-permohonan.component.html',
  styleUrls: ['./kategori-permohonan.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GridModule],
})
export class KategoriPermohonanComponent {
  // Senarai kategori
  kategoriPermohonan = [
    'Permohonan Rayuan (Individu)',
    'Permohonan Rayuan Ditolak (Individu)',
    'Permohonan Rayuan Lanjutan Kemudahan (Individu)',
    'Permohonan Rayuan (PLKS/ Pegawai Dagang/ MM2H/ Pelajar)',
  ];

  // Stepper
  selectedKategori: string = '';
  currentStep = 1;
  steps = [
    { number: 1, title: 'Carian & Senarai Subjek', route: '' },
    { number: 2, title: 'Maklumat Subjek', route: '' },
    { number: 3, title: 'Maklumat Terperinci', route: '' },
  ];

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  // ✅ Tambah property pengesahan
  pengesahan: boolean = false;

  // Data Individu (template-driven form)
  pemohon = {
    nama: '',
    kadPengenalan: '',
    warganegara: 'Malaysia',
    alamat1: '',
    alamat2: '',
    alamat3: '',
    poskod: '',
    bandar: '',
    hubungan: '',
    tujuan: ''
  };

  // Data Bukan Individu (reactive form)
  pemohonForm: FormGroup;

  // Senarai negara
  senaraiNegara: string[] = ['Malaysia', 'Indonesia', 'Bangladesh', 'Nepal', 'India', 'Pakistan'];
 
  //Permohonan Rayuan (Individu)
  senaraiDokumen = [
  { keterangan: 'Surat Rayuan', nama: '', format: 'PDF/JPG/PNG' },
  { keterangan: 'Salinan Kad Pengenalan Suami/ Isteri', nama: '', format: 'PDF/JPG/PNG' },
  { keterangan: 'Salinan Pasport Warga Asing Suami/ Isteri (Pasport Lama/ Baru)', nama: '', format: 'PDF/JPG/PNG' },
  { keterangan: 'Salinan Pasport Warga Asing Suami/ Isteri (Muka surat hadapan)', nama: '', format: 'PDF/JPG/PNG' },
  { keterangan: 'Salinan Pasport Warga Asing Suami/ Isteri (Muka surat belakang)', nama: '', format: 'PDF/JPG/PNG' },
  { keterangan: 'Salinan Pasport Warga Asing Suami/ Isteri (Pas Terkini)', nama: '', format: 'PDF/JPG/PNG' },
  { keterangan: 'Salinan Pasport Suami/ Isteri Warganegara', nama: '', format: 'PDF/JPG/PNG' },
  { keterangan: 'Sijil Nikah Warga Asing (Marriage Certificate)', nama: '', format: 'PDF/JPG/PNG' },
  { keterangan: 'Salinan Sijil Nikah Malaysia', nama: '', format: 'PDF/JPG/PNG' },
  { keterangan: 'Salinan Surat Pengesahan/ Maklumat Perkahwinan dari Kedutaan Malaysia', nama: '', format: 'PDF/JPG/PNG' },
  { keterangan: 'Salinan Sijil Lahir Anak (jika ada)', nama: '', format: 'PDF/JPG/PNG' }
];

  //Permohonan Rayuan Ditolak (Individu)
  senaraiDokumenDitolak = [
  { keterangan: 'Surat Rayuan', nama: '', format: 'PDF/JPG' },
  { keterangan: 'Salinan Kad Pengenalan Suami / Isteri', nama: '', format: 'PDF/JPG' },
  { keterangan: 'Salinan Pasport Warga Asing Suami / Isteri (Pasport Lama / Baru)', nama: '', format: 'PDF/JPG' },
  { keterangan: 'Salinan Pas Terkini', nama: '', format: 'PDF/JPG' },
  { keterangan: 'Salinan Surat Tolak', nama: '', format: 'PDF/JPG' },
];

  // Permohonan Rayuan Lanjutan Kemudahan (Individu)
  senaraiDokumenLanjutan = [
  { keterangan: 'Surat Rayuan Lanjutan', nama: '', format: 'PDF/JPG' },
  { keterangan: 'Salinan Kad Pengenalan Suami / Isteri', nama: '', format: 'PDF/JPG' },
  { keterangan: 'Salinan Pasport Warga Asing Suami / Isteri (Pasport Lama / Baru)', nama: '', format: 'PDF/JPG' },
  { keterangan: 'Salinan Pas Terkini', nama: '', format: 'PDF/JPG' },
  { keterangan: 'Surat Kelulusan Terdahulu', nama: '', format: 'PDF/JPG' },
];

// ✅ Permohonan Rayuan (PLKS/ Pegawai Dagang/ MM2H/ Pelajar)
senaraiDokumenPLKS = [
  { keterangan: 'Memo dari Bahagian Pekerja Asing Putrajaya / Surat daripada Bahagian Pekerja Asing JIM', nama: '', format: 'PDF/JPG/PNG' },
  { keterangan: 'Salinan Pasport Pekerja Asing (Pasport Lama / Baru)', nama: '', format: 'PDF/JPG/PNG' },
  { keterangan: 'Salinan Pasport Pekerja Asing (Muka surat hadapan)', nama: '', format: 'PDF/JPG/PNG' },
  { keterangan: 'Salinan Pasport Pekerja Asing (Muka surat belakang)', nama: '', format: 'PDF/JPG/PNG' },
  { keterangan: 'Salinan Pasport Pekerja Asing (Pas Terkini)', nama: '', format: 'PDF/JPG/PNG' },
  { keterangan: 'Surat Wakil dan Salinan Kad Pengenalan Wakil', nama: '', format: 'PDF/JPG/PNG' },
  { keterangan: 'Borang 9, 24, dan 29 (hanya bagi rayuan kali pertama)', nama: '', format: 'PDF/JPG/PNG' },
  { keterangan: 'Surat Kelulusan Terdahulu dari Bahagian Keselamatan (jika ada)', nama: '', format: 'PDF/JPG/PNG' }
];

  constructor(private fb: FormBuilder) {
    this.pemohonForm = this.fb.group({
      nama: ['', Validators.required],
      noPassport: ['', Validators.required],
      warganegara: ['', Validators.required],
      syarikat: ['', Validators.required],
      alamat: ['', Validators.required],
      taman: [''],
      poskod: ['', Validators.required],
      bandar: ['', Validators.required],
      tujuan: ['', Validators.required]
    });
  }

  // Tukar kategori
  onKategoriChange(event: any) {
    this.selectedKategori = event.target.value;
    this.resetForm();
  }

  // Tentukan kategori Individu
  isKategoriIndividu(kategori: string): boolean {
    return [
      'Permohonan Rayuan (Individu)',
      'Permohonan Rayuan Ditolak (Individu)',
      'Permohonan Rayuan Lanjutan Kemudahan (Individu)'
    ].includes(kategori);
  }

  // Reset borang ikut kategori
  resetForm() {
    if (this.isKategoriIndividu(this.selectedKategori)) {
      this.pemohon = {
        nama: '',
        kadPengenalan: '',
        warganegara: 'Malaysia',
        alamat1: '',
        alamat2: '',
        alamat3: '',
        poskod: '',
        bandar: '',
        hubungan: '',
        tujuan: ''
      };
    } else {
      this.pemohonForm.reset();
    }
  }

  // Validasi Step 1 (Individu)
  isStep1IndividuValid(): boolean {
    return (
      this.pemohon.nama.trim() !== '' &&
      this.pemohon.kadPengenalan.trim() !== '' &&
      this.pemohon.warganegara.trim() !== '' &&
      this.pemohon.alamat1.trim() !== '' &&
      this.pemohon.poskod.trim() !== '' &&
      this.pemohon.bandar.trim() !== '' &&
      this.pemohon.tujuan.trim() !== ''
    );
  }

  // Validasi Step 1 (Form)
  isStep1FormValid(): boolean {
    return this.pemohonForm.valid;
  }

  // Navigasi Stepper

 goToStep(step: number) {
 this.currentStep = step;
}

 goToNextStep() {
  this.currentStep = 2;
}

  goToPreviousStep() {
    this.currentStep = 1;
  }

  // Upload fail
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('Fail dimuat naik:', file.name);
    }
  }

  // method untuk handle upload dokumen
  uploadDokumen(index: number) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.pdf,.jpg,.png'; // ikut format yang awak nak
  input.onchange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      this.senaraiDokumen[index].nama = file.name; // simpan nama file
      console.log(`Dokumen ${index + 1} dimuat naik:`, file);
    }
  };
  input.click();
}

// Upload fail untuk kategori ditolak
uploadDokumenDitolak(index: number) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.pdf,.jpg,.png,.doc';
  input.onchange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      this.senaraiDokumenDitolak[index].nama = file.name;
      console.log(`Dokumen Ditolak ${index + 1} dimuat naik:`, file);
    }
  };
  input.click();
}

// Upload fail untuk kategori Lanjutan
uploadDokumenLanjutan(index: number) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.pdf,.jpg,.png,.doc';
  input.onchange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      this.senaraiDokumenLanjutan[index].nama = file.name;
      console.log(`Dokumen Lanjutan ${index + 1} dimuat naik:`, file);
    }
  };
  input.click();
}

// ✅ Upload fail untuk kategori PLKS/MM2H
uploadDokumenPLKS(index: number) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.pdf,.jpg,.png';
  input.onchange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      this.senaraiDokumenPLKS[index].nama = file.name;
      console.log(`Dokumen PLKS ${index + 1} dimuat naik:`, file);
    }
  };
  input.click();
}

  // Dalam .ts file komponen anda
showDialog: boolean = false;

submitPermohonan() {
  // Bila klik Hantar, jangan terus submit
  this.showDialog = true;
}

onCancel() {
  this.showDialog = false;
}

showSuccessDialog: boolean = false;

onConfirm() {
  // Tutup confirmation dialog
  this.showDialog = false;

  // Logik submit permohonan
  // ... contoh panggil API / proses lain

  // Paparkan success dialog
  this.showSuccessDialog = true;
}

closeSuccessDialog() {
  this.showSuccessDialog = false;
  // Boleh redirect atau reset form kalau perlu
}
}
