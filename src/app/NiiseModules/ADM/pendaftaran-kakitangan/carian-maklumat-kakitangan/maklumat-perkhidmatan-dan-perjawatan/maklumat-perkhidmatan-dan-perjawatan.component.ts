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
export class MaklumatPerkhidmatanDanPerjawatanComponent implements OnInit {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1;
  currentSubStep = 2;

  readonlyField: boolean = true;

  maklumatPerkhidmatan = {
    kategoriKakitangan: '', //stfCat
    jawatan: '', //pos
    statusJawatan: '', //statPos
    pangkat: '', //posLev
    kumpulanPerkhidmatan: '', //servGroup
    gred: '', //gred
    kodSkim: '', //schCd
    kodGaji: '', //SalCd
    tarikhLantikanPertama: '', //apptDt
    tarikhMulaBerkhidmat: '', //strDt
    tarikhTamatBerkhidmat: '',
    statusKakitangan: '', //stfSts
    nomborBadanPerkhidmatan: '', //svsNo
  };

  //Maklumat Peribadi tapi tak sure, ikut wireframe dkt peribadi..
  sejarahPekerjaan = [
    {
      namaMajikan: '',
      alamat: '',
      negara: '',
      jawatan: '',
      bidangIndustri: '',
      tarikhMula: '',
      tarikhTamat: '',
    },
  ];

  ngOnInit(): void {
    //this is passed from previous page, used to assign docID.
    const data = JSON.parse(localStorage.getItem('maklumatKakitangan') || '{}');
    this.populateMaklumatPerkhidmatan(data);
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-peribadi',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-penempatan',
    ]);
  }

  navigateClosePage() {
    localStorage.removeItem('maklumatKakitangan');
    localStorage.removeItem('maklumatNoDocID');
    this.router.navigate(['adm/pendaftaran-kakitangan/pendaftaran-kakitangan']);
  }

  //this is to integrate data from backend, assign data back to frontend.
  private populateMaklumatPerkhidmatan(data: MaklumatKakitangan) {
    const parsedT10: any[] = data.svcs || [];

    this.maklumatPerkhidmatan = {
      kategoriKakitangan: '', //stfCat
      jawatan: '', //pos
      statusJawatan: '', //statPos
      pangkat: '', //posLev
      kumpulanPerkhidmatan: '', //servGroup
      gred: '', //gred
      kodSkim: '', //schCd
      kodGaji: '', //SalCd
      tarikhLantikanPertama: '', //apptDt
      tarikhMulaBerkhidmat: '', //strDt
      tarikhTamatBerkhidmat: '',
      statusKakitangan: '', //stfSts
      nomborBadanPerkhidmatan: '', //svsNo
    };

    parsedT10.forEach((t10) => {
      if (t10.stfSts === '1') {
        this.maklumatPerkhidmatan.kategoriKakitangan = data.stfCat || '';
        this.maklumatPerkhidmatan.jawatan = t10.pos || '';
        this.maklumatPerkhidmatan.statusJawatan = t10.statPos || '';
        this.maklumatPerkhidmatan.pangkat = t10.posLev || '';
        this.maklumatPerkhidmatan.kumpulanPerkhidmatan = t10.servGroup || '';
        this.maklumatPerkhidmatan.gred = t10.gred || '';
        this.maklumatPerkhidmatan.kodSkim = t10.schCd || '';
        this.maklumatPerkhidmatan.kodGaji = t10.SalCd || '';
        this.maklumatPerkhidmatan.tarikhLantikanPertama =
          this.formatDate(t10.apptDt) || '';
        this.maklumatPerkhidmatan.tarikhMulaBerkhidmat =
          this.formatDate(t10.strDt) || '';
        this.maklumatPerkhidmatan.tarikhTamatBerkhidmat = '';
        this.maklumatPerkhidmatan.statusKakitangan = t10.stfSts || '';
        this.maklumatPerkhidmatan.nomborBadanPerkhidmatan = data.svsNo || '';
      }
    });
  }

  //This is for formating the date
  private formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // returns 'yyyy-MM-dd'
  }
}
