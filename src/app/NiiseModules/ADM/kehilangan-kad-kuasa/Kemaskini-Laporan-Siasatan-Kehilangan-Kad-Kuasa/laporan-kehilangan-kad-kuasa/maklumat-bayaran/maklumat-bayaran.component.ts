import { Component } from '@angular/core';
import { 
  CardModule, 
  CardHeaderComponent, 
  CardBodyComponent, 
  CardFooterComponent, 
  FormModule, 
  GridModule 
} from '@coreui/angular';
import { ButtonDirective } from '@coreui/angular';
import { StepperComponent } from '../stepper/stepper.component';
import { Router } from '@angular/router';

interface MaklumatBayaran {
  jenisDokumen: string;
  noDokumen: string;
  kodAkaun: string;
  kodIMM: string;
  keteranganKodIMM: string;
  amaunBayaran: string;
  kuantiti: string;
  jumlahAmaunBayaran: string;
  indikatorGratis: string;
  statusBayaran: string;
  nomborResit: string;
}

@Component({
  selector: 'app-maklumat-bayaran',
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
  templateUrl: './maklumat-bayaran.component.html',
  styleUrls: ['./maklumat-bayaran.component.scss'],
})
export class MaklumatBayaranComponent {
  // Stepper indicators
  currentMainStep = 5;
  currentSubStep = 1;

  maklumatBayaran: MaklumatBayaran = {
    jenisDokumen: 'MyKad',
    noDokumen: '890101145678',
    kodAkaun: '210310',
    kodIMM: 'KADHILANG',
    keteranganKodIMM: 'Bayaran Kad Kuasa Hilang (RM50)',
    amaunBayaran: '50.00',
    kuantiti: '1',
    jumlahAmaunBayaran: '50.00',
    indikatorGratis: 'N',
    statusBayaran: '',
    nomborResit: '',
  };

  constructor(private router: Router) {}

  // this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa-3/laporan-siasatan',
    ]);
  }

  // this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa-3/dokumen-sokongan',
    ]);
  }
}
