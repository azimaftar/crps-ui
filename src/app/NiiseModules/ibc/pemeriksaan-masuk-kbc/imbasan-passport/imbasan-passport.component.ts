import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RujukPenyeliaComponent } from '../modal/rujuk-penyelia/rujuk-penyelia.component';
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
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective,
  ButtonCloseDirective,
  //c-dash
  CardComponent,
  CardBodyComponent,
  ButtonModule,
} from '@coreui/angular';
import { cilArrowTop, cilOptions } from '@coreui/icons';
import { getStyle } from '@coreui/utils';
import { Tabs2Module } from '@coreui/angular';
import { cilHome } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-imbasan-passport',
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
        CommonModule,
        ModalToggleDirective,
        ModalComponent,
        ModalHeaderComponent,
        ModalTitleDirective,
        ButtonCloseDirective,
        ModalBodyComponent,
        ModalFooterComponent,
        CardComponent,
        CardBodyComponent,
        ButtonModule,
        RujukPenyeliaComponent
  ],
  templateUrl: './imbasan-passport.component.html',
  styleUrl: './imbasan-passport.component.scss'
})
export class ImbasanPassportComponent {
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
  modalTitle: string = '';

  handleChange($event: string | number | undefined) {
    console.log('handleChange', $event);
  }

  //Value passed
  docType: string = '';
  tindakanPenyeliaForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(this.docType);
      this.docType = params['docType'];
    })

    // forms to send to api
    this.tindakanPenyeliaForm = this.fb.group({
      n3xitBranch: 'BRC123',
      txnDate: '2025-06-11',
      txnTime: '2025-06-11T14:30:00',
      txnCode: '',
      visitorType: '',
      docType: 'P - Passport',
      docNo: 'A0000002',
      kpNo: '980330025489',
      kpType: 'IC',
      name: 'Mohd Russaini Bin Idrus',
      issueDatePassport: '1992-01-20',
      expiryDate: '2028-01-20',
      nationality: 'USA',
      countryIssue: 'Malaysia',
      dob: '1998-03-30',
      gender: 'Lelaki',
      printedName: 'Mohd Russaini Bin Idrus',
      journeyTyp: 'One - way',
      visaNo: 'V12345678',
      visaCodeType: 'Tourist',
      visaExpiryDate: '2025-12-31',
      visaIssueDate: '2025-04-05T10:00:00',
      visaName: 'Visa1',
      visaDob: '1998-03-30',
      visaGender: 'Lelaki',
      visaNationality: 'Malaysia',
      pasNo: 'P12345678',
      pasType: 'Biasa',
      pasExpiryDate: '2025-12-31T23:59:59',
      noFtf: 'FTF123',
      indFtf: 'Y',
      expiryFtf: '2026-12-31T23:59:59',
      reasonCode: 'TRAVEL',
      reasonRemarks: 'Business trip to London.'
    });
  }

  onTutupClick(): void {
    switch (this.docType) {
      case 'passport':
        this.modalTitle = 'Dokumen Gagal Imbasan';
        break;
      case 'kadABTC':
        this.modalTitle = 'Kad ABTC Gagal Imbasan';
        break;
      case 'kodQR':
        this.modalTitle = 'Kod QR Gagal Dibaca';
        break;
      default:
        this.modalTitle = '';
    }

    console.log('Modal Title:', this.modalTitle);

  }

  

  //modal
  @ViewChild(RujukPenyeliaComponent) rujukPenyelia!: RujukPenyeliaComponent;
  openSharedModal() {
    this.rujukPenyelia.openModal();
  }

  openProfilPengembara() {
    this.router.navigate(['ibc/pemeriksaan-masuk/maklumat-profil-pengembara'], { queryParams: { docType: this.docType } })
  }
}
