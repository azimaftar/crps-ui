import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  SidebarBrandComponent,
  ModalModule,
} from '@coreui/angular';

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
    // SidebarBrandComponent,
    // NgOptimizedImage,
    // <-- Correctly import only NavModule
  ],
})
export class MaklumatPemohonanComponent {
  // Current active step tracking
  currentMainStep = 1; // Main step (1,2,3,4,5,6)
  currentSubStep = 1; // Sub step (1-15)

  // Structured breadcrumb data
  breadcrumbSections = [
    {
      mainStep: 1,
      mainLabel: 'Maklumat Pemohon',
      subSteps: [],
    },
    {
      mainStep: 2,
      mainLabel: 'Kemas Kini Nombor Siri Kad Kuasa',
      subSteps: [],
    },
  ];

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

  //pengambilanFLCVisible modal logic
  pengambilanFLCVisible = false;

  pengambilanFLCModalconfirm() {
    this.pengambilanFLCVisible = false;
  }
}