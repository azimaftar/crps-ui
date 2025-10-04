import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PengecualianBiometrikComponent } from '../../pemeriksaan-masuk/shared-modal/pengecualian-biometrik/pengecualian-biometrik.component';
import {
  ButtonDirective,
  CardComponent,
  CardHeaderComponent, // <c-card-header>
  CardFooterComponent, // <c-card-footer>
  CardBodyComponent, // <c-card-body>
  ColComponent,
  RowComponent,
  TemplateIdDirective,
  WidgetStatAComponent
} from '@coreui/angular';
import { Tabs2Module } from '@coreui/angular';
import { cilHome } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FormDirective,
  FormLabelDirective,
  ModalBodyComponent,
  ModalToggleDirective,
  ModalFooterComponent,
  ModalTitleDirective,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  ModalComponent,
  ModalHeaderComponent,
  ButtonCloseDirective,
} from '@coreui/angular';


@Component({
  selector: 'app-bahagian-data-biometrik-wajah',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    WidgetStatAComponent,
    TemplateIdDirective,
    IconDirective,
    Tabs2Module,
    FormDirective,
    FormLabelDirective,
    ButtonDirective,
    ModalToggleDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent
  ],
  templateUrl: './bahagian-data-biometrik-wajah.component.html',
  styleUrl: './bahagian-data-biometrik-wajah.component.scss'
})
export class BahagianDataBiometrikWajahComponent {

  //Tabs config
  cilHome = cilHome;

  handleChange($event: string | number | undefined) {
    console.log('handleChange', $event);
  }

  @ViewChild(PengecualianBiometrikComponent) pengecualianBiometrik!: PengecualianBiometrikComponent;
  openPengecualianBiometrik() {
    this.pengecualianBiometrik.openModal();
  }

  //Value passed
  statusImbas: string = '';
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.statusImbas = params['statusImbas'] || '';
      console.log('statusImbas:', this.statusImbas); // for debugging
    });
  }

  faceImage: string = '/assets/images/face-placeholder.jpg';
  irisImage: string = '/assets/images/iris-placeholder.jpg';
  faceRecognitionPercent: string = '';
  irisRecognitionPercent: string = '';
  // statusImbas: string = 'imbas';  Can be 'imbas', 'sah', 'simpan', or 'gagal'

  openKeputusanImbasanGagal() {
    this.router.navigate(['/biometrik-wajah'], { queryParams: { statusImbas: "gagal" } })
  }
  openKeputusanImbasanLulusSah() {
    this.router.navigate(['/biometrik-wajah'], { queryParams: { statusImbas: "sah" } })
  }
  openKeputusanImbasanLulusSimpan() {
    this.router.navigate(['/biometrik-wajah'], { queryParams: { statusImbas: "simpan" } })
  }
  openCapJari() {
    this.router.navigate(['/biometrik-capjari'], { queryParams: { jari: "kanan" } })
  }
}
