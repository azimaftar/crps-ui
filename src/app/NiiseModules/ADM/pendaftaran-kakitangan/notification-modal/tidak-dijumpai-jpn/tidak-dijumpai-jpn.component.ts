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
  selector: 'app-tidak-dijumpai-jpn',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    FormModule
  ],
  templateUrl: './tidak-dijumpai-jpn.component.html',
  styleUrl: './tidak-dijumpai-jpn.component.scss'
})
export class TidakDijumpaiJpnComponent {

  @Input() TidakDijumpaiJpn: boolean = false; // <-- Accepts modal visibility from parent
  @Output() close = new EventEmitter<void>(); // <-- Sends event to parent to close modal

  closeModal(): void {
    this.close.emit(); // <-- Notifies parent to hide modal
  }
}
