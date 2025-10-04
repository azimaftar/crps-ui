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
  selector: 'app-carian-maklumat-kakitangan',
  templateUrl: './carian-maklumat-kakitangan.component.html',
  styleUrl: './carian-maklumat-kakitangan.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    // SidebarBrandComponent,
    // NgOptimizedImage,
    // <-- Correctly import only NavModule
  ],
})
export class CarianMaklumatKakitanganComponent {

  berjayaDisimpanVisible = false;
  berjayaDihantarVisible = false;
  carianTidakWujudVisible = false;
  tidakDapatMuatNaikVisible = false;
  noWartaAdaVisible = false;
  wartaTidakSahVisible = false;

   //berjayaDisimpanModalVisible modal logic
  berjayaDisimpanModalconfirm() {
    this.berjayaDisimpanVisible = false;
  }

 //berjayaDihantarModalVisible modal logic
  berjayaDihantarModalconfirm() {
    this.berjayaDihantarVisible = false;
  }

  //carianTidakWujudModalVisible modal logic
  carianTidakWujudModalconfirm() {
    this.carianTidakWujudVisible = false;
  }

  //tidakDapatMuatNaikVisible modal logic
  tidakDapatMuatNaikModalconfirm() {
    this.tidakDapatMuatNaikVisible = false;
  }

    //noWartaAdaVisible modal logic
  noWartaAdaModalconfirm() {
    this.noWartaAdaVisible = false;
  }

  //wartaTidakSahVisible modal logic
  wartaTidakSahModalconfirm() {
    this.wartaTidakSahVisible = false;
  }
}