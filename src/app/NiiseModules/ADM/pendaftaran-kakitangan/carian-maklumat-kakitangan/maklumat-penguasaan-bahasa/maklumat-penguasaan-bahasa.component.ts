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
  selector: 'app-maklumat-penguasaan-bahasa',
  templateUrl: './maklumat-penguasaan-bahasa.component.html',
  styleUrl: './maklumat-penguasaan-bahasa.component.scss',
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
export class MaklumatPenguasaanBahasaComponent implements OnInit {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1;
  currentSubStep = 5;

  readonlyField: boolean = true;

  maklumatPenguasaanBahasa1 = [
    {
      jenisBahasa: '',
      tahapKemahiranTulisan: '',
      tahapKemahiranLisan: '',
    },
  ];

  ngOnInit(): void {
    //this is passed from previous page, used to assign docID.
    const data = JSON.parse(localStorage.getItem('maklumatKakitangan') || '{}');
    this.populateMaklumatBahasa(data);
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-akademik',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-pasport',
    ]);
  }

  navigateClosePage() {
    localStorage.removeItem('maklumatKakitangan');
    localStorage.removeItem('maklumatNoDocID');
    this.router.navigate(['adm/pendaftaran-kakitangan/pendaftaran-kakitangan']);
  }

  //this is to integrate data from backend, assign data back to frontend.
  private populateMaklumatBahasa(data: MaklumatKakitangan) {
    const parsedT3: any[] = data.language || [];

    this.maklumatPenguasaanBahasa1 = parsedT3.map((t3) => ({
      jenisBahasa: t3.lngType || '',
      tahapKemahiranTulisan: t3.sklWrt || '',
      tahapKemahiranLisan: t3.sklOrl || '',
    }));
  }
}
