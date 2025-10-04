import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormModule,
  CardModule,
  GridModule,
  PaginationModule,
} from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface TemplatRecord {
  No: number;
  kodTemplat: string;
  jenisTemplat: string;
  keteranganTemplat: string;
  status: string;
}

@Component({
  selector: 'app-buat-carian-templat',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    FormsModule,
    FormModule,
    PaginationModule
  ],
  standalone: true,
  templateUrl: './buat-carian-templat.component.html',
  styleUrl: './buat-carian-templat.component.scss'
})
export class BuatCarianTemplatComponent implements OnInit {

  kodTemplat: string = '';
  searchText: string = '';

  focused = false;
  focused2 = false;
  hoveringIndex: number | null = null;
  hoveringIndex2: number | null = null;

  data: TemplatRecord[] = [];
  filteredData: TemplatRecord[] = [];
  currentPageData: TemplatRecord[] = [];

  totalItems: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 10;



  goToPageNumber: number = 1;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.loadData();
  }

  //Load initial dummy/API backend Data.
  loadData() {
    //dummy data. Replaced with API when API is done
    const rawData: TemplatRecord[] = [
  {
    No: 1,
    kodTemplat: 'TMP001',
    jenisTemplat: 'Surat',
    keteranganTemplat: 'Templat surat rasmi',
    status: '1'
  },
  {
    No: 2,
    kodTemplat: 'TMP002',
    jenisTemplat: 'Borang',
    keteranganTemplat: 'Borang pendaftaran ahli',
    status: '1'
  },
  {
    No: 3,
    kodTemplat: 'TMP003',
    jenisTemplat: 'E-mel',
    keteranganTemplat: 'E-mel makluman cuti',
    status: '0'
  },
  {
    No: 4,
    kodTemplat: 'TMP004',
    jenisTemplat: 'Memo',
    keteranganTemplat: 'Memo arahan dalaman',
    status: '1'
  },
  {
    No: 5,
    kodTemplat: 'TMP005',
    jenisTemplat: 'Surat',
    keteranganTemplat: 'Templat surat penghargaan',
    status: '0'
  },
  {
    No: 6,
    kodTemplat: 'TMP006',
    jenisTemplat: 'Borang',
    keteranganTemplat: 'Borang tuntutan perjalanan',
    status: '1'
  },
  {
    No: 7,
    kodTemplat: 'TMP007',
    jenisTemplat: 'E-mel',
    keteranganTemplat: 'E-mel pengumuman mesyuarat',
    status: '1'
  },
  {
    No: 8,
    kodTemplat: 'TMP008',
    jenisTemplat: 'Memo',
    keteranganTemplat: 'Memo perubahan polisi syarikat',
    status: '0'
  },
  {
    No: 9,
    kodTemplat: 'TMP009',
    jenisTemplat: 'Surat',
    keteranganTemplat: 'Surat tawaran kerja',
    status: '1'
  },
  {
    No: 10,
    kodTemplat: 'TMP010',
    jenisTemplat: 'Borang',
    keteranganTemplat: 'Borang permohonan cuti',
    status: '0'
  },
  {
    No: 11,
    kodTemplat: 'TMP011',
    jenisTemplat: 'E-mel',
    keteranganTemplat: 'E-mel ucapan selamat',
    status: '1'
  },
  {
    No: 12,
    kodTemplat: 'TMP012',
    jenisTemplat: 'Memo',
    keteranganTemplat: 'Memo jadual penyelenggaraan',
    status: '1'
  },
  {
    No: 13,
    kodTemplat: 'TMP013',
    jenisTemplat: 'Surat',
    keteranganTemplat: 'Surat jemputan rasmi',
    status: '0'
  },
  {
    No: 14,
    kodTemplat: 'TMP014',
    jenisTemplat: 'Borang',
    keteranganTemplat: 'Borang penilaian prestasi',
    status: '1'
  },
  {
    No: 15,
    kodTemplat: 'TMP015',
    jenisTemplat: 'E-mel',
    keteranganTemplat: 'E-mel pengesahan tempahan',
    status: '1'
  },
  {
    No: 16,
    kodTemplat: 'TMP016',
    jenisTemplat: 'Memo',
    keteranganTemplat: 'Memo pengumuman cuti umum',
    status: '0'
  },
  {
    No: 17,
    kodTemplat: 'TMP017',
    jenisTemplat: 'Surat',
    keteranganTemplat: 'Surat pengesahan jawatan',
    status: '1'
  },
  {
    No: 18,
    kodTemplat: 'TMP018',
    jenisTemplat: 'Borang',
    keteranganTemplat: 'Borang maklum balas pelanggan',
    status: '0'
  },
  {
    No: 19,
    kodTemplat: 'TMP019',
    jenisTemplat: 'E-mel',
    keteranganTemplat: 'E-mel pengumuman syarikat',
    status: '1'
  },
  {
    No: 20,
    kodTemplat: 'TMP020',
    jenisTemplat: 'Memo',
    keteranganTemplat: 'Memo keselamatan pejabat',
    status: '1'
  }
];

    //Map status to text
    this.data = rawData.map(item => ({
      ...item,
      status: item.status === '1' ? 'Tidak Aktif' : 'Aktif'
    }));

    this.filteredData = [...this.data];
    this.totalItems = this.filteredData.length;
    // math.ceil = round up to the nearest whole number, bcs we cant have a fraction of a page.
    // totalItems = number of record or row in db.
    // itemPerPage = dapat dari dropdown row to show UI.
    // this.totalItems / this.itemsPerPage → gives you how many pages are needed (but could be a decimal).
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.updateCurrentPageData();
  }

  // 🔹 Function for update table data for current page. 
  updateCurrentPageData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const slicedData = this.filteredData.slice(startIndex, endIndex);

    this.currentPageData = slicedData.map((item, index) => ({
      ...item,
      No: startIndex + index + 1,
    }));

    this.cdr.detectChanges();
  }

  onSearch() {
    const term = this.searchText.trim().toLocaleLowerCase();

    // If there’s a search term, filter data by kodTemplat, jenisTemplat,
    // keteranganTemplat or status (all in lowercase).
    // If no search term, just show all the original data. 
    if (term) {
      this.filteredData = this.data.filter(
        (item) =>
          item.kodTemplat.toLowerCase().includes(term) ||
          item.jenisTemplat.toLowerCase().includes(term) ||
          item.keteranganTemplat.toLowerCase().includes(term) ||
          item.status.toLowerCase().includes(term)
      );
    } else {
      this.filteredData = [...this.data];
    }

    this.totalItems = this.filteredData.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.currentPage = 1;
    this.updateCurrentPageData()
  }

  // 🔹 Pagination controls
  goToPage(page: number) {
    if(page >= 1 && page <= this.totalPages){
      this.currentPage = page;
      this.updateCurrentPageData();
    }
  }

  goToPreviousPage() {
    if(this.currentPage > 1) {
      this.currentPage--;
      this.updateCurrentPageData();

    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages){
      this.currentPage++;
      this.updateCurrentPageData();
    }
  }

  onItemsPerPageChange(){
    this.itemsPerPage = Number(this.itemsPerPage);
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.currentPage = 1;
    this.updateCurrentPageData();
  }

  getVisiblePages(): number[] {
    const visiblePages: number[] = [];
    const startPage = Math.max(1, this.currentPage - 1);
    const endPage = Math.min(this.totalPages, this.currentPage + 1);

    for(let page = startPage; page <= endPage; page++){
      visiblePages.push(page);
    }
    return visiblePages;
  }

  onCariClick() {
  const trimmedCode = this.kodTemplat.trim();

  // If search box is empty → reset to initial data
  if (!trimmedCode) {
    this.filteredData = [];
    this.currentPageData = [];
    this.totalItems = 0;
    this.totalPages = 0;
    this.loadData();  // reload default data
    return;
  }

  // 🔹 Dummy filter (replace with API call when backend is ready)
  this.filteredData = this.data.filter((item) =>
    item.kodTemplat.toLowerCase().includes(trimmedCode.toLowerCase())
  );

  this.totalItems = this.filteredData.length;
  this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
  this.currentPage = 1;
  this.updateCurrentPageData();

  // 🔹 Example for real API integration
  /*
  this.templatService.getTemplatByKod(trimmedCode).subscribe({
    next: (response: any[]) => {
      this.data = response.map((item, index) => ({
        No: index + 1,
        kodTemplat: item.kodTemplat,
        jenisTemplat: item.jenisTemplat,
        keteranganTemplat: item.keteranganTemplat,
        status: item.status === '1' ? 'Aktif' : 'Tidak Aktif',
      }));

      this.filteredData = [...this.data];
      this.totalItems = this.filteredData.length;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.currentPage = 1;
      this.updateCurrentPageData();
    },
    error: (err) => {
      const errorMsg = err?.error?.message || 'Data Tidak Wujud.';
      // this.NotificationComponent.open(errorMsg, 'error');
    }
  });
  */
}

}
