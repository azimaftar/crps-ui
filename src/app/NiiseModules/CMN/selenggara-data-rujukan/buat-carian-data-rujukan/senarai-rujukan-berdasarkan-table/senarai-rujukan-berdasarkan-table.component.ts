import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
import { ApiService } from '../senarai-rujukan-berdasarkan-table/api.service';
import { Router, ActivatedRoute } from '@angular/router';

interface ApiResponse {
  data: {
    content: { [key: string]: string | null }[];
    pageable: {
      pageNumber: number;
      pageSize: number;
      sort: { empty: boolean; sorted: boolean; unsorted: boolean };
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    size: number;
    number: number;
    sort: { empty: boolean; sorted: boolean; unsorted: boolean };
    numberOfElements: number;
    empty: boolean;
  };
  message: string;
  status: string;
}

interface DynamicData {
  [key: string]: string | null | number;
}

@Component({
  selector: 'app-senarai-rujukan-berdasarkan-table',
  templateUrl: './senarai-rujukan-berdasarkan-table.component.html',
  styleUrls: ['./senarai-rujukan-berdasarkan-table.component.scss'],
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
export class SenaraiRujukanBerdasarkanTableComponent implements OnInit {
  focused = false;
  focused2 = false;
  hovering = false;
  hovering2 = false;

  tableName = 'R001_DCTYPE'; // Default table
  data: { [key: string]: string | null }[] = [];
  filteredData: { [key: string]: string | null }[] = [];
  currentPageData: DynamicData[] = [];
  totalItems: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  showModal: boolean = false;
  searchText: string = '';
  headers: string[] = [];
  goToPageNumber: number = 1;

  private excludedFields = ['createId', 'createDate', 'updateId', 'updateDate'];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.tableName = params.get('tableName') || 'R001_DCTYPE';
      this.loadRefData();
    });
  }

  loadRefData() {
    const apiPage = this.currentPage - 1;
    console.log(
      'Fetching fresh data for table:',
      this.tableName,
      'page:',
      apiPage,
      'size:',
      this.itemsPerPage
    );
    this.apiService
      .getDataRujukanByTable(
        this.tableName,
        this.currentPage,
        this.itemsPerPage
      )
      .subscribe(
        (response: ApiResponse) => {
          const data = response.data;

          console.log(
            'API Response - Page:',
            data.pageable.pageNumber,
            'Content Length:',
            data.content.length,
            'Total Elements:',
            data.totalElements,
            'Total Pages:',
            data.totalPages,
            'Data:',
            data.content
          );

          this.data = [...data.content];
          this.filteredData = [...this.data];
          this.totalItems = data.totalElements || 0;
          this.totalPages = data.totalPages || 0;

          this.currentPage = data.pageable.pageNumber + 1;
          this.headers = this.data.length > 0 ? Object.keys(this.data[0]) : [];
          this.updateCurrentPageData();
          this.cdr.detectChanges();
        },
        (error) => {
          console.error('Load Error:', error);
          this.showModal = true;
        }
      );
  }

  updateCurrentPageData() {
    // const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    // const endIndex = startIndex + this.itemsPerPage;
    // console.log(
    //   'Slicing from:',
    //   startIndex,
    //   'to:',
    //   endIndex,
    //   'filteredData length:',
    //   this.filteredData.length,
    //   'currentPage:',
    //   this.currentPage
    // );

    // const slicedData = this.filteredData.slice(startIndex, endIndex);
    // this.currentPageData = slicedData.map((item, index) => ({
    //   No: startIndex + index + 1,
    //   ...item
    // }));
    this.currentPageData = this.filteredData.map((item) => ({ ...item }));
    console.log(
      'Updated currentPageData length:',
      this.currentPageData.length,
      'Content:',
      this.currentPageData
    );
    this.cdr.detectChanges();
  }

  goToPage(page: number) {
    console.log('console. ' + this.currentPage);
    if (page >= 1 && page <= this.totalPages) {
      console.log('Navigating to page:', page, 'Total Pages:', this.totalPages);
      this.currentPage = page;
      this.loadRefData();
    } else {
      console.log('Page out of bounds:', page, 'Total Pages:', this.totalPages);
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      console.log('Going to previous page:', this.currentPage - 1);
      this.currentPage--;
      this.loadRefData();
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      console.log(
        'Going to next page:',
        this.currentPage + 1,
        'Total Pages:',
        this.totalPages
      );
      this.currentPage++;
      this.loadRefData();
    } else {
      console.log('Next page disabled, at last page:', this.currentPage);
    }
  }

  onItemsPerPageChange() {
    this.currentPage = 1;
    this.loadRefData();
  }

  // onSearch() {
  //   if (this.searchText.trim()) {
  //     console.log('Searching with text:', this.searchText);
  //     this.apiService.getDataRujukanByCarian(this.searchText).subscribe(
  //       (response: { [key: string]: string | null }[]) => {
  //         console.log('Search API Response:', response);
  //         this.data = [...response];
  //         this.filteredData = [...this.data];
  //         this.currentPageData = this.data.map((item, index) => ({
  //           No: index + 1,
  //           ...item
  //         }));
  //         this.totalItems = response.length;
  //         this.totalPages = 1;
  //         this.currentPage = 1;
  //         this.cdr.detectChanges(); // Ensure change detection after search
  //       },
  //       (error) => {
  //         console.error('Search Error:', error.error || error);
  //         this.showModal = true;
  //       }
  //     );
  //   } else {
  //     this.loadRefData();
  //   }
  // }

  onSearch() {
    const table = this.tableName.trim();
    const refCode = this.searchText.trim();

    if (table && refCode) {
      console.log('Searching with:', { table, refCode });

      this.apiService.getValRujukanByKod(table, refCode).subscribe(
        (response: any) => {
          console.log('Search API Response:', response);

          const recordData = response.data;

          if (recordData) {
            this.data = [recordData];
            this.filteredData = [...this.data];
            this.currentPageData = this.data.map((item, index) => ({
              No: index + 1,
              ...item,
            }));
            this.totalItems = this.data.length;
            this.totalPages = 1;
            this.currentPage = 1;
            this.headers =
              this.data.length > 0
                ? Object.keys(this.data[0]).filter(
                    (key) => !this.excludedFields.includes(key)
                  )
                : [];
            this.cdr.detectChanges();
          } else {
            console.warn('No data found in response');
            this.data = [];
            this.filteredData = [];
            this.currentPageData = [];
            this.totalItems = 0;
            this.totalPages = 0;
            this.headers = [];
            this.showModal = true;
            this.cdr.detectChanges();
          }
        },
        (error) => {
          console.error('Search Error:', error.error || error);
          this.data = [];
          this.filteredData = [];
          this.currentPageData = [];
          this.totalItems = 0;
          this.totalPages = 0;
          this.headers = [];
          this.showModal = true;
          this.cdr.detectChanges();
        }
      );
    } else {
      console.warn('Both table name and ref code must be filled.');
      this.showModal = true;
    }
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

  navigateToDetail(row: any) {
    const codeField = Object.keys(row).find((key) =>
      key.toLowerCase().endsWith('code')
    );

    if (codeField) {
      const codeValue = row[codeField];
      this.router.navigate([
        '../cmn/selenggara-data-rujukan/kemaskini-data-rujukan',
        this.tableName,
        codeValue,
      ]);
    } else {
      console.error('No code field found in row:', row);
      const firstField = Object.keys(row)[0];
      this.router.navigate([
        '../cmn/selenggara-data-rujukan/kemaskini-data-rujukan',
        this.tableName,
        row[firstField],
      ]);
    }
  }

  navigateToTambah() {
    this.router.navigate(['/cmn/selenggara-data-rujukan/tambah-data-rujukan'], {
      queryParams: {
        tableRujukan: this.tableName,
        headers: JSON.stringify(this.headers)
      }
    });
  }

  getStatusValue(item: any): string {
    const recStsField = Object.keys(item).find(
      (key) => key.toLowerCase() === 'recsts'
    );
    return recStsField ? String(item[recStsField]) : '1';
  }

  getStatusText(recStsValue: any): string {
    const status = String(recStsValue);
    return status === '0' ? 'Aktif' : 'Tidak Aktif';
  }

  getStatusClass(recStsValue: any): string {
    const status = String(recStsValue);
    return status === '0' ? 'badanActive' : 'badanTidakActive';
  }

  activateRecord(record: any): void {
    console.log('Activate record:', record);
    const recStsField = Object.keys(record).find(
      (key) => key.toLowerCase() === 'recsts'
    );

    if (recStsField) {
      record[recStsField] = '1';
      this.cdr.detectChanges();

      // Call API to update status
      // this.apiService.updateRecordStatus(this.tableName, record, '1').subscribe(...);
    }
  }

  deactivateRecord(record: any): void {
    console.log('Deactivate record:', record);
    const recStsField = Object.keys(record).find(
      (key) => key.toLowerCase() === 'recsts'
    );

    if (recStsField) {
      record[recStsField] = '0';
      this.cdr.detectChanges();

      // Call API to update status
      // this.apiService.updateRecordStatus(this.tableName, record, '0').subscribe(...);
    }
  }
}
