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
  selector: 'app-maklumat-pasport',
  templateUrl: './maklumat-pasport.component.html',
  styleUrl: './maklumat-pasport.component.scss',
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
export class MaklumatPasportComponent implements OnInit {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1;
  currentSubStep = 6;

  readonlyField: boolean = true;

  //Data takde spec untuk column
  maklumatPasport1 = [
    {
      jenisPasport: 'Pasport Antarabangsa',
      nomborPasport: 'A12345678',
      pasportDikeluarkan: 'Selangor, Malaysia',
      tarikhDikeluarkan: '12/09/2021',
      tarikhLuput: '12/09/2026',
    },
    {
      jenisPasport: 'Pasport Diplomatik',
      nomborPasport: 'B23456789',
      pasportDikeluarkan: 'Kuala Lumpur, Malaysia',
      tarikhDikeluarkan: '01/01/2022',
      tarikhLuput: '01/01/2027',
    },
    {
      jenisPasport: 'Pasport Sementara',
      nomborPasport: 'C34567890',
      pasportDikeluarkan: 'Johor, Malaysia',
      tarikhDikeluarkan: '15/06/2023',
      tarikhLuput: '15/06/2028',
    },
  ];

  ngOnInit(): void {
    //this is passed from previous page, used to assign docID.
    const data = JSON.parse(localStorage.getItem('maklumatKakitangan') || '{}');
    this.populateMaklumatPasport(data);
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-penguasaan-bahasa',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-anugerah',
    ]);
  }

  navigateClosePage() {
    localStorage.removeItem('maklumatKakitangan');
    localStorage.removeItem('maklumatNoDocID');
    this.router.navigate(['adm/pendaftaran-kakitangan/pendaftaran-kakitangan']);
  }

  //this is to integrate data from backend, assign data back to frontend.
  private populateMaklumatPasport(data: MaklumatKakitangan) {
    //const parsedPas: any[] = data.t001StfMstrProfile  || [];

    const parsedPas = Array.isArray(data.ttdpma)
      ? data.ttdpma
      : [data.ttdpma];

    this.maklumatPasport1 = parsedPas.map((pas) => ({
      jenisPasport: pas.passbookType || '',
      nomborPasport: pas.docNo || '',
      pasportDikeluarkan: pas.applyDate || '',
      tarikhDikeluarkan: pas.effectiveDate || '',
      tarikhLuput: pas.expiryDate || '',
    }));
  }
}
