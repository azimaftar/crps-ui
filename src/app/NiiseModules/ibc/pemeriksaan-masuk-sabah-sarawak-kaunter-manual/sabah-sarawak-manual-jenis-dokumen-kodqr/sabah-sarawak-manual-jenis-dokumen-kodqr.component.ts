import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sabah-sarawak-manual-jenis-dokumen-kodqr',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './sabah-sarawak-manual-jenis-dokumen-kodqr.component.html',
  styleUrl: './sabah-sarawak-manual-jenis-dokumen-kodqr.component.scss'
})
export class SabahSarawakManualJenisDokumenKodqrComponent {

  umur: string = '';
  umurError: string = '';
  noPengenalan: string = '';
  noPengenalanError: string = '';

  onUmurChange(value: string) {
    const numericValue = value.replace(/[^0-9]/g, '');

    if (numericValue !== value) {
      this.umurError = 'Sila masukkan nombor sahaja';

      setTimeout(() => {
        this.umur = '';
      }, 2000); //2 second to clear the input value
    } else {
      this.umurError = '';
      this.umur = numericValue;
    }
  }
  constructor(private router: Router, private route: ActivatedRoute) { }
  gotoNextPage():void{
    this.router.navigate(['../maklumat-profil-pengembara-ibc'],  {relativeTo: this.route});
  }

  onNoPengenalanChange(value: string) {
    const numericValue = value.replace(/[^0-9]/g, '');

    if (numericValue !== value) {
      this.noPengenalanError = 'Sila masukkan nombor sahaja';

      setTimeout(() => {
        this.noPengenalan = '';
      }, 2000); //2 second to clear the input value
    } else {
      this.noPengenalanError = '';
      this.noPengenalan = numericValue;
    }
  }
}
