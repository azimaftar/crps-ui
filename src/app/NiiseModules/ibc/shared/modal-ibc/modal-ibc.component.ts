import { Component } from '@angular/core';
import {
  ButtonCloseDirective,
  ButtonDirective,
  ModalModule,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective
} from '@coreui/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-ibc',
  standalone:true,
  imports: [
    ButtonDirective,
    ModalToggleDirective,
    ModalComponent,
    ModalModule,
    ModalHeaderComponent,
    ModalTitleDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent,
    CommonModule
  ],
  templateUrl: './modal-ibc.component.html',
  styleUrl: './modal-ibc.component.scss'
})
export class ModalIbcComponent {

}
