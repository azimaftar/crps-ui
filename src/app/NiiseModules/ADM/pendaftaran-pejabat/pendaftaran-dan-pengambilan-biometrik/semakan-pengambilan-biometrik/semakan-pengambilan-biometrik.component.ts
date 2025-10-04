import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule, GridModule, ButtonDirective, ModalModule} from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { ModalComponentComponent } from '../../daftar-kemas-kini-maklumat-pejabat/modal-component/modal-component.component';
import { Router } from '@angular/router';
import { StepperComponent } from '../../daftar-kemas-kini-maklumat-pejabat/stepper/stepper.component';

@Component({
  selector: 'app-semakan-pengambilan-biometrik',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    FormsModule,
    ButtonDirective,
    ModalModule,
    ModalComponentComponent,
    StepperComponent
  ],
  templateUrl: './semakan-pengambilan-biometrik.component.html',
  styleUrl: './semakan-pengambilan-biometrik.component.scss'
})
export class SemakanPengambilanBiometrikComponent {
  currentMainStep: number = 1;
  currentSubStep: number = 3;

  // Input Field Logic
  readonlyField = true;

  maklumatBiometrik = {
    statusCapJari: '(Wujud/ Tidak Wujud/ Tidak Lengkap)',
    statusWajah: '(Wujud/ Tidak Wujud/ Tidak Lengkap)',
    statusIris: '(Wujud/ Tidak Wujud/ Tidak Lengkap)',
  };

  //Modal Logic
  capJariSemakModalVisible = false;
  irisSemakModalVisible = false;
  wajahSemakModalVisible = false;
  capJariAmbilModalVisible = false;
  irisAmbilModalVisible = false;
  wajahAmbilModalVisible = false;
  carianModalVisible = false;

  constructor(private router: Router) {}

  navigatePreviousPage() {
    this.router.navigate(['/adm/pendaftaran-pejabat/pendaftaran-dan-pengambilan-biometrik-bagi-maklumat-majikan-dan-pekerja/pengesahan-maklumat-pejabat']);
  }

  navigateNextPage() {
    this.router.navigate(['/adm/pendaftaran-pejabat/pendaftaran-dan-pengambilan-biometrik-bagi-maklumat-majikan-dan-pekerja/pengesahan-maklumat-pejabat']);
  }

  //capJariModalVisible modal logic
  capJariSemakModalconfirm(visibility: boolean) {
    this.capJariSemakModalVisible = visibility;
  }

  //irisModalVisible modal logic
  irisSemakModalconfirm(visibility: boolean) {
    this.irisSemakModalVisible = visibility;
  }

  //wajahModalVisible modal logic
  wajahSemakModalconfirm(visibility: boolean) {
    this.wajahSemakModalVisible = visibility;
  }
  
  //capJariModalVisible modal logic
  capJariAmbilModalconfirm(visibility: boolean) {
    this.capJariAmbilModalVisible = visibility;
  }

  //irisModalVisible modal logic
  irisAmbilModalconfirm(visibility: boolean) {
    this.irisAmbilModalVisible = visibility;
  }

  //wajahModalVisible modal logic
  wajahAmbilModalconfirm(visibility: boolean) {
    this.wajahAmbilModalVisible = visibility;
  }

  //carianModalVisible modal logic
  carianModalconfirm(visibility: boolean) {
    this.carianModalVisible = visibility;
  }
}
