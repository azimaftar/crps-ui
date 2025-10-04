import { Component } from '@angular/core';
import { CardModule, GridModule, NavModule, ModalModule } from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laman-utama-pengurusan-kad-kuasa',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
  ],
  templateUrl: './laman-utama-pengurusan-kad-kuasa.component.html',
  styleUrl: './laman-utama-pengurusan-kad-kuasa.component.scss'
})
export class LamanUtamaPengurusanKadKuasaComponent {
  constructor(private router: Router) {}

  onCardClick(title: string): void{
    console.log(`You clicked: ${title}`);
  }

  goToPelupusanKadKuasa(): void{
    this.router.navigate(['/adm/pelupusan-kad-kuasa/senarai-pelupusan-kad-kuasa']);
  }

  goToPemulanganPerampasanKadKuasa(): void{
    this.router.navigate(['/adm/pemulangan-perampasan-kad-kuasa/kemas-kini-maklumat-arahan-pemulangan-perampasan-kad-kuasa/dashboard-senarai-arahan-pemulangan-kad-kuasa']);
  }
}
