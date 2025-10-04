import { Component, OnInit } from '@angular/core';
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
import { DataKonfigurasiService } from '../../../selenggara-data-konfigurasi/data-konfigurasi.service';

interface DisplayConfigRecord {
  Uid: number;
  No: number;
  KodPermohonan: string;
  KodKonfigurasi: string;
  DataKonfigurasi: string;
  Keterangan: string;
  Nilai: string;
  Permohonan: string;
}

@Component({
  selector: 'app-senarai-semakan-data-konfigurasi',
  templateUrl: './senarai-semakan-data-konfigurasi.component.html',
  styleUrl: './senarai-semakan-data-konfigurasi.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormModule,
    ModalModule,
    ButtonModule,
    CardModule,
    PaginationModule,
    GridModule,
    FormsModule,
  ],
})
export class SenaraiSemakanDataKonfigurasiComponent implements OnInit {
  currentPageData: DisplayConfigRecord[] = [];
  filteredData: DisplayConfigRecord[] = [];
  totalItems: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  pageSizeOptions = [5, 10, 15, 20];
  showModal: boolean = false;
  searchTextTable: string = '';
  searchTextKod: string = '';
  isLoading: boolean = true;

  constructor(
    private router: Router,
    private dataKonfigurasiService: DataKonfigurasiService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.isLoading = true;

    this.dataKonfigurasiService.getSenaraiSemakDataKonfigurasi().subscribe({
      next: (response: any) => {
        const apiData = response.data;

        this.filteredData = apiData.map((item: any, index: number) => ({
          Uid: item.uid,
          No: index + 1,
          KodPermohonan: item.appCode,
          KodKonfigurasi: item.codeTbl,
          DataKonfigurasi: item.data,
          Keterangan: item.desc,
          Nilai: item.val,
          Permohonan: this.mapApplType(item.applType),
        }));

        this.totalItems = this.filteredData.length;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.updateCurrentPageData();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading data:', error);
        this.showModal = true;
        this.isLoading = false;
      },
    });
  }

  private mapApplType(applType: string): string {
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

  private updateCurrentPageData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.currentPageData = this.filteredData.slice(startIndex, endIndex);
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
    this.currentPage = 1;

    if (!this.searchTextKod?.trim()) {
      this.loadData();
    } else {
      this.filteredData = this.filteredData.filter((item) =>
        item.KodKonfigurasi.toLowerCase().includes(
          this.searchTextKod.toLowerCase()
        )
      );
      this.totalItems = this.filteredData.length;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.updateCurrentPageData();
    }
  }

  closeModal() {
    this.showModal = false;
  }

  navigateToDetail(record: DisplayConfigRecord) {
    this.dataKonfigurasiService
      .getSemakanDataKonfigurasi(record.Uid)
      .subscribe({
        next: (detailData) => {
          this.router.navigate(
            [
              '/cmn/selenggara-data-konfigurasi/semak-data-konfigurasi/semakan-data-konfigurasi',
              record.Uid,
            ],
            {
              state: {
                recordData: {
                  ...record,
                  Result: detailData.result,
                },
              },
            }
          );
        },
        error: (error) => {
          console.error('Error fetching detail:', error);
          this.showModal = true;
        },
      });
  }

  getVisiblePages(): number[] {
    const visiblePages: number[] = [];
    const maxVisiblePages = 5;

    if (this.totalPages > 0) {
      visiblePages.push(1);
    }

    let startPage = Math.max(2, this.currentPage - 1);
    let endPage = Math.min(this.totalPages - 1, this.currentPage + 1);

    if (this.currentPage <= 3) {
      endPage = Math.min(4, this.totalPages - 1);
    } else if (this.currentPage >= this.totalPages - 2) {
      startPage = Math.max(this.totalPages - 3, 2);
    }

    if (startPage > 2) {
      visiblePages.push(-1);
    }

    for (let i = startPage; i <= endPage; i++) {
      if (i > 1 && i < this.totalPages) {
        visiblePages.push(i);
      }
    }

    if (endPage < this.totalPages - 1) {
      visiblePages.push(-1);
    }

    if (this.totalPages > 1) {
      visiblePages.push(this.totalPages);
    }

    return visiblePages;
  }
}
