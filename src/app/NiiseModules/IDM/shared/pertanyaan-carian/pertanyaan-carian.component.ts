import { Component, NgModule, OnInit, ViewChild  } from '@angular/core';
import { BadgeModule, ColComponent, RowComponent } from '@coreui/angular'; // For <c-badge>
import { FormsModule } from '@angular/forms'; // For [(ngModel)]
import { CommonModule } from '@angular/common'; // For *ngIf, *ngFor
import { CardModule } from '@coreui/angular';
import { GridModule } from '@coreui/angular';
import { ButtonModule } from '@coreui/angular';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { LaporanComponent } from './../../shared/laporan-carian/laporan.component';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

// assign vfs
pdfMake.vfs = pdfFonts.vfs;

interface SearchFilters {
  negeri?: string;
  cawangan?: string;
  bahagian?: string;
  unit?: string;
  tarikhMula?: string;
  tarikhHingga?: string;
  gred?: string;
  status?: string;
}

// Shape of each row in your dataset
interface DataRow {
  noPermohonan: string;
  tarikhPemohonan: string;
  jenisPermohonan: string;
  pegawaiMengesahkan: string;
  pegawaiMeluluskan: string;
  bahagian: string;
  unit: string;
  gred: string;
  jumlah: number;
  nama: string;
  negeri: string;
  cawangan: string;
  status: string;
}

// Shape of table config
interface TableConfig {
  headers: { label: string; field: keyof DataRow }[];
}

@Component({
  selector: 'pertanyaan-carian',
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
    ButtonModule,
    RouterModule,
    MatIconModule,
    LaporanComponent
  ],
  templateUrl: './pertanyaan-carian.component.html',
  styleUrls: ['./pertanyaan-carian.component.scss']
})
export class PertanyaanCarianComponent implements OnInit {


  // Master dataset (all attributes are included)
allData: DataRow[] = [
  {
    noPermohonan: 'IDM/Putrajaya/01/122021/3241350',
    tarikhPemohonan: '2025-12-12',
    jenisPermohonan: 'Permohonan ID Baharu',
    pegawaiMengesahkan: 'Karim Bin Abdullah',
    pegawaiMeluluskan: 'Mohd A Bin B',
    bahagian: 'Keselamatan',
    unit: 'SL',
    gred: 'KP22',
    jumlah: 100,
    nama: `Mohd Nu'man Bin Mohd Liki`,
    negeri: 'Selangor',
    cawangan: 'Putrajaya',
    status: 'Aktif'
  },
  {
    noPermohonan: 'IDM/Putrajaya/01/122021/0990111',
    tarikhPemohonan: '2025-12-15',
    jenisPermohonan: 'Permohonan ID Baharu',
    pegawaiMengesahkan: 'Karim Bin Abdullah',
    pegawaiMeluluskan: 'Mohd A Bin B',
    bahagian: 'Keselamatan',
    unit: 'ID',
    gred: 'KP22',
    jumlah: 200,
    nama: 'Zainul Arif Bin Abu',
    negeri: 'Selangor',
    cawangan: 'Cyberjaya',
    status: 'Nyahaktif'
  },
  {
    noPermohonan: 'IDM/Putrajaya/01/122021/8888888',
    tarikhPemohonan: '2025-12-20',
    jenisPermohonan: 'Permohonan ID Baharu',
    pegawaiMengesahkan: 'Karim Bin Abdullah',
    pegawaiMeluluskan: 'Mohd A Bin B',
    bahagian: 'Keselamatan',
    unit: 'Pengusiran',
    gred: 'KP22',
    jumlah: 50,
    nama: 'Nur Qistina Binti Harun',
    negeri: 'Pahang',
    cawangan: 'Kuantan',
    status: 'Batal'
  },
  {
    noPermohonan: 'IDM/KL/02/012022/1234567',
    tarikhPemohonan: '2025-11-10',
    jenisPermohonan: 'Kemaskini ID',
    pegawaiMengesahkan: 'Siti Hajar Binti Ali',
    pegawaiMeluluskan: 'Ahmad Zaki Bin Hassan',
    bahagian: 'Pentadbiran',
    unit: 'Rekod',
    gred: 'KP19',
    jumlah: 75,
    nama: 'Ahmad Fikri Bin Jamal',
    negeri: 'Kuala Lumpur',
    cawangan: 'Bukit Bintang',
    status: 'Aktif'
  },
  {
    noPermohonan: 'IDM/Selangor/03/022022/7654321',
    tarikhPemohonan: '2025-10-22',
    jenisPermohonan: 'Pembatalan ID',
    pegawaiMengesahkan: 'Noraini Binti Othman',
    pegawaiMeluluskan: 'Roslan Bin Mohd',
    bahagian: 'Teknologi',
    unit: 'ICT',
    gred: 'KP41',
    jumlah: 300,
    nama: 'Farah Aqilah Binti Rosdi',
    negeri: 'Selangor',
    cawangan: 'Shah Alam',
    status: 'Batal'
  },
  {
    noPermohonan: 'IDM/Johor/04/032022/2345678',
    tarikhPemohonan: '2025-09-30',
    jenisPermohonan: 'Permohonan ID Baharu',
    pegawaiMengesahkan: 'Rahman Bin Ismail',
    pegawaiMeluluskan: 'Sulaiman Bin Ahmad',
    bahagian: 'Keselamatan',
    unit: 'SL',
    gred: 'KP29',
    jumlah: 120,
    nama: 'Mohd Shahrul Bin Azman',
    negeri: 'Johor',
    cawangan: 'Johor Bahru',
    status: 'Aktif'
  },
  {
    noPermohonan: 'IDM/Penang/05/042022/8765432',
    tarikhPemohonan: '2025-08-15',
    jenisPermohonan: 'Kemaskini ID',
    pegawaiMengesahkan: 'Halimah Binti Musa',
    pegawaiMeluluskan: 'Syafiq Bin Salleh',
    bahagian: 'Kewangan',
    unit: 'Akaun',
    gred: 'KP22',
    jumlah: 60,
    nama: 'Tan Wei Jie',
    negeri: 'Pulau Pinang',
    cawangan: 'George Town',
    status: 'Nyahaktif'
  },
  {
    noPermohonan: 'IDM/Sabah/06/052022/3456789',
    tarikhPemohonan: '2025-07-12',
    jenisPermohonan: 'Pembatalan ID',
    pegawaiMengesahkan: 'Aminah Binti Karim',
    pegawaiMeluluskan: 'Rosdi Bin Yusof',
    bahagian: 'Pentadbiran',
    unit: 'Aset',
    gred: 'KP41',
    jumlah: 90,
    nama: 'Lim Kah Wai',
    negeri: 'Sabah',
    cawangan: 'Kota Kinabalu',
    status: 'Batal'
  },
  {
    noPermohonan: 'IDM/Sarawak/07/062022/9876543',
    tarikhPemohonan: '2025-06-02',
    jenisPermohonan: 'Permohonan ID Baharu',
    pegawaiMengesahkan: 'Karim Bin Abdullah',
    pegawaiMeluluskan: 'Mohd A Bin B',
    bahagian: 'Keselamatan',
    unit: 'Pengusiran',
    gred: 'KP22',
    jumlah: 110,
    nama: 'Dayang Nurul Binti Rahman',
    negeri: 'Sarawak',
    cawangan: 'Kuching',
    status: 'Aktif'
  },
  {
    noPermohonan: 'IDM/Melaka/08/072022/1928374',
    tarikhPemohonan: '2025-05-25',
    jenisPermohonan: 'Kemaskini ID',
    pegawaiMengesahkan: 'Azizah Binti Rahim',
    pegawaiMeluluskan: 'Faiz Bin Osman',
    bahagian: 'Teknologi',
    unit: 'ICT',
    gred: 'KP19',
    jumlah: 45,
    nama: 'Ramesh Kumar A/L Maniam',
    negeri: 'Melaka',
    cawangan: 'Ayer Keroh',
    status: 'Aktif'
  },
  {
    noPermohonan: 'IDM/Kedah/09/082022/5647382',
    tarikhPemohonan: '2025-04-17',
    jenisPermohonan: 'Permohonan ID Baharu',
    pegawaiMengesahkan: 'Samsul Bin Bakri',
    pegawaiMeluluskan: 'Amirul Bin Sani',
    bahagian: 'Kewangan',
    unit: 'Audit',
    gred: 'KP29',
    jumlah: 250,
    nama: 'Nurul Izzati Binti Yazid',
    negeri: 'Kedah',
    cawangan: 'Alor Setar',
    status: 'Nyahaktif'
  },
  {
    noPermohonan: 'IDM/Kelantan/10/092022/8374659',
    tarikhPemohonan: '2025-03-29',
    jenisPermohonan: 'Pembatalan ID',
    pegawaiMengesahkan: 'Haliza Binti Latif',
    pegawaiMeluluskan: 'Rosman Bin Idris',
    bahagian: 'Keselamatan',
    unit: 'SL',
    gred: 'KP22',
    jumlah: 30,
    nama: 'Wan Norashikin Binti Wan Aziz',
    negeri: 'Kelantan',
    cawangan: 'Kota Bharu',
    status: 'Batal'
  },
  {
    noPermohonan: 'IDM/NegeriSembilan/11/102022/1029384',
    tarikhPemohonan: '2025-02-10',
    jenisPermohonan: 'Kemaskini ID',
    pegawaiMengesahkan: 'Mazlan Bin Osman',
    pegawaiMeluluskan: 'Hafiz Bin Ali',
    bahagian: 'Pentadbiran',
    unit: 'Aset',
    gred: 'KP19',
    jumlah: 70,
    nama: 'Chong Mei Ling',
    negeri: 'Negeri Sembilan',
    cawangan: 'Seremban',
    status: 'Aktif'
  },
  {
    noPermohonan: 'IDM/Terengganu/12/112022/4758693',
    tarikhPemohonan: '2025-01-15',
    jenisPermohonan: 'Permohonan ID Baharu',
    pegawaiMengesahkan: 'Karim Bin Abdullah',
    pegawaiMeluluskan: 'Mohd A Bin B',
    bahagian: 'Teknologi',
    unit: 'ICT',
    gred: 'KP41',
    jumlah: 55,
    nama: 'Ahmad Najmi Bin Hassan',
    negeri: 'Terengganu',
    cawangan: 'Kuala Terengganu',
    status: 'Aktif'
  },
  {
    noPermohonan: 'IDM/Perak/13/122022/9182736',
    tarikhPemohonan: '2024-12-01',
    jenisPermohonan: 'Pembatalan ID',
    pegawaiMengesahkan: 'Rosita Binti Salleh',
    pegawaiMeluluskan: 'Azman Bin Yusof',
    bahagian: 'Keselamatan',
    unit: 'Pengusiran',
    gred: 'KP22',
    jumlah: 95,
    nama: 'Lee Chun Wai',
    negeri: 'Perak',
    cawangan: 'Ipoh',
    status: 'Batal'
  },
  {
    noPermohonan: 'IDM/Perlis/14/012023/6473829',
    tarikhPemohonan: '2024-11-20',
    jenisPermohonan: 'Kemaskini ID',
    pegawaiMengesahkan: 'Hamidah Binti Othman',
    pegawaiMeluluskan: 'Salleh Bin Musa',
    bahagian: 'Kewangan',
    unit: 'Audit',
    gred: 'KP29',
    jumlah: 40,
    nama: 'Muhammad Danish Bin Firdaus',
    negeri: 'Perlis',
    cawangan: 'Kangar',
    status: 'Nyahaktif'
  },
  {
    noPermohonan: 'IDM/Labuan/15/022023/1928374',
    tarikhPemohonan: '2024-10-10',
    jenisPermohonan: 'Permohonan ID Baharu',
    pegawaiMengesahkan: 'Shahrul Bin Ibrahim',
    pegawaiMeluluskan: 'Nazri Bin Hassan',
    bahagian: 'Pentadbiran',
    unit: 'Rekod',
    gred: 'KP19',
    jumlah: 65,
    nama: 'Aisyah Binti Azmi',
    negeri: 'Labuan',
    cawangan: 'Labuan',
    status: 'Aktif'
  },
  {
    noPermohonan: 'IDM/Putrajaya/16/032023/5647382',
    tarikhPemohonan: '2024-09-15',
    jenisPermohonan: 'Pembatalan ID',
    pegawaiMengesahkan: 'Karim Bin Abdullah',
    pegawaiMeluluskan: 'Mohd A Bin B',
    bahagian: 'Keselamatan',
    unit: 'ID',
    gred: 'KP22',
    jumlah: 85,
    nama: 'Hafizuddin Bin Salleh',
    negeri: 'Putrajaya',
    cawangan: 'Putrajaya',
    status: 'Batal'
  },
  {
    noPermohonan: 'IDM/Selangor/17/042023/8374659',
    tarikhPemohonan: '2024-08-05',
    jenisPermohonan: 'Kemaskini ID',
    pegawaiMengesahkan: 'Noraini Binti Othman',
    pegawaiMeluluskan: 'Roslan Bin Mohd',
    bahagian: 'Teknologi',
    unit: 'ICT',
    gred: 'KP41',
    jumlah: 135,
    nama: 'Siti Aisyah Binti Omar',
    negeri: 'Selangor',
    cawangan: 'Petaling Jaya',
    status: 'Aktif'
  },
  {
    noPermohonan: 'IDM/Johor/18/052023/9182736',
    tarikhPemohonan: '2024-07-22',
    jenisPermohonan: 'Permohonan ID Baharu',
    pegawaiMengesahkan: 'Rahman Bin Ismail',
    pegawaiMeluluskan: 'Sulaiman Bin Ahmad',
    bahagian: 'Kewangan',
    unit: 'Akaun',
    gred: 'KP22',
    jumlah: 150,
    nama: 'Nor Hidayah Binti Ali',
    negeri: 'Johor',
    cawangan: 'Batu Pahat',
    status: 'Nyahaktif'
  }
];


  // Table Config by Selection
  // Selected option
  selectedTable: string = '';

  tableConfig = {
    headers: [] as { field: string; label: string }[]
  };

  // Table configurations for different selections
  tableConfigs: { [key: string]: TableConfig } = {
    '': {
      headers: [
        { label: 'No. Permohonan', field: 'noPermohonan' },
        { label: 'Tarikh Permohonan', field: 'tarikhPemohonan' },
        { label: 'Jenis Permohonan', field: 'jenisPermohonan' },
        { label: 'Pegawai yang Mengesahkan', field: 'pegawaiMengesahkan' },
      ]
    },
    'Senarai Pegawai yang Telah Didaftarkan': {
      headers: [
        { label: 'No. Permohonan', field: 'noPermohonan' },
        { label: 'Tarikh Permohonan', field: 'tarikhPemohonan' },
        { label: 'Jenis Permohonan', field: 'jenisPermohonan' },
        { label: 'Pegawai yang Mengesahkan', field: 'pegawaiMengesahkan' },
      ]
    },
    'Senarai Pegawai yang Telah Diluluskan (bagi Pelulus ID sahaja)': {
      headers: [
        { label: 'No. Permohonan', field: 'noPermohonan' },
        { label: 'Tarikh Permohonan', field: 'tarikhPemohonan' },
        { label: 'Jenis Permohonan', field: 'jenisPermohonan' },
        { label: ' Pegawai yang Meluluskan', field: 'pegawaiMeluluskan' },
      ]
    },
    'Jumlah Pegawai yang Telah Didaftarkan': {
      headers: [
        { label: 'Bahagian', field: 'bahagian' },
        { label: 'Unit', field: 'unit' },
        { label: 'Jumlah', field: 'jumlah' },
      ]
    },
    'Jumlah Pegawai yang Telah Diluluskan (bagi Pelulus ID sahaja)': {
      headers: [
        { label: 'Bahagian', field: 'bahagian' },
        { label: 'Unit', field: 'unit' },
        { label: 'Jumlah', field: 'jumlah' },
      ]
    },
    'Jumlah Pegawai yang Mendapat Akses': {
      headers: [
        { label: 'Bahagian', field: 'bahagian' },
        { label: 'Unit', field: 'unit' },
        { label: 'Gred', field: 'gred' },
        { label: 'Jumlah', field: 'jumlah' },
      ]
    },
    'Jumlah Pengguna Semasa Mengikut Status': {
      headers: [
        { label: 'Bahagian', field: 'bahagian' },
        { label: 'Unit', field: 'unit' },
        { label: 'Status', field: 'status' },
        { label: 'Jumlah', field: 'jumlah' },
      ]
    },
    'Senarai ID Pengguna Semasa': {
      headers: [
        { label: 'Nama', field: 'nama' },
        { label: 'Negeri', field: 'negeri' },
        { label: 'Cawangan', field: 'cawangan' },
        { label: 'Bahagian', field: 'bahagian' },
        { label: 'Unit', field: 'unit' },
        { label: 'Status', field: 'status' },
      ]
    },
  };

addDateFilter: string[] = [
  'Jumlah Pegawai yang Telah Didaftarkan',
  'Jumlah Pegawai yang Telah Diluluskan (bagi Pelulus ID sahaja)',
  'Jumlah Pegawai yang Mendapat Akses',
  'Jumlah Pengguna Semasa Mengikut Status',
  'Senarai ID Pengguna Semasa'
];

  getStatusColor(status: string): string {
    switch (status) {
      case 'baharu': return 'primary';
      case 'dalam_proses': return 'warning';
      case 'lulus': return 'success';
      case 'tolak': return 'danger';
      case 'pending': return 'secondary';
      default: return 'primary';
    }
  }

  // Search filter properties
  searchFilters: SearchFilters = {
    negeri: '',
    cawangan: '',
    bahagian: '',
    unit: '',
    tarikhMula: '',
    tarikhHingga: '',
    gred: '',
    status: '',
  };


  // filtered result holder
  filteredData: DataRow[] = [];

  applyFilters() {

    this.showReport = false;

    const config = this.tableConfigs[this.selectedTable];
    if (!config) return;

    // // validate: at least one filter must be filled
    // const hasFilter = Object.values(this.searchFilters).some(v => v && v.trim() !== '');
    // if (!hasFilter) {
    //   alert("Sila pilih sekurang-kurangnya satu filter.");
    //   return;
    // }

    this.filteredData = [...this.allData.filter(row => {
      return Object.entries(this.searchFilters).every(([key, value]) => {
        if (!value) return true; // ignore empty filter

        // Special case: date range filtering
        if (key === 'tarikhMula' || key === 'tarikhHingga') {
          if (!row['tarikhPemohonan']) return true; // skip if row has no date
          const rowDate = new Date(row['tarikhPemohonan']);
          const mula = this.searchFilters.tarikhMula ? new Date(this.searchFilters.tarikhMula) : null;
          const hingga = this.searchFilters.tarikhHingga ? new Date(this.searchFilters.tarikhHingga) : null;

          if (mula && rowDate < mula) return false;
          if (hingga && rowDate > hingga) return false;
          return true;
        }

        // Normal case: only check if the row actually has this key
        if (!(key in row)) return true;
        const typedKey = key as keyof DataRow;
        return String(row[typedKey] ?? '').toLowerCase() === value.toLowerCase();
      });
    })];
  }

  get currentConfig(): TableConfig {
    return this.tableConfigs[this.selectedTable];
  }

  get currentData(): Partial<DataRow>[] {
    if (!this.currentConfig) return [];

    const processedData = this.filteredData.map((row) => {
      const filteredRow: any = {};
      this.currentConfig.headers.forEach((h) => {
        filteredRow[h.field] = row[h.field];
      });
      return filteredRow;
    });

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return processedData.slice(startIndex, endIndex);
  }

  // map which fields apply for which table
  reportFilterConfig: { [key: string]: (keyof SearchFilters)[] } = {
    'Senarai Pegawai yang Telah Didaftarkan' : ['negeri', 'cawangan', 'bahagian', 'unit'],
    'Senarai Pegawai yang Telah Diluluskan (bagi Pelulus ID sahaja)': ['negeri', 'cawangan', 'bahagian', 'unit'],
    'Jumlah Pegawai yang Telah Didaftarkan': ['negeri', 'cawangan', 'bahagian', 'unit','tarikhMula', 'tarikhHingga'],
    'Jumlah Pegawai yang Telah Diluluskan (bagi Pelulus ID sahaja)': ['negeri', 'cawangan', 'bahagian', 'unit','tarikhMula', 'tarikhHingga'],
    'Jumlah Pegawai yang Mendapat Akses': ['negeri', 'cawangan', 'bahagian', 'unit','tarikhMula', 'tarikhHingga', 'gred'],
    'Jumlah Pengguna Semasa Mengikut Status': ['negeri', 'cawangan', 'bahagian', 'unit','tarikhMula', 'tarikhHingga', 'status'],
    'Senarai ID Pengguna Semasa': ['negeri', 'cawangan', 'bahagian', 'unit','tarikhMula', 'tarikhHingga', 'status']
  };

  // helper: which filters are active
  get activeReportFilters(): (keyof SearchFilters)[] {
    return this.reportFilterConfig[this.selectedTable] || [];
  }

  showReport = false;

  reportData: any  = {};

  generateReport() {
    this.showReport = true;

    this.reportData = {
      headers: this.currentConfig.headers,
      data: this.filteredData

    }
  }

  @ViewChild('child') child!: LaporanComponent;

  generateReportPDF(): Promise<void> {
    return new Promise((resolve) => {
      // Do your report generation here
      this.generateReport();

      // If report generation updates DOM, give it a tick to finish
      setTimeout(() => {
        resolve();
      }, 0);
    });
  }

  generateBoth() {
    this.generateReportPDF();
    setTimeout(async () => {
      const docDefinition = await this.child.getReportDefinition();
      pdfMake.createPdf(docDefinition).open(); // ✅ opens in browser
    }, 200);
  }

  // to show pdf below the table
  // async generateBoth() {
  //   await this.generateReportPDF(); // waits for DOM/report
  //   const element = document.getElementById('report-content');
  //   if (element) {
  //     // element.scrollIntoView({
  //     //   behavior: 'smooth',
  //     //   block: "start"
  //     // }); // smooth scroll
  //     const yOffset = -100; // 👈 adjust this value (negative = push down)
  //     const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

  //     window.scrollTo({ top: y, behavior: 'smooth' });
  //   }
  // setTimeout(async () => {
  //     const docDefinition = await this.child.getReportDefinition();
  //     pdfMake.createPdf(docDefinition).open(); // ✅ opens in browser
  //   }, 200);
  // }

  async printReport() {
    this.generateReportPDF();
    setTimeout(async () => {
      const docDefinition = await this.child.getReportDefinition();
      pdfMake.createPdf(docDefinition).print(); // ✅ opens in browser
    }, 200);
  }

  // Pagination properties
  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;
  selectAll: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialize component
    this.goToPageNumber = this.currentPage;
  }

  /**
   * Get total number of filtered items
   */
  get totalItems(): number {
    return this.filteredData.length;
  }

  /**
   * Get total number of pages
   */
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  /**
   * Reset search filters
   */
  resetFilters(): void {
    this.searchFilters = {
      negeri: '',
      cawangan: '',
      bahagian: '',
      unit: '',
      tarikhMula: '',
      tarikhHingga: '',
      gred: '',
      status: '',
    };
    // this.searchApplications();
    this.filteredData = [];
    this.showReport = false;
  }

  /**
   * Handle pagination navigation
   */
  goToPage(action: string): void {
    switch (action) {
      case 'first':
        this.currentPage = 1;
        break;
      case 'prev':
        if (this.currentPage > 1) {
          this.currentPage--;
        }
        break;
      case 'next':
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
        break;
      case 'last':
        this.currentPage = this.totalPages;
        break;
    }
    this.goToPageNumber = this.currentPage;
  }

  /**
   * Go to specific page number
   */
  goToSpecificPage(): void {
    if (this.goToPageNumber >= 1 && this.goToPageNumber <= this.totalPages) {
      this.currentPage = this.goToPageNumber;
    } else {
      // Reset to current page if invalid
      this.goToPageNumber = this.currentPage;
    }
  }

  /**
   * Handle items per page change
   */
  onItemsPerPageChange(): void {
    this.currentPage = 1;
    this.goToPageNumber = 1;
  }

}