import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Individu {
  nama: string;
  nokp: string;
}

@Component({
  selector: 'app-semakan-senarai-individu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './semakan-senarai-individu.component.html',
  styleUrls: ['./semakan-senarai-individu.component.scss']
})
export class SemakanSenaraiIndividuComponent {
  private router = inject(Router);

  // Stepper
    currentStep = 3;
    totalSteps = 5;
  
    steps = [
    { number: 1, title: 'Carian Permohonan', route: '/sec/kebenaran-ke-baitulmaqdis/semakan-permohonan' },
    { number: 2, title: 'Maklumat Agensi', route: '/sec/kebenaran-ke-baitulmaqdis/semakan-permohonan/semakan-maklumat-agensi' },
    { number: 3, title: 'Senarai Individu', route: '/sec/kebenaran-ke-baitulmaqdis/semakan-permohonan/semakan-senarai-individu' },
    { number: 4, title: 'Maklumat Individu', route: '/sec/kebenaran-ke-baitulmaqdis/semakan-permohonan/semakan-maklumat-individu' },
    { number: 5, title: 'Keputusan Semakan', route: '/sec/kebenaran-ke-baitulmaqdis/semakan-permohonan/keputusan-semakan-permohonan' },
  ];

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  goToStep(step: any): void {
    this.currentStep = step.number;
    this.router.navigate([step.route]);
  }

  nextStep() {
    if (!this.showPopup && this.currentStep < this.totalSteps) {
      this.currentStep++;
      const step = this.steps.find(s => s.number === this.currentStep);
      if (step) this.router.navigate([step.route]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  prevStep() {
    if (!this.showPopup && this.currentStep > 1) {
      this.currentStep--;
      const step = this.steps.find(s => s.number === this.currentStep);
      if (step) this.router.navigate([step.route]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // -------------------- Senarai Individu --------------------
  individuList: Individu[] = [
    { nama: 'Ahmad Zulkarnain', nokp: '900101-14-5678' },
    { nama: 'Nor Aisyah', nokp: '950505-10-1234' },
    { nama: 'Mohd Faiz', nokp: '880808-08-9999' }
  ];

  tambahIndividu() {
      this.router.navigate(['/sec/kebenaran-ke-baitulmaqdis/permohonan-baru/maklumat-individu']);
  }

  editIndividu(index: number) {
  }

  hapusIndividu(index: number) {
  }

  // -------------------- Checkbox Pengesahan --------------------
  disahkan = false;

  // -------------------- Popup --------------------
  showPopup = false;
  popupMessage = '';
  popupType: 'error' | null = null;

  openPopup(msg: string, type: 'error' = 'error') {
    this.popupMessage = msg;
    this.popupType = type;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.popupMessage = '';
    this.popupType = null;
  }

  // TrackBy untuk *ngFor
  trackByIndex = (_: number, item: Individu) => item.nokp;
}
