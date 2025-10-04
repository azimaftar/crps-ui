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
import { ApiService } from '../api.service';
import { forkJoin } from 'rxjs';

interface RujukanRecord {
  No: number;
  KodPermohonan: string;
  TableRujukan: string;
  KodRujukan: string;
  Keterangan: string;
  Permohonan: string;
}

@Component({
  selector: 'app-semakan-data-rujukan',
  templateUrl: './semakan-data-rujukan.component.html',
  styleUrls: ['./semakan-data-rujukan.component.scss'],
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
export class SemakanDataRujukanComponent implements OnInit {
  uid: string = '';
  recordData: any = null;
  keputusan: string = '';
  catatanPembetulan: string = '';
  showCatatanPembetulan: boolean = false;
  fieldMappings: { key: string; label: string }[] = [];

  showModal: boolean = false;
  modalMessage: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.uid = this.route.snapshot.paramMap.get('id')!;
    console.log('UID:', this.uid);
    this.loadData();
  }

  loadData() {
    this.apiService.getSemakanDataRujukan(this.uid).subscribe({
      next: (data) => {
        this.recordData = data;
        this.prepareFieldMappings();

        // if (data.res) {
        //   this.keputusan = data.res === 'Lulus' ? 'Lulus' : 'Tidak Lulus';

        //   this.showCatatanPembetulan = this.keputusan === 'Tidak Lulus';

        //   if (data.note) {
        //     this.catatanPembetulan = data.note;
        //   }
        // }

        if (data.res) {
          this.keputusan = this.mapKeputusan(data.res);
          this.showCatatanPembetulan = this.keputusan === 'Tidak Lulus';

          if (data.note) {
            this.catatanPembetulan = data.note;
          }
        }
      },
      error: (error) => {
        console.error('Error loading data:', error);
        this.router.navigate([
          '/cmn/selenggara-data-rujukan/semak-data-rujukan/senarai-semakan-data-rujukan',
        ]);
      },
    });
  }

  onKeputusanChange() {
    this.showCatatanPembetulan = this.keputusan === 'Tidak Lulus';

    if (this.keputusan === 'Lulus') {
      this.catatanPembetulan = '';
    }
  }

  simpanKeputusan() {
    if (this.keputusan === '') {
      this.showErrorModal('Sila pilih keputusan.');
      return;
    }

    if (this.keputusan === 'Tidak Lulus' && !this.catatanPembetulan) {
      this.showErrorModal('Sila isi catatan pembetulan.');
      return;
    }

    const apiResValue = this.mapKeputusanToApi(this.keputusan);

    // const keputusanData = {
    //   res: this.keputusan === 'Lulus' ? 'Lulus' : 'Tidak Lulus',
    //   note: this.keputusan === 'Tidak Lulus' ? this.catatanPembetulan : '',
    // };
    
    const keputusanData = {
      res: apiResValue, // T atau L
      note: this.keputusan === 'Tidak Lulus' ? this.catatanPembetulan : '',
    };

    this.apiService.putKeputusanSemakan(this.uid, keputusanData).subscribe({
      next: (response) => {
        console.log('API response:', response);
        this.showSuccessModal('Keputusan telah berjaya disimpan.');
      },
      error: (error) => {
        console.error('Error saving data:', error);
        this.showErrorModal('Gagal menyimpan keputusan. Sila cuba lagi.');
      },
    });
  }

  prepareFieldMappings() {
    this.fieldMappings = [
      { key: 'cd', label: 'KOD PERMOHONAN' },
      { key: 'tbl', label: 'TABLE RUJUKAN' },
      { key: 'tblcd', label: 'KOD RUJUKAN' },
      { key: 'appltype', label: 'JENIS PERMOHONAN' },
      { key: 'bmDesc', label: 'KETERANGAN' },
      { key: 'createId', label: 'DICIPTA OLEH' },
      { key: 'createDate', label: 'TARIKH DICIPTA' },
    ];
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
        return 'Kemaskini';
      case 'N':
        return 'Nyahaktif';
      case 'A':
        return 'Pengaktifan';
      default:
        return applType;
    }
  }

  private mapKeputusan(resValue: string | null): string {
  if (!resValue) {
      return '';
    }
    
    switch (resValue.toUpperCase()) {
      case 'L':
        return 'Lulus';
      case 'T':
        return 'Tidak Lulus';
      default:
        return resValue;
    }
  }

  private mapKeputusanToApi(keputusan: string): string {
    switch (keputusan) {
      case 'Lulus':
        return 'L';
      case 'Tidak Lulus':
        return 'T';
      default:
        return keputusan;
    }
  }

  formatLabel(key: string): string {
    return key.replace(/([A-Z])/g, '_$1').toUpperCase();
  }

  goBack() {
    this.router.navigate([
      '/cmn/selenggara-data-rujukan/senarai-semakan-data-rujukan',
    ]);
  }
}
