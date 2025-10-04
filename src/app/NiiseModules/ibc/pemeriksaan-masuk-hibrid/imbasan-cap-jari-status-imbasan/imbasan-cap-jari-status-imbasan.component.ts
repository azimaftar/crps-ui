import { Component } from '@angular/core';
import {ModalNotifikasiStandardComponent} from '../modal-notifikasi-standard/modal-notifikasi-standard.component';

// CoreUI Imports
import {
  ContainerComponent,
  CardComponent,           // <c-card>
  CardHeaderComponent,     // <c-card-header>
  CardBodyComponent,       // <c-card-body>
  RowComponent,            // <c-row>
  ColComponent,            // <c-col>
  ButtonDirective,          // [cButton]
  ModalComponent,           // <c-modal>
} from '@coreui/angular';

@Component({
  selector: 'app-imbasan-cap-jari',
  imports: [ContainerComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,            // <c-row>
    ColComponent,
    ButtonDirective,
    ModalNotifikasiStandardComponent
  ],
  templateUrl: './imbasan-cap-jari-status-imbasan.component.html',
  styleUrl: './imbasan-cap-jari-status-imbasan.component.scss'
})
export class ImbasanCapJariStatusImbasanComponent {

  showModal: boolean = true;
  //currentResponseCode: string =''; //default
  currentResponseCode: string ='WFR-IBC-02.9-10'; //WFR-IBC-02.9-10

  openModal(code: string) {
    this.currentResponseCode = code;
    this.showModal = true;
  }

}
