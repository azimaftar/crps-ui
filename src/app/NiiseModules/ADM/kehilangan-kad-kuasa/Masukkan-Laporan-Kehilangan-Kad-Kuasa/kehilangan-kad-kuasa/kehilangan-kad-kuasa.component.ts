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
  selector: 'app-permohonan-kad-kuasa',
  templateUrl: './kehilangan-kad-kuasa.component.html',
  styleUrl: './kehilangan-kad-kuasa.component.scss',
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
export class KehilanganKadKuasaComponent {
  onCardClick(title: string): void {
    console.log(`You clicked: ${title}`);
  }
  constructor(private router: Router) { }

   /**
   * Navigate to next page
   */
  LaporanKehilanganKadKuasa(): void {
    console.log('Going to previous step - Dokumen Sokongan');
    this.router.navigate(['adm/kehilangan-kad-kuasa/laporan-kehilangan-kad-kuasa/maklumat-permohonan']);
  }

    KemaskiniLaporanSiasatan(): void {
    console.log('Going to previous step - Dokumen Sokongan');
    this.router.navigate(['adm/kehilangan-kad-kuasa/kemaskini-laporan-siasatan']);
  }
}