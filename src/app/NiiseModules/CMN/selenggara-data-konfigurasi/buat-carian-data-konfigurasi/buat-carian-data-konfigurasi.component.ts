import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormModule,
  ModalModule,
  ButtonModule,
  CardModule,
  PaginationModule,
  GridModule,
} from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataKonfigurasiService } from '../../selenggara-data-konfigurasi/data-konfigurasi.service';
import { Q006Conf } from '../../selenggara-data-konfigurasi/data-konfigurasi.service';
import { NotificationComponent } from '../notification/notification.component'



interface KonfigurasiRecord {
  No: number;
  kodKonfigurasi: string;
  dataKonfigurasi: string;
  keterangan: string;
  nilai: string;
  status: string;
}

@Component({
  selector: 'app-buat-carian-data-konfigurasi',
  templateUrl: './buat-carian-data-konfigurasi.component.html',
  styleUrl: './buat-carian-data-konfigurasi.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormModule,
    ModalModule,
    ButtonModule,
    CardModule,
    PaginationModule,
    GridModule,
    NotificationComponent,
    FormsModule,
  ],
})
export class BuatCarianDataKonfigurasiComponent implements OnInit {

  kodKonfigurasi: string = '';


  focused = false;
  focused2 = false;
  // hovering = false;
  // hovering2 = false;
  hoveringIndex: number | null = null;
  hoveringIndex2: number | null = null;


  tableName = '';
  data: KonfigurasiRecord[] = [];
  filteredData: KonfigurasiRecord[] = [];
  currentPageData: KonfigurasiRecord[] = [];
  totalItems: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  showModal: boolean = false;
  searchText: string = '';
  goToPageNumber: number = 1;

  @ViewChild('notification') NotificationComponent!: NotificationComponent;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private dataKonfigurasiService: DataKonfigurasiService
  ) { }

  ngOnInit() {
    this.loadRefData();
  }

  onCariClick() {

    const trimmedCode = this.kodKonfigurasi.trim();

    if (!trimmedCode) {
      this.filteredData = [];
      this.currentPageData = [];
      this.totalItems = 0;
      this.totalPages = 0;
      this.loadRefData();  //Reload the onload page data.
      return;
    }

    this.dataKonfigurasiService.getDataKonfigurasiByCarian(trimmedCode).subscribe({
      next: (response: any[]) => {
        this.data = response.map((item, index) => ({
          No: index + 1,
          kodKonfigurasi: item.code,
          dataKonfigurasi: item.data,
          keterangan: item.desc,
          nilai: item.val,
          status: item.status === '0' ? 'Aktif' : 'Tidak Aktif',
        }));

        this.filteredData = [...this.data];
        this.totalItems = this.filteredData.length;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.currentPage = 1;
        this.updateCurrentPageData();
      },
      error: (err) => {
        // console.error('Error during kod konfigurasi search:', err);
        const errorMsg = err?.error?.message || 'Data Tidak Wujud.';
        this.NotificationComponent.open(errorMsg, 'error');
        // this.showModal = true;
      }
    });
  }



  loadRefData() {
    this.dataKonfigurasiService.getDataKonfigurasi().subscribe({
      next: (response: any[]) => {
        this.data = response.map((item, index) => ({
          No: index + 1,
          kodKonfigurasi: item.code,
          dataKonfigurasi: item.data,
          keterangan: item.desc,
          nilai: item.val,
          status: item.status === '1' ? 'Aktif' : 'Tidak Aktif',
        }));
        this.filteredData = [...this.data];
        this.totalItems = this.filteredData.length;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.updateCurrentPageData();
      },
      error: (err) => {
        console.error('Error fetching data konfigurasi:', err);
      }
    });
  }


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

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateCurrentPageData();
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateCurrentPageData();
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateCurrentPageData();
    }
  }

  // onItemsPerPageChange() {
  //   this.currentPage = 1;
  //   this.updateCurrentPageData();
  // }
  onItemsPerPageChange() {
    this.itemsPerPage = Number(this.itemsPerPage);
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.currentPage = 1;
    this.updateCurrentPageData();
  }


  onSearch() {
    const term = this.searchText.trim().toLowerCase();

    if (term) {
      this.filteredData = this.data.filter(
        (item) =>
          item.kodKonfigurasi.toLowerCase().includes(term) ||
          item.dataKonfigurasi.toLowerCase().includes(term) ||
          item.keterangan.toLowerCase().includes(term) ||
          item.nilai.toLowerCase().includes(term) ||
          item.status.toLowerCase().includes(term)
      );
    } else {
      this.filteredData = [...this.data];
    }

    this.totalItems = this.filteredData.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.currentPage = 1;
    this.updateCurrentPageData();
  }

  closeModal() {
    this.showModal = false;
  }

  getVisiblePages(): number[] {
    const visiblePages: number[] = [];
    const startPage = Math.max(1, this.currentPage - 1);
    const endPage = Math.min(this.totalPages, this.currentPage + 1);

    for (let page = startPage; page <= endPage; page++) {
      visiblePages.push(page);
    }

    return visiblePages;
  }

  //   navigateToDetail(row: KonfigurasiRecord) {
  //   // Try to dynamically find a key ending with 'code', case-insensitive
  //   const codeField = Object.keys(row).find(key => key.toLowerCase().endsWith('code'));

  //   if (codeField) {
  //     const codeValue = (row as any)[codeField];
  //     this.router.navigate([
  //       '../cmn/selenggara-data-konfigurasi/kemaskini-data-konfigurasi',
  //       this.tableName,
  //       codeValue
  //     ]);
  //   } else {
  //     console.error('No code field found in row:', row);
  //     const firstField = Object.keys(row)[0];
  //     this.router.navigate([
  //       '../cmn/selenggara-data-konfigurasi/kemaskini-data-konfigurasi',
  //       this.tableName,
  //       row[firstField as keyof KonfigurasiRecord]
  //     ]);
  //   }
  // }

  navigateToDetail(KonfigurasiRecord: KonfigurasiRecord) {
    this.router.navigate(
      ['/cmn/selenggara-data-konfigurasi/kemas-kini-data-konfigurasi'],
      {
        state: {
          detailData: {
            kodKonfigurasi: KonfigurasiRecord.kodKonfigurasi,
            docCode: KonfigurasiRecord.dataKonfigurasi,
            docBmDesc: KonfigurasiRecord.keterangan,
            docValue: KonfigurasiRecord.nilai,
          },
        },
      }
    );
  }

  tambahBtn(): void {
    this.router.navigate(
      ['/cmn/selenggara-data-konfigurasi/tambah-data-konfigurasi'],
      {
        state: {
          detailData: {
          },
        },
      }
    );
  }

  deactivateRecord(record: any): void {
    // console.log('Deactivate clicked:', record);
    // alert('Deactivate clicked:\n' + JSON.stringify(record, null, 2));
    let status: string = record.status === 'Aktif' ? "1" : "0";


    const payload = {
      cd: "APP011",
      conf: "Q006_CONF",
      ref: record.kodKonfigurasi,
      appl: "N", // K for deactivate
      val: {
        cd: record.kodKonfigurasi,
        data: record.dataKonfigurasi,
        desc: record.keterangan,
        val: record.nilai,   // main value
        sts: status   // status
      }
    };

    this.dataKonfigurasiService.postActivationPermohonanDataKonfigurasi(payload).subscribe({
      next: () => {
        // this.showSuccessModal('Maklumat telah berjaya disimpan');
        // alert('Maklumat telah berjaya disimpan');
        this.NotificationComponent.open('Maklumat telah berjaya disimpan', 'success');
      },
      error: (err) => {
        console.error('API Error:', err);
        // this.showErrorModal('Gagal menyimpan data konfigurasi');
        // alert('Gagal menyimpan data konfigurasi');
        this.NotificationComponent.open('Gagal menyimpan data konfigurasi', 'error');
      }
    });

  }



  activateRecord(record: any): void {
    // console.log('Activate clicked:', record);
    // alert('Activate clicked:\n' + JSON.stringify(record, null, 2));

    let status: string = record.status === 'Aktif' ? "1" : "0";

    const payload = {
      cd: "APP011",
      conf: "Q006_CONF",
      ref: record.kodKonfigurasi,
      appl: "A", // K for deactivate
      val: {
        cd: record.kodKonfigurasi,
        data: record.dataKonfigurasi,
        desc: record.keterangan,
        val: record.nilai,   // main value
        sts: status   // status
      }
    };

    this.dataKonfigurasiService.postActivationPermohonanDataKonfigurasi(payload).subscribe({
      next: () => {
        // this.showSuccessModal('Maklumat telah berjaya disimpan');
        // alert('Maklumat telah berjaya disimpan');
        this.NotificationComponent.open('Maklumat telah berjaya disimpan', 'success');
      },
      error: (err) => {
        console.error('API Error:', err);
        // this.showErrorModal('Gagal menyimpan data konfigurasi');
        // alert('Gagal menyimpan data konfigurasi');
        this.NotificationComponent.open('Gagal menyimpan data konfigurasi', 'error');
      }
    });

  }

}



