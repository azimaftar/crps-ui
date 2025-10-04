import { Component, ViewChild } from '@angular/core';
import { ModalNotifikasiStandardComponent } from '../modal-notifikasi-standard/modal-notifikasi-standard.component';
import { ModalNotifikasiMaklumatPasComponent } from '../modal-notifikasi-maklumat-pas/modal-notifikasi-maklumat-pas.component';
import { NotificationModalComponent } from '../../../../core/components/notification-modal/notification-modal.component';
// CoreUI Imports
import {
  ContainerComponent,
  CardComponent,           // <c-card>
  CardHeaderComponent,     // <c-card-header>
  CardBodyComponent,       // <c-card-body>
  RowComponent,            // <c-row>
  ColComponent,            // <c-col>
  ButtonDirective,
  ProgressComponent,          // [cButton]
} from '@coreui/angular';

@Component({
  selector: 'app-bahagian-data-biometrik-wajah-dan-iris',
  imports: [
    ContainerComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,            // <c-row>
    ColComponent,
    ButtonDirective,
    ModalNotifikasiStandardComponent,
    ModalNotifikasiMaklumatPasComponent,
    ProgressComponent
    //NotificationModalComponent
  ],
  templateUrl: './bahagian-data-biometrik-wajah-dan-iris.component.html',
  styleUrl: './bahagian-data-biometrik-wajah-dan-iris.component.scss'
})
export class BahagianDataBiometrikWajahDanIrisComponent {
  //Modal
  // showModal: boolean = false; //default
  // currentResponseCode: string =''; //default

  // showModal: boolean = true; 
  //BEFORE
  // currentResponseCode: string = 'WFR-IBC-02.9-3'; 

  //AFTER
  // currentResponseCode: string = 'WFR-IBC-02.9-6';
  // currentResponseCode: string = 'WFR-IBC-02.9-10';

  // Modal visibility states
  showStandardModal: boolean = false;
  showMaklumatPasModal: boolean = false;
  currentResponseCode: string = 'WFR-IBC-02.9-3';

  // ViewChild references for both modals
  @ViewChild('standardModal') standardModal!: ModalNotifikasiStandardComponent;
  @ViewChild('maklumatPasModal') maklumatPasModal!: ModalNotifikasiMaklumatPasComponent;


  openModal(code: string) {
    this.currentResponseCode = code;

    // Reset both modals first
    this.showStandardModal = false;
    this.showMaklumatPasModal = false;

    // Logic based on response code
    switch (code) {
      case 'WFR-IBC-02.9-3':
        this.currentResponseCode = code;
        this.showStandardModal = true;
        this.showMaklumatPasModal = false;
        break;
      case 'WFR-IBC-02.9-5':
        this.currentResponseCode = code;
        this.showMaklumatPasModal = true;
        this.showStandardModal = false;
        break;
      case 'WFR-IBC-02.9-6':
        this.currentResponseCode = code;
        this.showStandardModal = true;
        this.showMaklumatPasModal = false;
        break;

      default:
        console.warn('No modal mapped for responseCode:', code);
        break;
    }

  }

  // showBiometricModal = false;
  // showModal = false;
  // showModalAlert = false;
  // showModalAlertNoButton = false;
  // modalTitle = '';
  // openBiometricAfterAlert = false;

  // onStatusImbasanClick(): void {
  //   console.log("masuk");
  //   this.modalTitle = 'Imbasan Wajah dan Iris Gagal! <br> Sila Letakkan Dua(2) Jari Telunjuk di Pengimbas Cap Jari';
  //   this.showBiometricModal = false; 
  //   this.showModal = true;
  //   this.showModalAlertNoButton = true;
  // }

  // closeModal(): void {
  //   this.showModal = false;
  //   this.showModalAlert = false;
  //   this.showModalAlertNoButton = false;
  //   if(this.openBiometricAfterAlert){
  //     this.showBiometricModal = true;
  //     this.openBiometricAfterAlert = false;
  //   }else{
  //     this.showBiometricModal = false;
  //   }
  // }
}
