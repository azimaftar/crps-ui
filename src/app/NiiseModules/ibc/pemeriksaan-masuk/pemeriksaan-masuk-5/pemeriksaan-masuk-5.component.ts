import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pemeriksaan-masuk-5',
  imports: [],
  templateUrl: './pemeriksaan-masuk-5.component.html',
  styleUrl: './pemeriksaan-masuk-5.component.scss'
})
export class PemeriksaanMasuk5Component {

  docType: string = '';
  constructor(private router:Router){}

  openProfilPengembara() {
    this.router.navigate(['ibc/pemeriksaan-masuk/maklumat-profil-pengembara'], { queryParams: { docType: this.docType } })
  }
}
