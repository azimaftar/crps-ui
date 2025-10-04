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
import { ApiService } from './api.service';
import { Router } from '@angular/router';

//old (ApiResponse)
interface OldApiResponse {
  content: string[];
  pageable: {
    pageNumber: number;
    pageSize: number;
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
  numberOfElements: number;
  empty: boolean;
}

interface NewApiResponse {
  uid: string;
  tblName: string;
  desc: string;
}

interface SearchApiResponse {
  tblName: string;
  desc: string | null;
}

interface RujukanRecord {
  No: number;
  Rujukan: string;
  Keterangan: string;
}

@Component({
  selector: 'app-carian-table-rujukan',
  templateUrl: './carian-table-rujukan.component.html',
  styleUrls: ['./carian-table-rujukan.component.scss'],
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
export class CarianTableRujukanComponent implements OnInit {
  tableName = '';
  // data: string[] = [];
  data: NewApiResponse[] = [];
  // filteredData: string[] = [];
  filteredData: NewApiResponse[] = [];
  // currentPageData: { No: number; Rujukan: string }[] = [];
  currentPageData: RujukanRecord[] = [];
  totalItems: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  showModal: boolean = false;
  searchText: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadRefData();
  }

  //old
  // loadRefData() {
  //   console.log(
  //     'Fetching fresh data for page:',
  //     this.currentPage,
  //     'size:',
  //     this.itemsPerPage,
  //     'API Call with page:',
  //     this.currentPage
  //   );
  //   this.apiService
  //     .getDataRujukan(this.currentPage, this.itemsPerPage)
  //     .subscribe(
  //       (response: ApiResponse) => {
  //         console.log(
  //           'API Response - Page:',
  //           response.pageable.pageNumber,
  //           'Content Length:',
  //           response.content.length,
  //           'Total Elements:',
  //           response.totalElements,
  //           'Total Pages:',
  //           response.totalPages
  //         );
  //         this.data = [...response.content];
  //         this.filteredData = [...this.data];
  //         this.totalItems = response.totalElements || 0;
  //         this.totalPages = response.totalPages || 0;
  //         this.updateCurrentPageDataFromResponse(response);
  //         console.log('After Update - currentPageData:', this.currentPageData);
  //       },
  //       (error) => {
  //         console.error('Load Error:', error);
  //         this.showModal = true;
  //       }
  //     );
  // }

  //new
  loadRefData() {
    console.log('Fetching fresh data using new API');

    const apiPage = this.currentPage - 1;
    
    this.apiService.getDataRujukanNew(apiPage, this.itemsPerPage).subscribe(
      (response) => {
        console.log('New API Response:', response);
        
        this.data = [...response.content];
        this.filteredData = [...this.data];
        this.totalItems = response.totalElements || 0;
        this.totalPages = response.totalPages || 0;
        
        this.updateCurrentPageData();
        console.log('After Update - currentPageData:', this.currentPageData);
      },
      (error) => {
        console.error('Load Error with new API:', error);
        
        console.log('Falling back to non-paginated API');
        this.apiService.getDataRujukanNewAll().subscribe(
          (response: NewApiResponse[]) => {
            console.log('Non-paginated API Response - Data Length:', response.length);
            this.data = [...response];
            this.filteredData = [...this.data];
            this.totalItems = response.length;
            this.totalPages = Math.ceil(response.length / this.itemsPerPage);
            this.updateCurrentPageData();
          },
          (fallbackError) => {
            console.error('Fallback API also failed:', fallbackError);
            this.showModal = true;
          }
        );
      }
    );
  }

  //old
  // updateCurrentPageData() {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   console.log(
  //     'Slicing from:',
  //     startIndex,
  //     'to:',
  //     endIndex,
  //     'filteredData length:',
  //     this.filteredData.length
  //   );
  //   const slicedData = this.filteredData.slice(startIndex, endIndex);
  //   this.currentPageData =
  //     slicedData.length > 0
  //       ? slicedData.map((rujukan, index) => ({
  //           No: startIndex + index + 1,
  //           Rujukan: rujukan,
  //         }))
  //       : [];
  //   console.log('Updated currentPageData:', this.currentPageData);
  //   this.cdr.detectChanges();
  // }

  //new
  updateCurrentPageData() {
    const dataToDisplay = this.filteredData.length > 0 ? this.filteredData : this.data;
    
    if (dataToDisplay.length <= this.itemsPerPage && !this.searchText) {
      this.currentPageData = dataToDisplay.map((item, index) => ({
        No: (this.currentPage - 1) * this.itemsPerPage + index + 1,
        Rujukan: item.tblName,
        Keterangan: item.desc || 'No description'
      }));
    } else {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      const slicedData = dataToDisplay.slice(startIndex, endIndex);
      
      this.currentPageData = slicedData.map((item, index) => ({
        No: startIndex + index + 1,
        Rujukan: item.tblName,
        Keterangan: item.desc || 'No description'
      }));
    }
    
    console.log('Updated currentPageData:', this.currentPageData);
    this.cdr.detectChanges();
  }

  //old
  // updateCurrentPageDataFromResponse(response: ApiResponse) {
  //   this.currentPageData = response.content.map((rujukan, index) => ({
  //     No: (this.currentPage - 1) * this.itemsPerPage + index + 1,
  //     Rujukan: rujukan,
  //   }));

  //   this.cdr.detectChanges();
  // }

  goToPage(page: number) {
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

  //old
  // onSearch() {
  //   if (this.searchText.trim()) {
  //     console.log('Searching with text:', this.searchText);
  //     this.apiService.getDataRujukanByCarian(this.searchText).subscribe(
  //       (response: string[]) => {
  //         console.log('Search API Response:', response);

  //         if (response && response.length > 0) {
  //           this.data = [...response];
  //           this.filteredData = [...this.data];
  //           this.totalItems = response.length;
  //           this.totalPages = Math.ceil(response.length / this.itemsPerPage);
  //           this.currentPage = 1;
  //           this.updateCurrentPageDataLocal();
  //         } else {
  //           this.showModal = true;
  //           this.data = [];
  //           this.filteredData = [];
  //           this.totalItems = 0;
  //           this.totalPages = 0;
  //           this.currentPageData = [];
  //         }
  //         this.cdr.detectChanges();
  //       },
  //       (error) => {
  //         console.error('Search Error:', error.error || error);
  //         this.showModal = true;
  //         this.data = [];
  //         this.filteredData = [];
  //         this.totalItems = 0;
  //         this.totalPages = 0;
  //         this.currentPageData = [];
  //         this.cdr.detectChanges();
  //       }
  //     );
  //   } else {
  //     this.loadRefData();
  //   }
  // }

  //new
  onSearch() {
    if (this.searchText.trim()) {
      console.log('Searching with text:', this.searchText);
      
      this.apiService.getDataRujukanByCarianNew(this.searchText).subscribe({
        next: (response: SearchApiResponse[]) => {
          console.log('Search API Response:', response);
          console.log('Response length:', response.length);
          
          if (response && response.length > 0) {
            const searchResults: NewApiResponse[] = response.map(item => ({
              uid: '',
              tblName: item.tblName,
              desc: item.desc || 'No description'
            }));
            
            console.log('Transformed search results:', searchResults);
            
            this.filteredData = searchResults;
            this.totalItems = searchResults.length;
            this.totalPages = Math.ceil(searchResults.length / this.itemsPerPage);
            this.currentPage = 1;
            this.updateCurrentPageData();
            
            console.log('Updated pagination - totalItems:', this.totalItems, 'totalPages:', this.totalPages);
          } else {
            console.log('No search results found');
            this.showModal = true;
            this.filteredData = [];
            this.totalItems = 0;
            this.totalPages = 0;
            this.currentPageData = [];
          }
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Search API Error:', error);
          this.showModal = true;
          this.filteredData = [];
          this.totalItems = 0;
          this.totalPages = 0;
          this.currentPageData = [];
          this.cdr.detectChanges();
        }
      });
    } else {
      console.log('Search cleared, resetting to original data');
      this.filteredData = [...this.data];
      this.totalItems = this.data.length;
      this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
      this.currentPage = 1;
      this.updateCurrentPageData();
    }
  }

  //old
  // updateCurrentPageDataLocal() {
  //   if (this.filteredData.length === 0) {
  //     this.currentPageData = [];
  //     return;
  //   }

  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   const slicedData = this.filteredData.slice(startIndex, endIndex);

  //   this.currentPageData = slicedData.map((rujukan, index) => ({
  //     No: startIndex + index + 1,
  //     Rujukan: rujukan,
  //   }));
  // }

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

  navigateToDetail(tableName: string) {
    this.router.navigate([
      '/cmn/selenggara-data-rujukan/senarai-rujukan-berdasarkan-table',
      tableName,
    ]);
  }
}
