import { Component } from '@angular/core';
import { CardModule, GridModule, NavModule, ModalModule, ButtonDirective, TableDirective, FormCheckLabelDirective, FormCheckInputDirective, FormCheckComponent} from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperComponent } from '../stepper/stepper.component';
import { cilCheckCircle } from '@coreui/icons';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ModalComponentComponent } from '../../laporan-kehilangan-kad-kuasa/modal-component/modal-component.component';

@Component({
  selector: 'app-luluskan-laporan-kehilangan',
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
  templateUrl: './luluskan-laporan-kehilangan.component.html',
  styleUrl: './luluskan-laporan-kehilangan.component.scss'
})
export class LuluskanLaporanKehilanganComponent {
  icons = { cilCheckCircle };

  constructor(private router: Router, private iconSet: IconSetService) {
    this.iconSet.icons = { cilCheckCircle };
  }

  currentMainStep = 7;
  statusKelulusan: string = '';
  hantarRekodModal: boolean = false;

  toggleLulus() {
    this.statusKelulusan = 'Lulus';
  }

  toggleTidakLulus() {
    this.statusKelulusan = 'Tidak Lulus';
  }

navigatePreviousPage() {
    this.router.navigate([
      'adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa-5/sahkan-laporan/sahkan-laporan-siasatan',
    ]);
  }

  navigateNextPage() {
    this.router.navigate([
      'adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa-5/laporan-siasatan',
    ]);
  }

  closeHantarRekodModal(): void {//model for cmn-S013
    this.hantarRekodModal = false;
  }

  HantarRekod() {//model for cmn-S013
    this.hantarRekodModal = true;
  }
}
