import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  ButtonModule,
  FormModule,
  FormSelectDirective,
  ButtonDirective,
} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilCalendar } from '@coreui/icons';
import { ContainerComponent, CardBodyComponent } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ModalHantarComponent } from '../modal-hantar/modal-hantar.component';
import { ModalSimpanComponent } from '../modal-simpan/modal-simpan.component';

@Component({
  selector: 'app-jadual-roster',
  standalone: true,
  imports: [
    RouterModule,
    ContainerComponent,
    CommonModule,
    FormsModule,
    FormModule,
    FormSelectDirective,
    CardModule,
    ButtonModule,
    ButtonDirective,
    IconModule,
    CardBodyComponent,
    ModalHantarComponent,
    ModalSimpanComponent,
  ],
  templateUrl: './jadual-roster.component.html',
  styleUrls: ['../../../bkp.scss'],
})
export class JadualRosterComponent {
  showModalSimpan = false;
  showModalHantar = false;
  private router = inject(Router);

  constructor(private iconSet: IconSetService) {
    this.iconSet.icons = { cilCalendar };

    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { formData: any };

    if (state?.formData) {
       console.log('✅ Data received from previous page:', state.formData);
      this.formData = state.formData;
    }
  }

  formData = {
    bahagian: '',
    unit: '',
    kumpulan: '',
    tarikh: '',
    kaunter: '',
    namaPegawai: '',
    nomborPerkhidmatan: '',
    masaMula: '',
    masaAkhir: '',
    gredJawatan: '',
    catatan: '',
    userUid: '',
  };

  onSetSemula() {
    // Reset form
    this.formData = {
      bahagian: '',
      unit: '',
      kumpulan: '',
      tarikh: '',
      kaunter: '',
      namaPegawai: '',
      nomborPerkhidmatan: '',
      masaMula: '',
      masaAkhir: '',
      gredJawatan: '',
      catatan: '',
      userUid: '',
    };
    console.log('Form reset');
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

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Add your submit logic here
  }
}
