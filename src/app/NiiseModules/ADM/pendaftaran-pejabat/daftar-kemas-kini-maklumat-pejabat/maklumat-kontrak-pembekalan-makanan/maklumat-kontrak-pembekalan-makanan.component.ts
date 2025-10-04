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
  selector: 'app-maklumat-kontrak-pembekalan-makanan',
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
  templateUrl: './maklumat-kontrak-pembekalan-makanan.component.html',
  styleUrl: './maklumat-kontrak-pembekalan-makanan.component.scss'
})
export class MaklumatKontrakPembekalanMakananComponent {
  currentMainStep: number = 1;
  currentSubStep: number = 4;

  simpanRekodModal: boolean = false;
  hantarRekodModal: boolean = false;
  tidakDapatMuatNaikVisible: boolean = false;
  bacaanOCRTidakBerjayaVisible: boolean = false;
  selectedFileName: string = '';

  constructor(private router: Router) {}

  navigatePreviousPage() {
    this.router.navigate(['/adm/pendaftaran-pejabat/daftar-kemas-kini-maklumat-pejabat/maklumat-kontrak-pembersihan']);
  }

  navigateNextPage() {
    this.router.navigate(['/adm/pendaftaran-pejabat/sahkan-maklumat-pejabat/pengesahan-maklumat-pejabat']);
  }

  SimpanRekod(){
    this.tidakDapatMuatNaikModal();
    this.simpanRekodModal = true;
  }

  closeSimpanRekodModal(){
    this.simpanRekodModal = false;
  }

  HantarRekod(){
    this.hantarRekodModal = true;
  }

  closeHantarRekodModal(){
    this.hantarRekodModal = false;
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
