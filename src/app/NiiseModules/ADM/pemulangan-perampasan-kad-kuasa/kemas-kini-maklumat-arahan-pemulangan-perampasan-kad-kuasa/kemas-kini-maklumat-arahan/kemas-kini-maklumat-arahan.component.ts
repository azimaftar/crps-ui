import { Component } from '@angular/core';
import { CardModule, GridModule, NavModule, ModalModule, ButtonDirective} from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperComponent } from '../stepper/stepper.component';
import { cilCheckCircle } from '@coreui/icons';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ModalComponentComponent } from '../../modal-component/modal-component.component';

@Component({
  selector: 'app-kemas-kini-maklumat-arahan',
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
  templateUrl: './kemas-kini-maklumat-arahan.component.html',
  styleUrl: './kemas-kini-maklumat-arahan.component.scss'
})
export class KemasKiniMaklumatArahanComponent {
  icons = { cilCheckCircle };

  constructor(private router: Router, private iconSet: IconSetService) {
    this.iconSet.icons = { cilCheckCircle };
  }

  currentMainStep = 3;
  simpanRekodModal: boolean = false;
  hantarRekodModal: boolean = false;

  closeSimpanRekodModal(): void {//model for cmn-S001
    this.simpanRekodModal = false;
  }
  
  closeHantarRekodModal(): void {//model for cmn-S013
    this.hantarRekodModal = false;
  }

  navigatePreviousPage() {
    this.router.navigate(['/adm/pemulangan-perampasan-kad-kuasa/kemas-kini-maklumat-arahan-pemulangan-perampasan-kad-kuasa/maklumat-laporan-siasatan']);
  }

  navigateNextPage() {
    this.router.navigate(['/adm/pemulangan-perampasan-kad-kuasa/sahkan-laporan-pemulangan-perampasan-kad-kuasa/sahkan-laporan-pemulangan-perampasan-kad-kuasa']);
  }

  SimpanRekod() {
    this.simpanRekodModal = true;
  }

  HantarRekod() {
    this.hantarRekodModal = true;
  }
}
