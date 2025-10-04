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
  selector: 'app-maklumat-akademik',
  templateUrl: './maklumat-akademik.component.html',
  styleUrl: './maklumat-akademik.component.scss',
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
export class MaklumatAkademikComponent {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1; // Main step (1,2,3,4,5,6)
  currentSubStep = 4; // Sub step (1-15)

  // Staff Profile Field
  readonlyField: boolean = false;

  maklumatAkademik1 = {
    namaInsitusi: ['University of Sydney', '', '', '', ''],
    bidangPengkususan: ['Bachelor of International Relations', '', '', '', ''],
    kelulusanDicapai: ['Ijazah Sarjana Muda', '', '', '', ''],
    luarDalamNegara: ['Luar Negara', '', '', '', ''],
    tempohPengajian: ['3 Tahun', '', '', '', ''],
    tahunTamat: ['2007', '', '', '', ''],
  };

  //Add more fields, remember to keep variables in here the same as declared variable
  addMaklumatAkademik() {
    this.maklumatAkademik1.namaInsitusi.push('');
    this.maklumatAkademik1.bidangPengkususan.push('');
    this.maklumatAkademik1.kelulusanDicapai.push('');
    this.maklumatAkademik1.luarDalamNegara.push('');
    this.maklumatAkademik1.tempohPengajian.push('');
    this.maklumatAkademik1.tahunTamat.push('');
  }
  
  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-peribadi',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-penguasaan-bahasa',
    ]);
  }

  navigateClosePage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pendaftaran-kakitangan',
    ]);
  }
}
