import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule, ModalModule } from '@coreui/angular';
@Component({
  selector: 'app-pengecualian-biometrik',
  imports: [
    CommonModule,
    ModalModule,
    ButtonModule,
  ],
  templateUrl: './pengecualian-biometrik.component.html',
  styleUrl: './pengecualian-biometrik.component.scss'
})
export class PengecualianBiometrikComponent {
  isVisible = false;
  catatan = '';

  @Output() onDecision = new EventEmitter<{ decision: string, catatan: string }>();
  @Output() onClose = new EventEmitter<void>();

  constructor() { }

  /**
   * Open the modal
   */
  openModal() {
    this.isVisible = true;
  }

  /**
   * Close the modal
   */
  closeModal() {
    this.isVisible = false;
    this.onClose.emit();
  }

  /**
   * Handle modal visibility change from CoreUI modal
   */
  onVisibleChange(visible: boolean): void {
    this.isVisible = visible;
    if (!visible) {
      this.closeModal();
    }
  }

  /**
   * Make decision and emit result
   */
  makeDecision(decision: string) {
    this.onDecision.emit({
      decision: decision,
      catatan: this.catatan
    });
    this.closeModal();
  }


  /**
   * Handle the result from Keputusan Penyelia modal
   */
  onKeputusanSimpan(result: { tindakan: string, kategori: string, catatan: string }) {
    console.log('Keputusan saved:', result);
    // Emit this data to parent component
    this.onDecision.emit({
      decision: `${result.tindakan} - ${result.kategori}`,
      catatan: result.catatan
    });
    this.closeModal();
  }

  /**
   * Handle keputusan modal close
   */
  onKeputusanClose() {
    console.log('Keputusan modal closed');
  }

  /**
   * Get current form data
   */
  getFormData(): { catatan: string } {
    return {
      catatan: this.catatan
    };
  }

  /**
   * Reset form data
   */
  resetForm(): void {
    this.catatan = '';
  }

  /**
   * Set form data
   */
  setFormData(data: { catatan?: string }): void {
    if (data.catatan !== undefined) {
      this.catatan = data.catatan;
    }
  }

  /**
   * Check if form has data
   */
  hasFormData(): boolean {
    return this.catatan.trim().length > 0;
  }
}
