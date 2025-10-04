import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

interface Permohonan {
  rujukan: string;
  fid: string;
  nama: string;
  agensi: string;
  tarikh: string; // format YYYY-MM-DD
  warganegara: string;
  status: 'Dihantar' | 'Draf';
}

@Component({
  selector: 'app-carian-pengesyoran-permohonan',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carian-pengesyoran-permohonan.component.html',
  styleUrls: ['./carian-pengesyoran-permohonan.component.scss'],
})
export class CarianPengesyoranPermohonanComponent {
  private router = inject(Router);

  currentStep = 1;
  totalSteps = 5;

  steps = [
  { number: 1, title: 'Carian Permohonan', route: '/sec/kebenaran-ke-baitulmaqdis/pengesyoran-permohonan' },
  { number: 2, title: 'Maklumat Agensi', route: '/sec/kebenaran-ke-baitulmaqdis/pengesyoran-permohonan/pengesyoran-maklumat-agensi' },
  { number: 3, title: 'Senarai Individu', route: '/sec/kebenaran-ke-baitulmaqdis/pengesyoran-permohonan/pengesyoran-senarai-individu' },
  { number: 4, title: 'Maklumat Individu', route: '/sec/kebenaran-ke-baitulmaqdis/pengesyoran-permohonan/pengesyoran-maklumat-individu' },
  { number: 5, title: 'Keputusan Pengesyoran', route: '/sec/kebenaran-ke-baitulmaqdis/pengesyoran-permohonan/keputusan-pengesyoran-permohonan' },
];

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  goToStep(step: any): void {
    this.currentStep = step.number;
    this.router.navigate([step.route]);
  }

  next(): void {
    if (!this.showPopup && this.currentStep < this.steps.length) {
      this.currentStep++;
      this.router.navigate([this.steps[this.currentStep - 1].route]);
    }
  }

  prev(): void {
    if (!this.showPopup && this.currentStep > 1) {
      this.currentStep--;
      this.router.navigate([this.steps[this.currentStep - 1].route]);
    }
  }

  // -------------------- Carian --------------------
  kategoriCarian: 'nomborRujukan' | 'fid' | 'namaAgensi' | 'tarikh' = 'nomborRujukan';
  nomborCarian = '';
  tarikhDari = '';
  tarikhHingga = '';
  namaAgensi = '';

  semuaPermohonan: Permohonan[] = [
    {
      rujukan: 'IM/T09/2509/00001',
      fid: 'FID00001',
      nama: 'Ahmad Zulkarnain',
      agensi: 'Agensi Pelancongan Nasional',
      tarikh: '2025-09-20',
      warganegara: 'Malaysia',
      status: 'Dihantar',
    },
    {
      rujukan: 'Draf/T09/2509/00002',
      fid: 'FID00002',
      nama: 'Nor Aisyah',
      agensi: 'Agensi Haji Mabrur',
      tarikh: '2025-09-23',
      warganegara: 'Malaysia',
      status: 'Draf',
    },
    {
      rujukan: 'IM/T09/2509/00003',
      fid: 'FID00003',
      nama: 'Mohd Faiz',
      agensi: 'Agensi Umrah Sentosa',
      tarikh: '2025-09-10',
      warganegara: 'Malaysia',
      status: 'Dihantar',
    },
    {
      rujukan: 'Draf/T09/2509/00004',
      fid: 'FID00004',
      nama: 'Siti Aminah',
      agensi: 'Agensi Pelancongan Nasional',
      tarikh: '2025-09-15',
      warganegara: 'Malaysia',
      status: 'Draf',
    }
  ];

  hasil: Permohonan[] = [];
  sudahCari = false;

  onCari(frm: NgForm) {
  this.sudahCari = true;
  this.hasil = [];

  // 1. Semak input kosong ikut kategori
  if (
    (this.kategoriCarian === 'nomborRujukan' && !this.nomborCarian.trim()) ||
    (this.kategoriCarian === 'namaAgensi' && !this.namaAgensi.trim()) ||
    (this.kategoriCarian === 'tarikh' && (!this.tarikhDari || !this.tarikhHingga))
  ) {
    this.openPopup('Sila masukkan maklumat carian.', 'error');
    return;
  }

  // 2. Start dengan semua data
  this.hasil = [...this.semuaPermohonan];

  // Carian ikut nombor rujukan
  if (this.kategoriCarian === 'nomborRujukan') {
    const k = this.nomborCarian.trim().toLowerCase();
    this.hasil = this.hasil.filter(p => p.rujukan.toLowerCase().includes(k));
  }

  // Carian ikut tarikh
  if (this.kategoriCarian === 'tarikh') {
    const dari = new Date(this.tarikhDari);
    const hingga = new Date(this.tarikhHingga);
    this.hasil = this.hasil.filter(p => {
      const t = new Date(p.tarikh);
      return t >= dari && t <= hingga;
    });
  }

  // Carian ikut nama agensi
  if (this.kategoriCarian === 'namaAgensi') {
    const agensiInput = this.namaAgensi.trim().toLowerCase();
    this.hasil = this.hasil.filter(p =>
      p.agensi.toLowerCase().includes(agensiInput)
    );
  }

  // 3. Tiada hasil → popup rekod tak jumpa
  if (this.hasil.length === 0) {
    this.openPopup('Rekod tidak dijumpai.', 'error');
  }
}

onKategoriChange(kategori: 'nomborRujukan' | 'namaAgensi' | 'tarikh') {
  this.kategoriCarian = kategori;

  // Reset ikut kategori
  if (kategori !== 'tarikh') {
    this.tarikhDari = '';
    this.tarikhHingga = '';
  }
  if (kategori !== 'nomborRujukan') {
    this.nomborCarian = '';
  }
  if (kategori !== 'namaAgensi') {
    this.namaAgensi = '';
  }
}
  
  showPopup = false;
  popupMessage = '';
  popupType: 'error' | 'confirm' | 'success' | 'alert' | null = null;
  lastSubmittedStep: number | null = null;

    onConfirmYes() {
    this.showPopup = false;
    setTimeout(() => {
      this.popupType = 'success';
      this.popupMessage = 'Permohonan telah berjaya';
      this.showPopup = true;
    }, 100);
  }

  onConfirmNo() {
    this.showPopup = false;
    setTimeout(() => {
      this.popupType = 'success';
      this.popupMessage = 'Permohonan telah berjaya';
      this.showPopup = true;
    }, 100);
  }

  // -------------------- Modal Detail --------------------
  paparModal = false;
  terpilih: Permohonan | null = null;

  // -------------------- Popup -------------------

  private openPopup(msg: string, type: 'error' | 'confirm' = 'error') {
    this.popupMessage = msg;
    this.popupType = type;
    this.showPopup = true;
  }

  closePopup() {
    if (this.popupType === 'error') {
      // reset input carian bila popup error ditutup
      this.nomborCarian = '';
      this.hasil = [];
      this.sudahCari = false;
    }

    this.showPopup = false;
    this.popupMessage = '';
    this.popupType = null;
  }

  resetCarian(frm: NgForm) {
    this.kategoriCarian = 'nomborRujukan';
    this.nomborCarian = '';
    this.hasil = [];
    this.sudahCari = false;
    frm.resetForm({ kategori: 'nomborRujukan' });
  }

  bukaDetail(p: Permohonan) {
    this.terpilih = p;
    this.paparModal = true;
  }

  tutupModal() {
    this.paparModal = false;
    this.terpilih = null;
  }

// -------------------- Butang view --------------------
viewDetail(p: Permohonan) {
  // this.router.navigate(
  //   ['/sec/kebenaran-ke-baitulmaqdis/permohonan-baru/maklumat-agensi'],
  //   {
  //     queryParams: { mode: 'view', fid: p.fid }
  //   }
  // );
}

// -------------------- Butang edit --------------------
  editPermohonan(p: Permohonan) {
  // this.router.navigate(['/sec/kebenaran-ke-baitulmaqdis/permohonan-baru/maklumat-agensi'], {
  //   queryParams: { fid: p.fid }
  // });
}

  // Badge CSS helper
  getStatusClass(s: Permohonan['status']) {
    return s === 'Dihantar' ? 'badge badge-aktif' : 'badge badge-inactive';
  }

  trackByRujakan = (_: number, item: Permohonan) => item.rujukan;
}
