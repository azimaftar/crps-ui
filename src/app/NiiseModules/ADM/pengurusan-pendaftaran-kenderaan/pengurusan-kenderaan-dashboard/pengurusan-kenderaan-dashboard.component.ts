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
import { Router } from '@angular/router';

@Component({
  selector: 'app-pengurusan-kenderaan-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
  ],
  templateUrl: './pengurusan-kenderaan-dashboard.component.html',
  styleUrl: './pengurusan-kenderaan-dashboard.component.scss'
})
export class PengurusanKenderaanDashboardComponent {

  constructor(private router: Router) {}
  onCardClick(title: string): void {
    switch (title) {
      case 'Pendaftaran Kakitangan':
        console.log('Navigating to: /pendaftaran-kakitangan');
        this.router.navigate([
          'adm/pendaftaran-kakitangan/carian-maklumat-kakitangan/pendaftaran-kakitangan',
        ]);
        break;

      case 'Kemas Kini Maklumat Profil Kakitangan':
        console.log('Navigating to: /kemaskini-profil');
        // this.router.navigate(['/kemaskini-profil']);
        break;

      case 'Maklumat Cuti':
        console.log('Navigating to: /maklumat-cuti');
        // this.router.navigate(['/maklumat-cuti']);
        break;

      case 'Maklumat Waran Perjawatan':
        console.log('Navigating to: /waran-perjawatan');
        // this.router.navigate(['/waran-perjawatan']);
        break;

      default:
        console.warn(`No action defined for: ${title}`);
        break;
    }
  }

}
