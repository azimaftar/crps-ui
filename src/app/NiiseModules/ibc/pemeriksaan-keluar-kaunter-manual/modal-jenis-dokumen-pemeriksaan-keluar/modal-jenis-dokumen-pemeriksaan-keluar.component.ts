import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  ModalModule,
  ButtonModule,
  GridModule,
  FormModule
} from '@coreui/angular';

@Component({
  selector: 'app-modal-jenis-dokumen-pemeriksaan-keluar',
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    ButtonModule,
    GridModule,
    FormModule
  ],
  templateUrl: './modal-jenis-dokumen-pemeriksaan-keluar.component.html',
  styleUrl: './modal-jenis-dokumen-pemeriksaan-keluar.component.scss'
})
export class ModalJenisDokumenPemeriksaanKeluarComponent {
  isVisible = false;
  catatan = '';

  // Open modal method
  openModal(): void {
    this.isVisible = true;
  }

  // Close modal method
  closeModal(): void {
    this.isVisible = false;
  }

  // Handle visibility changes from CoreUI modal
  onVisibleChange(visible: boolean): void {
    this.isVisible = visible;
    if (!visible) {
      this.closeModal();
    }
  }

  // Handle OK button click
  onOkClick(): void {
    console.log('Catatan:', this.catatan);
    this.closeModal();
  }

  // Reset modal data
  resetModal(): void {
    this.catatan = '';
  }
}