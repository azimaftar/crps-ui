import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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
    RouterModule
    // SidebarBrandComponent,
    // NgOptimizedImage,
    // <-- Correctly import only NavModule
  ],
})
export class PengurusanKadKuasaComponent {
  onCardClick(title: string): void {
    console.log(`You clicked: ${title}`);
  }

   constructor(private router: Router) { }

   /**
   * Navigate to next page
   */
  KehilanganKadKuasa(): void {
    console.log('Going to previous step - Dokumen Sokongan');
    this.router.navigate(['adm/kehilangan-kad-kuasa/pengurusan-kad-kuasa/kehilangan-kad-kuasa-2']);
  }

  pemulanganKadKuasa(): void {
    this.router.navigate(['adm/pemulangan-perampasan-kad-kuasa/kemas-kini-maklumat-arahan-pemulangan-perampasan-kad-kuasa/dashboard-senarai-arahan-pemulangan-kad-kuasa']);
  }
}
