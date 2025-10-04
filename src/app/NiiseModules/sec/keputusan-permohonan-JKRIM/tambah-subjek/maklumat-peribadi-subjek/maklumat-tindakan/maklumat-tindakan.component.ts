import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule untuk *ngIf dan *ngFor
import { FormsModule } from '@angular/forms';
import { ProgressFlowComponent } from '../progress-flow/progress-flow.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maklumat-tindakan',
  imports: [CommonModule, FormsModule, ProgressFlowComponent],
  templateUrl: './maklumat-tindakan.component.html',
  styleUrls: ['../../../keputusan-permohonan-jkrim.component.scss']
})
export class MaklumatTindakanComponent {
  step = 1;

  kodnapnas: string = ''; // Kod NAP/NAS
  nonapnas: string = ''; // Nombor NAP/NAS
  kodTindakan: string = 'BLX'; // Kod Tindakan
  tarikhNapNas: string = ''; // Tarikh NAP/NAS
  tarikhKuatKuasa: string = ''; // Tarikh KuatKuasa
  tempatKesalahan: string = ''; // Tempat Kesalahan
  pilihTempoh: string = ''; // Pilih Tempoh
  tarikhTamatKes: string = ''; // Tarikh Tamat Kes
  noFailImigresen: string = '';
  noAgensi: string = '';

  nomborRujukanAgensi: string = '';
  agensiPelapor: string = 'KEMENTERIAN DALAM NEGERI';
  arahanKhusus: string = '';
  namaPegawai: string = 'MAZLINA BINTI ABDUL KARIM';
  noTelefonPegawai: string = '0198765678';
  maklumatAgensi: string = '';
  emelAgensi: string = '';
  keteranganKes: string = '';
  cawangan: string = 'Bahagian H';

  private stepRoutes = [
    '/sec/sl/tambah-subjek',
    '/sec/sl/tambah-subjek/maklumat-tindakan',
    '/sec/sl/tambah-subjek/dokumen-sokongan',
  ];

  // Confirmation
  confirmation: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.syncStepWithRoute();
  }

  resetForm(): void {}

  submitForm(): void {}

  onStepChange(newStep: number) {
    this.step = newStep;
    this.navigateToStep();
  }

  nextStep(): void {
    if (this.step < this.stepRoutes.length) {
      this.router.navigate([this.stepRoutes[this.step]]).then(() => {
        this.step++;
      });
    }
  }

  previousStep(): void {
    if (this.step > 1) {
      this.step--;
      this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
        window.scrollTo(0, 0);
      });
    }
  }

  private navigateToStep(): void {
    this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
      window.scrollTo(0,0);
    } );
  }

  private syncStepWithRoute(): void {
    const currentPath = this.router.url.split('?')[0]; // Ignore query params
    const currentStep = this.stepRoutes.indexOf(currentPath);
    this.step = currentStep >= 0 ? currentStep + 1 : 1;
  } 
}
