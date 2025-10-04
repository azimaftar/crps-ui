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
  selector: 'app-pengurusan-kad-kuasa',
  templateUrl: './pengurusan-kad-kuasa.component.html',
  styleUrl: './pengurusan-kad-kuasa.component.scss',
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
export class PengurusanKadKuasaComponent {
  onCardClick(title: string): void {
    console.log(`You clicked: ${title}`);
  }
}
