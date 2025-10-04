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

@Component({
  selector: 'app-maklumat-peribadi',
  templateUrl: './maklumat-peribadi.component.html',
  styleUrl: './maklumat-peribadi.component.scss',
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
export class MaklumatPeribadiComponent {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1; // Main step (1,2,3,4,5,6)
  currentSubStep = 1; // Sub step (1-15)

  // Staff Profile Field
  readonlyField: boolean = false;

  maklumatPeribadi = {
    namaPenuh: 'John Alexander Smith',
    jenisDokumen: 'Passport',
    noDokumenID: 'N1234567',
    tarikhLahir: '1985-03-15',
    umur: '40',
    jantina: 'Lelaki',
    nomborSijilLahir: 'B1234567890',
    negeriLahir: 'New South Wales',
    statusWargaNegara: 'Australia',
    negara: 'Australia',
    bangsa: 'Caucasian',
    etnik: '',
    statusBumipuera: 'Tidak',
    agama: 'Christian',
    statusPerkahwinan: 'Bujang',
    alamatTetap1: '15 Bennelong Crescent,',
    alamatTetap2: 'Sydney Olympic Park,',
    alamatTetap3: 'NSW',
    poskodTetap: '2127',
    bandarTetap: 'Sydney Olympic Park',
    negeriTetap: 'New South Wales',
    nomborTelefonRumahTetap: '',
    alamatSemasa1: '15 Bennelong Crescent,',
    alamatSemasa2: 'Sydney Olympic Park,',
    alamatSemasa3: 'NSW',
    poskodSemasa: '2127',
    bandarSemasa: 'Sydney Olympic Park',
    negeriSemasa: 'New South Wales',
    nomborTelefonRumahSemasa: '',
    nomborTelefonPejabat: '',
    sambungan: '',
    nomborTelefonBimbit: '+61 422 123 456',
    alamatEmail: 'john.smith@imi.gov.my',
  };

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([

    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-akademik',
    ]);
  }

  navigateClosePage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pendaftaran-kakitangan',
    ]);
  }
}
