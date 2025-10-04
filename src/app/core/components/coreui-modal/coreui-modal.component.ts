import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCloseDirective, ButtonDirective, ModalBodyComponent, ModalComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ModalToggleDirective } from '@coreui/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coreui-modal',
  imports: [
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ModalBodyComponent,
    ModalFooterComponent,
    ButtonDirective,
    CommonModule,
    FormsModule,
    ButtonCloseDirective,
    ModalToggleDirective
  ],
  templateUrl: './coreui-modal.component.html',
  styleUrl: './coreui-modal.component.scss'
})
export class CoreuiModalComponent {
  @Input() title: string = 'Modal Title';
  @Input() body: string = '';
  @Input() show: boolean = false;

  @Output() close = new EventEmitter<void>();

  handleClose() {
    this.show = false; // important: hide internally
    this.close.emit(); // inform parent to clear modal ID
  }
}
