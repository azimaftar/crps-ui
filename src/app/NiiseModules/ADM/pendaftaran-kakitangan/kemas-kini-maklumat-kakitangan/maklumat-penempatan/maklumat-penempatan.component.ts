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
  selector: 'app-maklumat-penempatan',
  templateUrl: './maklumat-penempatan.component.html',
  styleUrl: './maklumat-penempatan.component.scss',
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
export class MaklumatPenempatanComponent {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1; // Main step (1,2,3,4,5,6)
  currentSubStep = 3; // Sub step (1-15)

  // Staff Profile Field
  readonlyField: boolean = false;

  maklumatPenempatan1 = {
    bahagian: ['Keselamatan'],
    negeri: ['Selangor'],
    cawangan: ['Pelabuhan Klang Utara'],
    unit: ['Kawalan Imigresen'],
    lokasiBertugas: ['Pintu Masuk Laut'],
    tarikhBertugas: ['01/01/2025'],
    jenisPenempatan: ['Lapangan Terbang / Pelabuhan'],
    tempohPenempatan: ['1 Tahun'],
    kumpuanSyif: ['2007'],
  };

  maklumatPenempatan2 = {
    negeri: [''],
    namaPejabat: [''],
    fungsiPejabat: [''],
    tarikhBerkuatkuasa: ['2025-01-01'],
    jenisPenempatan: ['Pejabar Atase Imigresen (ATASE)'],
    tempohPenempatan: ['1 Tahun'],
  };

  //Add more fields, remember to keep variables in here the same as declared variable
  addMaklumatPenempatan1() {
    this.maklumatPenempatan1.bahagian.push('');
    this.maklumatPenempatan1.negeri.push('');
    this.maklumatPenempatan1.cawangan.push('');
    this.maklumatPenempatan1.unit.push('');
    this.maklumatPenempatan1.lokasiBertugas.push('');
    this.maklumatPenempatan1.tarikhBertugas.push('');
    this.maklumatPenempatan1.jenisPenempatan.push('');
    this.maklumatPenempatan1.tempohPenempatan.push('');
    this.maklumatPenempatan1.kumpuanSyif.push('');
  }

  addMaklumatPenempatan2() {
    this.maklumatPenempatan2.negeri.push('');
    this.maklumatPenempatan2.namaPejabat.push('');
    this.maklumatPenempatan2.fungsiPejabat.push('');
    this.maklumatPenempatan2.tarikhBerkuatkuasa.push('');
    this.maklumatPenempatan2.jenisPenempatan.push('');
    this.maklumatPenempatan2.tempohPenempatan.push('');
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-kakitangan/maklumat-penempatan',
    ]);
  }

  navigateClosePage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
    ]);
  }
}
