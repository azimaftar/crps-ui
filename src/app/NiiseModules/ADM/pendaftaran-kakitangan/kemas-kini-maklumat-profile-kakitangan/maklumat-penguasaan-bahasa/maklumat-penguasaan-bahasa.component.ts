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
export class MaklumatPenguasaanBahasaComponent {
    constructor(private router: Router) {}

  // Current active step tracking
  currentMainStep = 1; // Main step (1,2,3,4,5,6)
  currentSubStep = 5; // Sub step (1-15)

  // Staff Profile Field
  readonlyField: boolean = false;

  maklumatPenguasaanBahasa1 = {
    jenisBahasa: ['Bahasa Inggeris', 'Bahasa Melayu', 'Bahasa Perancis', ''],
    tahapKemahiranTulisan: ['Cemerlang', 'Asas', 'Sederhana', ''],
    tahapKemahiranLisan: ['Cemerlang', 'Asas', 'Sederhana', ''],
  };

  //Add more fields, remember to keep variables in here the same as declared variable
  addMaklumatPenguasaanBahasa() {
    this.maklumatPenguasaanBahasa1.jenisBahasa.push('');
    this.maklumatPenguasaanBahasa1.tahapKemahiranTulisan.push('');
    this.maklumatPenguasaanBahasa1.tahapKemahiranLisan.push('');
  }

  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-akademik',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/maklumat-pasport',
    ]);
  }

  navigateClosePage() {
    this.router.navigate([
      'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pendaftaran-kakitangan',
    ]);
  }
}
