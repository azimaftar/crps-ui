import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BadgeModule, GridModule, ButtonModule, CardModule } from '@coreui/angular';
import { ReusableTabComponent } from '../../../shared/reusable-tab/reusable-tab.component';

interface FormData {
  officeCode: string;
  noSiri: string;
  name: string;
  kpNo: string;
  agency: string;
  validityDate: string;
  officeName: string;
}

@Component({
  selector: 'app-paparan-pas-menaiki-kapal-bahagian-belakang',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    RouterModule,
    BadgeModule,
    GridModule,
    ReusableTabComponent
  ],
templateUrl: './paparan-pas-menaiki-kapal-bahagian-belakang.component.html',
  styleUrl: './paparan-pas-menaiki-kapal-bahagian-belakang.component.scss'
})
export class PaparanPasMenaikiKapalBahagianBelakangComponent implements OnInit {

  // Card data (dummy values for now)
  formData: FormData = {
    officeCode: 'IBU PEJABAT LAUT',
    noSiri: '0029218D',
    name: 'Radin Amun Bandar',
    kpNo: '960606-10-5467',
    agency: 'Maritim',
    validityDate: '20 Januari 2003',
    officeName: 'KLANG'
  };

  // Step navigation
  currentStep = 2;
  steps = [
    'Maklumat Pas Bahagian Hadapan',
    'Maklumat Pas Bahagian Belakang',
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('Paparan Pas Bahagian Hadapan initialized');
  }
  // Validation flags
  isFormValid: boolean = false;

  /**
     * Validate form data
     */
  validateForm(): void {
    const requiredFields = [
      this.formData.officeCode,
      this.formData.noSiri,
      this.formData.name,
      this.formData.kpNo,
      this.formData.agency,
      this.formData.validityDate,
      this.formData.officeName
    ];

    // Check if all required fields are filled
    this.isFormValid = requiredFields.every(field =>
      field !== null && field !== undefined && field.toString().trim() !== ''
    );
  }

  // Navigate back
  goBack(): void {
    console.log('Kembali clicked');
    this.router.navigate(['/ibc/pengurusan-perkapalan/laman-utama-pas-menaiki-kapal']);
  }

  // Print the pass
  printCard(): void {
    console.log('Cetak Kad clicked');
    window.print();
  }

  // Already good, but if you want explicit "previous" step support:
  goToPrevious(): void {
    console.log('Navigating to previous step');
    this.currentStep = 1;
    this.router.navigate([
      '/ibc/pengurusan-perkapalan/paparan-pas-menaiki-kapal-bahagian-hadapan'
    ]);
  }


  // Navigate to next step (Bahagian Belakang)
  goToNext(): void {
    console.log('Navigating to next step with data:', this.formData);
    this.currentStep = 2;
    this.router.navigate([
      '/ibc/pengurusan-perkapalan/paparan-pas-menaiki-kapal-bahagian-belakang'
    ]);
  }
}
