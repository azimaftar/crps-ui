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
  selector: 'app-maklumat-kegiatan-luar',
  templateUrl: './maklumat-kegiatan-luar.component.html',
  styleUrl: './maklumat-kegiatan-luar.component.scss',
  standalone: true,
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
export class MaklumatKegiatanLuarComponent {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1; // Main step (1,2,3,4,5,6)
  currentSubStep = 9; // Sub step (1-15)

  // Staff Profile Field
  readonlyField: boolean = false;

  maklumatKegiatanLuar1 = {
    jenisKegiatan: ['Sukarelawan', '', '', '', ''],
    jenisKumpulanPertubuhan: ['High Commission of Malaysia, Canberra', '', '', '', ''],
    jawatan: ['Setiusaha', '', '', '', ''],
    tahapPencapaian: ['Kebangsaan', '', '', '', ''],
  };

  //Add more fields, remember to keep variables in here the same as declared variable
  addMaklumatKegiatanLuar() {
    this.maklumatKegiatanLuar1.jenisKegiatan.push('');
    this.maklumatKegiatanLuar1.jenisKumpulanPertubuhan.push('');
    this.maklumatKegiatanLuar1.jawatan.push('');
    this.maklumatKegiatanLuar1.tahapPencapaian.push('');
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-akaun-bank',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-harta',
    ]);
  }

  navigateClosePage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pendaftaran-kakitangan',
    ]);
  }
}
