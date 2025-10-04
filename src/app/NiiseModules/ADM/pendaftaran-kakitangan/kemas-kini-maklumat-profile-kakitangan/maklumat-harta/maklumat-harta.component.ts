import { Component, OnInit } from '@angular/core';
import { StepperComponent } from '../stepper/stepper.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maklumat-harta',
  templateUrl: './maklumat-harta.component.html',
  styleUrl: './maklumat-harta.component.scss',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    StepperComponent,
  ],
})
export class MaklumatHartaComponent {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1; // Main step (1,2,3,4,5,6)
  currentSubStep = 10; // Sub step (1-15)

  // Staff Profile Field
  readonlyField: boolean = false;

  maklumatHarta1 = {
    jenisHarta: ['', '', '', '', ''],
    keteranganHarta: ['', '', '', '', ''],
    tarikhDiisytiharkan: ['', '', '', '', ''],
    sumberPerolehan: ['', '', '', '', ''],
    nilaiHarta: ['', '', '', '', ''],
    anggaranNilaiSemasa: ['', '', '', '', ''],
    alamatHarta: ['', '', '', '', ''],
    catatan: ['', '', '', '', ''],
  };

  //Add more fields, remember to keep variables in here the same as declared variable
  addMaklumatHarta() {
    this.maklumatHarta1.jenisHarta.push('');
    this.maklumatHarta1.keteranganHarta.push('');
    this.maklumatHarta1.tarikhDiisytiharkan.push('');
    this.maklumatHarta1.sumberPerolehan.push('');
    this.maklumatHarta1.nilaiHarta.push('');
    this.maklumatHarta1.anggaranNilaiSemasa.push('');
    this.maklumatHarta1.alamatHarta.push('');
    this.maklumatHarta1.catatan.push('');
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-kegiatan-luar',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-keluarga',
    ]);
  }

  navigateClosePage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pendaftaran-kakitangan',
    ]);
  }
}
