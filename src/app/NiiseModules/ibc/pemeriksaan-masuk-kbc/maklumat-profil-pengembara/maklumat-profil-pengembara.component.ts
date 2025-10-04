import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
  selector: 'app-maklumat-profil-pengembara',
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
  templateUrl: './maklumat-profil-pengembara.component.html',
  styleUrl: './maklumat-profil-pengembara.component.scss'
})
export class MaklumatProfilPengembaraComponent {
  
  constructor(private router:Router, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(this.docType);
      this.docType = params['docType'];
    })

  }
  docType: string = '';
  openProfilPengembara() {
    this.router.navigate(['ibc/pemeriksaan-masuk-kbc/maklumat-profil'], { queryParams: { maklumat: this.docType } })
  }
}
