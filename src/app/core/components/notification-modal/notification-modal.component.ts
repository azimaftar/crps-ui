import { Component,Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ModalComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalBodyComponent,
  ModalFooterComponent,
  ButtonDirective
} from '@coreui/angular';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-notification-modal',
  standalone: true,
  imports: [
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ModalBodyComponent,
    ModalFooterComponent,
    ButtonDirective,
    CommonModule,
    FormsModule
  ],
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss'],
})
export class NotificationModalComponent {
handleClose() {
throw new Error('Method not implemented.');
}
  @Input() modalTitle = '';
  @Input() showBiometricModal = false;
  @Input() showModalAlert = false;
  
  exceptionReason: string = '';
  private _visible = false;
  @Input() 
  set visible(value: boolean) {
    this._visible = value;
  }
  get visible(): boolean {
    return this._visible;
  }

  @Output() close = new EventEmitter<void>();

  confirm() {
    this.close.emit();
  }
}
