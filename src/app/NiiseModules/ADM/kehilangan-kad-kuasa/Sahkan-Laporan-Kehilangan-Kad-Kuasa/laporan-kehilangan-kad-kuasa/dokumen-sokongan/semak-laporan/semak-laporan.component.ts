import { Component } from '@angular/core';
import { CardModule, CardHeaderComponent, CardBodyComponent, CardFooterComponent, FormModule, GridModule } from '@coreui/angular';
import { ButtonDirective } from '@coreui/angular';
import { Router } from '@angular/router';

interface SemakLaporan {
  bilanganKehilangan: string;
  sebabKehilangan: string;
  ibuPejabatKontinjen: string;
  ibuPejabatDaerah: string;
  nomborLaporan: string;
  tarikhLaporan: string;
  nomborRujukanFail: string;
  tindakanKehilangan: string;
  namaPegawai: string;
  seksyenKesalahan: string;
}

@Component({
  selector: 'app-maklumat-pemohonan',
  imports: [
    CardModule,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    FormModule,
    GridModule,
    ButtonDirective,
  ],
  templateUrl: './semak-laporan.component.html',
  styleUrls: ['./semak-laporan.component.scss'] // <-- fixed here
})
export class SemakLaporanComponent {
  currentMainStep = 2;

  maklumatLaporan: SemakLaporan = { // <-- fixed type here
    bilanganKehilangan: '1',
    sebabKehilangan: 'Dompet tercicir di pusat membeli-belah',
    ibuPejabatKontinjen: 'IPK Kuala Lumpur',
    ibuPejabatDaerah: 'IPD Sentul',
    nomborLaporan: 'RPT/12345/2025',
    tarikhLaporan: '2025-06-20',
    nomborRujukanFail: 'RUJ.KP/2025/0567',
    tindakanKehilangan: 'Amaran telah diberikan semasa kehilangan sebelumnya',
    namaPegawai: '',
    seksyenKesalahan: '',
  };

  constructor(private router: Router) {}

  navigatePreviousPage() {
    this.router.navigate([
      'adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa-2/maklumat-permohonan',
    ]);
  }

  navigateNextPage() {
    this.router.navigate([
      'adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa-2/dokumen-sokongan',
    ]);
  }
}
