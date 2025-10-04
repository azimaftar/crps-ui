import { Component } from '@angular/core';
import {  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-terima-notifikasi',
  imports: [],
  templateUrl: './terima-notifikasi.component.html',
  styleUrl: './terima-notifikasi.component.scss'
})
export class TerimaNotifikasiComponent {
  @Output() tutup = new EventEmitter<void>();

  onTutup() {
    this.tutup.emit();
  }
}
