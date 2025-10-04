import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

// CoreUI Imports
import { 
  CardModule,
  GridModule,
  ButtonModule,
  FormModule,
  UtilitiesModule
} from '@coreui/angular';

// Interface for form data structure
export interface PassportData {
  documentType: string;
  gender: string;
  noDocument: string;
  noIdentification: string;
  name: string;
  dateIssued: string;
  expiryDate: string;
  age: string;
  nationality: string;
  issuingCountry: string;
}

@Component({
  selector: 'app-cetak-pas-maklumat',
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    GridModule,
    ButtonModule,
    FormModule,
    UtilitiesModule
  ],
  templateUrl: './cetak-pas-maklumat.component.html',
  styleUrl: './cetak-pas-maklumat.component.scss'
})
export class CetakPasMaklumatComponent implements OnInit {
  
  // Input property to allow parent components to pass data
  @Input() passportData?: PassportData;
  
  // Flag to show/hide print icon
  showPrintIcon: boolean = true;
  
  // Default form data
  formData: PassportData = {
    documentType: 'Warganegara',
    gender: 'M - Male',
    noDocument: 'A00000000',
    noIdentification: '920330000000',
    name: 'Mohd Ruslani Bin Ismail',
    dateIssued: '20 Januari 1992',
    expiryDate: '20 Januari 2028',
    age: '33',
    nationality: 'MYS',
    issuingCountry: 'MYS - Malaysia'
  };

  constructor(private router: Router,private route: ActivatedRoute) {
    // Check if FontAwesome is available for print icon
    this.checkFontAwesome();
  }

  ngOnInit(): void {
    // Use input data if provided, otherwise use default data
    if (this.passportData) {
      this.formData = { ...this.formData, ...this.passportData };
    }
    
    // Calculate age if birth date is available in identification number
    this.calculateAge();
  }

  /**
   * Print the current page
   */
  printPage(): void {
    //this.router.navigate(['../maklumat-profil-pengembara-penyelia'], { relativeTo: this.route });
  }

  /**
   * Calculate age from identification number (Malaysian IC format)
   */
  private calculateAge(): void {
    const icNumber = this.formData.noIdentification;
    if (icNumber && icNumber.length >= 6) {
      try {
        // Extract year from IC (first 2 digits)
        const yearDigits = icNumber.substring(0, 2);
        const year = parseInt(yearDigits);
        
        // Determine full year (assume 20th century for years > 30, 21st century for years <= 30)
        const fullYear = year > 30 ? 1900 + year : 2000 + year;
        
        // Extract month and day
        const month = parseInt(icNumber.substring(2, 4));
        const day = parseInt(icNumber.substring(4, 6));
        
        // Calculate age
        const birthDate = new Date(fullYear, month - 1, day);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        
        this.formData.age = age.toString();
      } catch (error) {
        console.warn('Could not calculate age from IC number:', error);
      }
    }
  }

  /**
   * Check if FontAwesome is available
   */
  private checkFontAwesome(): void {
    // Simple check for FontAwesome CSS
    const links = document.getElementsByTagName('link');
    let fontAwesomeFound = false;
    
    for (let i = 0; i < links.length; i++) {
      if (links[i].href && links[i].href.includes('font-awesome')) {
        fontAwesomeFound = true;
        break;
      }
    }
    
    this.showPrintIcon = fontAwesomeFound;
  }

  /**
   * Add print-specific styles
   */
  private addPrintStyles(): void {
    const printStyle = document.createElement('style');
    printStyle.id = 'print-styles';
    printStyle.innerHTML = `
      @media print {
        body * {
          visibility: hidden;
        }
        .passport-form-card, .passport-form-card * {
          visibility: visible;
        }
        .passport-form-card {
          position: absolute;
          left: 0;
          top: 0;
          width: 100% !important;
        }
      }
    `;
    document.head.appendChild(printStyle);
  }

  /**
   * Remove print-specific styles
   */
  private removePrintStyles(): void {
    const printStyle = document.getElementById('print-styles');
    if (printStyle) {
      printStyle.remove();
    }
  }

  /**
   * Update form data (for external components)
   */
  updateFormData(newData: Partial<PassportData>): void {
    this.formData = { ...this.formData, ...newData };
    this.calculateAge();
  }

  /**
   * Get current form data
   */
  getFormData(): PassportData {
    return { ...this.formData };
  }

  /**
   * Reset form to default values
   */
  resetForm(): void {
    this.formData = {
      documentType: 'Warganegara',
      gender: 'M - Male',
      noDocument: 'A00000000',
      noIdentification: '920330000000',
      name: 'Mohd Ruslani Bin Ismail',
      dateIssued: '20 Januari 1992',
      expiryDate: '20 Januari 2028',
      age: '33',
      nationality: 'MYS',
      issuingCountry: 'MYS - Malaysia'
    };
  }

  /**
   * Validate form data
   */
  isValidData(): boolean {
    return !!(
      this.formData.name &&
      this.formData.noDocument &&
      this.formData.noIdentification &&
      this.formData.dateIssued &&
      this.formData.expiryDate
    );
  }
}