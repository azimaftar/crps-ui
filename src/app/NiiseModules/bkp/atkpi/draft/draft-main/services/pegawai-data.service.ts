import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FormDataService {
  private storage: { [key: string]: any } = {};

  setData(key: string, value: any) {
    this.storage[key] = value;
  }

  getData(key: string) {
    return this.storage[key] || null;
  }

  clearData(key: string) {
    delete this.storage[key];
  }

  // 🟢 initial "dev values" (only for testing/demo)
  getDevDraf() {
    return {
      drafCadangan: 'Proses Kemasukan Pelawat Asing di Pintu Masuk',
      processOwner: 'Bahagian Operasi',
      tajuk: 'Garis Panduan Pemeriksaan Imigresen Untuk Pelawat Asing',
      bidangUmum: 'Dokumentasi Dan Kemasukan',
      bidangKhusus: 'Prosedur Pemeriksaan Di Pintu Masuk',
      tujuan: 'Menambah baik pemeriksaan pelawat asing',
      puncaKuasa: 'Akta Imigresen 1959/63 (Pindaan 2002)',
      tafsiran: 'Garis Panduan Pemeriksaan Imigresen Untuk Pelawat Asing',
      latarBelakang: 'Penambahbaikan diperlukan bagi menangani isu pelawat asing',
      praktis: 'Pemeriksaan secara manual tanpa sistem pemantauan digital',
      arahanBaharu: 'semua penempatan mesti melalui jawatankuasa penilaian',
      tarikhKuatKuasa: '2025-06-07',    // keep as YYYY-MM-DD string (bind to <input type="date">)
      prosesKerja: ['02'],              //as string[]
      termasuk: { sabah: 'N', sarawak: 'N' },
      pematuhan: 'Unit perlu mengemukakan laporan pematuhan setiap suku tahun',
      pembatalan: 'Memo Penempatan 2020',
      edaranDalaman: { jawatan: '', unit: '', bahagian: '', negeri: '' },
      edaranLuaran: { kementerianJabatan: '', agensi: '' },
      rujukan: [],
      jenisDraf: '',
      lampiranFiles: [] as File[],      // will hold File[] after file input change
      catatan: '',
      darurat: 'N'
    };
  }

  // 🔵 true "empty defaults" for reset/real new draft
  getEmptyDraf() {
    return {
      drafCadangan: '',
      processOwner: '',
      tajuk: '',
      bidangUmum: '',
      bidangKhusus: '',
      tujuan: '',
      puncaKuasa: '',
      tafsiran: '',
      latarBelakang: '',
      praktis: '',
      arahanBaharu: '',
      tarikhKuatKuasa: '',
      prosesKerja: [],
      termasuk: { sabah: 'N', sarawak: 'N' },
      pematuhan: '',
      pembatalan: '',
      edaranDalaman: { jawatan: '', unit: '', bahagian: '', negeri: '' },
      edaranLuaran: { kementerianJabatan: '', agensi: '' },
      rujukan: [],
      jenisDraf: '',
      lampiranFiles: [] as File[],
      catatan: '',
      darurat: 'N'
    };
  }
}
