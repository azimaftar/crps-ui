import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { 
  ButtonModule, 
  FormModule, 
  GridModule,
  ContainerComponent,
  RowComponent,
  ColComponent
} from '@coreui/angular';
import { ModalSimpanComponent } from './modal-simpan/modal-simpan.component';
import { ModalHantarComponent } from './modal-hantar/modal-hantar.component';

@Component({
  selector: 'app-konfigurasi-nombor-fail',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    GridModule,
    ContainerComponent,
    RowComponent,
    ColComponent,
    ModalSimpanComponent,
    ModalHantarComponent,
  ],
  templateUrl: './konfigurasi-nombor-fail.component.html',
  styleUrls: ['../../bkp.scss']
})
export class KonfigurasiNomborFailComponent {
  showModalSimpan = false;
  showModalHantar = false;
  configForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.configForm = this.fb.group({
      cawangan: ['IM 101/CAWANGAN'],
      field1: ['IM 101'],
      field2: ['ALIA-P(S)'],
      field3: ['885'],
      field4: ['3'],
      field5: ['1'],
      field6: ['JDL 6 (36)']
    });
  }

  onSetSemula() {
    this.configForm.reset();
  }

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