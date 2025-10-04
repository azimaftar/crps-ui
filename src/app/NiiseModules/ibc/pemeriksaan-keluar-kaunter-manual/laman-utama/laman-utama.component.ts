import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BadgeModule, ColComponent, RowComponent } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
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



@Component({
  selector: 'app-laman-utama',
  standalone: true,
  imports: [CommonModule,
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
    CarouselControlComponent],
  templateUrl: './laman-utama.component.html',
  styleUrl: './laman-utama.component.scss'
})
export class LamanUtamaComponent {
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

  





  currentPage: number = 1;
  itemsPerPage: number = 10;
  goToPageNumber: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.goToPageNumber = this.currentPage;
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


}
