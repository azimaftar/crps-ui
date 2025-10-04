import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
  FormModule
} from '@coreui/angular';

@Component({
  selector: 'app-modal-scan-unsuccessful',
  templateUrl: './modal-scan-unsuccessful.component.html',
  styleUrls: ['../../bkp.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    FormModule
  ],
})
export class ModalScanUnsuccessfulComponent {
  @Input() Hantarmodel: boolean = false; // <-- Accepts modal visibility from parent
  @Output() close = new EventEmitter<void>(); // <-- Sends event to parent to close modal

  closeModal(): void {
    this.close.emit(); // <-- Notifies parent to hide modal
  }
}
