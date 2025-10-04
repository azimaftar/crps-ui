import { Component } from '@angular/core';
import { CardModule, GridModule, NavModule, ModalModule, ButtonDirective, TableDirective, FormCheckLabelDirective, FormCheckInputDirective, FormCheckComponent} from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
  selector: 'app-laporan-siasatan',
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
  templateUrl: './laporan-siasatan.component.html',
  styleUrl: './laporan-siasatan.component.scss'
})
export class LaporanSiasatanComponent {
  showPopUp = false;
  currentMainStep = 5;
  constructor(private router: Router) {}

  closePopUp() {
    this.showPopUp = false;
  }

  navigatePreviousPage() {
    this.router.navigate(['adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa-3/sahkan-laporan']);
  }

  navigateNextPage() {
    this.router.navigate(['adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa-3/maklumat-bayaran']);
  }
}
