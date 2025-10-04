import { Component } from '@angular/core';
import { CardModule, CardHeaderComponent, CardBodyComponent, CardFooterComponent, FormModule, GridModule } from '@coreui/angular';
import { ButtonDirective } from '@coreui/angular';
import { StepperComponent } from '../stepper/stepper.component';
import { Router } from '@angular/router';

interface MaklumatLaporan {
  bilanganKehilangan: string;
  sebabKehilangan: string;
  ibuPejabatKontinjen: string;
  ibuPejabatDaerah: string;
  nomborLaporan: string;
  tarikhLaporan: string;
  nomborRujukanFail: string;
  tindakanKehilangan: string;
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
    StepperComponent,
  ],
  templateUrl: './maklumat-laporan.component.html',
  styleUrl: './maklumat-laporan.component.scss'
})
export class MaklumatLaporanComponent {
  currentMainStep = 2;
  maklumatLaporan: MaklumatLaporan = {
    bilanganKehilangan: '1',
    sebabKehilangan: 'Dompet tercicir di pusat membeli-belah',
    ibuPejabatKontinjen: 'IPK Kuala Lumpur',
    ibuPejabatDaerah: 'IPD Sentul',
    nomborLaporan: 'RPT/12345/2025',
    tarikhLaporan: '2025-06-20',
    nomborRujukanFail: 'RUJ.KP/2025/0567',
    tindakanKehilangan: 'Amaran telah diberikan semasa kehilangan sebelumnya',
  };


  constructor(private router: Router) {}

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa-5/maklumat-permohonan',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa-5/dokumen-sokongan',
    ]);
  }
}
