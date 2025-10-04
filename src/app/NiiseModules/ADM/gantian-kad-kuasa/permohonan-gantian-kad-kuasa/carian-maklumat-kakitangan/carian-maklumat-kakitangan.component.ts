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
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
  ],
  templateUrl: './carian-maklumat-kakitangan.component.html',
  styleUrl: './carian-maklumat-kakitangan.component.scss'
})
export class CarianMaklumatKakitanganComponent {

  berjayaDisimpanVisible = false;
  berjayaDihantarVisible = false;
  carianTidakWujudVisible = false;

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

}
