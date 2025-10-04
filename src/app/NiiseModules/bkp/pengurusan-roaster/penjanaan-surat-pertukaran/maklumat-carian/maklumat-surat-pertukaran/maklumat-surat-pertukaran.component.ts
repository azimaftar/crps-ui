import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  FormModule,
  ButtonModule,
  ModalModule,
} from '@coreui/angular';
import { ModalSimpanComponent } from '../modal-simpan/modal-simpan.component';
import { ModalHantarComponent } from '../modal-hantar/modal-hantar.component';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    ContainerComponent,
    RowComponent,
    ColComponent,
    FormModule,
    ButtonModule,
    ModalModule,
    ModalSimpanComponent,
    ModalHantarComponent,
  ],
  selector: 'app-maklumat-surat-pertukaran',
  standalone: true,
  styleUrls: [
    '../../../pengurusan-roaster.component.scss',
    '../../../../bkp.scss'
  ],
  templateUrl: './maklumat-surat-pertukaran.component.html',
})
export class MaklumatSuratPertukaranComponent {
  showModalSimpan = false;
  showModalHantar = false;

  onSimpan() {
    console.log('Simpan clicked');
    this.showModalSimpan = true;
  }

  onHantar() {
    console.log('Hantar clicked');
    this.showModalHantar = true;
  }

  onModalSimpanClosed() {
    this.showModalSimpan = false;
    console.log('Modal Simpan closed');
  }

  onModalHantarClosed() {
    this.showModalHantar = false;
    console.log('Modal Hantar closed');
  }
}
