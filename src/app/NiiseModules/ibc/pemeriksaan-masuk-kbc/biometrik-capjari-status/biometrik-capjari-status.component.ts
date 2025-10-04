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
  ButtonModule
} from '@coreui/angular';
import { cilArrowTop, cilOptions } from '@coreui/icons';
import { getStyle } from '@coreui/utils';
import { Tabs2Module } from '@coreui/angular';
import { cilHome } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { NgIf } from '@angular/common';
import { PengecualianBiometrikComponent } from '../modal/pengecualian-biometrik/pengecualian-biometrik.component';

@Component({
  selector: 'app-biometrik-capjari-status',
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
        PengecualianBiometrikComponent,
        CardComponent,
        CardBodyComponent,
        ButtonModule
  ],
  templateUrl: './biometrik-capjari-status.component.html',
  styleUrl: './biometrik-capjari-status.component.scss'
})
export class BiometrikCapjariStatusComponent {
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
    statusCapjari: string = '';
    constructor(private route: ActivatedRoute,
      private router: Router) { }
  
    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.statusCapjari = params['statusCapjari'] || '';
        console.log('statusCapjari:', this.statusCapjari); // for debugging
      });
    }
  
    openPengembara() {
      this.router.navigate(['ibc/pemeriksaan-masuk-kbc/maklumat-profil'], { queryParams: { maklumat: "lengkap" } })
    }
  
    @ViewChild(PengecualianBiometrikComponent) pengecualianBiometrik!: PengecualianBiometrikComponent;
    openPengecualianBiometrik() {
      this.pengecualianBiometrik.openModal();
    }
}
