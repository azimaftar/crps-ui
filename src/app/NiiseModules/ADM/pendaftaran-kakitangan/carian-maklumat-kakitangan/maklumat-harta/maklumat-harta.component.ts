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
  selector: 'app-maklumat-harta',
  templateUrl: './maklumat-harta.component.html',
  styleUrl: './maklumat-harta.component.scss',
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
export class MaklumatHartaComponent implements OnInit {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1;
  currentSubStep = 10;

  readonlyField: boolean = true;

  maklumatHarta1 = [
    {
      jenisHarta: '',
      keteranganHarta: '',
      tarikhDiisytiharkan: '',
      sumberPerolehan: '',
      nilaiHarta: '',
      anggaranNilaiSemasa: '',
      alamatHarta: '',
      catatan: '',
    },
  ];

  ngOnInit(): void {
    //this is passed from previous page, used to assign docID.
    const data = JSON.parse(localStorage.getItem('maklumatKakitangan') || '{}');
    this.populateMaklumatHarta(data);
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-kegiatan-luar',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-keluarga',
    ]);
  }

  navigateClosePage() {
    localStorage.removeItem('maklumatKakitangan');
    localStorage.removeItem('maklumatNoDocID');
    this.router.navigate(['adm/pendaftaran-kakitangan/pendaftaran-kakitangan']);
  }

  //this is to integrate data from backend, assign data back to frontend.
  private populateMaklumatHarta(data: MaklumatKakitangan) {
    const parsedT7: any[] = data.asset || [];

    this.maklumatHarta1 = parsedT7.map((t7) => ({
      jenisHarta: t7.astsType || '',
      keteranganHarta: t7.astsDet || '',
      tarikhDiisytiharkan: this.formatDate(t7.astsDt) || '',
      sumberPerolehan: t7.astsSrc || '',
      nilaiHarta: t7.astsVal || '',
      anggaranNilaiSemasa: t7.astsEst || '',
      alamatHarta: t7.astsAddr || '',
      catatan: t7.astsNts || '',
    }));
  }

  //This is for formating the date
  private formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // returns 'yyyy-MM-dd'
  }
}
