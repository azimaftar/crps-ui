import { Component } from '@angular/core';
import { CoreuiModalComponent } from '../../../../core/components/coreui-modal/coreui-modal.component';

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
  selector: 'app-imbasan-cap-jari-status-imbasan',
  imports: [ContainerComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,            // <c-row>
    ColComponent,
    ButtonDirective,
    CoreuiModalComponent
  ],
  templateUrl: './imbasan-cap-jari-status-imbasan.component.html',
  styleUrl: './imbasan-cap-jari-status-imbasan.component.scss'
})
export class ImbasanCapJariStatusImbasanComponent {

  openModal: string | null = null;

  open(modalId: string) {
    this.openModal = modalId;
  }

  close() {
    this.openModal = null;
  }
}
