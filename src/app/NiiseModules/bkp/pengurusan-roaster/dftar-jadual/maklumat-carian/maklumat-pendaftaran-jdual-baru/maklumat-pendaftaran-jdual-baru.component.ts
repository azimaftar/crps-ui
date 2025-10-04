import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContainerComponent } from '@coreui/angular';
import { ModalSimpanComponent } from './modal-simpan/modal-simpan.component';
import { ModalHantarComponent } from './modal-hantar/modal-hantar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-maklumat-pendaftaran-jdual-baru',
  standalone: true,
  imports: [
    ContainerComponent,
    ModalSimpanComponent,
    ModalHantarComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './maklumat-pendaftaran-jdual-baru.component.html',
  styleUrls: [
    '../../../pengurusan-roaster.component.scss',
    '../../../../bkp.scss'
  ]
})
export class MaklumatPendaftaranJdualBaruComponent {
  showModalSimpan = false;
  showModalHantar = false;
  formSubmitted = false;

  formData = {
    bilanganSyif: 1,
    bilanganKumpulan: 1,
    syifTimes: [] as { start: string; end: string; isAnjal?: boolean }[], // Add isAnjal flag
    kumpulan: [] as string[],
    kumpulanPertama: '',
    tarikhMulaRoster: '',
    tarikhAkhirRoster: '',
  };

  constructor(private router: Router) {
    this.initializeFormData();
  }

  initializeFormData() {
    this.updateSyifTimes();
    this.formData.kumpulan = Array(this.formData.bilanganKumpulan)
      .fill(null)
      .map((_, i) => ['A', 'B', 'C', 'D'][i] || 'A');
    this.formData.kumpulanPertama = this.formData.kumpulan[0] || '';
    const today = new Date();
    this.formData.tarikhMulaRoster = today.toISOString().split('T')[0];
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 6);
    this.formData.tarikhAkhirRoster = endDate.toISOString().split('T')[0];
  }

  // Helper method to update syifTimes based on bilanganSyif and bilanganKumpulan
  updateSyifTimes() {
    const baseSyifCount = this.formData.bilanganSyif;
    const isAnjalRequired =
      this.formData.bilanganSyif === 2 && this.formData.bilanganKumpulan === 4;

    // Calculate total shifts (base shifts + optional anjal shift)
    const totalSyifCount = isAnjalRequired ? baseSyifCount + 1 : baseSyifCount;

    // Adjust syifTimes array length
    while (this.formData.syifTimes.length < totalSyifCount) {
      this.formData.syifTimes.push({
        start: '08:00',
        end: '17:00',
        isAnjal: this.formData.syifTimes.length === baseSyifCount && isAnjalRequired,
      });
    }
    while (this.formData.syifTimes.length > totalSyifCount) {
      this.formData.syifTimes.pop();
    }
  }

  onBilanganSyifChange(value: number) {
    this.formData.bilanganSyif = value;
    this.updateSyifTimes();
  }

  onBilanganKumpulanChange(event: Event) {
    const value = parseInt((event.target as HTMLSelectElement).value);
    this.formData.bilanganKumpulan = value;
    const groups = ['A', 'B', 'C', 'D'];
    this.formData.kumpulan = groups.slice(0, value);
    if (!this.formData.kumpulan.includes(this.formData.kumpulanPertama)) {
      this.formData.kumpulanPertama = this.formData.kumpulan[0] || '';
    }
    this.updateSyifTimes();
  }

  onReset(): void {
    this.formData = {
      bilanganSyif: 1,
      bilanganKumpulan: 1,
      syifTimes: [],
      kumpulan: [],
      kumpulanPertama: '',
      tarikhMulaRoster: '',
      tarikhAkhirRoster: '',
    };
    this.initializeFormData();
    this.formSubmitted = false;
  }

  onSimpan() {
    console.log('Simpan clicked');
    this.showModalSimpan = true;
  }

  onHantar() {
    console.log('Hantar clicked');
    this.showModalHantar = true;
  }

  onModalSimpanClosed() {
    this.showModalSimpan = false;
  }

  onModalHantarClosed() {
    this.showModalHantar = false;
  }

  onTarikhMulaChange(date: string) {
    this.formData.tarikhMulaRoster = date;
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 6);
    this.formData.tarikhAkhirRoster = endDate.toISOString().split('T')[0];
  }

  getSyifArray(): number[] {
    return Array.from({ length: this.formData.bilanganSyif }, (_, i) => i + 1);
  }

  getKumpulanArray(): string[] {
    return this.formData.kumpulan;
  }

  // Method to check if flexible shift should be displayed
  isAnjalShiftVisible(): boolean {
    return this.formData.bilanganSyif === 2 && this.formData.bilanganKumpulan === 4;
  }

  onJana(): void {
    this.formSubmitted = true;
    console.log('Data being sent:', this.formData);

    const queryParams = {
      data: JSON.stringify(this.formData),
    };

    let route = '/bkp/pengurusan-roaster/dftar-jadual/maklumat-pendaftaran-jdual-baru/jadual2-syif3-kumpulan';
    if (this.formData.bilanganSyif === 3 && this.formData.bilanganKumpulan === 4) {
      route = '/bkp/pengurusan-roaster/dftar-jadual/maklumat-pendaftaran-jdual-baru/jadual-roster';
    } else if (this.formData.bilanganSyif === 2 && this.formData.bilanganKumpulan === 4) {
      route = '/bkp/pengurusan-roaster/dftar-jadual/maklumat-pendaftaran-jdual-baru/jadual3-syif2-kumpulan4';
    }

    this.router.navigate([route], {
      state: this.formData,
      queryParams: queryParams,
    });
  }
}
