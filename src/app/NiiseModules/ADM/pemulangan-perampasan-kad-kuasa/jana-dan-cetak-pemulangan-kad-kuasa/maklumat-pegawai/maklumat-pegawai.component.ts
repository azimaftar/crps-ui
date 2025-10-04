import { Component } from '@angular/core';
import { CardModule, GridModule, NavModule, ModalModule, ButtonDirective} from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperComponent } from '../stepper/stepper.component';

interface Pegawai {
  nama: string;
  jenisDokumen: string;
  noDokumen: string;
  tarikhLahir: string;
  jantina: string;
  alamat1: string;
  alamat2: string;
  alamat3: string;
  poskod: string;
  bandar: string;
  negeri: string;
}

interface PerkhidmatanDanPenjawatan { 
  pangkat: string;
  noBadan: string;
  tarikhMulaBerkhidmat: string;
  tarikhLantikanPertamaSebagaiPegawaiKanan: string;
}

interface MaklumatPenempatan {
  bahagian: string;
  negeri: string;
  cawangan: string;
  unit: string;
  lokasiBertugas: string;
  tarikhBerkuatkuasa: string;
  jenisPenempatan: string;
  tempohPenempatan: string;
  kumpulanSyif: string;
  alamatPejabat1: string;
  alamatPejabat2: string;
  alamatPejabat3: string;
  poskodPejabat: string;
  bandarPejabat: string;
  negeriPejabat: string;
}

@Component({
  selector: 'app-maklumat-pegawai',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonDirective,
    StepperComponent
  ],
  templateUrl: './maklumat-pegawai.component.html',
  styleUrl: './maklumat-pegawai.component.scss'
})
export class MaklumatPegawaiComponent {
  currentMainStep = 1;
  pegawai: Pegawai = {
    nama: 'Mohd Russaini Bin Idrus',
    jenisDokumen: 'MyKad',
    noDokumen: '980330025489',
    tarikhLahir: '20 Januari 1992',
    jantina: 'Lelaki',
    alamat1: 'No. 15,',
    alamat2: 'Jalan Mawar 3,',
    alamat3: 'Taman Desa Jaya',
    poskod: '52100',
    bandar: 'Kuala Lumpur',
    negeri: 'W.P. Kuala Lumpur',
  };

  perkhidmatanDanPenjawatan: PerkhidmatanDanPenjawatan = {
    pangkat: 'Penolong Pengarah',
    noBadan: '777-25',
    tarikhMulaBerkhidmat: '15/03/2015',
    tarikhLantikanPertamaSebagaiPegawaiKanan: '15/03/2015',
  };

  maklumatPenempatan: MaklumatPenempatan = {
    bahagian: 'Keselamatan',
    negeri: 'Selangor',
    cawangan: 'Pelabuhan Klang Utara',
    unit: 'Kawalan Imigresen',
    lokasiBertugas: 'Pintu Masuk Laut',
    tarikhBerkuatkuasa: '01/01/2025',
    jenisPenempatan: 'Lapangan Terbang / Pelabuhan',
    tempohPenempatan: '1 Tahun',
    kumpulanSyif: 'C',
    alamatPejabat1: 'Pejabat Imigresen Pelabuhan Klang',
    alamatPejabat2: 'Jalan Depoh,',
    alamatPejabat3: 'Kawasan 13,',
    poskodPejabat: '42000',
    bandarPejabat: 'Pelabuhan Klang',
    negeriPejabat: 'Selangor',
  };

  constructor(private router: Router) {}

  JanaSurat() {
    this.router.navigate(['/adm/pemulangan-perampasan-kad-kuasa/jana-dan-cetak-pemulangan-kad-kuasa/paparan-dan-cetakan-surat-arahan-pemulangan-kad-kuasa']);
  }

  navigatePreviousPage() {
    this.router.navigate(['/adm/pemulangan-perampasan-kad-kuasa/jana-dan-cetak-pemulangan-kad-kuasa/dashboard-senarai-arahan-pemulangan-kad-kuasa']);
  }

  navigateNextPage() {
    this.router.navigate(['/adm/pemulangan-perampasan-kad-kuasa/kemas-kini-maklumat-arahan-pemulangan-perampasan-kad-kuasa/maklumat-laporan-siasatan']);
  }
}
