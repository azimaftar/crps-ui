import { Component, viewChild, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { //c-dash
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  ButtonModule
} from '@coreui/angular';

@Component({
  selector: 'app-imbasan-mykad',
  imports: [
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    ButtonModule
  ],
  templateUrl: './imbasan-mykad.component.html',
  styleUrl: './imbasan-mykad.component.scss'
})
export class ImbasanMykadComponent {
  docType: string = '';
  constructor(private router: Router) { }
  openProfilPengembara() {
    this.router.navigate(['ibc/pemeriksaan-masuk-kbc/maklumat-profil-pengembara'], { queryParams: { docType: this.docType } })
  }
}
