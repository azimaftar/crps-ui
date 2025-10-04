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
  selector: 'app-hubungi-jpn',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    FormModule
  ],
  templateUrl: './hubungi-jpn.component.html',
  styleUrl: './hubungi-jpn.component.scss'
})
export class HubungiJpnComponent {

  @Input() hubungiJpn: boolean = false; // <-- Accepts modal visibility from parent
  @Output() close = new EventEmitter<void>(); // <-- Sends event to parent to close modal

  closeModal(): void {
    this.close.emit(); // <-- Notifies parent to hide modal
  }

  

}
