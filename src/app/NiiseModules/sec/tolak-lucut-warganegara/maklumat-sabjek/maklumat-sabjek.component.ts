import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  CardModule, 
  GridModule, 
  NavModule, 
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
  selector: 'app-maklumat-sabjek',
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
  templateUrl: './maklumat-sabjek.component.html',
  styleUrls: ['./maklumat-sabjek.component.scss']
})
export class MaklumatSabjekComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Stepper props
  currentStep = 1;
  steps = [
    { number: 1, title: 'Maklumat Sabjek', route: '/sec/tolak-lucut-warganegara/maklumat-sabjek' },
    { number: 2, title: 'Maklumat Tindakan', route: '/sec/tolak-lucut-warganegara/maklumat-tindakan' },
    { number: 3, title: 'Maklumat Pegawai JPN', route: '/sec/tolak-lucut-warganegara/maklumat-peg-jpn' },
    { number: 4, title: 'Dokumen Sokongan', route: '/sec/tolak-lucut-warganegara/dokumen-sokongan' },
  ];

  // Modal properties
  showModal = false;
  modalType: 'success' | 'error' = 'success';
  modalMessage = '';

  // Form model - Updated to match HTML template field names
  sabjekData: any = {
    idType: '',                    // Jenis Pengenalan
    noKadPengenalan: '',          // No Kad Pengenalan
    docNo: '',                    // No. Dokumen (jika ada)
    name: '',                     // Nama
    nationality: '',              // Warganegara
    race: '',                     // Bangsa
    dob: '',                      // Tarikh Lahir
    gender: '',                   // Jantina
    countryOfBirth: '',           // Negara Lahir
    regionOfBirth: '',            // Wilayah Lahir
    placeOfBirth: '',             // Tempat Lahir
    newName: '',                  // Nama Baharu
    newNationality: '',           // Warganegara Baharu
    newPassport: '',              // No. Passport Baharu
    biometricData: '',            // Data Biometrik
    perkara: '',                  // Perkara
    startDate: '',                // Tarikh Masuk
    endPassportDate: ''           // Tarikh Tamat Passport
  };

  isSubmit = false;

  ngOnInit(): void {
    const savedDraft = localStorage.getItem('sabjekDraft');
    if (savedDraft) {
      this.sabjekData = JSON.parse(savedDraft);
      console.log('Loaded draft from localStorage:', this.sabjekData);
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

  pageCarian(): void {
    this.router.navigate(['../carian-warganegara'], { relativeTo: this.route });
  }

  // Modal methods
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

  

  // ----------------------
  // RESET FORM
  // ----------------------
  setSemula(): void {
    this.sabjekData = {
      idType: '',
      noKadPengenalan: '',
      docNo: '',
      name: '',
      nationality: '',
      race: '',
      dob: '',
      gender: '',
      countryOfBirth: '',
      regionOfBirth: '',
      placeOfBirth: '',
      newName: '',
      newNationality: '',
      newPassport: '',
      biometricData: '',
      perkara: '',
      startDate: '',
      endPassportDate: ''
    };
    localStorage.removeItem('sabjekDraft');
    this.currentStep = 1;
    this.navigateToStep();
    console.log('Form reset and draft removed');
    this.showSuccessModal('Maklumat berjaya di set semula.');
  }

  // ----------------------
  // SAVE DRAFT
  // ----------------------
  simpan(): void {
    const draftData = { ...this.sabjekData, status: 'DRAFT', savedAt: new Date() };
    localStorage.setItem('sabjekDraft', JSON.stringify(draftData));
    console.log('Draft saved locally:', draftData);
    this.showSuccessModal('Maklumat berjaya disimpan sebagai Draf.');
  }

  // ----------------------
  // FINAL SUBMISSION
  // ----------------------
  hantar(): void {
    this.isSubmit = true;

    // Updated required fields to match HTML template
    const requiredFields = [
      'idType', 'noKadPengenalan', 'name', 'nationality', 'race', 'dob', 'gender', 'countryOfBirth', 'perkara'
    ] as const;
    
    const missing = requiredFields.filter(f => !this.sabjekData[f]);
    if (missing.length > 0) {
      const fieldNames: Record<string, string> = {
        idType: 'Jenis Pengenalan',
        noKadPengenalan: 'No Kad Pengenalan',
        name: 'Nama',
        nationality: 'Warganegara',
        race: 'Bangsa',
        dob: 'Tarikh Lahir',
        gender: 'Jantina',
        countryOfBirth: 'Negara Lahir',
        perkara: 'Perkara'
      };
      
      const missingFieldNames = missing.map(f => fieldNames[f] || f);
      this.showErrorModal('Sila lengkapkan semua field wajib: ' + missingFieldNames.join(', '));
      return;
    }

    const finalData = { ...this.sabjekData, status: 'FINAL', submittedAt: new Date() };
    console.log('Final submission data:', finalData);
    localStorage.removeItem('sabjekDraft');
    this.showSuccessModal('Maklumat telah dihantar secara kepal.');
  }
}