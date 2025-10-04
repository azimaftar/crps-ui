import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carian-profil',
  imports: [FormsModule, CommonModule],
  templateUrl: './carian-profil.component.html',
  styleUrls: ['../unik-id.component.scss'],
})
export class CarianProfilComponent {
   searchvalue = {
      carian: '',
      identitytype: [
        { div: 'No. Pengenalan' },
        { div: 'No. Dokumen' },
        { div: 'No. Pas' },
        { div: 'No. Badan' }
      ],
    };

    showTable = false;

cariLoadTable() {
  this.showTable = true;
}


selectedCategory: string = '';

categoryMap: { [key: string]: string } = {
  warganegara: 'No Pengenalan',
  nowarganegara: 'No Dokument'
};

senaraiProfil = [
  {
    noKP: '900101-14-5678',
    noDokumen: 'A1234567',
    wn: 'W',
    nama: 'Ahmad bin Ali',
    jantina: 'Lelaki'
  },
  {
    noKP: '880505-08-1122',
    noDokumen: 'B7654321',
    wn: 'N',
    nama: 'Siti binti Abu',
    jantina: 'Perempuan'
  }
];

openDetail(profil: any) {
  console.log('Open detail for:', profil);
  // Your detail view logic here

  this.router.navigate(['maklumat-profil-individu'], { relativeTo: this.route });
}



  selectedIdentityType: string = '';

  currentStep = 1;
  maxStep = 2;

  constructor(private router: Router, private route: ActivatedRoute) {}

  goToNextStep() {
    this.router.navigate(['biometrik'], { relativeTo: this.route });
  }

  goToPreviousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  isStepActive(step: number): boolean {
    return this.currentStep === step;
  }

  isStepCompleted(step: number): boolean {
    return this.currentStep > step;
  }

  goToMaklumatProfil(): void{ 
    this.router.navigate(['maklumat-profil-individu'], { relativeTo: this.route });
  }

  goToBiometrik() {
    this.router.navigate(['biometrik'], { relativeTo: this.route });
  }
}
