import { Component, inject } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keputusan-pengesyoran-permohonan',
  imports: [CommonModule, FormsModule],
  templateUrl: './keputusan-pengesyoran-permohonan.component.html',
  styleUrl: './keputusan-pengesyoran-permohonan.component.scss'
})
export class KeputusanPengesyoranPermohonanComponent {
  stepIndex: number = 3; // Default step

  showPopup: boolean = false;

  popupType: 'error' | 'confirm' | 'success' | null = null;
  popupMessage: string = '';

  formData = {
    status: '',
    catatan: '',
    nama: '',
    idPengguna: '',
    tarikhSemakan: '',
  };

  currentStep = 5;
  totalSteps = 5;

  steps = [
  { number: 1, title: 'Carian Permohonan', route: '/sec/kebenaran-ke-baitulmaqdis/pengesyoran-permohonan' },
  { number: 2, title: 'Maklumat Agensi', route: '/sec/kebenaran-ke-baitulmaqdis/pengesyoran-permohonan/pengesyoran-maklumat-agensi' },
  { number: 3, title: 'Senarai Individu', route: '/sec/kebenaran-ke-baitulmaqdis/pengesyoran-permohonan/pengesyoran-senarai-individu' },
  { number: 4, title: 'Maklumat Individu', route: '/sec/kebenaran-ke-baitulmaqdis/pengesyoran-permohonan/pengesyoran-maklumat-individu' },
  { number: 5, title: 'Keputusan Pengesyoran', route: '/sec/kebenaran-ke-baitulmaqdis/pengesyoran-permohonan/keputusan-pengesyoran-permohonan' },
];

  router = inject(Router);

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  goToStep(step: any): void {
    this.currentStep = step.number;
    this.router.navigate([step.route]);
  }

  next(): void {
    if (!this.showPopup && this.currentStep < this.steps.length) {
      this.currentStep++;
      this.router.navigate([this.steps[this.currentStep - 1].route]);
    }
  }

  prev(): void {
    if (!this.showPopup && this.currentStep > 1) {
      this.currentStep--;
      this.router.navigate([this.steps[this.currentStep - 1].route]);
    }
  }

  // Submit form dengan Angular form validation
  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.popupType = 'error';
      this.popupMessage = 'Medan mandatori diperlukan';
      this.showPopup = true;
      return;
    }

    // kalau semua valid → confirmation popup
    this.popupType = 'confirm';
    this.popupMessage = 'Adakah anda pasti?';
    this.showPopup = true;
  }

  // Tutup popup
  closePopup(form?: NgForm) {
    // Jika popup success → reset form dan kekal di step 3
    if (this.popupType === 'success') {
      this.formData = {
        status: '',
        catatan: '',
        nama: '',
        idPengguna: '',
        tarikhSemakan: '',
      };

      // Kalau nak clear juga UI form input
      if (form) {
        form.resetForm();
      }

      // pastikan tetap di step 3
      this.currentStep = 3;
      this.router.navigate(['/sec/kebenaran-ke-baitulmaqdis/pengesyoran-permohonan/keputusan-pengesyoran-permohonan']);
    }
    this.showPopup = false;
  }

  // Confirmation popup actions
  onConfirmYes() {
    // Tutup popup confirm
    this.showPopup = false;

    // Papar popup berjaya
    setTimeout(() => {
      this.popupType = 'success'; // jenis baru untuk berjaya
      this.popupMessage = 'Permohonan telah berjaya';
      this.showPopup = true;
    }, 100);
  }

  onConfirmNo(form?: NgForm) {
  // Tutup popup confirm
  this.showPopup = false;

  // Reset semula data form
  this.formData = {
    status: '',
    catatan: '',
    nama: '',
    idPengguna: '',
    tarikhSemakan: '',
  };

  // Reset state form di UI (jika form ref disediakan)
  if (form) {
    form.resetForm();
  }

  // Kekalkan step semasa & route semasa
  this.currentStep = 3;
  this.router.navigate([
    '/sec/kebenaran-ke-baitulmaqdis/pengesyoran-permohonan/keputusan-pengesyoran-permohonan',
  ]);
}
}
