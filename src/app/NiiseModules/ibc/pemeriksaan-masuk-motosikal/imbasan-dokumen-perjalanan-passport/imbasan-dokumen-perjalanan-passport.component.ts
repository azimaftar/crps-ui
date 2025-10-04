import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreuiModalComponent } from '../../../../core/components/coreui-modal/coreui-modal.component';

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
  ModalBodyComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  CardTitleDirective,
  CardTextDirective,
  TabsListComponent,
  TabDirective,
  TabsContentComponent,
  TabPanelComponent,
  TabsComponent,           // <c-modal>
} from '@coreui/angular';



@Component({
  selector: 'app-imbasan-dokumen-perjalanan-passport',
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
    ButtonDirective,          // [cButton]
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    CardTitleDirective,
    CardTextDirective,
    ButtonDirective,
    TabsListComponent,
    TabDirective,
    TabsContentComponent,
    TabPanelComponent,
    TabsComponent,
    CoreuiModalComponent
  ],
  templateUrl: './imbasan-dokumen-perjalanan-passport.component.html',
  styleUrl: './imbasan-dokumen-perjalanan-passport.component.scss'
})

export class ImbasanDokumenPerjalananPassportComponent {
  // Form
  maklumatDokumenPerjalanan!: FormGroup;
  verticallyCenteredModal: any;


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

    
  openModal: string | null = null;

  open(modalId: string) {
    this.openModal = modalId;
  }

  close() {
    this.openModal = null;
  }
}

