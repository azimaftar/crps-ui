import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  SidebarBrandComponent,
  ModalModule,
} from '@coreui/angular';

@Component({
  selector: 'app-daftar-maklumat-waran-penjawatan',
  imports: [
        CommonModule,
        CardModule,
        GridModule,
        NavModule,
        ModalModule,
        FormsModule,
  ],
  templateUrl: './daftar-maklumat-waran-penjawatan.component.html',
  styleUrl: './daftar-maklumat-waran-penjawatan.component.scss'
})
export class DaftarMaklumatWaranPenjawatanComponent {

  documenttype:string='';

    maklumatWaranPenjawatan = {
    negeri: '',
    bahagian: '',
    cawangan: '',
    unit: '',
    jawatan: '',
    gred: '',
    TBK1TBK2: '',
    kodGajiSSM: '',
    kodSkim: '',
    bilanganJawatan: '',
    kenyataan: '',
    catatan: '',
  };

}
