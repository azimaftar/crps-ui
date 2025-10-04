import { Component, OnInit } from '@angular/core';
import { CardModule, GridModule, NavModule, ModalModule, ButtonDirective, TableDirective, FormCheckLabelDirective, FormCheckInputDirective, FormCheckComponent} from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilSync } from '@coreui/icons';
import { MatIconModule } from '@angular/material/icon';
import { MatIcon } from '@angular/material/icon';

interface TableItem {
  checkbox: boolean;
  namaPenuh: string;
  noDokumen: string;
  pangkat: string;
  tarikhPermohonan: string;
  statusPengesahan: string;
}

@Component({
  selector: 'app-dashboard-senarai-arahan-pemulangan-kad-kuasa',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonDirective,
    TableDirective,
    FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective,
    IconModule,
    MatIconModule,
    MatIcon
  ],
  templateUrl: './dashboard-senarai-arahan-pemulangan-kad-kuasa.component.html',
  styleUrl: './dashboard-senarai-arahan-pemulangan-kad-kuasa.component.scss'
})
export class DashboardSenaraiArahanPemulanganKadKuasaComponent implements OnInit {
  icons = { cilSync };

  searchForm: FormGroup;
  originalData: TableItem[] = [];
  filteredResults: TableItem[] = [];
  hasSearched: boolean = false;
  totalData: number = 0;

  constructor(private router: Router, private fb: FormBuilder, private iconSet: IconSetService) {
    this.searchForm = this.fb.group({
      namaPenuh: [''],
      jenisDokumen: [''],
      noDokumen: [''],
      statusPengesahan: [''],
      tarikhDari: [''],
      tarikhHingga: ['']
    });
    this.iconSet.icons = { cilSync };
  }

  ngOnInit() {
    this.originalData = [...this.data];
    this.filteredResults = [...this.data]; // Initially show all data
    this.totalData = this.filteredResults.length;
  }

  data: TableItem[] = [
    {
      checkbox: false,
      namaPenuh: 'Faridah Binti Jamil',
      noDokumen: '890101145678',
      pangkat: 'Penolong Pegawai Imigresen/ KP29',
      tarikhPermohonan: '20/06/2025',
      statusPengesahan: 'Menunggu Pengesahan',
    },
    {
      checkbox: false,
      namaPenuh: 'Ahmad Bin Zulkifli',
      noDokumen: '920322083344',
      pangkat: 'Pegawai Teknologi Maklumat/ F41',
      tarikhPermohonan: '20/06/2025',
      statusPengesahan: 'Menunggu Pengesahan',
    },
    {
      checkbox: false,
      namaPenuh: 'Muhammad Rizal Bin Rahman',
      noDokumen: '890101145678',
      pangkat: 'Pembantu Imigresen/ KP19',
      tarikhPermohonan: '20/06/2025',
      statusPengesahan: 'Menunggu Pengesahan',
    },
  ];

  rowsPerPage = 5;
  currentPage = 1;
  pageInput = 1;
  sortColumn: keyof TableItem | '' = '';
  sortAsc = true;

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
  
  toggleAllCheckboxes(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.data.forEach(item => item.checkbox = isChecked);
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

  navigateToSahkanLaporanPemulanganPerampasanKadKuasa() {
    this.router.navigate([
      'adm/pemulangan-perampasan-kad-kuasa/sahkan-laporan-pemulangan-perampasan-kad-kuasa/sahkan-laporan-pemulangan-perampasan-kad-kuasa',
    ]);
  }

  // Helper method to convert DD/MM/YYYY to YYYY-MM-DD
  private convertDateToISO(dateString: string): string {
    const parts = dateString.split('/');
    if (parts.length === 3) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return dateString;
  }

  // Search method
  search() {
    let filtered = [...this.data];
    const searchValues = this.searchForm.value;

    // Filter by nama
    if (searchValues.namaPenuh && searchValues.namaPenuh.trim()) {
      filtered = filtered.filter(item =>
        item.namaPenuh.toLowerCase().includes(searchValues.namaPenuh.toLowerCase())
      );
    }

    // Filter by noDokumen
    if (searchValues.noDokumen && searchValues.noDokumen.trim()) {
      filtered = filtered.filter(item =>
        item.noDokumen.toLowerCase().includes(searchValues.noDokumen.toLowerCase())
      );
    }

    // Filter by statusPengesahan
    if (searchValues.statusPengesahan && searchValues.statusPengesahan.trim()) {
      filtered = filtered.filter(item =>
        item.statusPengesahan.toLowerCase().includes(searchValues.statusPengesahan.toLowerCase())
      );
    }

    // Filter by statusPengesahan
    if (searchValues.statusPengesahan && searchValues.statusPengesahan.trim()) {
      filtered = filtered.filter(item =>
        item.statusPengesahan.toLowerCase().includes(searchValues.statusPengesahan.toLowerCase())
      );
    }

    // Filter by tarikhPengesahan (date range)
    if (searchValues.tarikhDari || searchValues.tarikhHingga) {
      filtered = filtered.filter(item => {
        const itemDate = new Date(this.convertDateToISO(item.tarikhPermohonan));
        const dariDate = searchValues.tarikhDari ? new Date(searchValues.tarikhDari) : null;
        const hinggaDate = searchValues.tarikhHingga ? new Date(searchValues.tarikhHingga) : null;

        if (dariDate && hinggaDate) {
          return itemDate >= dariDate && itemDate <= hinggaDate;
        } else if (dariDate) {
          return itemDate >= dariDate;
        } else if (hinggaDate) {
          return itemDate <= hinggaDate;
        }
        return true;
      });
    }

    // Update filtered results
    this.filteredResults = filtered;
    this.hasSearched = true;
    
    // Reset to first page when searching
    this.currentPage = 1;
    this.pageInput = 1;
  }

  // Reset method
  reset() {
    this.searchForm.reset();
    this.filteredResults = [...this.data]; // Show all data again
    this.hasSearched = false;
    this.currentPage = 1;
    this.pageInput = 1;
  }

  // Check if any form inputs are filled
  isFormEmpty(): boolean {
    const formValue = this.searchForm.value;
    return !Object.values(formValue).some(value => value && value.toString().trim() !== '');
  }

}
