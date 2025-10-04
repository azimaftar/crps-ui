import { Component } from '@angular/core';
import { ReportService, VaccineReportModel } from '../../../../services/e-reporting/report.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-jana-laporan-carian',
  templateUrl: './jana-laporan-carian.component.html',
  styleUrls: ['../../bkp.scss'],
  imports: [CommonModule, FormsModule],
})
export class JanaLaporanCarianComponent {
  // Form inputs
  modul: string = '';
  transaksi: string = '';
  jenisLaporan: string = '';
  tarikhMula: string = '';
  tarikhAkhir: string = '';

  // Results
  resultData: VaccineReportModel[] = [];
  showNoResults: boolean = false;

  // Constructor
  constructor(private reportService: ReportService) {}

  // Options for Jenis Laporan
  jenisLaporanOptions: { [key: string]: { value: string; label: string }[] } = {
    vaksin: [
      { value: '2.5.1', label: 'Setuju/ Tolak Vaksin' },
      { value: '2.5.2', label: 'Penerimaan Vaksin' },
    ],
    pekeliling: [
      { value: '2.5.1', label: 'Jumlah dokumen yang dikeluarkan' },
      { value: '2.5.2', label: 'Pengeluaran dokumen mengikut bahagian' },
    ],
    dokumen: [
      { value: '2.5.1', label: 'Jumlah dokumen dimuat naik mengikut kategori dokumen' },
    ],
    capaian: [{ value: '2.6.1', label: 'Jumlah View/Download/Cetak' }],
    kehadiran: [
      { value: '2.6.1', label: 'Kehadiran Harian' },
      { value: '2.6.2', label: 'Kehadiran Bulanan' },
    ],
  };

  cariLaporan() {
    // Validate form
    if (!this.transaksi || !this.jenisLaporan || !this.tarikhMula || !this.tarikhAkhir) {
      alert('Sila lengkapkan semua medan yang diperlukan');
      return;
    }

    // Only handle vaksin reports in this component
    if (this.transaksi === 'vaksin') {
      this.reportService.getVaccineReports(
        this.jenisLaporan,
        this.tarikhMula,
        this.tarikhAkhir
      ).subscribe({
        next: (data) => {
          this.resultData = data;
          this.showNoResults = data.length === 0;
          console.log('✅ Laporan vaksin:', data);
        },
        error: (err) => {
          console.error('❌ Error fetching vaksin report', err);
          this.resultData = [];
          this.showNoResults = true;
        }
      });
    } else {
      // TODO: Handle other report types (pekeliling, dokumen, etc.)
      // These will be implemented by other team members
      alert('Laporan untuk ' + this.transaksi + ' belum dilaksanakan');
    }
  }

  resetForm(form?: NgForm) {
    this.modul = '';
    this.transaksi = '';
    this.jenisLaporan = '';
    this.tarikhMula = '';
    this.tarikhAkhir = '';
    this.resultData = [];
    this.showNoResults = false;
    if (form) form.resetForm();
  }

  get currentJenisLaporan() {
    return this.jenisLaporanOptions[this.transaksi] || [];
  }

  // Check which report type is selected
  isAcceptRejectReport(): boolean {
    return this.jenisLaporan === '2.5.1';
  }

  isAcceptedVaccineReport(): boolean {
    return this.jenisLaporan === '2.5.2';
  }

  // Download PDF
  // downloadPdf() {
  //   if (!this.jenisLaporan || !this.tarikhMula || !this.tarikhAkhir) {
  //     alert('Sila cari laporan terlebih dahulu');
  //     return;
  //   }

  //   this.reportService.downloadPdf(
  //     this.jenisLaporan,
  //     this.tarikhMula,
  //     this.tarikhAkhir
  //   ).subscribe({
  //     next: (blob) => {
  //       const url = window.URL.createObjectURL(blob);
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = `Laporan_Vaksin_${this.jenisLaporan}_${new Date().getTime()}.pdf`;
  //       link.click();
  //       window.URL.revokeObjectURL(url);
  //       console.log('✅ PDF downloaded successfully');
  //     },
  //     error: (err) => {
  //       console.error('❌ Error downloading PDF', err);
  //       alert('Ralat memuat turun PDF');
  //     }
  //   });
  // }

  // Download Excel
  // downloadExcel() {
  //   if (!this.jenisLaporan || !this.tarikhMula || !this.tarikhAkhir) {
  //     alert('Sila cari laporan terlebih dahulu');
  //     return;
  //   }

  //   this.reportService.downloadExcel(
  //     this.jenisLaporan,
  //     this.tarikhMula,
  //     this.tarikhAkhir
  //   ).subscribe({
  //     next: (blob) => {
  //       const url = window.URL.createObjectURL(blob);
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = `Laporan_Vaksin_${this.jenisLaporan}_${new Date().getTime()}.xlsx`;
  //       link.click();
  //       window.URL.revokeObjectURL(url);
  //       console.log('✅ Excel downloaded successfully');
  //     },
  //     error: (err) => {
  //       console.error('❌ Error downloading Excel', err);
  //       alert('Ralat memuat turun Excel');
  //     }
  //   });
  // }
}