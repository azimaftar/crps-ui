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
  selector: 'app-maklumat-kontrak-pembersihan',
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
  templateUrl: './maklumat-kontrak-pembersihan.component.html',
  styleUrl: './maklumat-kontrak-pembersihan.component.scss'
})
export class MaklumatKontrakPembersihanComponent {
  currentMainStep: number = 1;
  currentSubStep: number = 3;

  simpanRekodModal: boolean = false;
  tidakDapatMuatNaikVisible: boolean = false;
  bacaanOCRTidakBerjayaVisible: boolean = false;
  selectedFileName: string = '';

  constructor(private router: Router) {}

  navigatePreviousPage() {
    this.router.navigate(['/adm/pendaftaran-pejabat/daftar-kemas-kini-maklumat-pejabat/maklumat-kontrak-penyelenggaraan']);
  }

  navigateNextPage() {
    this.router.navigate(['/adm/pendaftaran-pejabat/daftar-kemas-kini-maklumat-pejabat/maklumat-kontrak-pembekalan-makanan']);
  }

  navigateToRekodBiometrik(){
    this.router.navigate(['/adm/pendaftaran-pejabat/pendaftaran-dan-pengambilan-biometrik/semakan-pengambilan-biometrik']);
  }

  SimpanRekod(){
    this.tidakDapatMuatNaikModal();
    this.simpanRekodModal = true;
  }

  closeSimpanRekodModal(){
    this.simpanRekodModal = false;
  }

  bacaanOCRTidakBerjayaModal(){
    this.bacaanOCRTidakBerjayaVisible = true;
  }

  bacaanOCRTidakBerjayaModalconfirm(){
    this.bacaanOCRTidakBerjayaVisible = false;
  }

  tidakDapatMuatNaikModal(){
    this.tidakDapatMuatNaikVisible = true;
  }

  tidakDapatMuatNaikModalconfirm(){
    this.tidakDapatMuatNaikVisible = false;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.selectedFileName = file ? file.name : '';
    this.bacaanOCRTidakBerjayaModal();
  }
}
