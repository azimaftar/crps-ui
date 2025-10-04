import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalJenisDokumenPemeriksaanKeluarComponent } from '../../pemeriksaan-keluar-kaunter-manual/modal-jenis-dokumen-pemeriksaan-keluar/modal-jenis-dokumen-pemeriksaan-keluar.component';

import {
  CardModule,
  GridModule,
  ButtonModule,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,
  ButtonDirective
} from '@coreui/angular';

@Component({
  selector: 'app-pemeriksaan-keluar-dari-kompleks-ibc',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    GridModule,
    ButtonModule,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ButtonDirective,
    ModalJenisDokumenPemeriksaanKeluarComponent
  ],
  templateUrl: './pemeriksaan-keluar-dari-kompleks-ibc.component.html',
  styleUrl: './pemeriksaan-keluar-dari-kompleks-ibc.component.scss'
})
export class PemeriksaanKeluarDariKompleksIbcComponent implements OnInit {
  selectedDocumentType: string = '';
  selectedDocumentOption: string = '';

  selectedStatus: string = '';
  selectedMonth: string = '';
  searchTerm: string = '';

  bulanList: string[] = [
    'Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun',
    'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'
  ];

  records = [
    {
      no: 1,
      noDokumen: '830415052235',
      negara: 'MYS',
      flag: 'assets/flag/mys.png',
      nama: 'Siti Aishah Binti Omar',
      jantina: 'Perempuan',
      logMasuk: '20 Januari 2024, 08:05',
      status: 'Diterima'
    },
    {
      no: 2,
      noDokumen: '830415052236',
      negara: 'SGP',
      flag: 'assets/flag/sgp.png',
      nama: 'Mohamed Ali Bin Ibrahim',
      jantina: 'Lelaki',
      logMasuk: '19 Januari 2024, 10:45',
      status: 'Ditolak'
    },
    {
      no: 3,
      noDokumen: '940409105191',
      negara: 'BRN',
      flag: 'assets/flag/sgp.png',
      nama: 'Muhamad Dinnie Bin Ismail',
      jantina: 'Lelaki',
      logMasuk: '09 April 2024, 02:12',
      status: 'Dalam Semakan'
    }
  ];

  filteredRecords = [...this.records];

  @ViewChild('modalStandard') modalStandard!: ModalComponent;
  modalMessage: string = '';
  modalButtonText: string = 'OK';
  responseCode: string = ''; 

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.filteredRecords = [...this.records];
  }

  // ✅ FILTER METHODS
  onStatusChange(event: any): void {
    this.selectedStatus = event.target.value;
    this.applyFilters();
  }

  onMonthChange(event: any): void {
    this.selectedMonth = event.target.value;
    this.applyFilters();
  }

  onSearchChange(event: any): void {
    this.searchTerm = event.target.value;
    this.applyFilters();
  }

  applyFilters(): void {
    const isStatusEmpty = !this.selectedStatus;
    const isMonthEmpty = !this.selectedMonth;
    const isSearchEmpty = !this.searchTerm;

    if (isStatusEmpty && isMonthEmpty && isSearchEmpty) {
      this.filteredRecords = [...this.records];
      return;
    }

    this.filteredRecords = this.records.filter(record => {
      const statusMatch = isStatusEmpty || record.status === this.selectedStatus;
      const monthMatch = isMonthEmpty || record.logMasuk.toLowerCase().includes(this.selectedMonth.toLowerCase());
      const searchMatch = isSearchEmpty || record.nama.toLowerCase().includes(this.searchTerm.toLowerCase()) || record.noDokumen.includes(this.searchTerm);
      return statusMatch && monthMatch && searchMatch;
    });
  }

  // ✅ Maintain Original Functions
  onDocumentTypeChange(event: any): void {
    this.selectedDocumentType = event.target.value;
    this.selectedDocumentOption = '';
  }

  onDocumentOptionChange(event: any): void {
    this.selectedDocumentOption = event.target.value;
  }

  openModal(): void {
    this.modalStandard.visible = true;
  }

  hideModal(): void {
    this.modalStandard.visible = false;
  }

  async simulateScanning(): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return '';
  }

  async onScanDocument(): Promise<void> {
    this.responseCode = await this.simulateScanning();

    switch (this.responseCode) {
      case 'IBC-S026':
        this.modalMessage = 'Dokumen Gagal Imbasan';
        this.modalButtonText = 'OK';
        this.openModal();
        break;
      case 'IBC-S020':
        this.modalMessage = 'Kad MyKad/MyPR Gagal Imbasan';
        this.modalButtonText = 'OK';
        this.openModal();
        break;
      case 'IBC-S028':
        this.modalMessage = 'Kod QR Gagal Dibaca';
        this.modalButtonText = 'OK';
        this.openModal();
        break;
      default:
        this.navigateBasedOnDocumentType();
        return;
    }
  }

  modalStandardClick(): void {
    switch (this.responseCode) {
      case 'IBC-S026':
      case 'IBC-S020':
      case 'IBC-S028':
        this.hideModal();
        this.router.navigate(['../keluar-imbasan-dokumen-perjalanan-lain2'], { relativeTo: this.route });
        break;
      default:
        this.hideModal();
        break;
    }
  }

  private navigateBasedOnDocumentType(): void {
    switch (this.selectedDocumentType) {
      case 'pasport':
        this.onPasportImbasDokumen();
        break;
      case 'myKad/myPR':
        this.onMyKadImbasDokumen();
        break;
      case 'lain-lain':
        this.onLain2();
        break;
      default:
        this.onLain2();
    }
  }

  onPasportImbasDokumen(): void {
    this.router.navigate(['../keluar-imbasan-kompleks-dokumen-perjalanan-pasport'], { relativeTo: this.route });
  }

  onMyKadImbasDokumen(): void {
    this.router.navigate(['../keluar-imbasan-kompleks-dokumen-mykad'], { relativeTo: this.route });
  }

  onLain2(): void {
    this.router.navigate(['../keluar-imbasan-kompleks-dokumen-lainlain'], { relativeTo: this.route });
  }

  getDocumentOptions(): string[] {
    switch (this.selectedDocumentType) {
      case 'pasport':
        return ['MyKad/MyPR', 'Lain-lain'];
      case 'myKad/myPR':
        return ['lain-lain'];
      default:
        return [];
    }
  }

  getButtonText(): string {
    switch (this.selectedDocumentType) {
      case 'pasport':
      case 'myKad/myPR':
        return 'Imbas Dokumen';
      case 'lain-lain':
        return 'Masukkan Maklumat';
      default:
        return 'Imbas Dokumen';
    }
  }

  openModalAction(): void {
    this.onScanDocument();
  }

  openStandardModal(): void {
    this.modalStandard.visible = true;
  }

  canScanDocument(): boolean {
    return this.selectedDocumentType !== '' && this.selectedDocumentType !== null;
  }

  resetForm(): void {
    this.selectedDocumentType = '';
    this.selectedDocumentOption = '';
  }

  onSelectDoc(docType: string): void {
    this.selectedDocumentType = docType;
    this.openModalAction();
  }

  testError(errorCode: string): void {
    this.responseCode = errorCode;
    switch (this.responseCode) {
      case 'IBC-S026':
        this.modalMessage = 'Dokumen Gagal Imbasan';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-W008':
        this.modalMessage = 'Pasport Kemungkinan adalah palsu';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S027':
        this.modalMessage = 'Imbasan MyKad/MyPR Gagal';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
    }
  }

  OnTutup(): void {
    this.router.navigate(['../maklumat-profil-pengembara-kompleks'],  {relativeTo: this.route});
  }

  testModalSequence(errorCode: string): void {
    console.log(`Testing modal sequence for ${errorCode}`);
    this.testError(errorCode);
  }
}
