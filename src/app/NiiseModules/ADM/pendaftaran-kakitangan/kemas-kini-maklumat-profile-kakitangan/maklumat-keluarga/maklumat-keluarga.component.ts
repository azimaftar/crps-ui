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
  selector: 'app-maklumat-keluarga',
  templateUrl: './maklumat-keluarga.component.html',
  styleUrl: './maklumat-keluarga.component.scss',
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
export class MaklumatKeluargaComponent {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1;
  currentSubStep = 11;

  readonlyField: boolean = false;

  maklumatIbuBapa1 = {
    namaIbu: 'Marget Anne Smith',
    hubunganIbu: 'Ibu',

    namaBapa: 'William Edward Smith',
    hubunganBapa: 'Bapa',
  };

  maklumatPasangan1 = {
    nama: ['', '', '', '', ''],
    kadpengenalan: ['', '', '', '', ''],
    tarikhLahir: ['', '', '', '', ''],
    hubungan: ['', '', '', '', ''],
  };

  //Add more fields, remember to keep variables in here the same as declared variable
  addMaklumatPasangan() {
    this.maklumatPasangan1.nama.push('');
    this.maklumatPasangan1.kadpengenalan.push('');
    this.maklumatPasangan1.tarikhLahir.push('');
    this.maklumatPasangan1.hubungan.push('');
  }

    maklumatTanggungan1 = {
    nama: ['', '', '', '', '', '', ''],
    kadpengenalan: ['', '', '', '', '', '', ''],
    tarikhLahir: ['', '', '', '', '', '', ''],
    hubungan: ['', '', '', '', '', '', ''],
  };

  //Add more fields, remember to keep variables in here the same as declared variable
  addMaklumatTanggungan() {
    this.maklumatTanggungan1.nama.push('');
    this.maklumatTanggungan1.kadpengenalan.push('');
    this.maklumatTanggungan1.tarikhLahir.push('');
    this.maklumatTanggungan1.hubungan.push('');
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-harta',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-pakaian-seragam',
    ]);
  }

  navigateClosePage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pendaftaran-kakitangan',
    ]);
  }
}
