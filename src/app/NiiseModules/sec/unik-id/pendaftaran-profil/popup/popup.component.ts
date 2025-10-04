import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
  FormModule
} from '@coreui/angular';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['../../unik-id.component.scss'],
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
export class PopupComponent {
  @Input() HantarPengecualian: boolean = false;
  @Input() Hantarsubmit: boolean = false;
  @Input() Hantarreset: boolean = false;
  @Input() Hantarsimpan: boolean = false;
  @Output() close = new EventEmitter<void>(); 

   constructor(private router: Router) {}

  closeModal(): void {
    this.close.emit(); 
    // this.router.navigate(['/senarai-gantian-tugas']);
  }
}
