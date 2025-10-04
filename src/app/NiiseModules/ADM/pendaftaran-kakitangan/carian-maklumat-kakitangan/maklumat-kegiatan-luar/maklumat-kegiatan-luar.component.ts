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
  selector: 'app-maklumat-kegiatan-luar',
  templateUrl: './maklumat-kegiatan-luar.component.html',
  styleUrl: './maklumat-kegiatan-luar.component.scss',
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
export class MaklumatKegiatanLuarComponent implements OnInit {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1;
  currentSubStep = 9;

  readonlyField: boolean = true;

  maklumatKegiatanLuar1 = [
    {
      jenisKegiatan: '',
      jenisKumpulanPertubuhan: '',
      jawatan: '',
      tahapPencapaian: '',
    },
  ];

  ngOnInit(): void {
    //this is passed from previous page, used to assign docID.
    const data = JSON.parse(localStorage.getItem('maklumatKakitangan') || '{}');
    this.populateMaklumatKegiatanLuar(data);
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-akaun-bank',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-harta',
    ]);
  }

  navigateClosePage() {
    localStorage.removeItem('maklumatKakitangan');
    localStorage.removeItem('maklumatNoDocID');
    this.router.navigate(['adm/pendaftaran-kakitangan/pendaftaran-kakitangan']);
  }

  //this is to integrate data from backend, assign data back to frontend.
  private populateMaklumatKegiatanLuar(data: MaklumatKakitangan) {
    const parsedT6: any[] = data.activity || [];

    this.maklumatKegiatanLuar1 = parsedT6.map((t6) => ({
      jenisKegiatan: t6.atvtType || '',
      jenisKumpulanPertubuhan: t6.atvtTypeGr || '',
      jawatan: t6.atvtPos || '',
      tahapPencapaian: t6.atvtAch || '',
    }));
  }
}
