import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule, GridModule, ButtonModule, ModalModule, TableModule, TableDirective, FormCheckLabelDirective, FormCheckComponent, FormCheckInputDirective } from '@coreui/angular';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@coreui/icons-angular';
import { Router } from '@angular/router';
import { StepperComponent } from '../../stepper/stepper.component';
import { ModalComponentComponent } from '../../modal-component/modal-component.component';

@Component({
  selector: 'app-daftar-kemas-kini-laporan',
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
    FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective,
    MatIconModule
  ],
  templateUrl: './daftar-kemas-kini-laporan.component.html',
  styleUrl: './daftar-kemas-kini-laporan.component.scss'
})
export class DaftarKemasKiniLaporanComponent {
  currentMainStep: number = 1;
  currentSubStep: number = 0;

  simpanRekodModal: boolean = false;
  hantarRekodModal: boolean = false;
  medanMandatoriVisible: boolean = false;
  selectedFileName1: string = '';
  selectedFileName2: string = '';
  selectedFileName3: string = '';
  tidakDapatMuatNaikVisible: boolean = false;
  form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      namaPegawai: [''],
      nokp: [''],
      noperkhidmatan: [''],
      email: [''],
      jawatan: [''],
      jenisKejadian: [''],
      kategoriKejadian: [''],
      tarikhKejadian: [''],
      masaKejadian: [''],
      tempatKejadian: [''],
      nomborLaporanPolis: [''],
      tarikhLaporanPolis: [''],
      masaLaporanPolis: [''],
      balaiLaporanPolis: [''],
      daerahLaporanPolis: [''],
      kontinjenLaporanPolis: [''],
      namaPegawaiYangTerlibat: [''],
      namaTahananMangsa: [''],
      tempatKejadianLaporanPolis: [''],
      tahapKejadian: [''],
      gambarKejadian: [''],
      videoKejadian: [''],
      dokumenSokongan: [''],
      catatan: [''],
    });
  }
  
  validateForm(form: FormGroup, option: string){
    if(form.value.namaPegawai === '' || 
      form.value.nokp === '' || 
      form.value.noperkhidmatan === '' || 
      form.value.email === '' || 
      form.value.jawatan === '' || 
      form.value.jenisKejadian === '' || 
      form.value.kategoriKejadian === '' || 
      form.value.tarikhKejadian === '' || 
      form.value.masaKejadian === '' || 
      form.value.tempatKejadian === '' || 
      form.value.nomborLaporanPolis === '' || 
      form.value.tarikhLaporanPolis === '' || 
      form.value.masaLaporanPolis === '' || 
      form.value.balaiLaporanPolis === '' || 
      form.value.daerahLaporanPolis === '' || 
      form.value.kontinjenLaporanPolis === '' || 
      form.value.namaPegawaiYangTerlibat === '' || 
      form.value.namaTahananMangsa === '' || 
      form.value.tempatKejadianLaporanPolis === '' || 
      form.value.tahapKejadian === '' || 
      form.value.gambarKejadian === '' || 
      form.value.videoKejadian === '' || 
      form.value.dokumenSokongan === '' || 
      form.value.catatan === ''){
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

  navigatePreviousPage() {
    this.router.navigate(['/adm/pengurusan-e-occurence/daftar-kemas-kini-laporan-kejadian/carian-laporan-kejadian']);
  }

  navigateNextPage() {
    this.router.navigate(['/adm/pengurusan-e-occurence/sahkan-laporan-kejadian/pengesahan-laporan-kejadian']);
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

  onFileChange1(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFileName1 = input.files[0].name;
    }
    this.tidakDapatMuatNaikVisible = true;
  }

  onFileChange2(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFileName2 = input.files[0].name;
    }
    this.tidakDapatMuatNaikVisible = true;
  }

  onFileChange3(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFileName3 = input.files[0].name;
    }
    this.tidakDapatMuatNaikVisible = true;
  }

  tidakDapatMuatNaikModalconfirm(){
    this.tidakDapatMuatNaikVisible = false;
  }
}
