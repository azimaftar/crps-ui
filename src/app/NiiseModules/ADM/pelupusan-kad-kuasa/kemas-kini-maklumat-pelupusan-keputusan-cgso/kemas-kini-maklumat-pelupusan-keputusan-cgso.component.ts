import { Component } from '@angular/core';
import { CardModule, CardBodyComponent, CardFooterComponent, CardHeaderComponent, GridModule, ButtonDirective, ModalModule } from '@coreui/angular';
import { StepperComponent } from '../stepper/stepper.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { cilCheckCircle } from '@coreui/icons';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ModalComponentComponent } from '../modal-component/modal-component.component';

@Component({
  selector: 'app-kemas-kini-maklumat-pelupusan-keputusan-cgso',
  imports: [
    CardModule,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    GridModule,
    ButtonDirective,
    StepperComponent,
    ModalModule,
    FormsModule,
    IconModule,
    ModalComponentComponent
  ],
  templateUrl: './kemas-kini-maklumat-pelupusan-keputusan-cgso.component.html',
  styleUrl: './kemas-kini-maklumat-pelupusan-keputusan-cgso.component.scss'
})
export class KemasKiniMaklumatPelupusanKeputusanCgsoComponent {
  icons = { cilCheckCircle };

  constructor(private router: Router, private iconSet: IconSetService) {
    this.iconSet.icons = { cilCheckCircle };
  }

  currentMainStep = 3;
  simpanRekodModal: boolean = false;
  hantarRekodModal: boolean = false;
  muatnaikModal: boolean = false;
  selectedFileName1: string = '';
  selectedFileName2: string = '';
  
  //this is to find the previous path
  navigatePreviousPage() {
    this.router.navigate([
      'adm/pelupusan-kad-kuasa/maklumat-pelupusan-kad-kuasa',
    ]);
  }

  //this is to find next page path
  navigateNextPage() {
    this.router.navigate([
      'adm/pelupusan-kad-kuasa/kemas-kini-maklumat-pelupusan-keputusan-cgso',
    ]);
  } 

  SimpanRekod() {
    this.simpanRekodModal = true;
  }

  closeSimpanRekodModal(): void {//model for cmn-S001
    this.simpanRekodModal = false;
  }
  
  HantarRekod() {
    this.hantarRekodModal = true;
  }

  closeHantarRekodModal(): void {//model for cmn-S013
    this.hantarRekodModal = false;
  }

  closeMuatnaikModal(): void {//model for adm-e010
    this.muatnaikModal = false;
  }

  onFileChange1(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFileName1 = file.name;
      this.muatnaikModal = true;
    }
  }
  
  onFileChange2(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFileName2 = file.name;
      this.muatnaikModal = true;
    }
  }


}
