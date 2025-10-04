import { Component, OnInit } from '@angular/core';
import { StepperComponent } from '../stepper/stepper.component';
import { CommonModule, DatePipe  } from '@angular/common';
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
  selector: 'app-maklumat-peribadi',
  templateUrl: './maklumat-peribadi.component.html',
  styleUrl: './maklumat-peribadi.component.scss',
  standalone: true,
  providers: [DatePipe],
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
export class MaklumatPeribadiComponent implements OnInit {
  constructor(private router: Router, private datePipe: DatePipe) {}

  // Current active step tracking
  currentMainStep = 1;
  currentSubStep = 1;

  readonlyField: boolean = true;

  maklumatPeribadi = {
    namaPenuh: 'Mohd Russaini Bin Idrus', //name
    jenisDokumen: 'MyKad', //docType
    noDokumenID: '980330025489', //kpNo
    tarikhLahir: '20 Januari 1992', //dob
    umur: '28', //age
    jantina: 'Lelaki', //gender
    nomborSijilLahir: 'B1234567890', //noBirthCert
    negeriLahir: 'Selangor', //birthState
    statusWargaNegara: 'MYS', //natStat
    negara: 'Malaysia', //natCountry
    bangsa: 'Melayu', //nation
    etnik: 'Melayu', //etnic
    statusBumipuera: 'Ya', //bumiStat
    agama: 'Islam', //rel
    statusPerkahwinan: 'Bujang', //marStat
    alamat1: 'No. 15,', //addr
    alamat2: 'Jalan Mawar 3,', //addr
    alamat3: 'Taman Desa Jaya', //addr
    poskod: '52100', //postcd
    bandar: 'Kuala Lumpur', //city
    negeri: 'W.P Kuala Lumpur', //state
    nomborTelefonRumah: '03-62711234', //homeNo
    nomborTelefonPejabat: '03-88885555', //offNo
    sambungan: '2244', //offNoext
    nomborTelefonBimbit: '012-3456789', //hpNo
    alamatEmail: 'russaini@imi.gov.my', //email
  };

  ngOnInit(): void {
    //this is passed from previous page, used to assign docID.
    const data = JSON.parse(localStorage.getItem('maklumatKakitangan') || '{}');
    this.populateMaklumatPeribadi(data);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/maklumat-perkhidmatan-dan-perjawatan',
    ]);
  }

  navigateClosePage() {
    localStorage.removeItem('maklumatKakitangan');
    localStorage.removeItem('maklumatNoDocID');
    this.router.navigate(['adm/pendaftaran-kakitangan/pendaftaran-kakitangan']);
  }

  //this is to integrate data from backend, assign data back to frontend.
  private populateMaklumatPeribadi(data: MaklumatKakitangan) {
    this.maklumatPeribadi = {
      namaPenuh: data.name,
      jenisDokumen: data.docType,
      noDokumenID: String(data.kpNo),
      tarikhLahir: this.datePipe.transform(data.dob, 'dd MMMM yyyy') || data.dob,
      umur: String(data.age),
      jantina: data.gender,
      nomborSijilLahir: data.noBirthCert,
      negeriLahir: data.birthState,
      statusWargaNegara: data.natStat,
      negara: data.natCountry,
      bangsa: data.nation,
      etnik: data.etnic,
      statusBumipuera: data.bumiStat,
      agama: data.rel,
      statusPerkahwinan: data.marStat,
      alamat1: data.addr1,
      alamat2: data.addr2,
      alamat3: data.addr3,
      poskod: data.postcd,
      bandar: data.city,
      negeri: data.state,
      nomborTelefonRumah: data.homeNo,
      nomborTelefonPejabat: data.offNo,
      sambungan: data.offNoext,
      nomborTelefonBimbit: data.hpNo,
      alamatEmail: data.email,
    };
  }
}
