import { Component} from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import {
  ButtonCloseDirective,
  ButtonDirective,// [cButton]
  CardComponent,// <c-card>
  CardHeaderComponent,// <c-card-header>
  CardBodyComponent,//<c-card-body>
  ContainerComponent,// <c-container>
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalToggleDirective,
  RowComponent,// <c-row>
  ColComponent, // <c-col>
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  Tabs2Module
} from '@coreui/angular';
import { cilHome } from '@coreui/icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pemeriksaan-masuk-egate',
  standalone: true,
  imports: [
    ButtonDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    ContainerComponent,
    ModalToggleDirective,
    ModalComponent,
    ModalHeaderComponent,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent, 
    ReactiveFormsModule,
    RowComponent, 
    FormsModule, 
    FormDirective, 
    ColComponent, 
    FormLabelDirective, 
    FormControlDirective,
    Tabs2Module 
  ],
  templateUrl: './pemeriksaan-masuk-egate.component.html',
  styleUrls: ['./pemeriksaan-masuk-egate.component.scss']
})
export class PemeriksaanMasukEgateComponent{
  //Tabs config
  cilHome = cilHome;
  modalTitle: string = '';

  handleChange($event: string | number | undefined) {
    console.log('handleChange', $event);
  }

  //Value passed
  docType: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(this.docType);
      this.docType = params['docType'];
    })
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

}