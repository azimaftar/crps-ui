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
  selector: 'app-maklumat-pemohonan',
  templateUrl: './maklumat-pemohonan.component.html',
  styleUrl: './maklumat-pemohonan.component.scss',
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
export class MaklumatPemohonanComponent {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 2; // Main step (1,2,3,4,5,6)
  currentSubStep = 1; // Sub step (1-15)

  // Staff Profile Field
  readonlyField: boolean = true;

  maklumatPemohon = {
    namaPenuh: 'Mohd Russaini Bin Idrus',
    jenisDokumen: 'MyKad',
    noDokumenID: '980330025489',
    tarikhLahir: '1992-01-20',
    jantina: 'Lelaki',
    alamat1: 'No. 15,',
    alamat2: 'Jalan Mawar 3,',
    alamat3: 'Taman Desa Jaya',
    poskod: '52100',
    bandar: 'Kuala Lumpur',
    negeri: 'W.P Kuala Lumpur',
  };

  maklumatPerkhidmatan = {
    pangkat: 'Penolong Pengarah',
    nomborBadanPerkhidmatan: '777-25',
    tarikhMulaBerkhidmat: '2015-03-15',
    tarikhLantikan: '2015-03-15',
    nomborPewartaan: '',
  };

  maklumatPenempatan = {
    bahagian: 'Keselamatan',
    negeri: 'Selangor',
    cawangan: 'Pelabuhan Klang Utara',
    unit: 'Kawalan Imigresen',
    lokasiBertugas: 'Pintu Masuk Laut',
    tarikhBerkuatkuasa: '2015-01-01',
    jenisPenempatan: 'Lapangan Terbang / Pelabuhan',
    tempohPenempatan: '1 Tahun',
    kumpulanSyif: 'C',
  };

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/permohonan-kad-kuasa/kemas-kini-nombor-warta/dokumen-sokongan',
    ]);
  }

  navigateClosePage() {
    this.router.navigate([
      'adm/permohonan-kad-kuasa/kemas-kini-nombor-warta/maklumat-pemohonan',
    ]);
  }
}
