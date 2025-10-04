import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { BiometrikComponent } from './biometrik/biometrik.component';

@Component({
  selector: 'app-carian-profil',
  imports: [BiometrikComponent, FormsModule],
  templateUrl: './carian-profil.component.html',
  styleUrls: ['./carian-profil.component.scss']
})
export class CarianProfilComponent {
  // Radio button value
  typecarian: string = 'demografik';

  // Dropdown value
  selectedCategory: string = 'warganegara';

  // Mapping for dynamic labels
  categoryMap: any = {
    warganegara: 'No K/P',
    nowarganegara: 'No Dokumen'
  };

  // Input search model
  searchvalue: any = { carian: '' };

  // Table data
  showTable: boolean = false;
  senaraiProfil: any[] = [];

  // Stepper state
  currentStep = 1;
  maxStep = 3;

  // --- Methods ---
  cariLoadTable() {
    // Dummy data - replace with API call later
    this.senaraiProfil = [
      {
        noKP: '900101-14-5678',
        noDokumen: 'A1234567',
        wn: 'MY',
        nama: 'Ahmad bin Ali',
        jantina: 'Lelaki'
      },
      {
        noKP: '880202-08-9876',
        noDokumen: 'B7654321',
        wn: 'MY',
        nama: 'Siti Nurhaliza',
        jantina: 'Perempuan'
      }
    ];
    this.showTable = true;
  }

  openDetail(profil: any) {
    console.log('Profil detail:', profil);
    // TODO: Navigate or open modal
  }

  // Stepper
  isStepActive(step: number): boolean {
    return this.currentStep === step;
  }

  isStepCompleted(step: number): boolean {
    return this.currentStep > step;
  }

  goToNextStep() {
    if (this.currentStep < this.maxStep) {
      this.currentStep++;
    }
  }

  goToPreviousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
