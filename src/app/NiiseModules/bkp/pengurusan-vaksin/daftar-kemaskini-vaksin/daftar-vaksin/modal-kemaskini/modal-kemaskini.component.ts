import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from '@coreui/angular';

@Component({
  selector: 'app-modal-kemaskini',
  standalone: true,
  imports: [
    CommonModule,
    ModalModule
  ],
  templateUrl: './modal-kemaskini.component.html',
  styleUrls: [
    '../../../../bkp.scss'
  ]
})
export class ModalKemaskiniComponent {
 @Input() isUpdateModalVisible: boolean = false;
  @Output() modalClosed = new EventEmitter<void>();

  onUpdateModal() {
  // this.isUpdateModalVisible = false;
  this.modalClosed.emit();
  }

  onVisibleChange(visible: boolean) {
    this.isUpdateModalVisible = visible;
    if (!visible) {
      this.modalClosed.emit();
    }
  }

}
