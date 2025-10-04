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
  selector: 'app-maklumat-akaun-bank',
  templateUrl: './maklumat-akaun-bank.component.html',
  styleUrl: './maklumat-akaun-bank.component.scss',
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
export class MaklumatAkaunBankComponent implements OnInit {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1;
  currentSubStep = 8;

  readonlyField: boolean = true;

  maklumatAkaunBank1 = [
    {
      namaBankInstitusi: '',
      jenisAkaun: '',
      nomborAkaun: '',
    },
  ];

  ngOnInit(): void {
    //this is passed from previous page, used to assign docID.
    const data = JSON.parse(localStorage.getItem('maklumatKakitangan') || '{}');
    this.populateMaklumatAkaunBank(data);
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-anugerah',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-kegiatan-luar',
    ]);
  }

  navigateClosePage() {
    localStorage.removeItem('maklumatKakitangan');
    localStorage.removeItem('maklumatNoDocID');
    this.router.navigate(['adm/pendaftaran-kakitangan/pendaftaran-kakitangan']);
  }

  //this is to integrate data from backend, assign data back to frontend.
  private populateMaklumatAkaunBank(data: MaklumatKakitangan) {
    const parsedT5: any[] = data.bank || [];

    this.maklumatAkaunBank1 = parsedT5.map((t5) => ({
      namaBankInstitusi: t5.bnksName || '',
      jenisAkaun: t5.acctType || '',
      nomborAkaun: t5.acctNo || '',
    }));
  }
}
