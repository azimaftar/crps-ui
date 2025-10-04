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
  selector: 'app-kelulusan',
  imports: [CommonModule, FormsModule],
  templateUrl: './kelulusan.component.html',
  styleUrl: './kelulusan.component.scss'
})
export class KelulusanComponent {

  constructor(private router: Router) {}
  
    searchCriteria = {
      carian: 'Nombor Rujukan', // default category (matches your input)
      noRujukan: '',
    };
  
    // ---- UI state
    showTable = false;       // controls *ngIf for the results table
    currentStep = 1;         // 1=Carian, 2=Maklumat, 3=Keputusan
  
    // ---- Data (mock). Replace with real API results as needed.
    private allDocuments: PermohonanRow[] = [
      { noRujukan: '1234567890', nama: 'Ali Bin Abu',    warganegara: 'MY', status: 'Baru',     tindakan: 'Lihat' },
      { noRujukan: '9876543210', nama: 'Siti Aisyah',    warganegara: 'MY', status: 'Semak',    tindakan: 'Lihat' },
      { noRujukan: '5556667777', nama: 'John Doe',       warganegara: 'US', status: 'Lulus',    tindakan: 'Lihat' },
      { noRujukan: '1122334455', nama: 'Raja Hazirah',   warganegara: 'MY', status: 'Ditolak',  tindakan: 'Lihat' },
    ];
  
    documents: PermohonanRow[] = [];
  
    // --- Submit (press Enter / submit)
    onSubmit(form?: NgForm): void {
      this.onSearch();
    }
  
    onSearch(): void {
      const term = (this.searchCriteria.noRujukan || '').trim();
  
      if (!term) {
        this.documents = [];
        this.showTable = false;
        this.currentStep = 1;
        return;
      }
  
      this.documents = this.allDocuments.filter(d =>
        d.noRujukan.toLowerCase().includes(term.toLowerCase())
      );
  
      this.showTable = true;
      this.currentStep = 2; // move focus to "Maklumat Permohonan"
    }
  
    onTindakan(row: PermohonanRow): void {
      // Option A: as query param (simple)
      this.router.navigate(
        ['/sec/pengesahan-cap-jari/kelulusan/maklumat-pemohon'],
        { queryParams: { ruj: row.noRujukan } }
      );
  
    this.currentStep = 2;
    }
  
    // --- Step helpers (used by [class.active]/[class.completed])
    isStepActive(step: number): boolean {
      return this.currentStep === step;
    }
  
    isStepCompleted(step: number): boolean {
      return this.currentStep > step;
    }
  
}
