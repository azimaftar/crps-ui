import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule, ButtonDirective, ModalModule, TableDirective, FormCheckInputDirective, FormCheckLabelDirective, FormCheckComponent, NavModule, GridModule } from '@coreui/angular';
import { cilPrint } from '@coreui/icons';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ModalComponentComponent } from '../modal-component/modal-component.component';

@Component({
  selector: 'app-paparan-dan-cetakan-surat-permohonan-pelupusan-ke-cgso',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    ButtonDirective,
    TableDirective,
    FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective,
    IconModule
    ,ModalComponentComponent
  ],
  templateUrl: './paparan-dan-cetakan-surat-permohonan-pelupusan-ke-cgso.component.html',
  styleUrl: './paparan-dan-cetakan-surat-permohonan-pelupusan-ke-cgso.component.scss'
})
export class PaparanDanCetakanSuratPermohonanPelupusanKeCgsoComponent {
  icons = { cilPrint };

  constructor(private iconSet: IconSetService) {
    this.iconSet.icons = { cilPrint };
  }
  showPopUp: boolean = false;

  closePopUp() { //modal for adm-e005
    this.showPopUp = false;
  }
}
