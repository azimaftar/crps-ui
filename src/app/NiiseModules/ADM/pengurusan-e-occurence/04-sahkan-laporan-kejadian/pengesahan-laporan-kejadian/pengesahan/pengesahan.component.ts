import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule, GridModule, ButtonModule, ModalModule, TableModule, TableDirective, FormCheckLabelDirective, FormCheckComponent, FormCheckInputDirective } from '@coreui/angular';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@coreui/icons-angular';
import { Router } from '@angular/router';
import { StepperComponent } from '../../../stepper/stepper.component';
import { ModalComponentComponent } from '../../../modal-component/modal-component.component';

@Component({
  selector: 'app-pengesahan',
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
  templateUrl: './pengesahan.component.html',
  styleUrl: './pengesahan.component.scss'
})
export class PengesahanComponent {
  currentMainStep: number = 2;
  currentSubStep: number = 0;

  simpanRekodModal: boolean = false;
  hantarRekodModal: boolean = false;
  pengesahanDihantarModal: boolean = false;
  medanMandatoriVisible: boolean = false;
  selectedFileName: string = '';
  form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      risikoKejadian: [''],
      statusPengesahan: [''],
      catatan: ['']
    });
  }

  navigatePreviousPage() {
    this.router.navigate(['/adm/pengurusan-e-occurence/sahkan-laporan-kejadian/pengesahan-laporan-kejadian']);
  }

  navigateNextPage() {
    this.router.navigate(['/adm/pengurusan-e-occurence/luluskan-laporan-kejadian/kelulusan-laporan-kejadian']);
  }
  
  validateForm(form: FormGroup, option: string){
    if(form.value.risikoKejadian === '' || form.value.statusPengesahan === '' || form.value.catatan === ''){
      this.medanMandatoriModal();
    } 
    else{
      if(option === 'simpan'){
        this.simpanRekodModal = true;
      }
      else{
        this.pengesahanDihantarModal = true;
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

  pengesahanDihantarModalconfirm(){
    this.pengesahanDihantarModal = false;
  }
}
