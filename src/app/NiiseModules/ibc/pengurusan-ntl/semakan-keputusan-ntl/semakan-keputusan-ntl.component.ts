import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import {
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  CardFooterComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  ModalComponent,
  ModalToggleDirective,
  ModalBodyComponent,
  ToastComponent,
  ToasterComponent,
  ToastBodyComponent,
  ToastHeaderComponent,
  ModalHeaderComponent,
} from '@coreui/angular';
interface Pengembara {
  nama: string;
  noPengenalan: string;
  status: string;
  kategori: string;
  kelayakan: string;
}

@Component({
  selector: 'app-semakan-keputusan-ntl',
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    ToastComponent,
    ToastBodyComponent,
    ToastHeaderComponent,
    ToasterComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    RowComponent,
    ColComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalToggleDirective,
    ButtonDirective,
    FormsModule,
  ],
  templateUrl: './semakan-keputusan-ntl.component.html',
  styleUrl: './semakan-keputusan-ntl.component.scss',
})
export class SemakanKeputusanNtlComponent {
  kategoriOptions: string[] = [
    'A - Passport Tidak Sah',
    'B - Visa Tidak Sah',
    'C - Imigran yang Dilarang',
    'D - Tiada Hak Masuk Sabah/Sarawak',
    'E - Permit/Pas Tidak Dapat Dikeluarkan',
  ];
  dummyData: Pengembara[] = [
    {
      nama: 'Ahmad Zaki',
      noPengenalan: '900101-10-1234',
      status: 'Tidak Dibenarkan Masuk (NTL)',
      kategori: 'B - Visa Tidak Sah',
      kelayakan: 'Layak',
    },
    {
      nama: 'Siti Aminah',
      noPengenalan: '880202-05-5678',
      status: 'Tidak Dibenarkan Masuk (NTL)',
      kategori: 'C - Imigran yang Dilarang',
      kelayakan: 'Tidak Layak',
    },
    {
      nama: 'Tan Wei Ming',
      noPengenalan: '920303-14-4321',
      status: 'Tidak Dibenarkan Masuk (NTL)',
      kategori: 'A - Passport Tidak Sah',
      kelayakan: 'Layak',
    },
    {
      nama: 'Nurul Aina',
      noPengenalan: '970412-06-8888',
      status: 'Tidak Dibenarkan Masuk (NTL)',
      kategori: 'E - Permit/Pas Tidak Dapat Dikeluarkan',
      kelayakan: 'Layak',
    },
    {
      nama: 'Mohd Faiz',
      noPengenalan: '850723-03-1111',
      status: 'Tidak Dibenarkan Masuk (NTL)',
      kategori: 'D - Tiada Hak Masuk Sabah/Sarawak',
      kelayakan: 'Tidak Layak',
    },
    {
      nama: 'Lim Kok Leong',
      noPengenalan: '930915-14-2222',
      status: 'Tidak Dibenarkan Masuk (NTL)',
      kategori: 'B - Visa Tidak Sah',
      kelayakan: 'Layak',
    },
    {
      nama: 'Aisyah Kamal',
      noPengenalan: '991231-10-3333',
      status: 'Tidak Dibenarkan Masuk (NTL)',
      kategori: 'A - Passport Tidak Sah',
      kelayakan: 'Tidak Layak',
    },
    {
      nama: 'Rahim Ismail',
      noPengenalan: '800101-05-4444',
      status: 'Tidak Dibenarkan Masuk (NTL)',
      kategori: 'E - Permit/Pas Tidak Dapat Dikeluarkan',
      kelayakan: 'Layak',
    },
    {
      nama: 'Chong Mei Ling',
      noPengenalan: '890202-14-5555',
      status: 'Tidak Dibenarkan Masuk (NTL)',
      kategori: 'C - Imigran yang Dilarang',
      kelayakan: 'Tidak Layak',
    },
    {
      nama: 'Indra Kumar',
      noPengenalan: '901122-08-6666',
      status: 'Tidak Dibenarkan Masuk (NTL)',
      kategori: 'A - Passport Tidak Sah',
      kelayakan: 'Layak',
    },
    {
      nama: 'Zarina Hashim',
      noPengenalan: '870303-06-7777',
      status: 'Tidak Dibenarkan Masuk (NTL)',
      kategori: 'B - Visa Tidak Sah',
      kelayakan: 'Tidak Layak',
    },
    {
      nama: 'Fadli Roslan',
      noPengenalan: '950505-04-8888',
      status: 'Tidak Dibenarkan Masuk (NTL)',
      kategori: 'D - Tiada Hak Masuk Sabah/Sarawak',
      kelayakan: 'Layak',
    },
    {
      nama: 'Hafizah Ali',
      noPengenalan: '920707-12-9999',
      status: 'Tidak Dibenarkan Masuk (NTL)',
      kategori: 'C - Imigran yang Dilarang',
      kelayakan: 'Tidak Layak',
    },
    {
      nama: 'Ganesh Raj',
      noPengenalan: '911010-07-1234',
      status: 'Tidak Dibenarkan Masuk (NTL)',
      kategori: 'E - Permit/Pas Tidak Dapat Dikeluarkan',
      kelayakan: 'Layak',
    },
    {
      nama: 'Melissa Wong',
      noPengenalan: '860909-14-2345',
      status: 'Tidak Dibenarkan Masuk (NTL)',
      kategori: 'A - Passport Tidak Sah',
      kelayakan: 'Tidak Layak',
    },
    {
      nama: 'Sharifah Aina',
      noPengenalan: '981212-01-3456',
      status: 'Tidak Dibenarkan Masuk (NTL)',
      kategori: 'D - Tiada Hak Masuk Sabah/Sarawak',
      kelayakan: 'Layak',
    },
    {
      nama: 'Daniel Ariff',
      noPengenalan: '960101-10-4567',
      status: 'Tidak Dibenarkan Masuk (NTL)',
      kategori: 'B - Visa Tidak Sah',
      kelayakan: 'Tidak Layak',
    },
    {
      nama: 'Leong Wai Kit',
      noPengenalan: '950909-14-5678',
      status: 'Tidak Dibenarkan Masuk (NTL)',
      kategori: 'C - Imigran yang Dilarang',
      kelayakan: 'Layak',
    },
  ];

  filters = {
    nama: '',
    noPengenalan: '',
    status: '',
    kategori: '',
    kelayakan: '',
  };

  // ────────── Pagination state ──────────
  pageSize = 10;
  currentPage = 1;
  totalPages = 1;
  pages: number[] = [];

  // ────────── Derived data ──────────
  filteredData: Pengembara[] = [];
  pagedData: Pengembara[] = [];

  // ────────── Init ──────────
  ngOnInit(): void {
    this.applyFilters(); // sets filteredData, then paginate()
  }

  // ────────── Filtering ──────────
  applyFilters(): void {
    const f = this.filters;
    this.filteredData = this.dummyData.filter(
      (item) =>
        (!f.nama || item.nama.toLowerCase().includes(f.nama.toLowerCase())) &&
        (!f.noPengenalan || item.noPengenalan.includes(f.noPengenalan)) &&
        (!f.status || item.status === f.status) &&
        (!f.kategori || item.kategori === f.kategori) &&
        (!f.kelayakan || item.kelayakan === f.kelayakan)
    );

    this.currentPage = 1; // reset to first page on new filter
    this.paginate();
  }

  // ────────── Pagination helpers ──────────
  paginate(): void {
    this.totalPages = Math.max(
      1,
      Math.ceil(this.filteredData.length / this.pageSize)
    );
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedData = this.filteredData.slice(start, end);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.paginate();
  }

  constructor(private router: Router, private route: ActivatedRoute) {}
  viewDetail(item: any) {
    // Optional: Store data in local/session storage if needed now -- DUMMY API
    sessionStorage.setItem('selectedTraveller', JSON.stringify(item));
    // Navigate to detail page using a unique ID or encoded string (future-proof)
    // Once API exists, use a real ID like item.id
    this.router.navigate(['../detail-pengembara-ntl'], {
      relativeTo: this.route,
      // if api exists use this: queryParams: { id: item.id }
      queryParams: {
        nama: item.nama,
        noPengenalan: item.noPengenalan,
      },
    });
  }
}
