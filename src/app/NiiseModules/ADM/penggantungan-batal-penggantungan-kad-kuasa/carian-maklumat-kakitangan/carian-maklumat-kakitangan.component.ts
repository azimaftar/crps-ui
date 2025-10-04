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

  jpnModalVisible = false;
  carianModalVisible = false;
  rekodModalVisible = false;

 //jpnModalVisible modal logic
  jpnModalconfirm() {
    this.jpnModalVisible = false;
  }

  //carianModalVisible modal logic
  carianModalconfirm() {
    this.carianModalVisible = false;
  }

  //rekodModalVisible modal logic
  rekodModalconfirm() {
    this.rekodModalVisible = false;
  }
}