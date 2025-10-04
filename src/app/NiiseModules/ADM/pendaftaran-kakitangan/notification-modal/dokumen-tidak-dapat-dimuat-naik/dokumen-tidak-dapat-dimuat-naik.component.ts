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
  selector: 'app-dokumen-tidak-dapat-dimuat-naik',
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
  templateUrl: './dokumen-tidak-dapat-dimuat-naik.component.html',
  styleUrl: './dokumen-tidak-dapat-dimuat-naik.component.scss'
})
export class DokumenTidakDapatDimuatNaikComponent {

  @Input() maklumatCarian: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit(); 
  }

}
