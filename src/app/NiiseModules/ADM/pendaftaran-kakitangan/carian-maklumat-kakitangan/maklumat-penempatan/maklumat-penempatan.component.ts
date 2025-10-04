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
  selector: 'app-maklumat-penempatan',
  templateUrl: './maklumat-penempatan.component.html',
  styleUrl: './maklumat-penempatan.component.scss',
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
export class MaklumatPenempatanComponent implements OnInit {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1;
  currentSubStep = 3;

  readonlyField: boolean = true;

  maklumatPenempatan1 = [
    {
      bahagian: '',
      negeri: '',
      cawangan: '',
      unit: '',
      lokasiBertugas: '',
      tarikhBertugas: '',
      jenisPenempatan: '',
      tempohPenempatan: '',
      kumpuanSyif: '',
    },
  ];

  //maklumat penempatan tapi tak sure.
  maklumatPenempatan2 = [
    {
      negara: '',
      namaPejabat: '',
      fungsiPejabat: '',
      tarikhBerkuatkuasa: '',
      jenisPenempatan: '',
      tempohPenempatan: '',
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
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-akademik',
    ]);
  }

  navigateClosePage() {
    localStorage.removeItem('maklumatKakitangan');
    localStorage.removeItem('maklumatNoDocID');
    this.router.navigate(['adm/pendaftaran-kakitangan/pendaftaran-kakitangan']);
  }

  //this is to integrate data from backend, assign data back to frontend.
  private populateMaklumatPerkhidmatan(data: MaklumatKakitangan) {
    const parsedT11: any[] = data.location || [];

    this.maklumatPenempatan1 = parsedT11.map((t11) => ({
      bahagian: t11.div || '',
      negeri: t11.stateLoc || '',
      cawangan: t11.brnch || '',
      unit: t11.unit || '',
      lokasiBertugas: t11.locStn || '',
      tarikhBertugas: this.formatDate(t11.strDtLoc) || '',
      jenisPenempatan: t11.locType || '',
      tempohPenempatan: t11.locdrtn || '',
      kumpuanSyif: t11.shftGrp || '',
    }));
  }

  //This is for formating the date
  private formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // returns 'yyyy-MM-dd'
  }
}
