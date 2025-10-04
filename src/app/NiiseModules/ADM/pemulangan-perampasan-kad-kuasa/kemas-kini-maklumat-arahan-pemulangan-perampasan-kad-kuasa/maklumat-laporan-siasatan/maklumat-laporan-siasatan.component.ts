import { Component } from '@angular/core';
import { CardModule, GridModule, NavModule, ModalModule, ButtonDirective, TableDirective, FormCheckLabelDirective, FormCheckInputDirective, FormCheckComponent} from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
  selector: 'app-maklumat-laporan-siasatan',
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
    StepperComponent
  ],
  templateUrl: './maklumat-laporan-siasatan.component.html',
  styleUrl: './maklumat-laporan-siasatan.component.scss'
})
export class MaklumatLaporanSiasatanComponent {
  showPopUp = false;
  currentMainStep = 2;
  constructor(private router: Router) {}

  closePopUp() {
    this.showPopUp = false;
  }

  navigatePreviousPage() {
    this.router.navigate(['/adm/pemulangan-perampasan-kad-kuasa/jana-dan-cetak-pemulangan-kad-kuasa/maklumat-pegawai']);
  }

  navigateNextPage() {
    this.router.navigate(['/adm/pemulangan-perampasan-kad-kuasa/kemas-kini-maklumat-arahan-pemulangan-perampasan-kad-kuasa/kemas-kini-maklumat-arahan']);
  }
}
