import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from '@coreui/angular';

@Component({
  selector: 'app-modal-hantar',
  standalone: true,
  imports: [CommonModule, ModalModule],
  templateUrl: './modal-hantar.component.html',
  styleUrls: [
    '../../../../../bkp.scss',
    '../../../../pengurusan-roaster.component.scss'],
})
export class ModalHantarComponent {
  @Input() isSuccessModalVisible = false;
  @Output() modalClosed = new EventEmitter<void>();

  onSuccessModalOk() {
    this.isSuccessModalVisible = false;
    this.modalClosed.emit();
  }

  onVisibleChange(visible: boolean) {
    this.isSuccessModalVisible = visible;
    if (!visible) {
      this.modalClosed.emit();
    }
  }
}
