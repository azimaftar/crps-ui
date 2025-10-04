import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {
  ButtonDirective,
  ContainerComponent,
  ColComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  RowComponent,
  TemplateIdDirective,
  WidgetStatAComponent,
  CardFooterComponent, // <c-card-footer>
  CardComponent, // <c-card>
  CardHeaderComponent,// <c-card-header>
  CardBodyComponent,//<c-card-body>
  ButtonCloseDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalToggleDirective,

} from '@coreui/angular';
import { Tabs2Module } from '@coreui/angular';
import { cilHome } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { PengecualianBiometrikComponent } from '../../pemeriksaan-masuk/shared-modal/pengecualian-biometrik/pengecualian-biometrik.component';

@Component({
  selector: 'app-bahagian-data-biometrik-capjari-kirikanan',
  standalone: true,
  imports: [
    PengecualianBiometrikComponent,
    CardComponent,
    CardHeaderComponent,// <c-card-header>
    CardBodyComponent,//<c-card-body>
    CardFooterComponent,//<c-card-footer>
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalToggleDirective,
    ContainerComponent,
    RowComponent,
    ColComponent,
    WidgetStatAComponent,
    TemplateIdDirective,
    IconDirective,
    DropdownComponent,
    ButtonDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    RouterLink,
    Tabs2Module, 
    IconDirective, 
    IconDirective
  ],
  templateUrl: './bahagian-data-biometrik-capjari-kirikanan.component.html',
  styleUrl: './bahagian-data-biometrik-capjari-kirikanan.component.scss'
})
export class BahagianDataBiometrikCapjariKirikananComponent {
  //Tabs config
  cilHome = cilHome;

  handleChange($event: string | number | undefined) {
    console.log('handleChange', $event);
  }

  leftFingerprints = [
    { image: '/assets/images/fingerprint1.png' },
    { image: '/assets/images/fingerprint2.png' }
  ];
  fingerQuality: string = '';

    showModal = false;
  selectedGateData: any = null;

  viewGateDetails(gate: any) {
    this.selectedGateData = gate;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  openGate() {
    console.log('Opening gate:', this.selectedGateData?.gateNo);
    this.closeModal();
  }
}
