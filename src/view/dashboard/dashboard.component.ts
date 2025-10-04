import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { BadgeModule, ColComponent, RowComponent } from '@coreui/angular';
import { FormsModule, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardModule } from '@coreui/angular';
import { GridModule } from '@coreui/angular';
import { ButtonModule } from '@coreui/angular';

// Widget imports
import {
  ButtonDirective,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  TemplateIdDirective,
  WidgetStatAComponent
} from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { cilArrowTop, cilOptions } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { getStyle } from '@coreui/utils';

// Carousel imports
import {
  CarouselCaptionComponent,
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent
} from '@coreui/angular';

interface LandingItem {
  id: string;
  keterangan: string;
  tarikh: Date;
  masa: string;
  status: 'baharu' | 'dalam_proses' | 'lulus' | 'tolak' | 'pending';
  modul: string;
}

interface SearchFilters {
  modul: string;
  lajur: string;
}

interface NotifikasiItem {
  id: number;
  bil: number;
  tarikhMasa: Date;
  mesej: string;
  selected: boolean
}

@Component({
  selector: 'laman-utama',
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
    RouterLink,
    // Widget imports
    WidgetStatAComponent,
    TemplateIdDirective,
    IconDirective,
    DropdownComponent,
    ButtonDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    ChartjsComponent,
    // Carousel imports
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
    ReactiveFormsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  notificationForm: FormGroup;


  notifikasiList: NotifikasiItem[] = [
    {
      id: 1,
      bil: 1,
      tarikhMasa: new Date('2025-05-07 10:00'),
      mesej: 'Permohonan ID pengguna baharu telah dihantar untuk semakan',
      selected: false
    }
  ];

  // Widget properties
  icons = { cilOptions, cilArrowTop };

  widgetData1: any = {};
  widgetData2: any = {};
  widgetData3: any = {};
  widgetData4: any = {};
  widgetOptions: any = {};

  // Carousel properties
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

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

  landingList: LandingItem[] = [
    {
      id: '1',
      keterangan: 'Permohonan baru ID Pengguna oleh Mohd Nu\'man',
      tarikh: new Date('2023-01-10'),
      masa: '09:00 AM',
      status: 'baharu',
      modul: 'IDM'
    },
    {
      id: '2',
      keterangan: 'Reset Password untuk Zainul Arif',
      tarikh: new Date('2023-02-15'),
      masa: '10:30 AM',
      status: 'lulus',
      modul: 'IDM'
    },
    {
      id: '3',
      keterangan: 'Kemaskini maklumat oleh Nur Qistina',
      tarikh: new Date('2023-03-05'),
      masa: '11:45 AM',
      status: 'dalam_proses',
      modul: 'IDM'
    },
    {
      id: '4',
      keterangan: 'Permohonan baru oleh Ahmad Farid',
      tarikh: new Date('2023-04-20'),
      masa: '08:15 AM',
      status: 'tolak',
      modul: 'IDM'
    },
    {
      id: '5',
      keterangan: 'Reset Password oleh Siti Nurhaliza',
      tarikh: new Date('2023-05-30'),
      masa: '02:00 PM',
      status: 'pending',
      modul: 'IDM'
    },
    {
      id: '6',
      keterangan: 'Permohonan ID baru untuk Rosmah',
      tarikh: new Date('2023-06-10'),
      masa: '03:20 PM',
      status: 'baharu',
      modul: 'IDM'
    },
    {
      id: '7',
      keterangan: 'Kemaskini profil oleh Ali',
      tarikh: new Date('2023-07-01'),
      masa: '04:00 PM',
      status: 'dalam_proses',
      modul: 'IDM'
    },
    {
      id: '8',
      keterangan: 'Reset Password untuk Aiman',
      tarikh: new Date('2023-08-05'),
      masa: '01:00 PM',
      status: 'lulus',
      modul: 'IDM'
    },
    {
      id: '9',
      keterangan: 'Permohonan akses sistem oleh Farah',
      tarikh: new Date('2023-09-15'),
      masa: '10:10 AM',
      status: 'pending',
      modul: 'IDM'
    },
    {
      id: '10',
      keterangan: 'Tukar kata laluan oleh Hafiz',
      tarikh: new Date('2023-10-22'),
      masa: '11:30 AM',
      status: 'tolak',
      modul: 'IDM'
    },
    {
      id: '11',
      keterangan: 'Permohonan akaun baru oleh Yasmin',
      tarikh: new Date('2023-11-08'),
      masa: '09:45 AM',
      status: 'baharu',
      modul: 'IDM'
    },
    {
      id: '12',
      keterangan: 'Reset Password oleh Khairul',
      tarikh: new Date('2023-12-12'),
      masa: '02:50 PM',
      status: 'lulus',
      modul: 'IDM'
    },
    {
      id: '13',
      keterangan: 'Permintaan akses sistem oleh Zulaikha',
      tarikh: new Date('2024-01-10'),
      masa: '03:30 PM',
      status: 'dalam_proses',
      modul: 'IDM'
    },
    {
      id: '14',
      keterangan: 'Permohonan baru ID untuk Shahirah',
      tarikh: new Date('2024-02-20'),
      masa: '08:00 AM',
      status: 'baharu',
      modul: 'IDM'
    },
    {
      id: '15',
      keterangan: 'Kemaskini emel oleh Haziq',
      tarikh: new Date('2024-03-05'),
      masa: '10:15 AM',
      status: 'pending',
      modul: 'IDM'
    }
  ];

  filteredLanding: LandingItem[] = [...this.landingList];

  searchFilters: SearchFilters = {
    modul: '',
    lajur: ''
  };

  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;

  constructor(private fb: FormBuilder, private router: Router) {
    this.notificationForm = this.fb.group({
      carian: [''],
      tarikhMula: [''],
      tarikhAkhir: [''],
      jenis: [''],
      status: ['']
    });
  }

  ngOnInit(): void {
    this.goToPageNumber = this.currentPage;
    this.searchLanding();
    this.initializeWidgets();
    this.initializeCarousel();
  }

  // Initialize widget data and options
  initializeWidgets(): void {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

    this.widgetOptions = {
      plugins: {
        legend: {
          display: false
        }
      },
      maintainAspectRatio: true,
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false
          }
        },
        y: {
          min: 30,
          max: 89,
          display: false,
          grid: {
            display: false
          },
          ticks: {
            display: false
          }
        }
      },
      elements: {
        line: {
          borderWidth: 1,
          tension: 0.4
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    };

    // Widget 1 data
    this.widgetData1 = {
      labels: labels,
      datasets: [
        {
          label: 'Total Users',
          backgroundColor: 'transparent',
          borderColor: 'rgba(255,255,255,.55)',
          pointBackgroundColor: getStyle('--cui-primary'),
          pointHoverBorderColor: getStyle('--cui-primary'),
          data: [65, 59, 84, 84, 51, 55, 40]
        }
      ]
    };

    // Widget 2 data
    this.widgetData2 = {
      labels: labels,
      datasets: [
        {
          label: 'Active Applications',
          backgroundColor: 'transparent',
          borderColor: 'rgba(255,255,255,.55)',
          pointBackgroundColor: getStyle('--cui-success'),
          pointHoverBorderColor: getStyle('--cui-success'),
          data: [45, 67, 82, 76, 88, 91, 85]
        }
      ]
    };

    // Widget 3 data
    this.widgetData3 = {
      labels: labels,
      datasets: [
        {
          label: 'Pending Requests',
          backgroundColor: 'transparent',
          borderColor: 'rgba(255,255,255,.55)',
          pointBackgroundColor: getStyle('--cui-warning'),
          pointHoverBorderColor: getStyle('--cui-warning'),
          data: [25, 35, 28, 42, 38, 45, 32]
        }
      ]
    };

    // Widget 4 data
    this.widgetData4 = {
      labels: labels,
      datasets: [
        {
          label: 'Rejected',
          backgroundColor: 'transparent',
          borderColor: 'rgba(255,255,255,.55)',
          pointBackgroundColor: getStyle('--cui-danger'),
          pointHoverBorderColor: getStyle('--cui-danger'),
          data: [15, 12, 18, 10, 8, 14, 11]
        }
      ]
    };
  }

  // Initialize carousel data
  initializeCarousel(): void {
    this.slides[0] = {
      id: 0,
      src: './assets/images/angular.jpg',
      title: 'System Dashboard',
      subtitle: 'Monitor your applications and user activities in real-time.'
    };
    this.slides[1] = {
      id: 1,
      src: './assets/images/react.jpg',
      title: 'User Management',
      subtitle: 'Efficient user registration and identity management system.'
    };
    this.slides[2] = {
      id: 2,
      src: './assets/images/vue.jpg',
      title: 'Security & Compliance',
      subtitle: 'Advanced security features and compliance monitoring.'
    };
  }

  get paginatedLanding(): LandingItem[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredLanding.slice(start, end);
  }

  get totalItems(): number {
    return this.filteredLanding.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  searchLanding(): void {
    this.filteredLanding = this.landingList.filter(app => {
      const matchesKeterangan = !this.searchFilters.modul ||
        app.keterangan.toLowerCase().includes(this.searchFilters.modul.toLowerCase());

      const matchesStatus = !this.searchFilters.lajur ||
        app.status === this.searchFilters.lajur;

      return matchesKeterangan && matchesStatus;
    });

    this.currentPage = 1;
    this.goToPageNumber = 1;
  }

  resetFilters(): void {
    this.searchFilters = {
      modul: '',
      lajur: ''
    };
    this.searchLanding();
  }

  goToPage(action: string): void {
    switch (action) {
      case 'first':
        this.currentPage = 1;
        break;
      case 'prev':
        if (this.currentPage > 1) this.currentPage--;
        break;
      case 'next':
        if (this.currentPage < this.totalPages) this.currentPage++;
        break;
      case 'last':
        this.currentPage = this.totalPages;
        break;
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

  deleteApplication(id: string): void {
    const app = this.landingList.find(app => app.id === id);
    if (app) {
      if (confirm(`Adakah anda pasti untuk memadam rekod ini?\n\nKeterangan: ${app.keterangan}`)) {
        this.landingList = this.landingList.filter(app => app.id !== id);
        this.searchLanding();
        alert('Rekod telah berjaya dipadam.');
      }
    }
  }


  filterByStatus(status: string): void {

    this.notificationForm.patchValue({ status: status });
    this.onSubmit();
  }

  filterByJenis(jenis: string): void {

    this.notificationForm.patchValue({ jenis: jenis });
    this.onSubmit();
  }

    onSubmit(): void {
    console.log('Search/Filter criteria:', this.notificationForm.value);

    const formValues = this.notificationForm.value;
    let filteredData = [...this.notifikasiList];

    if (formValues.carian) {
      const searchTerm = formValues.carian.toLowerCase();
      filteredData = filteredData.filter(item =>
        item.mesej.toLowerCase().includes(searchTerm)
      );
    }

    if (formValues.tarikhMula || formValues.tarikhAkhir) {
      const startDate = formValues.tarikhMula ? new Date(formValues.tarikhMula) : null;
      const endDate = formValues.tarikhAkhir ? new Date(formValues.tarikhAkhir) : null;

      filteredData = filteredData.filter(item => {
        if (startDate && item.tarikhMasa < startDate) return false;
        if (endDate && item.tarikhMasa > endDate) return false;
        return true;
      });
    }
    console.log(`Filter applied. ${filteredData.length} notifications found.`);
  }

  clearFilters(): void {
    this.notificationForm.reset();
    this.currentPage = 1;
    this.goToPageNumber = 1;
    console.log('All filters cleared');
  }

  get paginatedNotifications(): NotifikasiItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.notifikasiList.slice(startIndex, endIndex);
  }

  toggleSelectAll(selectAll: boolean): void {
    this.paginatedNotifications.forEach(item => {
      item.selected = selectAll;
    });
  }

  viewDetails(docNo: string) {
    console.log('Clicked MfId:', '900101138232');
    this.router.navigate(['/IDM/pendaftaran-id-pengguna/baharu/maklumat-profil-pegawai', '900101138232']);
  }
}
