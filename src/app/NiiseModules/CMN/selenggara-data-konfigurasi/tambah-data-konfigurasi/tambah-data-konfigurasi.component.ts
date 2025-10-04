import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {
  CardModule,
  GridModule,
  ModalModule,
  ButtonModule,
} from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { DataKonfigurasiService } from '../../selenggara-data-konfigurasi/data-konfigurasi.service';

interface RujukanRecord {
  No: number;
  KodPermohonan: string;
  TableRujukan: string;
  KodRujukan: string;
  Keterangan: string;
  Permohonan: string;
}

@Component({
  selector: 'app-tambah-data-konfigurasi',
  templateUrl: './tambah-data-konfigurasi.component.html',
  styleUrls: ['./tambah-data-konfigurasi.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    FormsModule,
    ModalModule,
    ButtonModule,
  ],
})
export class TambahDataKonfigurasiComponent {
  kodPermohonan: string = '';
  keputusan: string = '';
  catatanPembetulan: string = '';
  showCatatanPembetulan: boolean = false;
  fieldMappings: { key: string; label: string }[] = [];

  dataKonfigurasi: string = '';
  kodKonfigurasi: string = '';
  keteranganKonfigurasi: string = '';
  nilaiKonfigurasi: string = '';

  showModal: boolean = false;
  modalMessage: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private dataKonfigurasiService: DataKonfigurasiService) { }

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { detailData?: { kodKonfigurasi?: string } };

    if (state?.detailData?.kodKonfigurasi) {
      this.kodKonfigurasi = state.detailData.kodKonfigurasi;
    }
  }

  onKeputusanChange() {
    this.showCatatanPembetulan = this.keputusan === 'Tidak Lulus';

    if (this.keputusan === 'Lulus') {
      this.catatanPembetulan = '';
    }
  }

  showErrorModal(message: string) {
    this.modalMessage = message;
    this.showModal = true;
  }

  showSuccessModal(message: string) {
    this.modalMessage = message;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    if (this.modalMessage.includes('berjaya')) {
      this.goBack();
    }
  }

  formatApplType(applType: string): string {
    switch (applType) {
      case 'P':
        return 'Penambahan';
      case 'K':
        return 'Kemas Kini';
      case 'N':
        return 'Nyahaktif';
      case 'A':
        return 'Pengaktifan';
      default:
        return applType;
    }
  }

  formatLabel(key: string): string {
    return key.replace(/([A-Z])/g, '_$1').toUpperCase();
  }

  clearAllInputField() {
    // Clear all form fields shown in the UI
    this.dataKonfigurasi = '';
    this.kodKonfigurasi = '';
    this.keteranganKonfigurasi = '';
    this.nilaiKonfigurasi = '';
  }

  goBack() {
    this.clearAllInputField();
    this.router.navigate([
      '/cmn/selenggara-data-konfigurasi/buat-carian-data-konfigurasi',
    ]);

  }

  simpanDataKonfigurasi() {
    if (!this.dataKonfigurasi || !this.kodKonfigurasi || !this.keteranganKonfigurasi || !this.nilaiKonfigurasi) {
      this.showErrorModal('Sila isi semua medan yang diperlukan');
      return;
    }

    const payload1 = {
      cd: "APP011",
      conf: 'Q006_CONF',
      ref: this.kodKonfigurasi,
      appl: "P",
      val: {
        cd: this.kodKonfigurasi,
        data: this.dataKonfigurasi,
        desc: this.keteranganKonfigurasi,
        val: this.nilaiKonfigurasi
      }
    };

    const payload2 = {
      uid: null,
      code: this.kodKonfigurasi,
      data: this.dataKonfigurasi,
      desc: this.keteranganKonfigurasi,
      val: this.nilaiKonfigurasi,
      status: "0",
      loginId: null
    };


    this.dataKonfigurasiService.postTambahDataKonfigurasi(payload2).subscribe({
      next: () => {
        this.showSuccessModal('Maklumat telah berjaya disimpan');
      },
      error: (err) => {
        console.error('API Error:', err);
        this.showErrorModal('Gagal menyimpan data konfigurasi');
      }
    });

    this.dataKonfigurasiService.postPermohonanDataKonfigurasi(payload1).subscribe({
      next: () => {
        this.showSuccessModal('Maklumat telah berjaya disimpan');
      },
      error: (err) => {
        console.error('API Error:', err);
        this.showErrorModal('Gagal menyimpan data konfigurasi');
      }
    });
  }
}


