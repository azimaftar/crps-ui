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
import { MaklumatKakitangan } from '../../api.service';

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
export class MaklumatAkademikComponent implements OnInit {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1;
  currentSubStep = 4;

  readonlyField: boolean = true;

  maklumatAkademik1 = [
    {
      namaInsitusi: '',
      bidangPengkususan: '',
      kelulusanDicapai: '',
      luarDalamNegara: '',
      tempohPengajian: '',
      tahunTamat: '',
    },
  ];

  ngOnInit(): void {
    //this is passed from previous page, used to assign docID.
    const data = JSON.parse(localStorage.getItem('maklumatKakitangan') || '{}');
    this.populateMaklumatAkademik(data);
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-penempatan',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-penguasaan-bahasa',
    ]);
  }

  navigateClosePage() {
    localStorage.removeItem('maklumatKakitangan');
    localStorage.removeItem('maklumatNoDocID');
    this.router.navigate(['adm/pendaftaran-kakitangan/pendaftaran-kakitangan']);
  }

  //this is to integrate data from backend, assign data back to frontend.
  private populateMaklumatAkademik(data: MaklumatKakitangan) {
    const parsedT2: any[] = data.academic || [];

    this.maklumatAkademik1 = parsedT2.map((t2) => ({
      namaInsitusi: t2.instName || '',
      bidangPengkususan: t2.field || '',
      kelulusanDicapai: t2.achv || '',
      luarDalamNegara: t2.instLoc || '',
      tempohPengajian: t2.instYr || '',
      tahunTamat: t2.instYrEnd || '',
    }));
  }
}
