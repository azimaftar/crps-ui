import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IconDirective } from "@coreui/icons-angular";
import {
  ButtonDirective,
  RowComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormSelectDirective,
  ButtonCloseDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardFooterComponent,
  ButtonModule,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
} from '@coreui/angular';
import {
} from '@coreui/angular';
import * as flagSet from '@coreui/icons';
import { freeSet } from '@coreui/icons'

@Component({
  selector: 'app-pemeriksaan-masuk-2',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule, FormDirective,
    FormLabelDirective,
    FormControlDirective,
    FormSelectDirective,
    ButtonDirective,
    ModalToggleDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    ButtonModule,
    RowComponent,
    ColComponent,
    DropdownComponent,
    DropdownItemDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    CommonModule,
    IconDirective
  ],
  templateUrl: './pemeriksaan-masuk-2.component.html',
  styleUrl: './pemeriksaan-masuk-2.component.scss'
})
export class PemeriksaanMasuk2Component {
  // icons = flagSet;
  travelerRecords: any[] = [];
  paginatedRecords: any[] = [];
  freeIcons = freeSet;

  currentPage = 1;
  itemsPerPage = 10;
  selectedRecordNumber = 10;

  selectedStatus: string = '';
  selectedMonth: string = '';
  searchTerm: string = '';

  allTravelerRecords: any[] = []; // keep the original

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  icons: { [key: string]: any } = flagSet;

  // // Map 3-letter codes to 2-letter ISO codes
  // private isoAlpha3ToAlpha2: { [key: string]: string } = {
  //   MYS: 'my',
  //   CRO: 'hr',
  //   SGP: 'sg',
  //   // Add more as needed
  // };

  // getFlagIconCode(wn: string): string {
  //   const alpha2 = this.isoAlpha3ToAlpha2[wn.toUpperCase()];
  //   return alpha2 ? `cif${alpha2.charAt(0).toUpperCase()}${alpha2.slice(1).toLowerCase()}` : ''; // e.g., 'my' → 'cifMy'
  // }

  // 3-letter to 2-letter ISO country code mapping
  private isoAlpha3ToAlpha2: { [key: string]: string } = {
    MYS: 'my',
    CRO: 'hr',
    SGP: 'sg',
    NIG: 'ng',
    GER: 'de',
    CHE: 'ch',
    JPN: 'jp'
    // Add more mappings here
  };

  getAlpha2Code(wn: string): string {
    return this.isoAlpha3ToAlpha2[wn.toUpperCase()] || 'un'; // 'un' = unknown fallback
  }

  ngOnInit(): void {
    this.loadTravelerRecords();
  }

  get totalPages(): number {
    return Math.ceil(this.travelerRecords.length / this.itemsPerPage);
  }

  get recordNumbers(): number[] {
    const total = this.travelerRecords.length;
    const step = 10;
    const numbers: number[] = [];

    for (let i = step; i <= total; i += step) {
      numbers.push(i);
    }

    // Optionally include the last record count if it's not a multiple of 10
    if (total % step !== 0 && numbers[numbers.length - 1] !== total) {
      numbers.push(total);
    }

    return numbers;
  }

  updatePaginatedRecords(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedRecords = this.travelerRecords.slice(start, end);

    this.selectedRecordNumber = end > this.travelerRecords.length
      ? this.travelerRecords.length
      : end;
  }

  jumpToRecord(recordNumber: number): void {
    this.currentPage = Math.ceil(recordNumber / this.itemsPerPage);
    this.updatePaginatedRecords();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedRecords();
    }
  }

  goToFirst(): void {
    this.currentPage = 1;
    this.updatePaginatedRecords();
  }

  goToLast(): void {
    this.currentPage = this.totalPages;
    this.updatePaginatedRecords();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedRecords();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedRecords();
    }
  }

  get visiblePages(): number[] {
    return [1, 2, 3].filter(p => p <= this.totalPages);
  }

  get lastPages(): number[] {
    const last = this.totalPages;
    return [last - 2, last - 1, last]
      .filter(p => p > 3 && p <= this.totalPages);
  }

  get showEllipsis(): boolean {
    return this.totalPages > 6;
  }

  formatLogMasuk(dateStr: string): string {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  }

  filteredRecords = [...this.travelerRecords];
  statusFilter = '';
  monthFilter = '';
  searchText = '';

  applyFilters(): void {
    this.filteredRecords = this.travelerRecords.filter(record => {
      const matchesStatus = this.statusFilter ? record.status === this.statusFilter : true;

      const matchesMonth = this.monthFilter
        ? new Date(record.logMasuk).getMonth() === +this.monthFilter
        : true;

      const searchTarget = `${record.nama} ${record.dokumen} ${record.wn} ${record.jantina}`.toLowerCase();
      const matchesSearch = searchTarget.includes(this.searchText.toLowerCase());

      return matchesStatus && matchesMonth && matchesSearch;
    });

    this.updatePaginatedRecords();
  }

  private searchTimeout: any;

  onSearchInput(): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.filterTravelerRecords();
    }, 300); // Delay of 300ms
  }


  filterTravelerRecords(): void {
    this.travelerRecords = this.allTravelerRecords.filter(record => {
      const matchesStatus = !this.selectedStatus || record.status === this.selectedStatus;

      const recordMonth = new Date(record.logMasuk).getMonth() + 1; // Jan = 1
      const matchesMonth = !this.selectedMonth || recordMonth === +this.selectedMonth;

      const matchesSearch = !this.searchTerm || (
        record.nama?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        record.dokumen?.includes(this.searchTerm) ||
        record.wn?.toLowerCase().includes(this.searchTerm.toLowerCase())
      );

      return matchesStatus && matchesMonth && matchesSearch;
    });

    this.updatePaginatedRecords(); // Keep using this if pagination is implemented
  }

  resetFilters(): void {
    this.selectedStatus = '';
    this.selectedMonth = '';
    this.searchTerm = '';
    this.travelerRecords = [...this.allTravelerRecords];
    this.updatePaginatedRecords();
  }

  //Routing
  onImbasDokumenClick(docType: string): void {
    console.log('Selected docType:', docType);

    if (docType === 'passport' || docType === 'kadABTC') {
      this.router.navigate(['/ibc/pemeriksaan-masuk/pemeriksaan-masuk-3'], {
        queryParams: { docType }
      });
    } else if (docType === 'kodQR') {
      this.router.navigate(['/ibc/pemeriksaan-masuk/pemeriksaan-masuk-4'], {
        queryParams: { docType }
      });
    } else {
      this.router.navigate(['/ibc/pemeriksaan-masuk/pemeriksaan-masuk-3'], {
        queryParams: { docType }
      });
    }
  }

  // loadTravelerRecords(): void {
  //   this.http.get<any[]>('http://localhost:8080/IBC/GET/getAllMaklumatPengembara')
  //     .subscribe(data => {
  //       this.allTravelerRecords = data.map(item => ({
  //         dokumen: item.kpNo,
  //         wn: item.nationality,
  //         nama: item.name,
  //         jantina: item.gender,           // Maps to 'jantina'
  //         logMasuk: item.issueDatePassport, // Maps to 'logMasuk'
  //         status: item.status
  //       }));

  //       this.updatePaginatedRecords();
  //       this.filterTravelerRecords(); // Apply filter on load
  //       this.travelerRecords = [...this.allTravelerRecords];
  //     });
  // }

  loadTravelerRecords(): void {
    this.allTravelerRecords = [
      {
        no: 1,
        dokumen: '010101010101',
        wn: 'MYS',
        nama: 'Wan Muhammad Samsuddin Abu Somad Bin Wan Ahmad Tanjak Ali',
        jantina: 'Lelaki',
        logMasuk: '2025-01-20 09:00:00.000',
        status: 'Diterima'
      },
      {
        no: 2,
        dokumen: '020202020202',
        wn: 'SGP',
        nama: 'Siti Aminah Maimunah Binti Samsudin',
        jantina: 'Perempuan',
        logMasuk: '2025-02-12 00:00:00.000',
        status: 'Ditolak'
      },
      {
        no: 3,
        dokumen: '030303030303',
        wn: 'CRO',
        nama: 'Luka Modric',
        jantina: 'Lelaki',
        logMasuk: '2025-03-13 00:00:00.000',
        status: 'Dalam Semakan'
      },
      {
        no: 4,
        dokumen: '050505050505',
        wn: 'NIG',
        nama: 'Uvuvwevwe Anyetweweve Okwimokwim Osas',
        jantina: 'Lelaki',
        logMasuk: '2025-04-21 12:09:00.000',
        status: 'Diterima'
      },
      {
        no: 5,
        dokumen: '060606060606',
        wn: 'SGP',
        nama: 'Siti Afrina Binti Mohamad',
        jantina: 'Perempuan',
        logMasuk: '2025-05-22 00:34:00.000',
        status: 'Ditolak'
      },
      {
        no: 6,
        dokumen: '990909090909',
        wn: 'GER',
        nama: 'Hubert Blaine Wolfeschlegelsteinhausenbergerdorff',
        jantina: 'Lelaki',
        logMasuk: '2025-08-31 00:00:00.000',
        status: 'Dalam Semakan'
      },
      {
        no: 7,
        dokumen: '980808080808',
        wn: 'CHE',
        nama: 'Sally Blaine',
        jantina: 'Perempuan',
        logMasuk: '2025-06-20 00:00:00.000',
        status: 'Dalam Semakan'
      },
      {
        no: 1,
        dokumen: '010101010101',
        wn: 'MYS',
        nama: 'Wan Muhammad Samsuddin Abu Somad Bin Wan Ahmad Tanjak Ali',
        jantina: 'Lelaki',
        logMasuk: '2025-07-20 00:00:00.000',
        status: 'Diterima'
      },
      {
        no: 2,
        dokumen: '020202020202',
        wn: 'SGP',
        nama: 'Siti Aminah Maimunah Binti Samsudin',
        jantina: 'Perempuan',
        logMasuk: '2025-09-03 23:00:00.000',
        status: 'Ditolak'
      },
      {
        no: 3,
        dokumen: '030303030303',
        wn: 'CRO',
        nama: 'Luka Modric',
        jantina: 'Lelaki',
        logMasuk: '2025-07-10 18:53:00.000',
        status: 'Dalam Semakan'
      },
      {
        no: 4,
        dokumen: '050505050505',
        wn: 'NIG',
        nama: 'Uvuvwevwe Anyetweweve Okwimokwim Osas',
        jantina: 'Lelaki',
        logMasuk: '2002-01-20 00:00:00.000',
        status: 'Diterima'
      },
      {
        no: 5,
        dokumen: '060606060606',
        wn: 'SGP',
        nama: 'Siti Afrina Binti Mohamad',
        jantina: 'Perempuan',
        logMasuk: '2002-01-20 00:00:00.000',
        status: 'Ditolak'
      },
      {
        no: 6,
        dokumen: '990909090909',
        wn: 'GER',
        nama: 'Hubert Blaine Wolfeschlegelsteinhausenbergerdorff',
        jantina: 'Lelaki',
        logMasuk: '2002-01-20 00:00:00.000',
        status: 'Dalam Semakan'
      },
      {
        no: 7,
        dokumen: '980808080808',
        wn: 'CHE',
        nama: 'Sally Blaine',
        jantina: 'Perempuan',
        logMasuk: '2002-01-20 00:00:00.000',
        status: 'Dalam Semakan'
      },
      {
        no: 1,
        dokumen: '010101010101',
        wn: 'MYS',
        nama: 'Wan Muhammad Samsuddin Abu Somad Bin Wan Ahmad Tanjak Ali',
        jantina: 'Lelaki',
        logMasuk: '2002-01-20 00:00:00.000',
        status: 'Diterima'
      },
      {
        no: 2,
        dokumen: '020202020202',
        wn: 'SGP',
        nama: 'Siti Aminah Maimunah Binti Samsudin',
        jantina: 'Perempuan',
        logMasuk: '2002-01-20 00:00:00.000',
        status: 'Ditolak'
      },
      {
        no: 3,
        dokumen: '030303030303',
        wn: 'CRO',
        nama: 'Luka Modric',
        jantina: 'Lelaki',
        logMasuk: '2002-01-20 00:00:00.000',
        status: 'Dalam Semakan'
      },
      {
        no: 4,
        dokumen: '050505050505',
        wn: 'NIG',
        nama: 'Uvuvwevwe Anyetweweve Okwimokwim Osas',
        jantina: 'Lelaki',
        logMasuk: '2002-01-20 00:00:00.000',
        status: 'Diterima'
      },
      {
        no: 5,
        dokumen: '060606060606',
        wn: 'SGP',
        nama: 'Siti Afrina Binti Mohamad',
        jantina: 'Perempuan',
        logMasuk: '2002-01-20 00:00:00.000',
        status: 'Ditolak'
      },
      {
        no: 6,
        dokumen: '990909090909',
        wn: 'GER',
        nama: 'Hubert Blaine Wolfeschlegelsteinhausenbergerdorff',
        jantina: 'Lelaki',
        logMasuk: '2002-01-20 00:00:00.000',
        status: 'Dalam Semakan'
      },
      {
        no: 7,
        dokumen: '980808080808',
        wn: 'CHE',
        nama: 'Sally Blaine',
        jantina: 'Perempuan',
        logMasuk: '2002-01-20 00:00:00.000',
        status: 'Dalam Semakan'
      },
      {
        no: 1,
        dokumen: '010101010101',
        wn: 'MYS',
        nama: 'Wan Muhammad Samsuddin Abu Somad Bin Wan Ahmad Tanjak Ali',
        jantina: 'Lelaki',
        logMasuk: '2002-01-20 00:00:00.000',
        status: 'Diterima'
      },
      {
        no: 2,
        dokumen: '020202020202',
        wn: 'SGP',
        nama: 'Siti Aminah Maimunah Binti Samsudin',
        jantina: 'Perempuan',
        logMasuk: '2002-01-20 00:00:00.000',
        status: 'Ditolak'
      },
      {
        no: 3,
        dokumen: '030303030303',
        wn: 'CRO',
        nama: 'Luka Modric',
        jantina: 'Lelaki',
        logMasuk: '2002-01-20 00:00:00.000',
        status: 'Dalam Semakan'
      },
      {
        no: 4,
        dokumen: '050505050505',
        wn: 'NIG',
        nama: 'Uvuvwevwe Anyetweweve Okwimokwim Osas',
        jantina: 'Lelaki',
        logMasuk: '2002-01-20 00:00:00.000',
        status: 'Diterima'
      },
      {
        no: 5,
        dokumen: '060606060606',
        wn: 'SGP',
        nama: 'Siti Afrina Binti Mohamad',
        jantina: 'Perempuan',
        logMasuk: '2002-01-20 00:00:00.000',
        status: 'Ditolak'
      },
      {
        no: 6,
        dokumen: '990909090909',
        wn: 'GER',
        nama: 'Hubert Blaine Wolfeschlegelsteinhausenbergerdorff',
        jantina: 'Lelaki',
        logMasuk: '2002-01-20 00:00:00.000',
        status: 'Dalam Semakan'
      },
      {
        no: 7,
        dokumen: '980808080808',
        wn: 'CHE',
        nama: 'Sally Blaine',
        jantina: 'Perempuan',
        logMasuk: '2002-01-20 00:00:00.000',
        status: 'Dalam Semakan'
      },

    ];
    this.updatePaginatedRecords();
    this.filterTravelerRecords(); // Apply filter on load
    this.travelerRecords = [...this.allTravelerRecords];
  }
}