import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ModalRujukPenyeliaComponent } from '../../pemeriksaan-keluar-kaunter-manual/modal-rujuk-penyelia/modal-rujuk-penyelia.component';

// CoreUI Imports
import {
  CardComponent,           // <c-card>
  CardHeaderComponent,     // <c-card-header>
  CardBodyComponent,       // <c-card-body>
  CardFooterComponent,     // <c-card-footer>
  RowComponent,            // <c-row>
  ColComponent,            // <c-col>
  ButtonDirective,         // [cButton]
  ModalComponent,          // <c-modal>
  ModalToggleDirective,    // [cModalToggle]
  ModalBodyComponent,      // <c-modal-body>
  ModalFooterComponent     // <c-modal-footer>
} from '@coreui/angular';

interface DocumentForm {
  jenisDocument: string;
  jantina: string;
  umur: number | null;
  noDokumen: string;
  noPengenalan: string;
  nama: string;
  warganegara: string;
  agama: string;
  bangsa: string;
  jenisPergerakan: string;
  pintuMasuk: string;
  tarikhMasuk: string;
  masaMasuk: string;
}

interface CaptureTab {
  label: string;
  active: boolean;
}

interface CaptureSection {
  id: string;
  tabs: CaptureTab[];
}

@Component({
  selector: 'app-keluar-imbasan-kompleks-dokumen-mykad',
  standalone: true,
  templateUrl: './keluar-imbasan-kompleks-dokumen-mykad.component.html',
  styleUrl: './keluar-imbasan-kompleks-dokumen-mykad.component.scss',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    // CoreUI Components
    ModalRujukPenyeliaComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    RowComponent,
    ColComponent,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalToggleDirective,
    ButtonDirective
  ]
})
export class KeluarImbasanKompleksDokumenMykadComponent {
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
      id: 'section1',
      tabs: [
        { label: 'WHITE', active: true },
        { label: 'IR', active: false },
        { label: 'UV', active: false }
      ]
    },
    {
      id: 'section2',
      tabs: [
        { label: 'WHITE', active: true },
        { label: 'IR', active: false },
        { label: 'UV', active: false }
      ]
    },
    {
      id: 'section3',
      tabs: [
        { label: 'WHITE', active: true },
        { label: 'IR', active: false },
        { label: 'UV', active: false }
      ]
    }
  ];

  previewItems: any[] = [
    { id: 1 },
    { id: 2 }
  ];

  documentForm: DocumentForm = {
    jenisDocument: 'P - Passport',
    jantina: 'M - Male',
    umur: 30,
    noDokumen: 'A0000002',
    noPengenalan: '990330042499',
    nama: 'Mohd Russaini Bin Idrus',
    warganegara: 'MYS',
    agama: 'Islam',
    bangsa: 'Melayu',
    jenisPergerakan: 'Periksa Masuk',
    pintuMasuk: 'KLIA Terminal 1',
    tarikhMasuk: '20 Januari 2024',
    masaMasuk: '18:05:27'
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  // Widget selection
  selectWidget(index: number): void {
    this.selectedWidget = index;
    this.widgets.forEach(widget => widget.active = false);
    if (this.widgets[index]) {
      this.widgets[index].active = true;
    }
  }

  // Modal methods
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
    await new Promise(resolve => setTimeout(resolve, 500));
    const expiryDate = new Date('2028-01-20');
    const currentDate = new Date();
    if (expiryDate < currentDate) {
      return 'IBC-S021';
    }
    return '';
  }

  modalStandardClick(): void {
    switch (this.responseCode) {
      case 'IBC-S020':
      case 'IBC-S021':
      case 'IBC-S024':
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
      case 'IBC-S020':
        this.modalMessage = 'Kad ABTC Gagal Imbasan';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S021':
        this.modalMessage = 'Kad ABTC Telah Tamat Tempoh Sah Laku';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S024':
        this.modalMessage = 'Rekod ABTC Tidak Dijumpai';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      default:
        this.router.navigate(['../maklumat-profil-pengembara-semak'], { relativeTo: this.route });
        return;
    }
  }

  selectTab(section: CaptureSection, selectedTab: CaptureTab): void {
    section.tabs.forEach(tab => tab.active = false);
    selectedTab.active = true;
    this.switchCaptureMode(section.id, selectedTab.label);
  }

  switchCaptureMode(sectionId: string, mode: string): void {
    console.log(`Switching to ${mode} mode for ${sectionId}`);
  }

  captureImage(sectionId: string): void {
    console.log(`Capturing image for ${sectionId}`);
  }

  validateForm(): boolean {
    const required = ['noDokumen', 'noPengenalan', 'nama'];
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
      console.log('Saving MyKad/MyPR document:', this.documentForm);
    }
  }

  resetForm(): void {
    this.documentForm = {
      jenisDocument: 'P - Passport',
      jantina: 'M - Male',
      umur: null,
      noDokumen: '',
      noPengenalan: '',
      nama: '',
      warganegara: 'MYS',
      agama: 'Islam',
      bangsa: 'Melayu',
      jenisPergerakan: 'Periksa Masuk',
      pintuMasuk: 'KLIA Terminal 1',
      tarikhMasuk: '20 Januari 2024',
      masaMasuk: '18:05:27'
    };

    this.captureSections.forEach(section => {
      section.tabs.forEach((tab, index) => {
        tab.active = index === 0;
      });
    });

    this.selectedWidget = 0;
    this.widgets.forEach((widget, index) => {
      widget.active = index === 0;
    });
  }

  hasUnsavedChanges(): boolean {
    const defaultForm: DocumentForm = {
      jenisDocument: 'P - Passport',
      jantina: 'M - Male',
      umur: 30,
      noDokumen: 'A0000002',
      noPengenalan: '990330042499',
      nama: 'Mohd Russaini Bin Idrus',
      warganegara: 'MYS',
      agama: 'Islam',
      bangsa: 'Melayu',
      jenisPergerakan: 'Periksa Masuk',
      pintuMasuk: 'KLIA Terminal 1',
      tarikhMasuk: '20 Januari 2024',
      masaMasuk: '18:05:27'
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
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  validateDocumentNumber(docNumber: string): boolean {
    const abtcPattern = /^[A-Z]\d{7,8}$/;
    return abtcPattern.test(docNumber);
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
      case 'IBC-S020':
        this.modalMessage = 'Kad MyKad/MyPR Gagal Imbasan';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S021':
        this.modalMessage = 'Kad MyKad/MyPR Telah Tamat Tempoh Sah Laku';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
      case 'IBC-S024':
        this.modalMessage = 'Rekod MyKad/MyPR Tidak Dijumpai';
        this.modalButtonText = 'OK';
        this.openStandardModal();
        break;
    }
  }

  OnTutup(): void {
    this.router.navigate(['../maklumat-profil-pengembara-kompleks'], { relativeTo: this.route });
  }

  testModalSequence(errorCode: string): void {
    console.log(`Testing ABTC modal sequence for ${errorCode}`);
    this.testError(errorCode);
  }
}
