import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule, GridModule , TableDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective } from '@coreui/angular';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, ModalModule } from '@coreui/angular';
import { ModalComponentComponent } from '../../modal-component/modal-component.component';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { Router } from '@angular/router';

interface TableItem {
  jenisKejadian: string;
  kategoriKejadian: string;
  subKategoriKejadian: string;
  tahapKejadian: string;
  namaKejadian: string;
}

@Component({
  selector: 'app-carian-laporan-kejadian',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    FormsModule,
    ButtonDirective,
    ModalModule,
    ModalComponentComponent,
    ButtonDirective,
    TableDirective,
    FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective,
    IconModule,
    ReactiveFormsModule
  ],
  templateUrl: './carian-laporan-kejadian.component.html',
  styleUrl: './carian-laporan-kejadian.component.scss'
})
export class CarianLaporanKejadianComponent {


  data: TableItem[] = [
    {
      jenisKejadian: 'Jenis Kejadian',
      kategoriKejadian: 'Kategori Kejadian',
      subKategoriKejadian: 'Sub Kategori Kejadian',
      tahapKejadian: 'Tahap Kejadian',
      namaKejadian: 'Nama Kejadian'
    },
    {
      jenisKejadian: 'Jenis Kejadian',
      kategoriKejadian: 'Kategori Kejadian',
      subKategoriKejadian: 'Sub Kategori Kejadian',
      tahapKejadian: 'Tahap Kejadian',
      namaKejadian: 'Nama Kejadian'
    },
    {
      jenisKejadian: 'Jenis Kejadian',
      kategoriKejadian: 'Kategori Kejadian',
      subKategoriKejadian: 'Sub Kategori Kejadian',
      tahapKejadian: 'Tahap Kejadian',
      namaKejadian: 'Nama Kejadian'
    },
    {
      jenisKejadian: 'Jenis Kejadian',
      kategoriKejadian: 'Kategori Kejadian',
      subKategoriKejadian: 'Sub Kategori Kejadian',
      tahapKejadian: 'Tahap Kejadian',
      namaKejadian: 'Nama Kejadian'
    },
  ];
  
  showSearchPopUp: boolean = false;
  rowsPerPage = 5;
  currentPage = 1;
  pageInput = 1;
  sortColumn: keyof TableItem | '' = '';
  sortAsc = true;
  filteredResults: TableItem[] = this.data;
  hasSearched: boolean = false;
  searchForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private iconSet: IconSetService) {
    this.searchForm = this.fb.group({
      jenisKejadian: [''],
      kategoriKejadian: [''],
      subKategoriKejadian: [''],
      tahapKejadian: [''],
      namaKejadian: ['']
    });
  }

  get filteredData(): TableItem[] {
    return this.filteredResults;
  }

  get totalPages(): number {
    return Math.ceil(this.filteredData.length / this.rowsPerPage);
  }

  paginatedData(): TableItem[] {
    let sorted = [...this.filteredData];
  
    if (this.sortColumn && typeof this.sortColumn === 'string') {
      sorted.sort((a, b) => {
        const valA = a[this.sortColumn as keyof TableItem];
        const valB = b[this.sortColumn as keyof TableItem];
  
        return this.sortAsc
          ? String(valA).localeCompare(String(valB))
          : String(valB).localeCompare(String(valA));
      });
    }
  
    const start = (this.currentPage - 1) * this.rowsPerPage;
    return sorted.slice(start, start + this.rowsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageInput = this.currentPage;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageInput = this.currentPage;
    }
  }

  goToPage(page?: number) {
    if (page) {
      this.currentPage = page;
      this.pageInput = page;
    } else {
      const pageNum = Math.max(1, Math.min(this.pageInput, this.totalPages));
      this.currentPage = pageNum;
      this.pageInput = pageNum;
    }
  }

  goToFirstPage() {
    this.currentPage = 1;
    this.pageInput = 1;
  }

  goToLastPage() {
    this.currentPage = this.totalPages;
    this.pageInput = this.totalPages;
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  sort(column: keyof TableItem) {
    if (this.sortColumn === column) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortColumn = column;
      this.sortAsc = true;
    }
  }

  // Search method
  search() {
    let filtered = [...this.data];
    const searchValues = this.searchForm.value;

    // Filter by jenisKejadian
    if (searchValues.jenisKejadian && searchValues.jenisKejadian.trim()) {
      filtered = filtered.filter(item =>
        item.jenisKejadian.toLowerCase().includes(searchValues.jenisKejadian.toLowerCase())
      );
    }

    // Filter by kategoriKejadian
    if (searchValues.kategoriKejadian && searchValues.kategoriKejadian.trim()) {
      filtered = filtered.filter(item =>
        item.kategoriKejadian.toLowerCase().includes(searchValues.kategoriKejadian.toLowerCase())
      );
    }

    // Filter by subKategoriKejadian
    if (searchValues.subKategoriKejadian && searchValues.subKategoriKejadian.trim()) {
      filtered = filtered.filter(item =>
        item.subKategoriKejadian.toLowerCase().includes(searchValues.subKategoriKejadian.toLowerCase())
      );
    }

    // Filter by tahapKejadian
    if (searchValues.tahapKejadian && searchValues.tahapKejadian.trim()) {
      filtered = filtered.filter(item =>
        item.tahapKejadian.toLowerCase().includes(searchValues.tahapKejadian.toLowerCase())
      );
    }

    // Filter by namaKejadian
    if (searchValues.namaKejadian && searchValues.namaKejadian.trim()) {
      filtered = filtered.filter(item =>
        item.namaKejadian.toLowerCase().includes(searchValues.namaKejadian.toLowerCase())
      );
    }

    this.filteredResults = filtered;
    
    // Update filtered results
    if(filtered.length > 0){
      this.hasSearched = true;
    }
    else{
      this.hasSearched = false;
      this.showSearchPopUp = true;
    }
    
    // Reset to first page when searching
    this.currentPage = 1;
    this.pageInput = 1;
  }

  closeSearchPopUp() {
    this.showSearchPopUp = false;
  } 

  navigateToPenilaianLaporanKejadian() {
    this.router.navigate(['/adm/pengurusan-e-occurence/buat-penilaian-kemas-kini-tahap-kejadian/penilaian-laporan-kejadian']);
  }
}
