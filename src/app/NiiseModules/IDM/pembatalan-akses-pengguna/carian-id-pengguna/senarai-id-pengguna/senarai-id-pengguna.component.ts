import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

// CoreUI imports
import { BadgeModule } from '@coreui/angular';
import { CardModule } from '@coreui/angular';
import { GridModule, ColComponent, RowComponent } from '@coreui/angular';
import { ButtonModule } from '@coreui/angular';

interface SearchFilters {
  negeri: string;
  cawangan: string;
  bahagian: string;
  unit: string;
  namaPegawai: string;
  noDokumen: string;
  status: string;
  tindakan: string;
}

interface PermohonanKelulusanItem {
  nama: string;
  negeri: string;
  cawangan: string;
  bahagian: string;
  unit: string;
  noDokumen: string;
  status: string;
  tindakan: 'baharu' | 'dalam_proses' | 'lulus' | 'tolak' | 'pending';
}

@Component({
  selector: 'senarai-kelulusan-permohonan',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BadgeModule,
    ButtonModule,
    ColComponent,
    RowComponent,
    CardModule,
    GridModule,
    RouterModule
  ],
  templateUrl: './senarai-id-pengguna.component.html',
  styleUrls: ['./senarai-id-pengguna.component.scss']
})
export class SenaraiIDPenggunaComponent implements OnInit {

 
  negeriList: string[] = ['Selangor', 'Johor', 'Kedah'];
  cawanganList: string[] = ['Cawangan A', 'Cawangan B', 'Cawangan C'];
  bahagianList: string[] = ['Bahagian 1', 'Bahagian 2'];
  unitList: string[] = ['Unit X', 'Unit Y'];
  pegawaiList: string[] = ['Ali Ahmad', 'Siti Aminah', 'Rahman Karim'];

  
  applicationsList: PermohonanKelulusanItem[] = [
    {
      nama: 'Ali Ahmad',
      negeri: 'Selangor',
      cawangan: 'Cawangan A',
      bahagian: 'Bahagian 1',
      unit: 'Unit X',
      noDokumen: '901201-10-2233',
      status: 'Aktif',
      tindakan: 'baharu',
    },
    {
      nama: 'Siti Aminah',
      negeri: 'Johor',
      cawangan: 'Cawangan B',
      bahagian: 'Bahagian 2',
      unit: 'Unit Y',
      noDokumen: '880102-05-1122',
      status: 'Tidak Aktif',
      tindakan: 'lulus',
    }
  ];


  filteredApplications: PermohonanKelulusanItem[] = [...this.applicationsList];

  searchFilters: SearchFilters = {
    negeri: '',
    cawangan: '',
    bahagian: '',
    unit: '',
    namaPegawai: '',
    noDokumen: '',
    status: '',
    tindakan: ''
  };

  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.searchApplications();
  }

  get paginatedApplications(): PermohonanKelulusanItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredApplications.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalItems(): number {
    return this.filteredApplications.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  searchApplications(): void {
    this.filteredApplications = this.applicationsList.filter(app => {
      const matchesNegeri = !this.searchFilters.negeri || app.negeri === this.searchFilters.negeri;
      const matchesCawangan = !this.searchFilters.cawangan || app.cawangan === this.searchFilters.cawangan;
      const matchesBahagian = !this.searchFilters.bahagian || app.bahagian === this.searchFilters.bahagian;
      const matchesUnit = !this.searchFilters.unit || app.unit === this.searchFilters.unit;
      const matchesPegawai = !this.searchFilters.namaPegawai || app.nama.toLowerCase().includes(this.searchFilters.namaPegawai.toLowerCase());
      const matchesNoDokumen = !this.searchFilters.noDokumen || app.noDokumen.includes(this.searchFilters.noDokumen);
      const matchesStatus = !this.searchFilters.status || app.status.toLowerCase().includes(this.searchFilters.status.toLowerCase());
      const matchesTindakan = !this.searchFilters.tindakan || app.tindakan === this.searchFilters.tindakan;

      return matchesNegeri && matchesCawangan && matchesBahagian &&
        matchesUnit && matchesPegawai && matchesNoDokumen &&
        matchesStatus && matchesTindakan;
    });

    this.currentPage = 1;
    this.goToPageNumber = 1;
  }

  resetFilters(): void {
    this.searchFilters = {
      negeri: '',
      cawangan: '',
      bahagian: '',
      unit: '',
      namaPegawai: '',
      noDokumen: '',
      status: '',
      tindakan: ''
    };
    this.searchApplications();
  }

  goToPage(action: string): void {
    switch (action) {
      case 'first': this.currentPage = 1; break;
      case 'prev': if (this.currentPage > 1) this.currentPage--; break;
      case 'next': if (this.currentPage < this.totalPages) this.currentPage++; break;
      case 'last': this.currentPage = this.totalPages; break;
    }
    this.goToPageNumber = this.currentPage;
  }

  goToSpecificPage(): void {
    if (this.goToPageNumber >= 1 && this.goToPageNumber <= this.totalPages) {
      this.currentPage = this.goToPageNumber;
    } else {
      this.goToPageNumber = this.currentPage;
    }
  }

  onItemsPerPageChange(): void {
    this.currentPage = 1;
    this.goToPageNumber = 1;
  }

  getTindakanColor(tindakan: string): string {
    switch (tindakan) {
      case 'baharu': return 'primary';
      case 'dalam_proses': return 'warning';
      case 'lulus': return 'success';
      case 'tolak': return 'danger';
      case 'pending': return 'secondary';
      default: return 'primary';
    }
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'aktif': return 'success';
      case 'tidak aktif': return 'secondary';
      case 'pending': return 'warning';
      case 'tolak': return 'danger';
      default: return 'info';
    }
  }
}
