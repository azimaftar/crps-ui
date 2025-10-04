import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalRujukPenyeliaComponent } from '../../pemeriksaan-keluar-kaunter-manual/modal-rujuk-penyelia/modal-rujuk-penyelia.component';

import {
  FormControlDirective,
  FormLabelDirective,
  FormSelectDirective,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,
  ButtonDirective
} from '@coreui/angular';

interface DocumentForm {
  jenisDocument: string;
  jantina: string;
  umur: number | null;
  noDokumen: string;
  noPengenalan: string;
  tarikhLahir: string;
  nama: string;
  warganegara: string;
  tarikhDikeluarkan: string;
  negaraPengeluar: string;
}

interface CaptureTab {
  label: string;
  key: string;
  active: boolean;
}

interface CaptureSection {
  id: string;
  tabs: CaptureTab[];
  currentTabKey: string;
}

@Component({
  selector: 'app-keluar-imbasan-kompleks-dokumen-perjalanan-pasport',
  imports: [
    CommonModule,
    FormsModule,
    ModalRujukPenyeliaComponent,
    FormControlDirective,
    FormLabelDirective,
    FormSelectDirective,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ButtonDirective
  ],
  templateUrl: './keluar-imbasan-kompleks-dokumen-perjalanan-pasport.component.html',
  styleUrl: './keluar-imbasan-kompleks-dokumen-perjalanan-pasport.component.scss'
})
export class KeluarImbasanKompleksDokumenPerjalananPasportComponent {
  @ViewChild(ModalRujukPenyeliaComponent) modal!: ModalRujukPenyeliaComponent;
  @ViewChild('modalStandard') modalStandard!: ModalComponent;

  modalMessage: string = '';
  modalButtonText: string = 'OK';
  responseCode: string = '';

  widgets: any[] = [
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false }
  ];
  selectedWidget: number = 0;

  captureSections: CaptureSection[] = [
    {
      id: 'passportSection',
      tabs: [
        { label: 'WHITE (CAHAYA NORMAL)', key: 'white', active: true },
        { label: 'IR (INFRA RED)', key: 'ir', active: false },
        { label: 'UV (ULTRAVIOLET)', key: 'uv', active: false }
      ],
      currentTabKey: 'white'
    }
  ];

  documentForm: DocumentForm = {
    jenisDocument: 'P - Passport',
    jantina: 'M - Male',
    umur: 30,
    noDokumen: 'A0000002',
    noPengenalan: '990330042499',
    tarikhLahir: '2025-01-30',
    nama: 'Mohd Russaini Bin Idrus',
    warganegara: 'MYS',
    tarikhDikeluarkan: '1992-01-30',
    negaraPengeluar: 'MYS - Malaysia'
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  selectWidget(index: number): void {
    this.selectedWidget = index;
    this.widgets.forEach(widget => widget.active = false);
    if (this.widgets[index]) this.widgets[index].active = true;
  }

  openModal(): void {
    this.modal.openModal();
  }

  openStandardModal(): void {
    this.modalStandard.visible = true;
  }

  hideStandardModal(): void {
    this.modalStandard.visible = false;
  }

  async simulateValidation(): Promise<string> {
    const expiryDate = new Date('2028-01-20');
    const currentDate = new Date();
    const monthsDiff = (expiryDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24 * 30);

    if (monthsDiff < 0) return 'IBC-S018';
    else if (monthsDiff < 6) return 'IBC-S019';

    return '';
  }

  modalStandardClick(): void {
    switch (this.responseCode) {
      case 'IBC-S019':
      case 'IBC-S018':
        this.hideStandardModal();
        setTimeout(() => this.openModal(), 300);
        break;
      default:
        this.hideStandardModal();
        break;
    }
  }

  async TutupForm(): Promise<void> {
    this.responseCode = await this.simulateValidation();

    switch (this.responseCode) {
      case 'IBC-S019':
        this.modalMessage = 'Tempoh Sah Laku Pasport adalah kurang dari 6 Bulan';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S018':
        this.modalMessage = 'Rekod Pasport/ Dokumen Perjalan Telah Tamat Tempoh Sah Laku';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      default:
        this.router.navigate(['../maklumat-profil-pengembara-semak'], { relativeTo: this.route });
    }
  }

  selectTab(section: CaptureSection, selectedTab: CaptureTab): void {
    section.tabs.forEach(tab => tab.active = false);
    selectedTab.active = true;
    section.currentTabKey = selectedTab.key;

    console.log(`Switched to ${selectedTab.key} for section ${section.id}`);
  }

  captureImage(sectionId: string): void {
    console.log(`Capturing image for ${sectionId}`);
  }

  validateForm(): boolean {
    const required = ['noDokumen', 'noPengenalan', 'nama', 'tarikhLahir'];
    for (const field of required) {
      if (!this.documentForm[field as keyof DocumentForm]) {
        console.error(`Field ${field} is required`);
        return false;
      }
    }
    return true;
  }

  saveDocument(): void {
    if (this.validateForm()) {
      console.log('Saving document:', this.documentForm);
    }
  }

  resetForm(): void {
    this.documentForm = {
      jenisDocument: 'P - Passport',
      jantina: 'M - Male',
      umur: null,
      noDokumen: '',
      noPengenalan: '',
      tarikhLahir: '',
      nama: '',
      warganegara: 'MYS',
      tarikhDikeluarkan: '',
      negaraPengeluar: 'MYS - Malaysia'
    };

    this.captureSections.forEach(section => {
      section.tabs.forEach((tab, index) => tab.active = index === 0);
      section.currentTabKey = section.tabs[0].key;
    });

    this.selectedWidget = 0;
    this.widgets.forEach((widget, index) => widget.active = index === 0);
  }

  hasUnsavedChanges(): boolean {
    const defaultForm: DocumentForm = {
      jenisDocument: 'P - Passport',
      jantina: 'M - Male',
      umur: 30,
      noDokumen: 'A0000002',
      noPengenalan: '990330042499',
      tarikhLahir: '2025-01-30',
      nama: 'Mohd Russaini Bin Idrus',
      warganegara: 'MYS',
      tarikhDikeluarkan: '1992-01-30',
      negaraPengeluar: 'MYS - Malaysia'
    };
    return JSON.stringify(this.documentForm) !== JSON.stringify(defaultForm);
  }

  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('ms-MY');
  }

  calculateAge(birthDate: string): number {
    if (!birthDate) return 0;
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  }

  onBirthDateChange(): void {
    if (this.documentForm.tarikhLahir) {
      this.documentForm.umur = this.calculateAge(this.documentForm.tarikhLahir);
    }
  }

  validateDocumentNumber(docNumber: string): boolean {
    const passportPattern = /^[A-Z]\d{7,8}$/;
    return passportPattern.test(docNumber);
  }

  formatIcNumber(icNumber: string): string {
    const cleaned = icNumber.replace(/\D/g, '');
    if (cleaned.length >= 12) {
      return `${cleaned.slice(0, 6)}-${cleaned.slice(6, 8)}-${cleaned.slice(8, 12)}`;
    }
    return cleaned;
  }

  testError(errorCode: string): void {
    this.responseCode = errorCode;
    switch (this.responseCode) {
      case 'IBC-S019':
        this.modalMessage = 'Tempoh Sah Laku Pasport adalah kurang dari 6 Bulan';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S018':
        this.modalMessage = 'Rekod Pasport/ Dokumen Perjalan Telah Tamat Tempoh Sah Laku';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
    }
  }

  OnTutup(): void {
    this.router.navigate(['../maklumat-profil-pengembara-kompleks'], { relativeTo: this.route });
  }

  testModalSequence(errorCode: string): void {
    console.log(`Testing modal sequence for ${errorCode}`);
    this.testError(errorCode);
  }
}
