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
export class MaklumatPakaianSeragamComponent implements OnInit {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1;
  currentSubStep = 13;

  readonlyField: boolean = true;

  tableData = [
    {
      kategori: 'Pakaian Seragam Lengkap',
      senaraiPakaianSeragam: 'Kain Seragam Am Hitam',
      kuantiti: '1',
      jenisSaiz: 'Meter',
      saiz: '4',
    },
    {
      kategori: 'Pakaian Seragam Lengkap',
      senaraiPakaianSeragam:
        'Baju Seragam Penguatkuasa (BSP) Set Baju, Seluar, TShirt',
      kuantiti: '1',
      jenisSaiz: 'Saiz',
      saiz: 'M',
    },
    {
      kategori: 'Inner/ Lapisan Tabahan',
      senaraiPakaianSeragam: 'Inner Hitam Lengan Pendek',
      kuantiti: '1',
      jenisSaiz: 'Saiz',
      saiz: 'S',
    },
  ];

  ngOnInit(): void {
    //this is passed from previous page, used to assign docID.
    const data = JSON.parse(localStorage.getItem('maklumatKakitangan') || '{}');
    this.populateMaklumatPakaianSeragam(data);
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-vaksin',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/buat-tandatangan-digital/tandatangan-digital',
    ]);
  }

  navigateClosePage() {
    localStorage.removeItem('maklumatKakitangan');
    localStorage.removeItem('maklumatNoDocID');
    this.router.navigate(['adm/pendaftaran-kakitangan/pendaftaran-kakitangan']);
  }

  //this is to integrate data from backend, assign data back to frontend.
  private populateMaklumatPakaianSeragam(data: MaklumatKakitangan) {
    const parsedT9: any[] = data.uform || [];

    this.tableData = parsedT9.map((t9) => ({
      kategori: t9.uformsTp || '',
      senaraiPakaianSeragam: t9.uformsItm || '',
      kuantiti: t9.uformsQty || '',
      jenisSaiz: t9.uformsMsTp || '',
      saiz: t9.uformsMsr || '',
    }));
  }
}
