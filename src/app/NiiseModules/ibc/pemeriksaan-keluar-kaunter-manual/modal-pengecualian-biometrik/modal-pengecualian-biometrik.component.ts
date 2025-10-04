import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule, ModalModule } from '@coreui/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-pengecualian-biometrik',
  standalone: true,
  imports: [CommonModule,
    ModalModule,
    ButtonModule,],
  templateUrl: './modal-pengecualian-biometrik.component.html',
  styleUrl: './modal-pengecualian-biometrik.component.scss'
})
export class ModalPengecualianBiometrikComponent {

isVisible = false;
  catatan = '';

  @Output() onDecision = new EventEmitter<{ decision: string, catatan: string }>();
  @Output() onClose = new EventEmitter<void>();

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  /**
   * Open the modal
   */
  openModal() {
    this.isVisible = true;
  }

  /**
   * Close the modal with routing (for OK button)
   */
  closeModal() {
    this.router.navigate(['/ibc/pemeriksaan-keluar-kaunter-manual/maklumat-profil-maklumat-profil-pengembara']);
  }

  /**
   * Just close the modal without routing (for X button)
   */
  justCloseModal() {
    this.isVisible = false;
    this.onClose.emit();
  }

  /**
   * Handle modal visibility change from CoreUI modal
   */
  onVisibleChange(visible: boolean): void {
    this.isVisible = visible;
    if (!visible) {
      // When modal closes by other means, just emit close event
      this.onClose.emit();
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