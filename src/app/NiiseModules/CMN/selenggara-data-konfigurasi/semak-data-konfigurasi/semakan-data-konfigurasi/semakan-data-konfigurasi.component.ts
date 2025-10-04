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
import { DataKonfigurasiService } from '../../data-konfigurasi.service';

interface ConfigRecord {
  Uid: number;
  No: number;
  KodPermohonan: string;
  KodKonfigurasi: string;
  DataKonfigurasi: string;
  Keterangan: string;
  Nilai: string;
  applType: string;
  Result?: string;
  Catatan?: string;
}

interface KeputusanSemakanDTO {
  result: string;
  note: string;
  updateId: string;
}

@Component({
  selector: 'app-semakan-data-konfigurasi',
  templateUrl: './semakan-data-konfigurasi.component.html',
  styleUrls: ['./semakan-data-konfigurasi.component.scss'],
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
export class SemakanDataKonfigurasiComponent implements OnInit {
  recordData: ConfigRecord | null = null;
  kodKonfigurasi: string = '';
  keputusan: string = '';
  catatanPembetulan: string = '';
  showCatatanPembetulan: boolean = false;

  showModal: boolean = false;
  modalMessage: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataKonfigurasiService: DataKonfigurasiService
  ) {}

  ngOnInit(): void {
    const uid = Number(this.route.snapshot.paramMap.get('id')!);

    const navigation = this.router.getCurrentNavigation();
    this.recordData = navigation?.extras?.state?.['recordData'];

    if (!this.recordData && window.history.state) {
      this.recordData = window.history.state['recordData'];
    }

    if (this.recordData) {
      this.fetchDetailedData(uid);

      if (this.recordData.Result) {
        this.keputusan = this.recordData.Result;
        this.onKeputusanChange();

        if (this.recordData.Catatan) {
          this.catatanPembetulan = this.recordData.Catatan;
        }
      }
    } else {
      this.showErrorModal('Data tidak ditemukan');
    }
  }

  fetchDetailedData(uid: number) {
    this.dataKonfigurasiService.getSemakanDataKonfigurasi(uid).subscribe({
      next: (data) => {
        if (this.recordData) {
          this.recordData.Result = data.result;

          if (data.note) {
            this.recordData.Catatan = data.note;
            this.catatanPembetulan = data.note;
          }

          if (data.result === 'Lulus' || data.result === 'Tidak Lulus') {
            this.keputusan = data.result;
            this.onKeputusanChange();
          } else {
            this.keputusan = '';
          }
        }
      },
      error: (error) => {
        console.error('Error fetching detailed data:', error);
        this.showErrorModal('Gagal memuat data terperinci');
      },
    });
  }

  onKeputusanChange() {
    this.showCatatanPembetulan = this.keputusan === 'Tidak Lulus';

    if (this.keputusan === 'Lulus') {
      this.catatanPembetulan = '';
    }
  }

  onSimpan() {
    if (!this.keputusan) {
      this.showErrorModal('Sila pilih keputusan');
      return;
    }

    if (this.keputusan === 'Tidak Lulus' && !this.catatanPembetulan) {
      this.showErrorModal('Sila isi catatan pembetulan');
      return;
    }

    if (!this.recordData) {
      this.showErrorModal('Data tidak ditemukan');
      return;
    }

    const payload: KeputusanSemakanDTO = {
      result: this.keputusan,
      note: this.catatanPembetulan || '',
      updateId: "1001",
    };

    this.dataKonfigurasiService
      .putKeputusanSemakanKonfigurasi(this.recordData.Uid, payload)
      .subscribe({
        next: () => {
            this.showSuccessModal('Keputusan semakan berjaya disimpan');
        },
        error: (err) => {
          console.error('Error saving decision:', err);
          this.showErrorModal('Gagal menyimpan keputusan');
        },
      });
  }

  // private handleLulusCase() {
  //   if (!this.recordData) return;

  //   if (this.recordData.applType === 'KEMASKINI') {
  //     const kemaskiniPayload = {
  //       code: this.recordData.KodKonfigurasi,
  //       data: this.recordData.DataKonfigurasi,
  //       desc: this.recordData.Keterangan,
  //       val: this.recordData.Nilai,
  //       loginId: 'SYSADMIN'
  //     };
      
  //     this.dataKonfigurasiService.putKemaskiniDataKonfigurasi(kemaskiniPayload).subscribe({
  //       next: () => {
  //         this.showSuccessModal('Kemaskini data berjaya disimpan');
  //       },
  //       error: (err) => {
  //         console.error('Error updating configuration:', err);
  //         this.showErrorModal('Keputusan disimpan tetapi kemaskini data gagal');
  //       }
  //     });
  //   } 
  //   else if (this.recordData.applType === 'PENGAKTIFAN') {
  //     const statusPayload = {
  //       code: this.recordData.KodKonfigurasi,
  //       status: "1",
  //       loginId: 'SYSADMIN'
  //     };
      
  //     this.dataKonfigurasiService.putStatusDataKonfigurasi(statusPayload).subscribe({
  //       next: () => {
  //         this.showSuccessModal('Pengaktifan data berjaya disimpan');
  //       },
  //       error: (err) => {
  //         console.error('Error updating status:', err);
  //         this.showErrorModal('Keputusan disimpan tetapi pengaktifan data gagal');
  //       }
  //     });
  //   }
  //   else {
  //     this.showSuccessModal('Keputusan semakan berjaya disimpan');
  //   }
  // }

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

  formatStatus(status: string): string {
    switch (status) {
      case 'KEMASKINI':
        return 'Kemaskini';
      case 'NYAHAKTIF':
        return 'Nyahaktif';
      case 'PENGAKTIFAN':
        return 'Pengaktifan';
      case 'PENAMBAHAN':
        return 'Penambahan';
      default:
        return status;
    }
  }

  goBack() {
    this.router.navigate([
      '/cmn/selenggara-data-konfigurasi/senarai-semakan-data-konfigurasi',
    ]);
  }
}
