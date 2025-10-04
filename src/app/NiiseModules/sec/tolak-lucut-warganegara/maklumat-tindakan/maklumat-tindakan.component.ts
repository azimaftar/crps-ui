import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  CardModule, 
  GridModule, 
  ColComponent, 
  RowComponent,
  ModalModule,
  ButtonModule,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent
} from '@coreui/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-maklumat-tindakan',
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
  templateUrl: './maklumat-tindakan.component.html',
  styleUrls: ['./maklumat-tindakan.component.scss']
})
export class MaklumatTindakanComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Stepper
  currentStep = 2;
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

  // Form model
  tindakanData: any = {
    kodNAP: '',
    noNAP: '',
    kodTindakan: '',
    tarikhNAP: '',
    tarikhTamatKes: '',
    noRujukanAgensi: '',
    tarikhKuatKuasa: '',
    keteranganKes: ''
  };

  isSubmit = false;

  ngOnInit(): void {
    const savedDraft = localStorage.getItem('tindakanDraft');
    if (savedDraft) {
      this.tindakanData = JSON.parse(savedDraft);
      console.log('Loaded draft from localStorage:', this.tindakanData);
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

  // Reset form
  setSemula(): void {
    this.tindakanData = {
      kodNAP: '',
      noNAP: '',
      kodTindakan: '',
      tarikhNAP: '',
      tarikhTamatKes: '',
      noRujukanAgensi: '',
      tarikhKuatKuasa: '',
      keteranganKes: ''
    };
    localStorage.removeItem('tindakanDraft');
    this.showSuccessModal('Maklumat berjaya di set semula.');
  }

  // Save draft
  simpan(): void {
    const draftData = { ...this.tindakanData, status: 'DRAFT', savedAt: new Date() };
    localStorage.setItem('tindakanDraft', JSON.stringify(draftData));
    console.log('Draft saved locally:', draftData);
    this.showSuccessModal('Maklumat berjaya disimpan sebagai Draf.');
  }

  // Final submission
  hantar(): void {
    this.isSubmit = true;

    const requiredFields = ['kodNAP', 'noNAP', 'kodTindakan', 'tarikhNAP'] as const;

    const missing = requiredFields.filter(f => !this.tindakanData[f]);
    if (missing.length > 0) {
      const fieldNames: Record<string, string> = {
        kodNAP: 'Kod NAP',
        noNAP: 'Nombor NAP',
        kodTindakan: 'Kod Tindakan',
        tarikhNAP: 'Tarikh NAP'
      };

      const missingFieldNames = missing.map(f => fieldNames[f] || f);
      this.showErrorModal('Sila lengkapkan semua field wajib: ' + missingFieldNames.join(', '));
      return;
    }

    const finalData = { ...this.tindakanData, status: 'FINAL', submittedAt: new Date() };
    console.log('Final submission data:', finalData);
    localStorage.removeItem('tindakanDraft');
    this.showSuccessModal('Maklumat telah dihantar secara kepal.');
  }
}
