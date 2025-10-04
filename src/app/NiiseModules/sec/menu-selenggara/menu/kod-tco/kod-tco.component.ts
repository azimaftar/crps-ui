import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { KodService } from '../../../../../services/MenuSelenggara/KodService';
import { IconModule } from '@coreui/icons-angular';

import {
  CardComponent, CardBodyComponent, RowComponent, ColComponent,
  ButtonDirective, CardModule, GridModule,
  ModalComponent, ModalBodyComponent, ModalFooterComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-kod-tco',
  standalone: true,
  imports: [
    CommonModule, FormsModule, RouterModule,
    CardComponent, CardBodyComponent, RowComponent, ColComponent,
    ButtonDirective, CardModule, GridModule,
    ModalComponent, ModalBodyComponent, ModalFooterComponent,IconModule,
  ],
  templateUrl: './kod-tco.component.html',
  styleUrls: ['../menu.component.scss']
})
export class KodTcoComponent {
  title = 'Kod TCO';
 mode: 'tambah' | 'kemaskini' | 'batal' | 'lupus' = 'tambah';

  // Form fields
  kod: string = '';
  keterangan: string = '';
  tindakan: string = '';
  catatan = ''; // only for batal/lupus

  // Modal state
  modalVisible = false;
  modalMessage = '';
  navigateAfterOk: boolean = false;

  // Validation errors
  errors = { kod: false, keterangan: false, tindakan: false, catatan: false };

  constructor(private router: Router, private kodService: KodService) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { selectedItem?: any, mode?: any };

    if (state?.selectedItem) {
      this.mode = state.mode || 'kemaskini';
      const item = state.selectedItem;

      this.kod = item.tcoTypeCode || '';
      this.keterangan = item.desc1 || '';
      this.tindakan = item.inst1 || '';
    }
  }
  saveForm() {
    // Reset errors
    this.errors = { kod: false, keterangan: false, tindakan: false, catatan: false };
    let valid = true;

    if (!this.kod.trim()) { this.errors.kod = true; valid = false; }
    if (!this.keterangan.trim()) { this.errors.keterangan = true; valid = false; }
    if (!this.tindakan.trim()) { this.errors.tindakan = true; valid = false; }

    // Extra validation for batal & lupus
    if ((this.mode === 'batal' || this.mode === 'lupus') && !this.catatan.trim()) {
      this.errors.catatan = true;
      valid = false;
    }

    if (!valid) {
      this.modalMessage = 'Sila isi semua ruangan wajib.';
      this.modalVisible = true;
      return;
    }

    //  Build payload for Kod TCO
    const payload: any = {
      // refCode: 'Kod TCO',
      code: this.kod,
      desc: this.keterangan,
      act: this.tindakan,
      createId: 'zaidi', // nanti boleh ganti dengan login user
      sysInd: '1'
    };

    //  Call backend
     console.log('Payload:', payload);

  if (this.mode === 'tambah') {
    this.kodService.saveKod(payload).subscribe({
      next: (res) => this.handleResponse(res),
      error: () => this.handleError()
    });
  } else if (this.mode === 'kemaskini') {
    console.log("Payload sent to backend (kemaskini):", payload);

    this.kodService.updateKodTco(payload).subscribe({
      next: (res) => this.handleResponse(res),
      error: (err) => {
        console.error("Error from backend (kemaskini):", err);
        this.handleError();
      }
    });
  } else if (this.mode === 'batal' || this.mode === 'lupus') {
    console.log('Batal/Lupus payload:', { ...payload, catatan: this.catatan });
    this.modalMessage = `Data berjaya dihantar untuk ${this.mode}.`;
    this.modalVisible = true;
    this.navigateAfterOk = true;
  }
}
  
  private handleResponse(res: any) {
  console.log('Response:', res);

  const cleanRes = (res || '').toString().replace(/"/g, '').toUpperCase();

  if (cleanRes === 'CODE_EXISTS') {
    this.modalMessage = 'Kod telah tersedia. Sila gunakan kod lain.';
    this.navigateAfterOk = false;
  } else if (cleanRes.includes('UPDATED')) {
    this.modalMessage = 'Data telah berjaya dikemaskini.';
    this.navigateAfterOk = true;
  } else if (cleanRes.includes('INSERTED')) {
    this.modalMessage = 'Data berjaya disimpan.';
    this.navigateAfterOk = true;
  } else {
    this.modalMessage = 'Ralat tidak dijangka. Respon: ' + res;
    this.navigateAfterOk = false;
  }

  this.modalVisible = true;
}

  private handleError() {
  this.modalMessage = 'Ralat semasa menyimpan data.';
  this.modalVisible = true;
  this.navigateAfterOk = false;
}


  onModalOk() {
  this.modalVisible = false;
  if (this.navigateAfterOk) {
    this.router.navigate(['/sec/menu-selenggara/menu']);
  }
}


goBack() { this.router.navigate(['/sec/menu-selenggara/menu']); }

  // Stepper props
  currentStep = 2;
  steps = [
    { number: 1, title: 'Carian & Senarai Kod', route: '/sec/menu-selenggara/menu' },
    { number: 2, title: 'Maklumat Kod', route: '' },
  ];

  navigateTo(step: any) {
    this.currentStep = step.number;
    if (step.route) this.router.navigate([step.route]);
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }
}
