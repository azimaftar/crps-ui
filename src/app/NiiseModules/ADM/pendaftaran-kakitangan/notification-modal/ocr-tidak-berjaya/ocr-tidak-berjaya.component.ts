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
  selector: 'app-ocr-tidak-berjaya',
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
  templateUrl: './ocr-tidak-berjaya.component.html',
  styleUrl: './ocr-tidak-berjaya.component.scss'
})
export class OcrTidakBerjayaComponent {

  @Input() maklumatCarian: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit(); 
  }

}
