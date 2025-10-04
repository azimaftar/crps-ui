import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maklumat-pegawai-pemohon',
  imports: [FormsModule],
  templateUrl: './maklumat-pegawai-pemohon.component.html',
  styleUrls: [
    '../../../bkp.scss'
  ],
})
export class MaklumatPegawaiPemohonComponent {
   pemohon = {
      nama: 'Muhammad Hilmi Bin Hashim',
      ic: '780514-10-5649',
      bahagian: [
        { div: 'Bahagian Dasar & Perancangan' },
        { div: 'Bahagian Perancangan' }
      ],
      unit: [
        { unit: 'Unit Pengurusan Aset' }
      ],
      gred: 'N41-Penolong Kanan Tadbir',
      group: [
        { kumpulan: 'A' },
        { kumpulan: 'B' },
        { kumpulan: 'C' }
      ],
      tarikh:'',
      hari: '',
      masa: '',
      lokasi: 'Putrajaya'
    };

  hariList = ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'];

  updateDayFromDate() {
    if (this.pemohon.tarikh) {
      const date = new Date(this.pemohon.tarikh);
      const dayIndex = date.getDay();
      this.pemohon.hari = this.hariList[dayIndex];
    } else {
      this.pemohon.hari = '';
    }
  }

  currentStep = 1;
  maxStep = 2;

  constructor(private router: Router, private route: ActivatedRoute) {}

  goToNextStep() {}

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

  goToMaklumatPengganti() {
    this.router.navigate(['../maklumat-pegawai-pengganti'], { relativeTo: this.route });
  }
}
