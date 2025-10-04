import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalPengecualianBiometrikComponent } from '../modal-pengecualian-biometrik/modal-pengecualian-biometrik.component'; 
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
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-bahagian-data-biometrik',
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
      ModalPengecualianBiometrikComponent,
      NgIf
  ],
  templateUrl: './bahagian-data-biometrik.component.html',
  styleUrl: './bahagian-data-biometrik.component.scss'
})
export class BahagianDataBiometrikComponent implements OnInit {
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

  // Error modal properties
  isErrorModalVisible: boolean = false;
  errorMessage: string = '';
  errorModalButtonText: string = 'OK';

  // Value passed
  statusImbas: string = '';

  @ViewChild(ModalPengecualianBiometrikComponent) ModalPengecualianBiometrikComponent!: ModalPengecualianBiometrikComponent;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.statusImbas = params['statusImbas'] || '';
      console.log('statusImbas:', this.statusImbas); // for debugging
      
      // Check if statusImbas is "gagal" and show appropriate error modal
      if (this.statusImbas === 'gagal') {
        this.showGagalErrorModal();
      }
    });
  }

  handleChange($event: string | number | undefined) {
    console.log('handleChange', $event);
  }

  openPengecualianBiometrik() {
    this.ModalPengecualianBiometrikComponent.openModal();
  }

  // Method to show error modal when statusImbas is "gagal"
  private showGagalErrorModal(): void {
    // Test Case 1: Pengambilan Biometrik Wajah dan Iris Gagal (IBC-S054) - ACTIVE
    // this.errorMessage = 'Pengambilan Biometrik Wajah dan Iris Gagal';
    
    // Test Case 2: Pengesahan Biometrik Wajah Gagal (IBC-S031) - UNCOMMENT TO TEST
     this.errorMessage = 'Pengesahan Biometrik Wajah Gagal';

    this.errorModalButtonText = 'OK';
    this.isErrorModalVisible = true; //Edit this to true to view the popup error message
  }

  // Method to close error modal
  closeErrorModal(): void {
    this.isErrorModalVisible = false;
    // Optional: Navigate somewhere after closing modal
    // this.router.navigate(['some-route']);
  }

  getStatusDisplay(): string {
    switch (this.statusImbas) {
      case 'gagal':
        return 'GAGAL';
      case 'sah':
      case 'simpan':
        return 'LULUS';
      case 'imbas':
        return 'DALAM IMBASAN';
      default:
        return 'STATUS IMBASAN';
    }
  }

  openKeputusanImbasanGagal() {
    this.router.navigate(['ibc/pemeriksaan-keluar-kaunter-manual/bahagian-data-biometrik'], { queryParams: { statusImbas: "gagal" } })
  }

  openKeputusanImbasanLulusSah() {
    this.router.navigate(['ibc/pemeriksaan-keluar-kaunter-manual/bahagian-data-biometrik'], { queryParams: { statusImbas: "sah" } })
  }

  openKeputusanImbasanLulusSimpan() {
    this.router.navigate(['ibc/pemeriksaan-keluar-kaunter-manual/bahagian-data-biometrik'], { queryParams: { statusImbas: "simpan" } })
  }

  openCapJari() {
    this.router.navigate(['ibc/pemeriksaan-keluar-kaunter-manual/bahagian-data-biometrik-empat-jari'], { queryParams: { jari: "kanan" } })
  }
}