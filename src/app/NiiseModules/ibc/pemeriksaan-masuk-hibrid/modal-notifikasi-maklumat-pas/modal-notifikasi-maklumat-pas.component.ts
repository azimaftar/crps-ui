import { Component, Input, ViewChild } from '@angular/core';
import { ColComponent, ModalBodyComponent, ModalComponent, ModalHeaderComponent, RowComponent } from '@coreui/angular';

// import { IconComponent } from '@coreui/icons-angular';

@Component({
  selector: 'app-modal-notifikasi-maklumat-pas',
  imports: [
    ModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    RowComponent,
    ColComponent
  ],
  templateUrl: './modal-notifikasi-maklumat-pas.component.html',
  styleUrl: './modal-notifikasi-maklumat-pas.component.scss'
})
export class ModalNotifikasiMaklumatPasComponent {

  @Input() visible: boolean = false;
  @Input() responseCode: string = 'success';

  // Modal visibility state
  modalVisible = true;

  // Form data
  jenisPas = 'Visa Transit';
  tarikhTamatPas = '21 Mac 2025';

  // constructor(private iconSet: IconSetService) {
  //   // Register CoreUI icons
  //   iconSet.icons = { cilCheckCircle };
  // }

  openModal() {
    this.modalVisible = true;
  }
}
