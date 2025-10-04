import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
  ButtonModule
} from '@coreui/angular';
import { cilArrowTop, cilOptions } from '@coreui/icons';
import { getStyle } from '@coreui/utils';
import { Tabs2Module } from '@coreui/angular';
import { cilHome } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-bahagian-data-biometrik-ibu-jari-both',
  standalone: true,
  imports: [RowComponent,
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
    CardComponent,
    CardBodyComponent,
    ButtonModule,
    IconDirective],
  templateUrl: './bahagian-data-biometrik-ibu-jari-both.component.html',
  styleUrl: './bahagian-data-biometrik-ibu-jari-both.component.scss'
})
export class BahagianDataBiometrikIbuJariBothComponent {

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

  //Tabs config
  cilHome = cilHome;

  constructor(private route: ActivatedRoute,
    private router: Router) { }
  openCapJariKiri() {
     this.router.navigate(['ibc/pemeriksaan-keluar-kaunter-manual/bahagian-data-biometrik-empat-jari'], { queryParams: { jari: "kiri" } })
  }
  openCapJariStatusLulus() {
     this.router.navigate(['ibc/pemeriksaan-keluar-kaunter-manual/bahagian-data-biometrik-capjari-status'], { queryParams: { statusCapjari: "lulus" } })
  }
  openCapJariStatusGagal() {
     this.router.navigate(['ibc/pemeriksaan-keluar-kaunter-manual/bahagian-data-biometrik-capjari-status'], { queryParams: { statusCapjari: "gagal" } })
  }
}
