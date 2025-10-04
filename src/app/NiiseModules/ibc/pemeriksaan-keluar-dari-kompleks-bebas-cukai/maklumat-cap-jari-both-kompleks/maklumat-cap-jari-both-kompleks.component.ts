import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cilArrowRight, cilChartPie } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { TemplateIdDirective, WidgetStatFComponent } from '@coreui/angular';
import { ChartData, ChartOptions } from 'chart.js';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationModalComponent } from '../../../../core/components/notification-modal/notification-modal.component';
import { FormsModule } from '@angular/forms';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardComponent,
  CardBodyComponent,
  CardHeaderComponent,
  WidgetStatEComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-maklumat-cap-jari-both-kompleks',
  standalone: true,
  imports: [
    CommonModule,
    NotificationModalComponent,
    ContainerComponent,
    RowComponent,
    ColComponent,
    CardComponent,
    CardBodyComponent,
    WidgetStatFComponent,
    TemplateIdDirective,
    IconDirective,
    CardHeaderComponent,
    ChartjsComponent,
    WidgetStatEComponent,
    FormsModule,
  ],
  templateUrl: './maklumat-cap-jari-both-kompleks.component.html',
  styleUrls: ['./maklumat-cap-jari-both-kompleks.component.scss'], // typo: should be "styleUrls" not "styleUrl"
})
export class MaklumatCapJariBothKompleksComponent {
  tabs: string[] = ['White', 'IR', 'UV'];
  icons = { cilChartPie, cilArrowRight };
  // For Right Panel: 4 Cards with tabs
  cards: number[] = [0, 1, 2, 3];
  selectedTabs: string[] = Array(4).fill('White');
  constructor(private router: Router, private route: ActivatedRoute) { }
  // For Left Panel: 3 cards with tabs
  leftCardTabs: string[] = Array(3).fill('White');
  // For Photo
  photoKiri = '';
  photoKanan = '';

  WajahKiri = '59.9%';
  WajahKanan = '59.9%';
  statusMessage = 'STATUS IMBASAN';
  statusColor = '#8b9aa7';  // default kelabu
  isImbasanSelesai: boolean = false; // untuk tukar IMBAS ke SIMPAN
  statusImbasan: string = ''; // contoh nilai: 'LULUS', 'GAGAL', dll
  labelJari: string = 'Empat (4) Jari Kanan:';

  barOptions: ChartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  lineOptions: ChartOptions = {
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  data: ChartData[] = [
    {
      labels: [
        'M',
        'T',
        'W',
        'T',
        'F',
        'S',
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S',
        'S',
        'M',
      ],
      datasets: [
        {
          backgroundColor: '#321fdb',
          borderColor: 'transparent',
          borderWidth: 1,
          data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
        },
      ],
    },
    {
      labels: [
        'M',
        'T',
        'W',
        'T',
        'F',
        'S',
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S',
        'S',
        'M',
      ],
      datasets: [
        {
          backgroundColor: 'transparent',
          borderColor: '#321fdb',
          borderWidth: 2,
          data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
          pointBackgroundColor: '#321fdb',
        },
      ],
    },
  ];

  selectTab(index: number, tab: string): void {
    this.selectedTabs[index] = tab;
  }

  getImageUrl(index: number): string {
    const tab = this.selectedTabs[index];
    return `assets/images/card${index + 1}-${tab.toLowerCase()}.jpg`;
  }

  logIndex(i: number): string {
    console.log('Card index:', i);
    return '';
  }

  selectLeftCardTab(index: number, tab: string): void {
    this.leftCardTabs[index] = tab;
  }

  getLeftCardImage(index: number): string {
    const tab = this.leftCardTabs[index];
    return `assets/images/leftcard${index + 1}-${tab.toLowerCase()}.jpg`;
  }

getPercentage(valueStr: string): string {
  const value = parseFloat(valueStr.replace('%', '')) || 0;
  return `${value}%`;
}

getGradient(valueStr: string): string {
  const value = parseFloat(valueStr.replace('%', '')) || 0;
  const primaryColor = '#0d6efd'; // biru
  const warningColor = '#ffc107'; // kuning
  return `linear-gradient(to right, ${primaryColor} ${value}%, ${warningColor} ${value}%)`;
}


  showBiometricModal = false;
  showModal = false;
  showModalAlert = false;
  modalTitle = '';
  openBiometricAfterAlert = false;
  toNextPage = true;

  onReset(){
      console.log('RESET button clicked');
      this.router.navigate(['../capturing-face-and-iris-ibc'],  {relativeTo: this.route});
  }

OnOKButtonClick() {
  console.log('OK button clicked');
  console.log('Nilai WajahKiri:', this.WajahKiri);

  this.router.navigate(['../maklumat-cap-jari-four-post-kompleks'], {
    relativeTo: this.route,
    state: { wajahKiri: this.WajahKiri }
  });
}

  
  


  closeModal(): void {
    this.showModal = false;
    this.showModalAlert = false;
    if(this.openBiometricAfterAlert){
      this.showBiometricModal = true;
      this.openBiometricAfterAlert = false;
    }else{
      this.showBiometricModal = false;
    }
  }

}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-maklumat-cap-jari-both-kompleks',
//   imports: [],
//   templateUrl: './maklumat-cap-jari-both-kompleks.component.html',
//   styleUrl: './maklumat-cap-jari-both-kompleks.component.scss'
// })
// export class MaklumatCapJariBothKompleksComponent {

// }
