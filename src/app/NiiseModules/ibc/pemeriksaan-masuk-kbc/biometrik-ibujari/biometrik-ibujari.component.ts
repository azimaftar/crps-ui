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
  selector: 'app-biometrik-ibujari',
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
    CardComponent,
    CardBodyComponent,
    ButtonModule,
    IconDirective
  ],
  templateUrl: './biometrik-ibujari.component.html',
  styleUrl: './biometrik-ibujari.component.scss'
})
export class BiometrikIbujariComponent {
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
    this.router.navigate(['ibc/pemeriksaan-masuk-kbc/biometrik-capjari'], { queryParams: { jari: "kiri" } })
  }
  openCapJariStatusLulus() {
    this.router.navigate(['ibc/pemeriksaan-masuk-kbc/biometrik-capjari-status'], { queryParams: { statusCapjari: "lulus" } })
  }
  openCapJariStatusGagal() {
    this.router.navigate(['ibc/pemeriksaan-masuk-kbc/biometrik-capjari-status'], { queryParams: { statusCapjari: "gagal" } })
  }
}
