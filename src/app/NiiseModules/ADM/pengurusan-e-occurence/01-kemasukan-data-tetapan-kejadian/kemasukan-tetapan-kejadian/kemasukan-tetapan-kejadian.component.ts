import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule, GridModule, ButtonModule, ModalModule, TableModule, TableDirective } from '@coreui/angular';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@coreui/icons-angular';
import { Router } from '@angular/router';
import { StepperComponent } from '../stepper/stepper.component';
import { ModalComponentComponent } from '../../modal-component/modal-component.component';

@Component({
  selector: 'app-kemasukan-tetapan-kejadian',
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
  templateUrl: './kemasukan-tetapan-kejadian.component.html',
  styleUrl: './kemasukan-tetapan-kejadian.component.scss'
})
export class KemasukanTetapanKejadianComponent {
  currentMainStep: number = 1;
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
      tahapKejadian: ['']
    });
  }

  navigatePreviousPage() {
    this.router.navigate(['/adm/pengurusan-e-occurence/kemasukan-data-tetapan-kejadian/carian-tetapan-kejadian']);
  }

  navigateNextPage() {
    this.router.navigate(['/adm/pengurusan-e-occurence/sahkan-kemasukan-data/pengesahan-tetapan-kejadian']);
  }
  
  validateForm(form: FormGroup, option: string){
    if(form.value.jenisKejadian === '' || form.value.kategoriKejadian === '' || form.value.subKategoriKejadian === '' || form.value.tahapKejadian === ''){
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
