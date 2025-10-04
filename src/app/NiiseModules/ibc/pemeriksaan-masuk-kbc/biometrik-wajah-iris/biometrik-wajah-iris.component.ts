import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PengecualianBiometrikComponent } from '../modal/pengecualian-biometrik/pengecualian-biometrik.component';
import {
  ButtonDirective,
  ColComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  RowComponent,
  TemplateIdDirective,
  WidgetStatAComponent
} from '@coreui/angular';
import { cilArrowTop, cilOptions } from '@coreui/icons';
import { getStyle } from '@coreui/utils';
import { Tabs2Module } from '@coreui/angular';
import { cilHome } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormSelectDirective,
  ButtonCloseDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective
} from '@coreui/angular';
import {
} from '@coreui/angular';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-biometrik-wajah-iris',
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
        ReactiveFormsModule,
        FormsModule, FormDirective,
        FormLabelDirective,
        FormControlDirective,
        FormSelectDirective,
        ButtonDirective,
        ModalToggleDirective,
        ModalComponent,
        ModalHeaderComponent,
        ButtonCloseDirective,
        ModalBodyComponent,
        ModalFooterComponent,
        ModalTitleDirective,
        PengecualianBiometrikComponent,
        NgIf
  ],
  templateUrl: './biometrik-wajah-iris.component.html',
  styleUrl: './biometrik-wajah-iris.component.scss'
})
export class BiometrikWajahIrisComponent {
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

  @ViewChild(PengecualianBiometrikComponent) pengecualianBiometrik!: PengecualianBiometrikComponent;
  openPengecualianBiometrik() {
    this.pengecualianBiometrik.openModal();
  }

  //Value passed
  statusImbas: string = '';
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.statusImbas = params['statusImbas'] || '';
      console.log('statusImbas:', this.statusImbas); // for debugging
    });
  }

  openKeputusanImbasanGagal() {
    this.router.navigate(['ibc/pemeriksaan-masuk-kbc/biometrik-wajah-iris'], { queryParams: { statusImbas: "gagal" } })
  }
  openKeputusanImbasanLulusSah() {
    this.router.navigate(['ibc/pemeriksaan-masuk-kbc/biometrik-wajah-iris'], { queryParams: { statusImbas: "sah" } })
  }
  openKeputusanImbasanLulusSimpan() {
    this.router.navigate(['ibc/pemeriksaan-masuk-kbc/biometrik-wajah-iris'], { queryParams: { statusImbas: "simpan" } })
  }
  openCapJari() {
    this.router.navigate(['ibc/pemeriksaan-masuk-kbc/biometrik-capjari'], { queryParams: { jari: "kanan" } })
  }
}
