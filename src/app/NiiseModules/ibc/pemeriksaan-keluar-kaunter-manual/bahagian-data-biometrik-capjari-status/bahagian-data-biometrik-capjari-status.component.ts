import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ButtonDirective,
  ColComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  RowComponent,
  TemplateIdDirective,
  WidgetStatAComponent,
  CardComponent,
  CardBodyComponent,
  ButtonModule,
  ModalComponent,
  ModalHeaderComponent,
  ModalBodyComponent,
  ModalFooterComponent,
  ModalTitleDirective
} from '@coreui/angular';
import { cilArrowTop, cilOptions } from '@coreui/icons';
import { getStyle } from '@coreui/utils';
import { Tabs2Module } from '@coreui/angular';
import { cilHome } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { NgIf } from '@angular/common';
import { ModalPengecualianBiometrikComponent } from '../modal-pengecualian-biometrik/modal-pengecualian-biometrik.component';

@Component({
  selector: 'app-bahagian-data-biometrik-capjari-status',
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    WidgetStatAComponent,
    TemplateIdDirective,
    IconDirective,
    DropdownComponent,
    ButtonDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    RouterLink,
    Tabs2Module,
    IconDirective,
    NgIf,
    ModalPengecualianBiometrikComponent,
    CardComponent,
    CardBodyComponent,
    ButtonModule,
    ModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalTitleDirective
  ],
  templateUrl: './bahagian-data-biometrik-capjari-status.component.html',
  styleUrl: './bahagian-data-biometrik-capjari-status.component.scss'
})
export class BahagianDataBiometrikCapjariStatusComponent implements OnInit {

  // Widgets config
  icons = { cilOptions, cilArrowTop };

  data: any = {};
  options: any = {};

  datasets = [
    {
      label: 'My First dataset',
      backgroundColor: 'transparent',
      borderColor: 'rgba(255,255,255,.55)',
      pointBackgroundColor: getStyle('--cui-primary'),
      pointHoverBorderColor: getStyle('--cui-primary'),
      data: [65, 59, 84, 84, 51, 55, 40]
    }
  ];

  optionsDefault = {
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

  // Tabs config
  cilHome = cilHome;

  handleChange($event: string | number | undefined) {
    console.log('handleChange', $event);
  }

  // Value passed
  statusCapjari: string = '';
  showErrorModal: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.statusCapjari = params['statusCapjari'] || '';
      console.log('statusCapjari:', this.statusCapjari);
      
      // Show error modal if status is 'gagal' on first visit
      if (this.statusCapjari === 'gagal') {
        this.showErrorModal = true;
      }
    });
  }

  // Navigate to pengembara page
  openPengembara() {
    this.router.navigate(['ibc/pemeriksaan-keluar-kaunter-manual/maklumat-profil-maklumat-profil-pengembara'], { 
      queryParams: { maklumat: "lengkap" } 
    });
  }

  // Close error modal
  closeErrorModal(): void {
    this.showErrorModal = false;
  }

  // Open pengecualian biometrik modal
  @ViewChild(ModalPengecualianBiometrikComponent) ModalPengecualianBiometrikComponent!: ModalPengecualianBiometrikComponent;
  
  openPengecualianBiometrik() {
    this.ModalPengecualianBiometrikComponent.openModal();
  }
}