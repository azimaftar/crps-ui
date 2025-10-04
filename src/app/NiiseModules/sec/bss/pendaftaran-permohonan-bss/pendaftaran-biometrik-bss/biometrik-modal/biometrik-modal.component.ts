import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from '@coreui/angular';

@Component({
  selector: 'app-biometrik-modal',
  standalone: true, // 👈 make it standalone
  imports: [CommonModule, FormsModule, ModalModule], // 👈 import CoreUI + Forms
  templateUrl: './biometrik-modal.component.html',
  styleUrls: ['./biometrik-modal.component.scss'] // 👈 should be styleUrls
})
export class BiometrikModalComponent {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() confirmed = new EventEmitter<string>();

  selectedReason: string = '';

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  confirm() {
    this.confirmed.emit(this.selectedReason);
    this.close();
  }

  handleClose(event: boolean) {
    this.visible = event;
    this.visibleChange.emit(this.visible);
  }
  
}
