import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UnikIDService } from '../../../../core/services/sec-services/unik-id.service';

@Component({
  selector: 'app-carian-profil',
  imports: [FormsModule],
  templateUrl: './carian-profil.component.html',
  styleUrl: './carian-profil.component.scss',
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

  selectedIdentityType: string = '';

  selectedCategory: string = 'pengenalan';

categoryMap: { [key: string]: string } = {
  pengenalan: 'No. Pengenalan',
  dokumen: 'No. Dokumen',
  pas: 'No. Pas',
  badan: 'No. Badan'
};

  currentStep = 1;
  maxStep = 2;

  constructor(private router: Router, private route: ActivatedRoute, private unikIDServices: UnikIDService) {}


  data: any;
  stringtesting: String | undefined;
  
  searchSenarai() {
this.unikIDServices.getTesting().subscribe({
  next: (data: any) => {
    console.log('API response:', data, typeof data);
    this.stringtesting = typeof data === 'string' ? data : JSON.stringify(data);
  },
  error: (err: any) => console.error('Error fetching data', err)
});
}

ngOnInit(): void {
    this.searchSenarai();
  }

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
