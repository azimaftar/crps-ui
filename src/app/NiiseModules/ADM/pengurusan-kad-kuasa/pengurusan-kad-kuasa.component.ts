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
  ],
})
export class PengurusanKadKuasaComponent {
  constructor(private router: Router) {}

  parent1: Boolean = true;
  child1: Boolean = false;

  onCardClickParent(title: string): void {
    switch (title) {
      case 'Permohonan Kad Kuasa':
        console.log('Navigating to: Child 1 Menu');
        this.child1 = true;
        this.parent1 = false;
        break;

      case 'Kehilangan Kad Kuasa':
        console.log('Navigating to: /kemas-kini-maklumat-profile-kakitangan');
        this.router.navigate([
          'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pendaftaran-kakitangan',
        ]);
        break;

      case 'Penggantungan/ Batal Penggantungan Kad Kuasa':
        console.log('Navigating to: /carian-maklumat-cuti');
        this.router.navigate([
          'adm/pendaftaran-kakitangan/carian-dan-paparan-maklumat-cuti/carian-maklumat-cuti',
        ]);
        break;

      case 'Pemulangan Dan Perampasan Kad Kuasa':
        console.log('Navigating to: /waran-perjawatan');
        this.router.navigate([
          'adm/pendaftaran-kakitangan/kemaskini-maklumat-waran/maklumat-waran-penjawatan',
        ]);
        break;

      case 'Pelupasan Kad Kuasa':
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

  onCardClickChild(title: string): void {
    switch (title) {
      case 'Permohonan':
        console.log('Navigating to: /hantar-permohonan-kad-kuasa');
        this.router.navigate([
          'adm/permohonan-kad-kuasa/hantar-permohonan-kad-kuasa/pendaftaran-kakitangan',
        ]);
        break;

      case 'Jana Dan Cetak Senarai Permohonan Kad Kuasa':
        console.log('Navigating to: /kemas-kini-maklumat-profile-kakitangan');
        this.router.navigate([
          'adm/pendaftaran-kakitangan/kemas-kini-maklumat-profile-kakitangan/pendaftaran-kakitangan',
        ]);
        break;

      case 'Kemas Kini Nombor Siri Kad Kuasa':
        console.log('Navigating to: /carian-maklumat-cuti');
        this.router.navigate([
          'adm/pendaftaran-kakitangan/carian-dan-paparan-maklumat-cuti/carian-maklumat-cuti',
        ]);
        break;

      case 'Semakan Kualiti Kad Kuasa':
        console.log('Navigating to: /waran-perjawatan');
        this.router.navigate([
          'adm/pendaftaran-kakitangan/kemaskini-maklumat-waran/maklumat-waran-penjawatan',
        ]);
        break;

      case 'Jenis Penerimaan Kad Kuasa':
        console.log('Navigating to: /waran-perjawatan');
        this.router.navigate([
          'adm/pendaftaran-kakitangan/kemaskini-maklumat-waran/maklumat-waran-penjawatan',
        ]);
        break;

      case 'Serahan Kad Kuasa':
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
