import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
  ButtonDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormSelectDirective,
  ButtonCloseDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective
} from '@coreui/angular';
@Component({
  selector: 'app-maklumat-dokumen',
  imports: [
    ReactiveFormsModule,
    FormsModule, FormDirective,
    FormLabelDirective,
    FormControlDirective,
    FormSelectDirective,
    ButtonDirective,
    ModalToggleDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent
  ],
  templateUrl: './maklumat-dokumen.component.html',
  styleUrl: './maklumat-dokumen.component.scss'
})
export class MaklumatDokumenComponent {
  docType: string = '';
  constructor(private router:Router){}

  openProfilPengembara() {
    this.router.navigate(['ibc/pemeriksaan-masuk/maklumat-profil-pengembara'], { queryParams: { docType: this.docType } })
  }
}
