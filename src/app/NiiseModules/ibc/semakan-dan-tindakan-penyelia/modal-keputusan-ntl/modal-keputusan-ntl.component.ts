import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// CoreUI Imports
import {
  ModalModule,
  ButtonModule,
  FormModule,
  GridModule
} from '@coreui/angular';

import { SemakanTindakanPenyeliaService } from '../../../../core/services/ibc-services/semakan-tindakan-penyelia.service';

@Component({
  selector: 'app-modal-keputusan-ntl',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    ButtonModule,
    FormModule,
    GridModule
  ],
  templateUrl: './modal-keputusan-ntl.component.html',
  styleUrl: './modal-keputusan-ntl.component.scss'
})
export class ModalKeputusanNtlComponent {
  //Set value
  @Input() uuidRef!: string;
  @Input() vesselName!: string;
  @Input() branchCode!: string;


  isVisible = false;
  selectedTindakan = ''; // Initialize as empty string to match "Sila Pilih"
  selectedKategori = ''; // Initialize as empty string to match "Sila Pilih"
  catatan = '';


  @Output() onSimpan = new EventEmitter<{
    tindakan: string,
    kategori: string,
    catatan: string,

    //Untuk maklumatNTL
    uuidRef?: string;
    vesselName?: string;
    branchCode?: string;
  }>();
  @Output() onClose = new EventEmitter<void>();

  constructor(private penyeliaService: SemakanTindakanPenyeliaService) { }

  /**
   * Open the modal
   */
  openModal() {
    this.resetForm(); // Reset form when opening
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
   * Save the decision and emit result
   */
  simpanKeputusan() {
    const bodySimpan = {
      uuidRef: this.uuidRef,
      ntlCode: '1',
      reasonRemarks: this.catatan || '',
      status: '0',
      createId: 'CURRENT_USER_ID',
      createDate: new Date().toISOString(),
      updateId: 'CURRENT_USER_ID',
      updateDate: new Date().toISOString(),
      vesselName: this.vesselName || '',
      branchCode: this.branchCode || '',
      ntlCtgCode: this.selectedKategori || '1',
      reason: '1'
    };

    this.penyeliaService.postMaklumatNTL(bodySimpan).subscribe({
      next: (res) => {
        console.log('Maklumat NTL berjaya dihantar!');
        // ✅ After simpanKeputusan success, call tindakan
        this.MaklumatTindakan();
      },
      error: (err) => {
        console.error('Error posting NTL:', err);
      }
    });
  }

  MaklumatTindakan() {
    const bodyTindakan = {
      uid: this.uuidRef,
      reasonCode: this.selectedTindakan,
      reasonRemark: this.catatan || '',
      reasonNTL: this.selectedKategori,
      spvCurrentLoginId: 'SPV_ID',
      currentLoginId: 'CURRENT_USER_ID',
    };

    this.penyeliaService.postMaklumatTindakan(bodyTindakan).subscribe({
      next: (res) => {
        console.log('Maklumat Tindakan berjaya dihantar!');
        // ✅ Only close modal after tindakan success
        this.closeModal();
      },
      error: (err) => {
        console.error('Error posting Tindakan:', err);
      }
    });
  }



  /**
   * Reset form data
   */
  private resetForm() {
    this.selectedTindakan = ''; // Reset to empty string
    this.selectedKategori = ''; // Reset to empty string
    this.catatan = '';
  }

  /**
   * Get current form data
   */
  getFormData(): { tindakan: string, kategori: string, catatan: string } {
    return {
      tindakan: this.selectedTindakan,
      kategori: this.selectedKategori,
      catatan: this.catatan
    };
  }

  /**
   * Set form data
   */
  setFormData(data: { tindakan?: string, kategori?: string, catatan?: string }): void {
    if (data.tindakan !== undefined) {
      this.selectedTindakan = data.tindakan;
    }
    if (data.kategori !== undefined) {
      this.selectedKategori = data.kategori;
    }
    if (data.catatan !== undefined) {
      this.catatan = data.catatan;
    }
  }

  /**
   * Check if form has data
   */
  hasFormData(): boolean {
    return !!(this.selectedTindakan || this.selectedKategori || this.catatan.trim());
  }

  /**
 * Handle Tindakan Penyelia selection change
 * Reset kategori when switching away from NTL
 */
  onTindakanChange(): void {
    // Reset kategori selection when tindakan changes away from NTL
    if (this.selectedTindakan !== 'NTL') {
      this.selectedKategori = '';
    }
  }
}

