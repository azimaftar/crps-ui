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
export class MaklumatAkaunBankComponent {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1; // Main step (1,2,3,4,5,6)
  currentSubStep = 8; // Sub step (1-15)

  // Staff Profile Field
  readonlyField: boolean = false;

  maklumatAkaunBank1 = {
    namaBankInstitusi: ['', '', ''],
    jenisAkaun: ['', '', ''],
    nomborAkaun: ['', '', ''],
  };

  //Add more fields, remember to keep variables in here the same as declared variable
  addMaklumatAkaunBank() {
    this.maklumatAkaunBank1.namaBankInstitusi.push('');
    this.maklumatAkaunBank1.jenisAkaun.push('');
    this.maklumatAkaunBank1.nomborAkaun.push('');
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-anugerah',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-kegiatan-luar',
    ]);
  }

  navigateClosePage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pendaftaran-kakitangan',
    ]);
  }
}
