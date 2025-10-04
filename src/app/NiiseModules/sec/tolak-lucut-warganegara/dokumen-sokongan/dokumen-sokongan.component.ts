import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  CardModule, 
  GridModule, 
  ColComponent, 
  RowComponent,
  ModalModule,
  ButtonModule
} from '@coreui/angular';
import { ActivatedRoute, Router } from '@angular/router';

interface Document {
  type: string;
  keterangan: string;
  fileName?: string;
  format?: string;
  file?: File;
}

@Component({
  selector: 'app-dokumen-sokongan',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RowComponent,
    ColComponent,
    GridModule,
    ModalModule,
    ButtonModule,
    CardModule
  ],
  templateUrl: './dokumen-sokongan.component.html',
  styleUrls: ['./dokumen-sokongan.component.scss']
})
export class DokumenSokonganComponent implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Stepper
  currentStep = 4;
  steps = [
    { number: 1, title: 'Maklumat Sabjek', route: '/sec/tolak-lucut-warganegara/maklumat-sabjek' },
    { number: 2, title: 'Maklumat Tindakan', route: '/sec/tolak-lucut-warganegara/maklumat-tindakan' },
    { number: 3, title: 'Maklumat Pegawai JPN', route: '/sec/tolak-lucut-warganegara/maklumat-peg-jpn' },
    { number: 4, title: 'Dokumen Sokongan', route: '/sec/tolak-lucut-warganegara/dokumen-sokongan' },
  ];

  // Modal
  showModal = false;
  modalType: 'success' | 'error' = 'success';
  modalMessage = '';

  // Document list
  documents: Document[] = [];

  selectedFileIndex: number | null = null;

  ngOnInit(): void {
    const savedDraft = localStorage.getItem('dokumenDraft');
    if (savedDraft) {
      this.documents = JSON.parse(savedDraft);
      console.log('Loaded draft from localStorage:', this.documents);
    }
  }

  // Stepper logic
  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  goToStep(stepNumber: number): void {
    if (stepNumber >= 1 && stepNumber <= this.steps.length) {
      this.currentStep = stepNumber;
      this.navigateToStep();
    }
  }

  nextStep(): void {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
      this.navigateToStep();
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.navigateToStep();
    }
  }

  private navigateToStep(): void {
    const targetStep = this.steps.find(step => step.number === this.currentStep);
    if (targetStep && targetStep.route) {
      this.router.navigate([targetStep.route]);
    }
  }

  // Modal
  showSuccessModal(message: string): void {
    this.modalType = 'success';
    this.modalMessage = message;
    this.showModal = true;
  }

  showErrorModal(message: string): void {
    this.modalType = 'error';
    this.modalMessage = message;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  // Add a new document row
  addDocument(): void {
    this.documents.push({ type: '', keterangan: '' });
  }

  // File upload
  uploadFile(index: number): void {
    this.selectedFileIndex = index;
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length || this.selectedFileIndex === null) return;

    const file = input.files[0];
    this.documents[this.selectedFileIndex].file = file;
    this.documents[this.selectedFileIndex].fileName = file.name;
    this.documents[this.selectedFileIndex].format = file.name.split('.').pop()?.toUpperCase();
    this.selectedFileIndex = null;
  }

  getPlaceholder(type: string): string {
    return type ? `Masukkan ${type}` : 'Masukkan keterangan';
  }

  // Reset form
  setSemula(): void {
    this.documents = [];
    localStorage.removeItem('dokumenDraft');
    this.showSuccessModal('Maklumat berjaya di set semula.');
  }

  // Save draft
  simpan(): void {
    localStorage.setItem('dokumenDraft', JSON.stringify(this.documents));
    console.log('Draft saved locally:', this.documents);
    this.showSuccessModal('Maklumat berjaya disimpan sebagai Draf.');
  }

// Final submit
hantar(): void {
  // Reset highlighting
  this.documents.forEach(doc => (doc as any).invalid = false);

  // Check if Dokumen 1 is missing
  const firstDoc = this.documents[0];
  if (!firstDoc.keterangan || !firstDoc.file) {
    (firstDoc as any).invalid = true; // mark invalid row
    this.showErrorModal('Sila masukkan Dokumen 1');
    return;
  }

  console.log('Final submission documents:', this.documents);
  localStorage.removeItem('dokumenDraft');
  this.showSuccessModal('Dokumen sokongan telah dihantar.');
}

  confirmation = false;

deleteDocument(index: number): void {
  this.documents.splice(index, 1);
}

}
