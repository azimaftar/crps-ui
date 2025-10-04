import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  selector: 'app-maklumat-carian-tidak-wujud',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    FormModule
  ],
  templateUrl: './maklumat-carian-tidak-wujud.component.html',
  styleUrl: './maklumat-carian-tidak-wujud.component.scss'
})
export class MaklumatCarianTidakWujudComponent {

  @Input() maklumatCarian: boolean = false; // <-- Accepts modal visibility from parent
  @Output() close = new EventEmitter<void>(); // <-- Sends event to parent to close modal

  closeModal(): void {
    this.close.emit(); // <-- Notifies parent to hide modal
  }

}
