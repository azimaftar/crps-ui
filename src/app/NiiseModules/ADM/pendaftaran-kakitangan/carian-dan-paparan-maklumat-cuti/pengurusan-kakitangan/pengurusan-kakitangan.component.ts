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
  selector: 'app-pengurusan-kakitangan',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,

  ],
  templateUrl: './pengurusan-kakitangan.component.html',
  styleUrl: './pengurusan-kakitangan.component.scss'
})
export class PengurusanKakitanganComponent {

    onCardClick(title: string): void {
    console.log(`You clicked: ${title}`);
  }

}
