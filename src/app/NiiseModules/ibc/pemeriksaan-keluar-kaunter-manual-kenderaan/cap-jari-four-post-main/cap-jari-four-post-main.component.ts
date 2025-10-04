import { Component, OnInit } from '@angular/core';
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
  selector: 'app-cap-jari-four-post-ibc',
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
  templateUrl: './cap-jari-four-post-main.component.html',
  styleUrls: ['./cap-jari-four-post-main.component.scss'],
})
export class CapJariFourPostMainComponent implements OnInit {
  // Properties dan default value
  icons = { cilChartPie, cilArrowRight };
  cards: number[] = [0, 1, 2, 3];
  selectedTabs: string[] = Array(4).fill('White');
  leftCardTabs: string[] = Array(3).fill('White');

  statusMessage = 'STATUS IMBASAN';
  statusColor = '#8b9aa7';
  isImbasanSelesai = false;
  statusImbasan = '';
  disableSimpanButton = false;
  disablePengecualianButton = false;
  disableSahBiometrikButton = true;
  showSahBiometrikButton = false;

  fourLeftUrl = '';
  fourRightUrl = '';
  thumbLeftUrl = '';
  thumbRightUrl = '';
  nilaiWajahKiri: string = '0%';

  umur: string = '';
  umurError: string = '';
  noPengenalan: string = '';
  noPengenalanError: string = '';

  showBiometricModal = false;
  showModal = false;
  showModalAlert = false;
  modalTitle = '';
  openBiometricAfterAlert = false;
  toNextPage = true;

  barOptions: ChartOptions = {
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } },
  };

  lineOptions: ChartOptions = {
    maintainAspectRatio: false,
    elements: { line: { tension: 0.4 }, point: { radius: 0 } },
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } },
  };

  data: ChartData[] = [
    {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
      datasets: [{ backgroundColor: '#321fdb', borderColor: 'transparent', borderWidth: 1, data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47] }]
    },
    {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
      datasets: [{ backgroundColor: 'transparent', borderColor: '#321fdb', borderWidth: 2, data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47], pointBackgroundColor: '#321fdb' }]
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { wajahKiri: string };

    if (state?.wajahKiri) {
      this.nilaiWajahKiri = state.wajahKiri;
      const nilai = parseFloat(this.nilaiWajahKiri.replace('%', ''));

      if (nilai > 50) {
        this.statusMessage = 'LULUS';
        this.statusColor = 'green';
        this.statusImbasan = 'LULUS';
      } else {
        this.statusMessage = 'GAGAL';
        this.statusColor = 'red';
        this.statusImbasan = 'GAGAL';
      }
    }
  }

  ngOnInit(): void {
    if (this.statusImbasan === 'GAGAL') {
      this.modalTitle = 'Pengenalpastian Biometrik Gagal';
      this.showModal = true;
      this.showModalAlert = true;
    }
  }

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
    return `linear-gradient(to right, #0d6efd ${value}%, #ffc107 ${value}%)`;
  }

  onSimpanClick() {
    this.isImbasanSelesai = true;
    if (this.statusImbasan === 'LULUS') {
      this.disableSimpanButton = true;
      this.disablePengecualianButton = true;
      this.disableSahBiometrikButton = false;
    }
  }

  OnOKButtonClick() {
    console.log('OKeyy button clicked');
    this.router.navigate(['../maklumat-profil-main'], {
      relativeTo: this.route,
      state: { dariCapJariEmpatPost: true }
    });
  }

  onUmurChange(value: string) {
    const numericValue = value.replace(/[^0-9]/g, '');
    this.umurError = numericValue !== value ? 'Sila masukkan nombor sahaja' : '';
    this.umur = numericValue;

    if (this.umurError) {
      setTimeout(() => this.umur = '', 2000);
    }
  }

  onNoPengenalanChange(value: string) {
    const numericValue = value.replace(/[^0-9]/g, '');
    this.noPengenalanError = numericValue !== value ? 'Sila masukkan nombor sahaja' : '';
    this.noPengenalan = numericValue;

    if (this.noPengenalanError) {
      setTimeout(() => this.noPengenalan = '', 2000);
    }
  }

  onDisyakiPalsuClick(): void {
    this.modalTitle = 'Pengecualian Biometrik';
    this.showBiometricModal = true;
    this.showModal = true;
  }

  onValidateFormClick(): void {
    const passportExpiry = new Date('2025-08-01'); // Replace with actual date
    const today = new Date();
    const sixMonthsLater = new Date();
    sixMonthsLater.setMonth(today.getMonth() + 6);

    if (passportExpiry < today) {
      this.modalTitle = 'Rekod Passport Dokumen Perjalanan Telah Tamat Tempoh Sah Laku';
      this.showBiometricModal = false;
      this.showModal = true;
      this.showModalAlert = true;
      this.openBiometricAfterAlert = true;
    } else if (passportExpiry < sixMonthsLater) {
      this.modalTitle = 'Tempoh Sah Laku Kurang Dari 6 Bulan';
      this.showBiometricModal = false;
      this.showModal = true;
      this.showModalAlert = true;
      this.openBiometricAfterAlert = true;
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.showModalAlert = false;

    if (this.openBiometricAfterAlert) {
      this.showBiometricModal = true;
      this.openBiometricAfterAlert = false;
    } else {
      this.showBiometricModal = false;
      // this.router.navigate(['../maklumat-profil-ibc'], { relativeTo: this.route });
    }
  }
}
