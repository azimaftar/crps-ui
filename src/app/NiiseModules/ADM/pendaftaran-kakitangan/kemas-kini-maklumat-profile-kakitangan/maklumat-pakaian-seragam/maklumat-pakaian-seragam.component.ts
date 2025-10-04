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
  selector: 'app-maklumat-pakaian-seragam',
  templateUrl: './maklumat-pakaian-seragam.component.html',
  styleUrl: './maklumat-pakaian-seragam.component.scss',
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
export class MaklumatPakaianSeragamComponent {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1; // Main step (1,2,3,4,5,6)
  currentSubStep = 13; // Sub step (1-15)

  // Staff Profile Field
  readonlyField: boolean = false;

  // 1. Pakaian Seragam
  pakaianSeragamLengap = {
    senaraiPakaian: '',
    kuantiti: 1,
    jenisSaiz: '',
    saiz: '',
  };

  // 2. Inner/ Lapisan Tambahan
  innerLapisanTambahan = {
    senaraiPakaian: '',
    kuantiti: 1,
    jenisSaiz: '',
    saiz: '',
  };

  // 3. Penutup Kepala (Beret/ Bowler/ Peak Cap/ Tudung)
  penutupKepala = {
    senaraiPakaian: '',
    kuantiti: 1,
    jenisSaiz: '',
    saiz: '',
  };

  // 4. Kasut/ But
  kasutBut = {
    senaraiPakaian: '',
    kuantiti: 1,
    jenisSaiz: '',
    saiz: '',
  };

  // 5. Pakaian Seragam Kawalan Udara
  pakaianSeragamKawalanUdara = {
    senaraiPakaian: '',
    kuantiti: 1,
    jenisSaiz: '',
    saiz: '',
  };

  // 6. Aksesori Pakaian Seragam
  aksesori = {
    senaraiPakaian: '',
    kuantiti: 1,
    jenisSaiz: '',
    saiz: '',
  };

  // 7. Lencana dan Lambang
  lencanaLambang = {
    senaraiPakaian: '',
    kuantiti: 1,
    jenisSaiz: '',
    saiz: '',
  };

  // 8. Pingat/ Anugerah
  pingatAnugerah = {
    senaraiPakaian: '',
    kuantiti: 1,
    jenisSaiz: '',
    saiz: '',
  };

  // 9. Pakaian Istiadat (Tidak Dibekalkan)
  pakaianIstidat = {
    senaraiPakaian: '',
    kuantiti: 1,
    jenisSaiz: '',
    saiz: '',
  };

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-keluarga',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([

    ]);
  }

  navigateClosePage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pendaftaran-kakitangan',
    ]);
  }
}
