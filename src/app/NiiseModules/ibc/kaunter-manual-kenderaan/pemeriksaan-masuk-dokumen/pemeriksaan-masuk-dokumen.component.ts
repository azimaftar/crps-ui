import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  selector: 'app-pemeriksaan-masuk-dokumen',
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
  ],
  templateUrl: './pemeriksaan-masuk-dokumen.component.html',
  styleUrl: './pemeriksaan-masuk-dokumen.component.scss'
})
export class PemeriksaanMasukDokumenComponent implements OnInit {
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

  onSelectDoc(docType: string): void {
    this.selectedDocumentType = docType;
    this.openModalAction();
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

  async openModalAction(): Promise<void> {
    this.responseCode = await this.simulateScanning();
    this.navigateBasedOnDocumentType();
  }

  modalStandardClick(): void {
    this.hideModal();
  }

  private navigateBasedOnDocumentType(): void {
    switch (this.selectedDocumentType) {
      case 'pasport':
        this.router.navigate(['../imbasan-dokumen-passport'], { relativeTo: this.route });
        break;
      case 'KadABTC':
        this.router.navigate(['../imbasan-dokumen-abtc'], { relativeTo: this.route });
        break;
      case 'KodQR':
        this.router.navigate(['../imbasan-dokumen-kodqr'], { relativeTo: this.route });
        break;
      case 'lain-lain':
        this.router.navigate(['../imbasan-dokumen-lainlain'], { relativeTo: this.route });
        break;
      default:
        break;
    }
  }

  testError(code: string): void {
    this.responseCode = code;
    switch (code) {
      case 'IBC-S026':
        this.modalMessage = 'Dokumen Gagal Imbasan';
        break;
      case 'IBC-S020':
        this.modalMessage = 'Kad ABTC Gagal Imbasan';
        break;
      case 'IBC-S028':
        this.modalMessage = 'Kod QR Gagal Dibaca';
        break;
      default:
        this.modalMessage = 'Ralat Tidak Dikenalpasti';
    }
    this.modalButtonText = 'OK';
    this.modalStandard.visible = true;
  }
}
