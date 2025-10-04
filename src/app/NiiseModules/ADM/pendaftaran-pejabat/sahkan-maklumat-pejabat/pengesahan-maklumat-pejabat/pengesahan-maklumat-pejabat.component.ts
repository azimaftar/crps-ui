import { Component } from '@angular/core';
import { CardModule, GridModule, NavModule, ModalModule, ButtonDirective } from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperComponent } from '../../daftar-kemas-kini-maklumat-pejabat/stepper/stepper.component';
import { cilCheckCircle } from '@coreui/icons';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ModalComponentComponent } from '../../daftar-kemas-kini-maklumat-pejabat/modal-component/modal-component.component';

@Component({
  selector: 'app-pengesahan-maklumat-pejabat',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonDirective,
    StepperComponent,
    IconModule,
    ModalComponentComponent
  ],
  templateUrl: './pengesahan-maklumat-pejabat.component.html',
  styleUrl: './pengesahan-maklumat-pejabat.component.scss'
})
export class PengesahanMaklumatPejabatComponent {
  icons = { cilCheckCircle };

  constructor(private router: Router, private iconSet: IconSetService) {
    this.iconSet.icons = { cilCheckCircle };
  }

  currentMainStep: number = 2;
  currentSubStep: number = 0;
  statusPengesahan: string = '';
  hantarRekodModal: boolean = false;

  toggleSah() {
    this.statusPengesahan = 'Sah';
  }

  toggleTidakSah() {
    this.statusPengesahan = 'Tidak Sah';
  }

  navigatePreviousPage() {
    this.router.navigate(['/adm/pendaftaran-pejabat/daftar-kemas-kini-maklumat-pejabat/maklumat-kontrak-pembekalan-makanan']);
  }

  // navigateNextPage() {
  //   this.router.navigate(['/adm/pendaftaran-pejabat/daftar-kemas-kini-maklumat-pejabat/maklumat-kontrak-penyelenggaraan']);
  // } 

  closeHantarRekodModal(): void {//model for cmn-S013
    this.hantarRekodModal = false;
  }

  HantarRekod() {//model for cmn-S013
    this.hantarRekodModal = true;
  }
}
