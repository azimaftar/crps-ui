import { Component } from '@angular/core';
import { CardModule, GridModule, NavModule, ModalModule, ButtonDirective, TableDirective, FormCheckLabelDirective, FormCheckInputDirective, FormCheckComponent} from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperComponent } from '../stepper/stepper.component';
import { cilCheckCircle } from '@coreui/icons';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ModalComponentComponent } from '../../modal-component/modal-component.component';

@Component({
  selector: 'app-sahkan-laporan-siasatan',
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
  templateUrl: './sahkan-laporan-siasatan.component.html',
  styleUrl: './sahkan-laporan-siasatan.component.scss'
})
export class SahkanLaporanSiasatanComponent {
  icons = { cilCheckCircle };

  constructor(private router: Router, private iconSet: IconSetService) {
    this.iconSet.icons = { cilCheckCircle };
  }

  currentMainStep = 6;
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
      'adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa-4/laporan-siasatan',
    ]);
  }

  navigateNextPage() {
    this.router.navigate([
      'adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa-4/',
    ]);
  }

  closeHantarRekodModal(): void {//model for cmn-S013
    this.hantarRekodModal = false;
  }

  HantarRekod() {//model for cmn-S013
    this.hantarRekodModal = true;
  }
}
