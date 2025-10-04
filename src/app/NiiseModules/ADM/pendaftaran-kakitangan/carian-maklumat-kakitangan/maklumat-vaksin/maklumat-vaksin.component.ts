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
  selector: 'app-maklumat-vaksin',
  templateUrl: './maklumat-vaksin.component.html',
  styleUrl: './maklumat-vaksin.component.scss',
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
export class MaklumatVaksinComponent implements OnInit {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1;
  currentSubStep = 12;

  readonlyField: boolean = true;

  tableData = [
    {
      namaVaksin: 'COVID-19 Pfizer',
      telahMenerimaSuntikan: 'Ya',
      tarikhSuntikan: '15/03/2022',
      tarikhDos: 'Tiada',
    },
  ];

  ngOnInit(): void {
    //this is passed from previous page, used to assign docID.
    const data = JSON.parse(localStorage.getItem('maklumatKakitangan') || '{}');
    this.populateMaklumatVaksin(data);
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-tanggungan',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-pakaian-seragam',
    ]);
  }

  navigateClosePage() {
    localStorage.removeItem('maklumatKakitangan');
    localStorage.removeItem('maklumatNoDocID');
    this.router.navigate(['adm/pendaftaran-kakitangan/pendaftaran-kakitangan']);
  }

  //this is to integrate data from backend, assign data back to frontend.
  private populateMaklumatVaksin(data: MaklumatKakitangan) {
    //const parsedVac: any[] = data.n013VaccDet  || [];

    const parsedVac = Array.isArray(data.n013VaccDet)
      ? data.n013VaccDet
      : [data.n013VaccDet];

    this.tableData = parsedVac.map((vac) => ({
      namaVaksin: vac.vaccineName || '',
      telahMenerimaSuntikan: vac.startDate ? 'Ya' : 'Tidak',
      tarikhSuntikan: vac.startDate || '',
      tarikhDos: vac.endDate || '',
    }));
  }
}
