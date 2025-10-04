import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule, GridModule, ButtonModule, ModalModule, TableModule, TableDirective, FormCheckLabelDirective, FormCheckComponent, FormCheckInputDirective } from '@coreui/angular';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@coreui/icons-angular';
import { Router } from '@angular/router';
import { StepperComponent } from '../../01-kemasukan-data-tetapan-kejadian/stepper/stepper.component';
import { ModalComponentComponent } from '../../modal-component/modal-component.component';

@Component({
  selector: 'app-pengesahan-tetapan-kejadian',
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
    ModalComponentComponent,
    FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective
  ],
  templateUrl: './pengesahan-tetapan-kejadian.component.html',
  styleUrl: './pengesahan-tetapan-kejadian.component.scss'
})
export class PengesahanTetapanKejadianComponent {
  currentMainStep: number = 2;
  currentSubStep: number = 0;

  simpanRekodModal: boolean = false;
  hantarRekodModal: boolean = false;
  medanMandatoriVisible: boolean = false;
  selectedFileName: string = '';
  form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      jenisKejadian: [''],
      kategoriKejadian: [''],
      subKategoriKejadian: [''],
      tahapKejadian: [''],
      namaKejadian: [''],
      statusPengesahan: [''],
      catatan: ['']
    });
  }

  navigatePreviousPage() {
    this.router.navigate(['/adm/pengurusan-e-occurence/kemasukan-data-tetapan-kejadian/kemasukan-tetapan-kejadian']);
  }

  navigateNextPage() {
    this.router.navigate(['/adm/pengurusan-e-occurence/daftar-kemas-kini-laporan-kejadian/daftar-kemas-kini-laporan']);
  }
  
  validateForm(form: FormGroup, option: string){
    if(form.value.jenisKejadian === '' || form.value.kategoriKejadian === '' || form.value.subKategoriKejadian === '' || form.value.tahapKejadian === '' || form.value.namaKejadian === '' || form.value.statusPengesahan === '' || form.value.catatan === ''){
      this.medanMandatoriModal();
    } 
    else{
      if(option === 'simpan'){
        this.simpanRekodModal = true;
      }
      else{
        this.hantarRekodModal = true;
      }
    }
  }

  SimpanRekod(form: FormGroup){
    this.validateForm(form, 'simpan');
  }

  closeSimpanRekodModal(){
    this.simpanRekodModal = false;
  }

  HantarRekod(form: FormGroup){
    this.validateForm(form, 'hantar');
  }

  closeHantarRekodModal(){
    this.hantarRekodModal = false;
  }

  medanMandatoriModal(){
    this.medanMandatoriVisible = true;
  }

  medanMandatoriModalconfirm(){
    this.medanMandatoriVisible = false;
  }
}
