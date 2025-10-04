import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule, GridModule, ButtonModule, ModalModule, TableModule, TableDirective } from '@coreui/angular';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@coreui/icons-angular';
import { Router } from '@angular/router';
import { StepperComponent } from '../stepper/stepper.component';
import { ModalComponentComponent } from '../modal-component/modal-component.component';

@Component({
  selector: 'app-maklumat-pejabat',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    CardModule,
    IconModule,
    ButtonModule,
    MatIconModule,
    ModalModule,
    TableModule,
    TableDirective,
    StepperComponent,
    ModalComponentComponent
  ],
  templateUrl: './maklumat-pejabat.component.html',
  styleUrl: './maklumat-pejabat.component.scss'
})
export class MaklumatPejabatComponent {
  currentMainStep: number = 1;
  currentSubStep: number = 0;
  kaunterInput: string = '';

  kaunterList: any[] = [
    {namaKaunter: 'Kaunter Khidmat Pelanggan'},
    {namaKaunter: 'Kaunter Pertanyaan'}
  ];

  simpanRekodModal: boolean = false;

  constructor(private router: Router) {}

  navigatePreviousPage() {
    this.router.navigate(['/adm/pendaftaran-pejabat/daftar-kemas-kini-maklumat-pejabat/carian-maklumat-pejabat']);
  }

  navigateNextPage() {
    this.router.navigate(['/adm/pendaftaran-pejabat/daftar-kemas-kini-maklumat-pejabat/maklumat-kontrak-sewaan-pejabat']);
  }

  SimpanRekod(){
    this.simpanRekodModal = true;
  }

  closeSimpanRekodModal(){
    this.simpanRekodModal = false;
  }

  addKaunter(){
    this.kaunterList.push({namaKaunter: this.kaunterInput});
    this.kaunterInput = '';
  }
}
