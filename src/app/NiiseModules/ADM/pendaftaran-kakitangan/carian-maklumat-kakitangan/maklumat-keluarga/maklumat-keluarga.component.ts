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
  selector: 'app-maklumat-keluarga',
  templateUrl: './maklumat-keluarga.component.html',
  styleUrl: './maklumat-keluarga.component.scss',
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
export class MaklumatKeluargaComponent implements OnInit {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1;
  currentSubStep = 11;

  readonlyField: boolean = true;

  maklumatKeluarga1 = [
    {
      hubungan: '',
      nama: '',
      kadpengenalan: '',
      tarikhLahir: '',
    },
  ];

  ngOnInit(): void {
    //this is passed from previous page, used to assign docID.
    const data = JSON.parse(localStorage.getItem('maklumatKakitangan') || '{}');
    this.populateMaklumatTanggungan(data);
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-harta',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-vaksin',
    ]);
  }

  navigateClosePage() {
    localStorage.removeItem('maklumatKakitangan');
    localStorage.removeItem('maklumatNoDocID');
    this.router.navigate(['adm/pendaftaran-kakitangan/pendaftaran-kakitangan']);
  }

  //this is to integrate data from backend, assign data back to frontend.
  private populateMaklumatTanggungan(data: MaklumatKakitangan) {
    const parsedT8: any[] = data.family || [];

    this.maklumatKeluarga1 = parsedT8.map((t8) => ({
      hubungan: t8.famType || '',
      nama: t8.famName || '',
      kadpengenalan: t8.famKpNo || '',
      tarikhLahir: t8.famDob || '',
    }));
  }
}
