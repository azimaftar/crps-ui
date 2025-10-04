import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardModule, GridModule, NavModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pengurusan-e-occurence',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    // ModalModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './pengurusan-e-occurence.component.html',
  styleUrl: './pengurusan-e-occurence.component.scss'
})
export class PengurusanEOccurenceComponent {
  onCardClick(title: string): void {
    console.log(`You clicked: ${title}`);
  }

   constructor(private router: Router) { }

   /**
   * Navigate to next page
   */
  KehilanganKadKuasa(): void {
    console.log('Going to previous step - Dokumen Sokongan');
    this.router.navigate(['adm/kehilangan-kad-kuasa/pengurusan-kad-kuasa/kehilangan-kad-kuasa']);
  }

  pemulanganKadKuasa(): void {
    this.router.navigate(['adm/pemulangan-perampasan-kad-kuasa/kemas-kini-maklumat-arahan-pemulangan-perampasan-kad-kuasa/dashboard-senarai-arahan-pemulangan-kad-kuasa']);
  }

  pelupusanKadKuasa(): void {
    this.router.navigate(['adm/pelupusan-kad-kuasa/senarai-pelupusan-kad-kuasa']);
  }
}
