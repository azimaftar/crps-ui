import { Component } from '@angular/core';
import { CardModule, CardHeaderComponent, CardBodyComponent, CardFooterComponent, FormModule, GridModule } from '@coreui/angular';
import { ButtonDirective } from '@coreui/angular';
import { StepperComponent } from '../stepper/stepper.component';
import { Router } from '@angular/router';

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
}

@Component({
  selector: 'app-paparan-maklumat-pegawai-bagi-pelupusan-kad-kuasa',
  imports: [
    CardModule,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    FormModule,
    GridModule,
    ButtonDirective,
    StepperComponent,
  ],
  templateUrl: './paparan-maklumat-pegawai-bagi-pelupusan-kad-kuasa.component.html',
  styleUrl: './paparan-maklumat-pegawai-bagi-pelupusan-kad-kuasa.component.scss'
})
export class PaparanMaklumatPegawaiBagiPelupusanKadKuasaComponent {
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
  };

  constructor(private router: Router) {}

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pelupusan-kad-kuasa/senarai-pelupusan-kad-kuasa',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pelupusan-kad-kuasa/maklumat-pelupusan-kad-kuasa',
    ]);
  }
}
