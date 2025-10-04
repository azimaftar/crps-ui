import { Component, OnInit } from '@angular/core';
import { CardModule, GridModule, NavModule, ModalModule, ButtonDirective, TableDirective, FormCheckLabelDirective, FormCheckInputDirective, FormCheckComponent} from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { cilSync } from '@coreui/icons';
import { IconModule, IconSetService } from '@coreui/icons-angular';


interface TableItem {
  checkbox: boolean;
  nama: string;
  noDokumen: string;
  pangkat: string;
  tarikhTidakAktif: string;
  jenisPermohonan: string;
  status: string;
}

@Component({
  selector: 'app-senarai-pelupusan-kad-kuasa',
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
    MatIconModule
  ],
  templateUrl: './senarai-pelupusan-kad-kuasa.component.html',
  styleUrl: './senarai-pelupusan-kad-kuasa.component.scss'
})
export class SenaraiPelupusanKadKuasaComponent implements OnInit {
  icons = { cilSync };

  searchForm: FormGroup;
  originalData: TableItem[] = [];
  filteredResults: TableItem[] = [];
  hasSearched: boolean = false;
  totalData: number = 0;
  
  constructor(private router: Router, private fb: FormBuilder, private iconSet: IconSetService) {
    this.searchForm = this.fb.group({
      nama: [''],
      jenisDokumen: [''],
      noDokumen: [''],
      jenisPermohonan: [''],
      tarikhDari: [''],
      tarikhHingga: ['']
    });
    this.iconSet.icons = { cilSync };
  }

  ngOnInit() {
    this.originalData = [...this.data];
    this.filteredResults = [...this.data]; // Initially show all data
    this.totalData = this.filteredResults.length;
    this.sortColumn = 'nama';
    this.sortAsc = true;
  }

  data: TableItem[] = [
    {
      checkbox: false,
      nama: 'Faridah Binti Jamil',
      noDokumen: '890101145678',
      pangkat: 'Penolong Pegawai Imigresen/ KP29',
      tarikhTidakAktif: '12/03/2024',
      jenisPermohonan: 'Gantian Kad Kuasa',
      status: 'Permohonan Pelupusan'
    },
    {
      checkbox: false,
      nama: 'Ahmad Bin Zulkifli',
      noDokumen: '920322083344',
      pangkat: 'Pegawai Teknologi Maklumat/ F41',
      tarikhTidakAktif: '12/03/2024',
      jenisPermohonan: 'Kakitangan Bersara',
      status: 'Permohonan Pelupusan'
    },
    {
      checkbox: false,
      nama: 'Faridah Binti Jamil',
      noDokumen: '890101145678',
      pangkat: 'Pembantu Imigresen/ KP19',
      tarikhTidakAktif: '12/03/2024',
      jenisPermohonan: 'Pemulangan/ Perampasan Kad Kuasa',
      status: 'Permohonan Pelupusan'
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

  navigateToJanaSurat() {
    this.router.navigate([
      'adm/pelupusan-kad-kuasa/paparan-dan-cetakan-surat-permohonan-pelupusan-ke-cgso',
    ]);
  }

  navigateTomaklumatPegawai() {
    this.router.navigate([
      'adm/pelupusan-kad-kuasa/paparan-maklumat-pegawai-bagi-pelupusan-kad-kuasa',
    ]);
  }

  navigateToKemasKiniMaklumatPelupusanKeputusanCgso() {
    this.router.navigate([
      'adm/pelupusan-kad-kuasa/kemas-kini-maklumat-pelupusan-keputusan-cgso',
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
    if (searchValues.nama && searchValues.nama.trim()) {
      filtered = filtered.filter(item =>
        item.nama.toLowerCase().includes(searchValues.nama.toLowerCase())
      );
    }

    // Filter by noDokumen
    if (searchValues.noDokumen && searchValues.noDokumen.trim()) {
      filtered = filtered.filter(item =>
        item.noDokumen.toLowerCase().includes(searchValues.noDokumen.toLowerCase())
      );
    }

    // Filter by jenisPermohonan
    if (searchValues.jenisPermohonan && searchValues.jenisPermohonan.trim()) {
      filtered = filtered.filter(item =>
        item.jenisPermohonan.toLowerCase().includes(searchValues.jenisPermohonan.toLowerCase())
      );
    }

    // Filter by tarikhTidakAktif (date range)
    if (searchValues.tarikhDari || searchValues.tarikhHingga) {
      filtered = filtered.filter(item => {
        const itemDate = new Date(this.convertDateToISO(item.tarikhTidakAktif));
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
