import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  NavModule,
  GridModule,
  ModalModule,
} from '@coreui/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pengurusan-kakitangan-kuasa',
  templateUrl: './pengurusan-kakitangan.component.html',
  styleUrl: './pengurusan-kakitangan.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
  ],
})
export class PengurusanKakitanganComponent {
  constructor(private router: Router) {}
  onCardClick(title: string): void {
    switch (title) {
      case 'Pendaftaran Kakitangan':
        console.log('Navigating to: /pendaftaran-kakitangan');
        this.router.navigate([
          'adm/pendaftaran-kakitangan/pendaftaran-kakitangan',
        ]);
        break;

      case 'Kemas Kini Maklumat Profil Kakitangan':
        console.log('Navigating to: /kemas-kini-maklumat-profile-kakitangan');
        this.router.navigate([
          'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pendaftaran-kakitangan',
        ]);
        break;

      case 'Maklumat Cuti':
        console.log('Navigating to: /carian-maklumat-cuti');
        this.router.navigate([
          'adm/pendaftaran-kakitangan/carian-dan-paparan-maklumat-cuti/carian-maklumat-cuti',
        ]);
        break;

      case 'Maklumat Waran Perjawatan':
        console.log('Navigating to: /waran-perjawatan');
        this.router.navigate([
          'adm/pendaftaran-kakitangan/kemaskini-maklumat-waran/maklumat-waran-penjawatan',
        ]);
        break;

      default:
        console.warn(`No action defined for: ${title}`);
        break;
    }
  }
}
