// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-tapisan-keselamatan',
//   imports: [CommonModule],
//   templateUrl: './tapisan-keselamatan.component.html',
//   styleUrl: './tapisan-keselamatan.component.scss'
// })
// export class TapisanKeselamatanComponent {
//  showPopup = false;
//   popupMessage = ''; // holds the current message

//   openPopup(message: string) {
//     this.popupMessage = message;
//     this.showPopup = true;
//   }

//   closePopup() {
//     this.showPopup = false;
//     this.popupMessage = '';
//   }
// }
import { Component } from '@angular/core';
import {
  ButtonCloseDirective,
  ButtonDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective
} from '@coreui/angular';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './tapisan-keselamatan.component.html',
  standalone: true,
  imports: [
    ButtonDirective,
    ModalToggleDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent
  ]
})
export class TapisanKeselamatanComponent {
  popupMessage = '';

  // Set the message just before opening the modal
  openModalWithMessage(message: string) {
    this.popupMessage = message;
  }
}
