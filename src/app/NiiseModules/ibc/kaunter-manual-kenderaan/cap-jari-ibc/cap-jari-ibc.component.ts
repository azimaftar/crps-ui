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
  selector: 'app-cap-jari-ibc',
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
  templateUrl: './cap-jari-ibc.component.html',
  styleUrls: ['./cap-jari-ibc.component.scss'], // typo: should be "styleUrls" not "styleUrl"
})
export class CapJariIbcComponent {
  tabs: string[] = ['White', 'IR', 'UV'];
  icons = { cilChartPie, cilArrowRight };
  // For Right Panel: 4 Cards with tabs
  cards: number[] = [0, 1, 2, 3];
  selectedTabs: string[] = Array(4).fill('White');
  constructor(private router: Router, private route: ActivatedRoute) { }
  // For Left Panel: 3 cards with tabs
  leftCardTabs: string[] = Array(3).fill('White');
  // For Photo
  photoUrl = '';

  irisValue = '59.9%';
  WajahValue = '59.9%';
  statusMessage = 'STATUS IMBASAN';
  statusColor = '#8b9aa7';  // default kelabu
  isImbasanSelesai: boolean = false; // untuk tukar IMBAS ke SIMPAN
  statusImbasan: string = ''; // contoh nilai: 'LULUS', 'GAGAL', dll
  disableSimpanButton: boolean = false;
  disablePengecualianButton: boolean = false;
  disableSahBiometrikButton: boolean = true;
  showSahBiometrikButton: boolean = false;
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

onImbasanClick() {
  const iris = parseFloat(this.irisValue.replace('%', '')) || 0;
  const wajah = parseFloat(this.WajahValue.replace('%', '')) || 0;

  if (iris > 50 && wajah > 50) {
    this.statusMessage = 'LULUS';
    this.statusImbasan = 'LULUS';
    this.statusColor = '#28a745';

    this.disableSimpanButton = false;
    this.disablePengecualianButton = true;
    this.disableSahBiometrikButton = true;
  } else {
    this.statusMessage = 'GAGAL';
    this.statusImbasan = 'GAGAL';
    this.statusColor = '#dc3545';

    this.disableSimpanButton = false;
    this.disablePengecualianButton = false;
    this.disableSahBiometrikButton = true;
  }

  this.isImbasanSelesai = true; // tukar button ke SIMPAN
  this.showSahBiometrikButton = true; // tunjukkan SAH BIOMETRIK
}

  umur: string = '';
  umurError: string = '';
  noPengenalan: string = '';
  noPengenalanError: string = '';

  onUmurChange(value: string) {
    const numericValue = value.replace(/[^0-9]/g, '');

    if (numericValue !== value) {
      this.umurError = 'Sila masukkan nombor sahaja';

      setTimeout(() => {
        this.umur = '';
      }, 2000); //2 second to clear the input value
    } else {
      this.umurError = '';
      this.umur = numericValue;
    }
  }

  onNoPengenalanChange(value: string) {
    const numericValue = value.replace(/[^0-9]/g, '');

    if (numericValue !== value) {
      this.noPengenalanError = 'Sila masukkan nombor sahaja';

      setTimeout(() => {
        this.noPengenalan = '';
      }, 2000); //2 second to clear the input value
    } else {
      this.noPengenalanError = '';
      this.noPengenalan = numericValue;
    }
  }

  showBiometricModal = false;
  showModal = false;
  showModalAlert = false;
  modalTitle = '';
  openBiometricAfterAlert = false;
  toNextPage = true;


  // onOKClick(): void {
  //   this.modalTitle = 'OK';
  //   this.showBiometricModal = true;
  //   this.showModal = true;
  // }

  onReset(){
      console.log('RESET button clicked');
      this.router.navigate(['../capturing-face-and-iris-ibc'],  {relativeTo: this.route});
  }

  tukarLabelJari() {
  if (this.labelJari === 'Empat (4) Jari Kiri:') {
      // Jika dah selesai kedua-dua jari, navigate ke page seterusnya
      this.router.navigate(['../cap-jari-both-ibc'], { relativeTo: this.route });
    } else {
      // Tukar ke jari kiri & set data cap jari
      this.labelJari = 'Empat (4) Jari Kiri:';  }
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
//   selector: 'app-cap-jari-ibc',
//   imports: [],
//   templateUrl: './cap-jari-ibc.component.html',
//   styleUrl: './cap-jari-ibc.component.scss'
// })
// export class CapJariIbcComponent {

// }
