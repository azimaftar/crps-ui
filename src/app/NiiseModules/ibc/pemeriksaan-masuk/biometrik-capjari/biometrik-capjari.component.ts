import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  TemplateIdDirective,
  WidgetStatAComponent,

  //c-dash
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  ButtonModule,
} from '@coreui/angular';
import { cilArrowTop, cilOptions } from '@coreui/icons';
import { getStyle } from '@coreui/utils';
import { Tabs2Module } from '@coreui/angular';
import { cilHome } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-biometrik-capjari',
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
    IconDirective,
    NgIf,
    CardComponent,
    CardBodyComponent,
    ButtonModule
  ],
  templateUrl: './biometrik-capjari.component.html',
  styleUrl: './biometrik-capjari.component.scss'
})
export class BiometrikCapjariComponent {
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

  handleChange($event: string | number | undefined) {
    console.log('handleChange', $event);
  }

  //Value passed
  jari: string = '';
  statusImbas: string = '';
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.jari = params['jari'] || '';
      console.log('jari:', this.jari); // for debugging
    });
    this.route.queryParams.subscribe(params => {
      this.statusImbas = params['statusImbas'] || '';
      console.log('statusImbas:', this.statusImbas); // for debugging
    });
  }

  openCapJariKiri() {
    this.router.navigate(['ibc/pemeriksaan-masuk/biometrik-capjari'], { queryParams: { jari: "kiri" } })
  }
  openCapJariKanan() {
    this.router.navigate(['ibc/pemeriksaan-masuk/biometrik-capjari'], { queryParams: { jari: "kanan" } })
  }
  openCapJariBoth() {
    this.router.navigate(['ibc/pemeriksaan-masuk/biometrik-capjari-both'])
  }
  openWajahIris() {
    this.router.navigate(['ibc/pemeriksaan-masuk/biometrik-wajah'], { queryParams: { statusImbas: "imbas" } })
  }
}
