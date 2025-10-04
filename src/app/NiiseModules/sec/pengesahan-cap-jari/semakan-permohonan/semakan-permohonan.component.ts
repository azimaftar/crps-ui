import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

interface PermohonanRow {
  noRujukan: string;
  nama: string;
  warganegara: string;
  status: string;
  tindakan: string;
}

@Component({
  selector: 'app-semakan-permohonan',
  imports: [CommonModule, FormsModule],
  templateUrl: './semakan-permohonan.component.html',
  styleUrls: ['./semakan-permohonan.component.scss']
})
export class SemakanPermohonanComponent {

   constructor(private router: Router) {}

  currentStep = 1;

  searchCriteria = { carian: 'Nombor Rujukan', noRujukan: '' };
  showTable = false;

  private allDocuments: PermohonanRow[] = [
    { noRujukan: '1234567890', nama: 'Ali Bin Abu',    warganegara: 'MY', status: 'Baru',    tindakan: 'Lihat' },
    { noRujukan: '9876543210', nama: 'Siti Aisyah',    warganegara: 'MY', status: 'Semak',   tindakan: 'Lihat' },
    { noRujukan: '5556667777', nama: 'John Doe',       warganegara: 'US', status: 'Lulus',   tindakan: 'Lihat' },
    { noRujukan: '1122334455', nama: 'Raja Hazirah',   warganegara: 'MY', status: 'Ditolak', tindakan: 'Lihat' },
  ];
  documents: PermohonanRow[] = [];

  onSubmit(form?: NgForm) { this.onSearch(); }

  onSearch(): void {
    const term = (this.searchCriteria.noRujukan || '').trim();
    if (!term) { this.documents = []; this.showTable = false; this.currentStep = 1; return; }

    this.documents = this.allDocuments.filter(d => d.noRujukan.includes(term));
    this.showTable = true;
    this.currentStep = 2;
  }

  onTindakan(row: PermohonanRow): void {
    this.router.navigate(
      ['/sec/pengesahan-cap-jari/semakan-permohonan/maklumat-pemohon'],
      { queryParams: { ruj: row.noRujukan } }
    );
  }

  isStepActive(n: number) { return this.currentStep === n; }
  isStepCompleted(n: number) { return this.currentStep > n; }

}
