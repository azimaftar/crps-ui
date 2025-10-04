import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {ModalNotifikasiStandardComponent} from '../modal-notifikasi-standard/modal-notifikasi-standard.component';

// CoreUI Imports
import {
  ContainerComponent,
  CardComponent,           // <c-card>
  CardHeaderComponent,     // <c-card-header>
  CardBodyComponent,       // <c-card-body>
  RowComponent,            // <c-row>
  ColComponent,            // <c-col>
  ButtonDirective,          // [cButton]
  ModalComponent,
  CardTitleDirective,
  CardTextDirective,
  TabsListComponent,
  TabDirective,
  TabsContentComponent,
  TabPanelComponent,
  TabsComponent,           // <c-modal>
} from '@coreui/angular';

@Component({
  selector: 'app-imbasan-dokumen-perjalan-pasport',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContainerComponent,
    CardComponent,
    CardHeaderComponent,     // <c-card-header>
    CardBodyComponent,       // <c-card-body>
    RowComponent,            // <c-row>
    ColComponent,            // <c-col>
    // ButtonDirective,          // [cButton]
    // ModalComponent,
    //CardTitleDirective,
    CardTextDirective,
    //ButtonDirective,
    TabsListComponent,
    TabDirective,
    TabsContentComponent,
    TabPanelComponent,
    TabsComponent,
    // NgTemplateOutlet,
    ModalNotifikasiStandardComponent
  ],
  templateUrl: './imbasan-dokumen-perjalan-pasport.component.html',
  styleUrl: './imbasan-dokumen-perjalan-pasport.component.scss'
})
export class ImbasanDokumenPerjalanPasportComponent {
  // Form
  maklumatDokumenPerjalanan!: FormGroup;

  constructor(private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.maklumatDokumenPerjalanan = this.fb.group({
      docType: [''],
      gender: [''],
      age: [''],
      docNo: [''],
      kpNo: [''],
      expiryDate: [''],
      name: [''],
      nationality: [''],
      issueDatePassport: [''],
      countryIssue: [''],
    });

    //Disabled form
    this.maklumatDokumenPerjalanan.disable();
  }

  // Tab 
  tabs = ['WHITE', 'IR', 'UV'];

  activeTab1 = 'WHITE';
  activeTab2 = 'IR';
  activeTab3 = 'UV';

  disabledTabs = {
    group1: ['IR', 'UV'],
    group2: ['WHITE', 'UV'],
    group3: ['WHITE', 'IR'],
  };

  tabImages: { [key: string]: string } = {
    WHITE: 'assets/img/white.jpg',
    IR: 'assets/img/ir.jpg',
    UV: 'assets/img/uv.jpg',
  };

  // MODAL AREA
  // Nak keluar pop adjust value showModal dan currentResponseCode
  // showModal: boolean = false;
  showModal: boolean = true;
  currentResponseCode: string =''; //default
  //BEFORE
  // currentResponseCode: string = 'IBC-N001'; 

  //AFTER
  // currentResponseCode: string = 'WFR-IBC-02.9-10';
  // currentResponseCode: string = 'IBC-N008';
  // currentResponseCode: string = 'IBC-N006';
  // currentResponseCode: string = 'IBC-S038';

  openModal(code: string) {
    this.currentResponseCode = code;
    this.showModal = true;
  }

}
