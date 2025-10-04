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
export class MaklumatPasportComponent {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1; // Main step (1,2,3,4,5,6)
  currentSubStep = 6; // Sub step (1-15)

  // Staff Profile Field
  readonlyField: boolean = false;

  maklumatPasport1 = {
    jenisPasport: ['Pasport Antarabangsa', '', '', ''],
    nomborPasport: ['A12345678', '', '', ''],
    pasportDikeluarkan: ['New South Wales, Australia', '', '', ''],
    tarikhDikeluarkan: ['2021-09-12', '', '', ''],
    tarikhLuput: ['2021-09-11', '', '', ''],
  };

  //Add more fields, remember to keep variables in here the same as declared variable
  addMaklumatPasport() {
    this.maklumatPasport1.jenisPasport.push('');
    this.maklumatPasport1.nomborPasport.push('');
    this.maklumatPasport1.pasportDikeluarkan.push('');
    this.maklumatPasport1.tarikhDikeluarkan.push('');
    this.maklumatPasport1.tarikhLuput.push('');
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-penguasaan-bahasa',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-anugerah',
    ]);
  }

  navigateClosePage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pendaftaran-kakitangan',
    ]);
  }
}
