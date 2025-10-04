import { Component, ViewChild } from '@angular/core';
import { CoreuiModalComponent } from '../../../../core/components/coreui-modal/coreui-modal.component';
import {
  ContainerComponent,
  CardComponent,           // <c-card>
  CardHeaderComponent,     // <c-card-header>
  CardBodyComponent,       // <c-card-body>
  RowComponent,            // <c-row>
  ColComponent,            // <c-col>
  ButtonDirective,
  ProgressComponent,          // [cButton]
} from '@coreui/angular';


@Component({
  selector: 'app-imbasan-biometrik-wajah-dan-iris-seamless',
  imports: [
    ContainerComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,            // <c-row>
    ColComponent,
    ButtonDirective,
    ProgressComponent,
    CoreuiModalComponent
  ],
  templateUrl: './imbasan-biometrik-wajah-dan-iris-seamless.component.html',
  styleUrl: './imbasan-biometrik-wajah-dan-iris-seamless.component.scss'
})
export class ImbasanBiometrikWajahDanIrisSeamlessComponent {
 openModal: string | null = null;

  open(modalId: string) {
    this.openModal = modalId;
  }

  close() {
    this.openModal = null;
  }
}