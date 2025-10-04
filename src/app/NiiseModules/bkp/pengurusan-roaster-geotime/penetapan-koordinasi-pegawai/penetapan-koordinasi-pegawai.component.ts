import { Component } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-penetapan-koordinasi-pegawai',
  imports: [RouterModule, CommonModule],
  templateUrl: './penetapan-koordinasi-pegawai.component.html',
  styleUrls: ['../../bkp.scss'],
})
export class PenetapanKoordinasiPegawaiComponent {
  step = 1;
  showNotFoundPopup = false;
  // Form data properties
  bahagian: string = '';
  unit: string = '';
  kumpulan: string = '';
  namaPegawai: string = '';
  kadPengenalan: string = '';
  gredJawatan: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}
  // Dummy search function
  onSearch(): void {
    console.log('Search triggered with values:', {
      bahagian: this.bahagian,
      unit: this.unit,
      kumpulan: this.kumpulan,
      namaPegawai: this.namaPegawai,
      kadPengenalan: this.kadPengenalan,
      gredJawatan: this.gredJawatan,
    });

    //  this.showNotFoundPopup = true;

    this.router.navigate(['maklumat-pegawai'], { relativeTo: this.route });
  }

  closePopup() {
    this.showNotFoundPopup = false;
  }
}
