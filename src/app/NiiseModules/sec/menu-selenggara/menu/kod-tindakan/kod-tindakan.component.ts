import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@coreui/icons-angular';
import {
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  CardModule,
  GridModule,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,
} from '@coreui/angular';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { KodService } from '../../../../../services/MenuSelenggara/KodService';

@Component({
  selector: 'app-kod-tindakan',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    CardModule,
    GridModule,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    IconModule,
  ],
  templateUrl: './kod-tindakan.component.html',
  styleUrls: ['../menu.component.scss']
})
export class KodTindakanComponent {
  // Mode: tambah | kemaskini | batal | lupus
  mode: 'tambah' | 'kemaskini' | 'batal' | 'lupus' = 'tambah';
  title = 'Kod Tindakan';

  // Form fields
  kod: string = '';
  kategori: string = '';
  keteranganbm: string = '';
  keteranganbi: string = '';
  catatan = ''; // only for batal/lupus

  // Modal state
  modalVisible = false;
  modalMessage = '';
  navigateAfterOk: boolean = false;

  // Validation errors
  errors = { kod: false, kategori: false, keteranganbm: false, keteranganbi: false, catatan: false };

  constructor(private router: Router, private kodService: KodService) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { selectedItem?: any, mode?: any };

    if (state?.selectedItem) {
      this.mode = state.mode || 'kemaskini';
      const item = state.selectedItem;

      this.kod = item.actionCode || '';
      this.kategori = item.actCat || '';
      this.keteranganbm = item.actionBmDesc || '';
      this.keteranganbi = item.actionBiDesc || ''; 
    }
  }

  // Save form action
saveForm() {
  // Reset errors
  this.errors = { kod: false, kategori: false, keteranganbm: false, keteranganbi: false, catatan: false };
  let valid = true;

  if (!this.kod.trim()) { this.errors.kod = true; valid = false; }
  if (!this.kategori.trim()) { this.errors.kategori = true; valid = false; }
  if (!this.keteranganbm.trim()) { this.errors.keteranganbm = true; valid = false; }
  if (!this.keteranganbi.trim()) { this.errors.keteranganbi = true; valid = false; }

  if ((this.mode === 'batal' || this.mode === 'lupus') && !this.catatan.trim()) {
    this.errors.catatan = true;
    valid = false;
  }

  if (!valid) {
    this.modalMessage = 'Sila isi semua ruangan wajib.';
    this.modalVisible = true;
    this.navigateAfterOk = false;
    return;
  }

  // 🔹 Base payload
const payload: any = {
  refCode: 'Kod Tindakan',           // changed from 'Kod NAP'
  code: this.kod,                    // e.g. "A03"
  ctznshipCat: this.kategori, // default to 'C' if not bound to dropdown
  descBM: this.keteranganbm,         // e.g. "Tindakan BM"
  descBI: this.keteranganbi,         // e.g. "Action EN"
  createId: 'zaidi',                 // backend expects user id
  sysInd: this.mode === 'tambah' ? '1' : '0'
};


  console.log('Payload:', payload);

  if (this.mode === 'tambah') {
    this.kodService.saveKod(payload).subscribe({
      next: (res) => this.handleResponse(res),
      error: () => this.handleError()
    });
  } else if (this.mode === 'kemaskini') {
    console.log("Payload sent to backend (kemaskini):", payload);

    this.kodService.updateKodTindakan(payload).subscribe({
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
    if (step.route) {
      this.router.navigate([step.route]);
    }
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }
}
