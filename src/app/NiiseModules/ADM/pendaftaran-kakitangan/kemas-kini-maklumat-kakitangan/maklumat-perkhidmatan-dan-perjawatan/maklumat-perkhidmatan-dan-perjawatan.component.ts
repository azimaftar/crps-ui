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
  selector: 'app-maklumat-perkhidmatan-dan-perjawatan',
  templateUrl: './maklumat-perkhidmatan-dan-perjawatan.component.html',
  styleUrl: './maklumat-perkhidmatan-dan-perjawatan.component.scss',
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
export class MaklumatPerkhidmatanDanPerjawatanComponent {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1; // Main step (1,2,3,4,5,6)
  currentSubStep = 2; // Sub step (1-15)

  // Staff Profile Field
  readonlyField: boolean = false;

  maklumatPerkhidmatan1 = {
    kategoriKakitangan: 'Kategori Ambilan Tempatan (KAT)',
    jawatan: 'Kerani',
    statusJawatan: 'Kontrak',
    pangkat: '',
    kodGaji: 'AUS123',
    gaji: 'AUS1200',
    tarikhMulaBerkhidmat: '2025-01-01',
    tarikhTamatBerkhidmat: '2026-01-01',
    statusKakitangan: 'Tidak Aktif',
    nomborBadanPerkhidmatan: '',
    sebabTidakAktif: '',
    jikaLainLain: '',
  };

  maklumatPerkhidmatan2 = {
    kategoriKakitangan: 'Penjawat Awam',
    jawatan: 'Penguasa Imigresen',
    statusJawatan: 'Tetap',
    pangkat: 'Penolong Pengarah',
    kumpulanPerkhidmatan: 'Pengurusan dan Profesional',
    gred: 'KP41',
    kodSkim: 'KP',
    kodGaji: 'P1T4',
    tarikhLantikanPertama: '01/01/2021',
    tarikhMulaBerkhidmat: '2015-03-15',
    tarikhTamatBerkhidmat: '',
    statusKakitangan: 'Aktif',
    nomborBadanPerkhidmatan: '777-25',
  };

  sejarahPekerjaan = {
    namaMajikan: '',
    alamat1: '',
    alamat2: '',
    alamat3: '',
    negara: '',
    jawatan: '',
    bidangIndustri: '',
    tarikhMula: '',
    tarikhTamat: '',
  };

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
