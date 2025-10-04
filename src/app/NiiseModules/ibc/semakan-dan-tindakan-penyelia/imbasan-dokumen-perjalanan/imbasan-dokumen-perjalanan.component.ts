import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

// CoreUI form directives
import {
  FormControlDirective,
  FormLabelDirective,
  FormSelectDirective
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
  active: boolean;
}

interface CaptureSection {
  id: string;
  tabs: CaptureTab[];
}

@Component({
  selector: 'app-imbasan-dokumen-perjalanan',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    // CoreUI Form Directives
    FormControlDirective,
    FormLabelDirective,
    FormSelectDirective
  ],
  templateUrl: './imbasan-dokumen-perjalanan.component.html',
  styleUrls: ['./imbasan-dokumen-perjalanan.component.scss']
})
export class ImbasanDokumenPerjalananComponent {
  
  // Widget thumbnails data
  widgets: any[] = [
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false }
  ];
  
  selectedWidget: number = 0;
  
  // Capture sections with tabs (WHITE, IR, UV)
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
  
  // Preview items for right panel
  previewItems: any[] = [
    { id: 1 },
    { id: 2 }
  ];
  
  // Document form data
  documentForm: DocumentForm = {
    jenisDocument: 'P - Passport',
    jantina: 'M - Male',
    umur: 35,
    noDokumen: 'JP7785429',
    noPengenalan: '990330042499',
    tarikhLahir: '1989-09-19',
    nama: 'MATSUI OSAKA',
    warganegara: 'JPN',
    tarikhDikeluarkan: '1992-01-30',
    negaraPengeluar: 'JPN - Jepun'
  };
  
  constructor(private router: Router,
              private route: ActivatedRoute
  ) {}
  
  // Widget selection
  selectWidget(index: number): void {
    this.selectedWidget = index;
    console.log('Selected widget:', index);
    
    // Reset all widgets
    this.widgets.forEach(widget => widget.active = false);
    // Set selected widget as active
    if (this.widgets[index]) {
      this.widgets[index].active = true;
    }
  }
  
  // Tab selection for capture sections
  selectTab(section: CaptureSection, selectedTab: CaptureTab): void {
    // Deactivate all tabs in this section
    section.tabs.forEach(tab => tab.active = false);
    // Activate selected tab
    selectedTab.active = true;
    
    console.log(`Selected ${selectedTab.label} tab in section ${section.id}`);
    
    // Here you can implement the logic to switch between WHITE, IR, UV modes
    this.switchCaptureMode(section.id, selectedTab.label);
  }
  
  // Switch capture mode (WHITE, IR, UV)
  switchCaptureMode(sectionId: string, mode: string): void {
    console.log(`Switching to ${mode} mode for ${sectionId}`);
    
    // Implement capture mode switching logic here
    switch (mode) {
      case 'WHITE':
        // Handle white light capture
        break;
      case 'IR':
        // Handle infrared capture
        break;
      case 'UV':
        // Handle ultraviolet capture
        break;
    }
  }
  
  // Image capture functionality
  captureImage(sectionId: string): void {
    console.log(`Capturing image for ${sectionId}`);
    // Implement camera/scanner integration here
  }
  
  // Form validation
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
  
  // Save document data
  saveDocument(): void {
    if (this.validateForm()) {
      console.log('Saving document:', this.documentForm);
      // Implement save functionality here
    }
  }
  
  // Reset form (Disyaki Palsu)
  resetForm(): void {
    console.log('Document flagged as suspicious');
    
    // Reset form to default values
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
    
    // Reset capture sections
    this.captureSections.forEach(section => {
      section.tabs.forEach((tab, index) => {
        tab.active = index === 0; // Set first tab (WHITE) as active
      });
    });
    
    // Reset widget selection
    this.selectedWidget = 0;
    this.widgets.forEach((widget, index) => {
      widget.active = index === 0;
    });
  }
  
  // Close form
  TutupForm(): void {
    this.router.navigate(['../maklumat-profil-pengembara-penyelia'], { relativeTo: this.route });
  }
  
  // Check for unsaved changes
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
  
  // Additional utility methods
  
  // Format date for display
  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('ms-MY');
  }
  
  // Calculate age from birth date
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
  
  // Auto-calculate age when birth date changes
  onBirthDateChange(): void {
    if (this.documentForm.tarikhLahir) {
      this.documentForm.umur = this.calculateAge(this.documentForm.tarikhLahir);
    }
  }
  
  // Validate document number format
  validateDocumentNumber(docNumber: string): boolean {
    // Basic validation for passport format (adjust as needed)
    const passportPattern = /^[A-Z]\d{7,8}$/;
    return passportPattern.test(docNumber);
  }
  
  // Format IC number (Malaysian format)
  formatIcNumber(icNumber: string): string {
    // Remove any non-digits
    const cleaned = icNumber.replace(/\D/g, '');
    
    // Format as XXXXXX-XX-XXXX
    if (cleaned.length >= 12) {
      return `${cleaned.slice(0, 6)}-${cleaned.slice(6, 8)}-${cleaned.slice(8, 12)}`;
    }
    
    return cleaned;
  }
}