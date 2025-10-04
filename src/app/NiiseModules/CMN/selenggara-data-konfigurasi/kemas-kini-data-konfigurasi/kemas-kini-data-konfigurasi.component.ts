import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule, GridModule, ModalModule } from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from '../notification/notification.component'

import { DataKonfigurasiService } from '../../selenggara-data-konfigurasi/data-konfigurasi.service';

@Component({
  selector: 'app-kemas-kini-data-konfigurasi',
  templateUrl: './kemas-kini-data-konfigurasi.component.html',
  styleUrls: ['./kemas-kini-data-konfigurasi.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, CardModule, GridModule, NotificationComponent,ModalModule],
})
export class KemasKiniDataKonfigurasiComponent implements OnInit {

  showModal: boolean = false;
    modalMessage: string = '';

  fieldMappings = [
    { label: 'DATA KONFIGURASI', key: 'docCode' },
    { label: 'KETERANGAN DATA KONFIGURASI', key: 'docBmDesc' },
    { label: 'NILAI DATA KONFIGURASI', key: 'docValue' },
  ];

  detailData: {
    [key: string]: any;
    kodKonfigurasi: string;
    docCode: string;
    docBmDesc: string;
    docValue: string;
  } = {
      kodKonfigurasi: '',
      docCode: '',
      docBmDesc: '',
      docValue: '',
    };


   @ViewChild('notification') NotificationComponent!: NotificationComponent;

  constructor(private router: Router, private dataKonfigurasiService: DataKonfigurasiService) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { detailData?: any };

    if (state?.detailData) {
      this.detailData = {
        kodKonfigurasi: state.detailData.kodKonfigurasi || '',
        docCode: state.detailData.docCode || '',
        docBmDesc: state.detailData.docBmDesc || '',
        docValue: state.detailData.docValue || '',
      };
    } else {
      console.warn('No data received in navigation state.');
    }

  }

  ngOnInit() {

  }

  clearAllField() {
    // Reset all fields in detailData object
    this.detailData = {
      kodKonfigurasi: '',
      docCode: '',
      docBmDesc: '',
      docValue: ''
    };
  }

  goBack() {
    this.clearAllField();
    this.router.navigate([
      '/cmn/selenggara-data-konfigurasi/buat-carian-data-konfigurasi',
    ]);
  }

  save() {
    if (!this.detailData.docBmDesc?.trim() || !this.detailData.docValue?.trim()) {
      // this.showErrorModal('Sila isi semua medan yang diperlukan');
      return;
    }

    const payload = {
      cd: "APP011",
      conf: 'Q006_CONF',
      ref: this.detailData.kodKonfigurasi,
      appl: "K",
      val: {
        cd: this.detailData.kodKonfigurasi,
        data: this.detailData.docCode,  // First line (read-only)
        desc: this.detailData.docBmDesc, // Second line (editable)
        val: this.detailData.docValue    // Third line (editable)
      }
    };

    this.dataKonfigurasiService.postPermohonanDataKonfigurasi(payload).subscribe({
      next: () => {
        this.showSuccessModal('Maklumat telah berjaya disimpan');
      //  alert('Maklumat telah berjaya disimpan');
      //  this.NotificationComponent.open('Maklumat telah berjaya disimpan', 'success');
      },
      error: (err) => {
        console.error('API Error:', err);
        this.showErrorModal('Gagal menyimpan data konfigurasi');
        // alert('Gagal menyimpan data konfigurasi');
        // this.NotificationComponent.open('Gagal menyimpan data konfigurasi', 'error');
      }
    });
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


  isEditable(key: string): boolean {
  return key === 'docBmDesc' || key === 'docValue';
}
}



