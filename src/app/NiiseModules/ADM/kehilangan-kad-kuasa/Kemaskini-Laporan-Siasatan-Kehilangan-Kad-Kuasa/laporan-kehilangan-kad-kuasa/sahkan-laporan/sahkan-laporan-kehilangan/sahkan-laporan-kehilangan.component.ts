import { Component } from '@angular/core';
import { CardModule, GridModule, NavModule, ModalModule, ButtonDirective, TableDirective, FormCheckLabelDirective, FormCheckInputDirective, FormCheckComponent} from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperComponent } from '../stepper/stepper.component';
import { cilCheckCircle } from '@coreui/icons';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ModalComponentComponent } from '../../modal-component/modal-component.component';

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
  selector: 'app-sahkan-laporan-kehilangan',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonDirective,
    TableDirective,
    FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective,
    StepperComponent,
    IconModule,
    ModalComponentComponent
  ],
  templateUrl: './sahkan-laporan-kehilangan.component.html',
  styleUrl: './sahkan-laporan-kehilangan.component.scss'
})
export class SahkanLaporanKehilanganComponent {
  icons = { cilCheckCircle };

  constructor(private router: Router, private iconSet: IconSetService) {
    this.iconSet.icons = { cilCheckCircle };
  }

  currentMainStep = 4;
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

  
  statusPengesahan: string = '';
  hantarRekodModal: boolean = false;

  toggleSah() {
    this.statusPengesahan = 'Sah';
  }

  toggleTidakSah() {
    this.statusPengesahan = 'Tidak Sah';
  }

navigatePreviousPage() {
    this.router.navigate([
      'adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa-3/dokumen-sokongan',
    ]);
  }

  navigateNextPage() {
    this.router.navigate([
      'adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa-3/laporan-siasatan',
    ]);
  }

  closeHantarRekodModal(): void {//model for cmn-S013
    this.hantarRekodModal = false;
  }

  HantarRekod() {//model for cmn-S013
    this.hantarRekodModal = true;
  }
}
