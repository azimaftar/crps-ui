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
import { ApiService, ApiResponse } from '../../semak-data-rujukan/api.service';
import { HttpClient } from '@angular/common/http';
import { map, catchError, of } from 'rxjs';

interface RujukanRecord {
  uid: string;
  No: number;
  KodPermohonan: string;
  TableRujukan: string;
  KodRujukan: string;
  Keterangan: string;
  Permohonan: string;
}

@Component({
  selector: 'app-senarai-semakan-data-rujukan',
  templateUrl: './senarai-semakan-data-rujukan.component.html',
  styleUrls: ['./senarai-semakan-data-rujukan.component.scss'],
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
  providers: [ApiService, HttpClient],
})
export class SenaraiSemakanDataRujukanComponent implements OnInit {
  currentPageData: RujukanRecord[] = [];
  filteredData: RujukanRecord[] = [];
  totalItems: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  pageSizeOptions = [5, 10, 15, 20];
  showModal: boolean = false;
  searchTextTable: string = '';
  searchTextKod: string = '';
  isLoading: boolean = true;

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.isLoading = true;
    this.apiService.getSenaraiSemakDataRujukan().subscribe({
      next: (apiData: ApiResponse[]) => {
        this.filteredData = apiData.map((item, index) => ({
          uid: item.uid,
          No: index + 1,
          KodPermohonan: item.cd,
          TableRujukan: item.refTbl,
          KodRujukan: item.ref,
          Keterangan:
            item.bmDesc || item.val?.bmDesc || this.getKeterangan(item),
          Permohonan: this.mapApplType(item.appl),
        }));

        this.totalItems = this.filteredData.length;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.updateCurrentPageData();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        this.isLoading = false;
        this.showModal = true;
      },
    });
  }

  private getKeterangan(item: ApiResponse): string {
    if (item.note) {
      return item.note;
    }
    if (item.val && typeof item.val === 'object') {
      return 'Permohonan Data Rujukan';
    }
    return 'Tiada Keterangan';
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

  onItemsPerPageChange() {
    this.currentPage = 1;
    this.updateCurrentPageData();
  }

  onSearch() {
    this.currentPage = 1;

    if (!this.searchTextTable?.trim() && !this.searchTextKod?.trim()) {
      this.loadData();
      return;
    }

    this.filteredData = this.filteredData.filter((item) => {
      const matchesTable = this.searchTextTable?.trim()
        ? item.TableRujukan.toLowerCase().includes(
            this.searchTextTable.toLowerCase()
          )
        : true;

      const matchesKod = this.searchTextKod?.trim()
        ? item.KodRujukan.toLowerCase().includes(
            this.searchTextKod.toLowerCase()
          )
        : true;

      return matchesTable && matchesKod;
    });

    this.totalItems = this.filteredData.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.updateCurrentPageData();
  }

  closeModal() {
    this.showModal = false;
  }

  navigateToDetail(record: RujukanRecord) {
    this.router.navigate([
      '/cmn/selenggara-data-rujukan/semak-data-rujukan/semakan-data-rujukan',
      record.uid,
    ]);
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
}
