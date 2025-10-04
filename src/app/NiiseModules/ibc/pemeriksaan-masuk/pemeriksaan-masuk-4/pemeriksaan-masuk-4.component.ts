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
  selector: 'app-pemeriksaan-masuk-4',
  standalone: true,
  imports: [
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    ButtonModule
  ],
  templateUrl: './pemeriksaan-masuk-4.component.html',
  styleUrl: './pemeriksaan-masuk-4.component.scss'
})
export class PemeriksaanMasuk4Component {

  docType: string = '';
  constructor(private router: Router) { }
  openProfilPengembara() {
    this.router.navigate(['ibc/pemeriksaan-masuk/maklumat-profil-pengembara'], { queryParams: { docType: this.docType } })
  }
}
