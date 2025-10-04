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
  selector: 'app-kelulusan-maklumat-individu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kelulusan-maklumat-individu.component.html',
  styleUrls: ['./kelulusan-maklumat-individu.component.scss'],
})
export class KelulusanMaklumatIndividuComponent {
  private router = inject(Router);

 // Stepper
  currentStep = 4;
  totalSteps = 5;

  steps = [
  { number: 1, title: 'Carian Permohonan', route: '/sec/kebenaran-ke-baitulmaqdis/kelulusan-permohonan' },
  { number: 2, title: 'Maklumat Agensi', route: '/sec/kebenaran-ke-baitulmaqdis/kelulusan-permohonan/kelulusan-maklumat-agensi' },
  { number: 3, title: 'Senarai Individu', route: '/sec/kebenaran-ke-baitulmaqdis/kelulusan-permohonan/kelulusan-senarai-individu' },
  { number: 4, title: 'Maklumat Individu', route: '/sec/kebenaran-ke-baitulmaqdis/kelulusan-permohonan/kelulusan-maklumat-individu' },
  { number: 5, title: 'Keputusan Kelulusan', route: '/sec/kebenaran-ke-baitulmaqdis/kelulusan-permohonan/keputusan-kelulusan-permohonan' },
];

  showPopup = false;
  popupMessage = '';
  popupType: 'error' | 'confirm' | 'success' | 'alert' | null = null;
  lastSubmittedStep: number | null = null;

  // Dokumen sokongan
  documents: DocumentItem[] = [
    { keterangan: 'Surat Kelulusan KDN', nama: null, format: null },
  ];

  @ViewChildren('fileInput') fileInputs!: QueryList<ElementRef<HTMLInputElement>>;

  // Stepper control
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
        this.router.navigate([step.route]);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  prevStep() {
    if (!this.showPopup && this.currentStep > 1) {
      this.currentStep--;
      const step = this.steps.find(s => s.number === this.currentStep);
      if (step) {
        this.router.navigate([step.route]);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

onReset(form?: NgForm) {
  this.documents = [
    { keterangan: 'Surat Kelulusan KDN', nama: null, format: null },
  ];
  this.icInput = '';
  this.wakilName = '';
  this.fileInputs?.forEach(f => (f.nativeElement.value = ''));

  form?.resetForm(); // Angular reset, clear validation sekali
}

  // Submit form
  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.popupType = 'error';
      this.popupMessage = 'Medan mandatori diperlukan';
      this.showPopup = true;
      return;
    }

    const missingDoc = this.documents.some(doc => !doc.nama);
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
    this.resetForm();
    this.lastSubmittedStep = null;
    this.showPopup = false;
  }

  closePopup() {
    if (this.popupType === 'success') this.resetForm();
    this.showPopup = false;
    this.popupType = null;
    this.popupMessage = '';
  }

  // Upload file
  openFileExplorer(index: number) {
    this.fileInputs.toArray()[index].nativeElement.click();
  }

  onFileSelected(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      const file = input.files[0];
      if (file.size > 10 * 1024 * 1024) {
        this.popupType = 'alert';
        this.popupMessage = 'Fail melebihi 10MB. Sila pilih fail lain.';
        this.showPopup = true;
        return;
      }

      this.documents[index].nama = file.name;
      this.documents[index].format = file.type || 'Unknown';
      this.documents[index].file = file;
    }
  }

  // Reset form
  private resetForm() {
    this.documents = [
      { keterangan: 'Surat Kelulusan KDN', nama: null, format: null },
    ];

    document
      .querySelectorAll<HTMLInputElement>(
        '#permohonanForm input, #permohonanForm select, #permohonanForm textarea'
      )
      .forEach(el => (el.value = ''));

    this.fileInputs?.forEach(f => (f.nativeElement.value = ''));
  }

  // Carian IC
  wakilList = [
    { ic: '900101141234', name: 'Ahmad Fauzi' },
    { ic: '910202105678', name: 'Siti Aminah' },
    { ic: '920303059012', name: 'Hafiz Rahman' },
  ];

  icInput: string = '';
  wakilName: string = '';

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

  // Tambah pemohon
  tambahPemohon() {
  }
  
}
