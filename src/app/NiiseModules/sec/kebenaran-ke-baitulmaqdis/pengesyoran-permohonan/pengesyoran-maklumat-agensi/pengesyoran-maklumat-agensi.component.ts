import { Component, QueryList, ViewChildren, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

interface DocumentItem {
  keterangan: string;
  nama: string | null;
  format: string | null;
  file?: File | null;
}

@Component({
  selector: 'app-pengesyoran-maklumat-agensi',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pengesyoran-maklumat-agensi.component.html',
  styleUrls: ['./pengesyoran-maklumat-agensi.component.scss'],
})
export class PengesyoranMaklumatAgensiComponent {
  private router = inject(Router);

  currentStep = 2;
  totalSteps = 5;

  steps = [
  { number: 1, title: 'Carian Permohonan', route: '/sec/kebenaran-ke-baitulmaqdis/pengesyoran-permohonan' },
  { number: 2, title: 'Maklumat Agensi', route: '/sec/kebenaran-ke-baitulmaqdis/pengesyoran-permohonan/pengesyoran-maklumat-agensi' },
  { number: 3, title: 'Senarai Individu', route: '/sec/kebenaran-ke-baitulmaqdis/pengesyoran-permohonan/pengesyoran-senarai-individu' },
  { number: 4, title: 'Maklumat Individu', route: '/sec/kebenaran-ke-baitulmaqdis/pengesyoran-permohonan/pengesyoran-maklumat-individu' },
  { number: 5, title: 'Keputusan Pengesyoran', route: '/sec/kebenaran-ke-baitulmaqdis/pengesyoran-permohonan/keputusan-pengesyoran-permohonan' },
];

  showPopup = false;
  popupMessage = '';
  popupType: 'error' | 'confirm' | 'success' | 'alert' | null = null;
  lastSubmittedStep: number | null = null;

  documentsStep2: DocumentItem[] = [
    { keterangan: 'Surat Kelulusan KDN', nama: null, format: null },
  ];

  @ViewChildren('fileInputStep2') fileInputsStep2!: QueryList<ElementRef<HTMLInputElement>>;

  isStepActive(stepNumber: number) {
    return this.currentStep === stepNumber;
  }

  goToStep(step: any) {
    this.currentStep = step.number;
    this.router.navigate([step.route]);
  }

  nextStep() {
  if (!this.showPopup && this.currentStep < this.totalSteps) {
    this.currentStep++;
    const step = this.steps.find(s => s.number === this.currentStep);
    if (step) {
      this.router.navigate([step.route]); // Navigate ke step route
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

  prevStep() {
  if (!this.showPopup && this.currentStep > 1) {
    this.currentStep--;
    const step = this.steps.find(s => s.number === this.currentStep);
    if (step) {
      this.router.navigate([step.route]); // Navigate ikut step route
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.popupType = 'error';
      this.popupMessage = 'Medan mandatori diperlukan';
      this.showPopup = true;
      return;
    }

    const missingDoc = this.documentsStep2.some(doc => !doc.nama);
    if (missingDoc) {
      this.popupType = 'error';
      this.popupMessage = 'Dokumen sokongan perlu dimuat naik';
      this.showPopup = true;
      return;
    }

    this.lastSubmittedStep = this.currentStep;
    this.popupType = 'confirm';
    this.popupMessage = 'Adakah anda pasti?';
    this.showPopup = true;
  }

  onConfirmYes() {
    this.showPopup = false;
    setTimeout(() => {
      this.popupType = 'success';
      this.popupMessage = 'Permohonan telah berjaya';
      this.showPopup = true;
    }, 100);
  }

  onConfirmNo() {
    this.resetFormSection2();
    this.lastSubmittedStep = null;
    this.showPopup = false;
  }

  closePopup() {
    if (this.popupType === 'success') this.resetFormSection2();
    this.showPopup = false;
    this.popupType = null;
    this.popupMessage = '';
  }

  openFileExplorerStep2(index: number) {
    this.fileInputsStep2.toArray()[index].nativeElement.click();
  }

  onFileSelectedStep2(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      const file = input.files[0];
      if (file.size > 10 * 1024 * 1024) {
        this.popupType = 'alert';
        this.popupMessage = 'Fail melebihi 10MB. Sila pilih fail lain.';
        this.showPopup = true;
        return;
      }

      this.documentsStep2[index].nama = file.name;
      this.documentsStep2[index].format = file.type || 'Unknown';
      this.documentsStep2[index].file = file;
    }
  }

  private resetFormSection2() {
    this.documentsStep2 = [
      { keterangan: 'Surat Kelulusan KDN', nama: null, format: null },
    ];

    document
      .querySelectorAll<HTMLInputElement>(
        '#permohonanForm input, #permohonanForm select, #permohonanForm textarea'
      )
      .forEach(el => (el.value = ''));

    this.fileInputsStep2?.forEach(f => (f.nativeElement.value = ''));
  }

  // Carian
  wakilList = [
    { ic: '900101141234', name: 'Ahmad Fauzi' },
    { ic: '910202105678', name: 'Siti Aminah' },
    { ic: '920303059012', name: 'Hafiz Rahman' },
  ];

  icInput: string = ''; // Menyimpan input IC
  wakilName: string = ''; // Menyimpan nama wakil yang ditemui

  searchByIC() {
    const result = this.wakilList.find(w => w.ic === this.icInput.trim());
    if (result) {
      this.wakilName = result.name;
    } else {
      this.wakilName = '';
      this.popupType = 'alert';
      this.popupMessage = 'No. Kad Pengenalan tidak dijumpai.';
      this.showPopup = true;
    }
  }
}
