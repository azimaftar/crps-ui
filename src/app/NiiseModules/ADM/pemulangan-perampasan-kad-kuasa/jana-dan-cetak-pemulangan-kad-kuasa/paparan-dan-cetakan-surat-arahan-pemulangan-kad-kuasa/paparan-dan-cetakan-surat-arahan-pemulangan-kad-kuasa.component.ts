import { Component } from '@angular/core';
import { CardModule, GridModule, NavModule, ModalModule, ButtonDirective} from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperComponent } from '../stepper/stepper.component';
import { MatIconModule } from '@angular/material/icon';
import { cilPrint } from '@coreui/icons';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ModalComponentComponent } from '../../modal-component/modal-component.component';

@Component({
  selector: 'app-paparan-dan-cetakan-surat-arahan-pemulangan-kad-kuasa',
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
    MatIconModule,
    IconModule,
    ModalComponentComponent
  ],
  templateUrl: './paparan-dan-cetakan-surat-arahan-pemulangan-kad-kuasa.component.html',
  styleUrl: './paparan-dan-cetakan-surat-arahan-pemulangan-kad-kuasa.component.scss'
})
export class PaparanDanCetakanSuratArahanPemulanganKadKuasaComponent {
  showPopUp: boolean = false;
  icons = { cilPrint };

  constructor(private router: Router, private iconSet: IconSetService) {
    this.iconSet.icons = { cilPrint };
  }

  closePopUp() { //modal for adm-e005
    this.showPopUp = false;
  }
}
