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
  selector: 'app-maklumat-anugerah',
  templateUrl: './maklumat-anugerah.component.html',
  styleUrl: './maklumat-anugerah.component.scss',
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
export class MaklumatAnugerahComponent {
  constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1; // Main step (1,2,3,4,5,6)
  currentSubStep = 7; // Sub step (1-15)

  // Staff Profile Field
  readonlyField: boolean = false;

  maklumatAnugerah1 = {
    jenisAnugerah: ['', '', '', '', ''],
    tarikhPenganugerahan: ['', '', '', '', ''],
    darjahKurniaanKebesaraan: ['', '', '', '', ''],
  };

  //Add more fields, remember to keep variables in here the same as declared variable
  addMaklumatAnugerah() {
    this.maklumatAnugerah1.jenisAnugerah.push('');
    this.maklumatAnugerah1.tarikhPenganugerahan.push('');
    this.maklumatAnugerah1.darjahKurniaanKebesaraan.push('');
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-pasport',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-akaun-bank',
    ]);
  }

  navigateClosePage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pendaftaran-kakitangan',
    ]);
  }
}
