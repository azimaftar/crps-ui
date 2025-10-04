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
import { Router, RouterModule } from '@angular/router';
import { HubungiJpnComponent } from '../../notification-modal/hubungi-jpn/hubungi-jpn.component';
import { MaklumatCarianTidakWujudComponent } from '../../notification-modal/maklumat-carian-tidak-wujud/maklumat-carian-tidak-wujud.component';
import { RekodBerjayaDihantarComponent } from '../../notification-modal/rekod-berjaya-dihantar/rekod-berjaya-dihantar.component';
import { RekodBerjayaDisimpanComponent } from '../../notification-modal/rekod-berjaya-disimpan/rekod-berjaya-disimpan.component';
import { TidakDijumpaiJpnComponent } from '../../notification-modal/tidak-dijumpai-jpn/tidak-dijumpai-jpn.component';

@Component({
  selector: 'app-pengurusan-kakitangan',
  templateUrl: './pengurusan-kakitangan.component.html',
  styleUrls: ['./pengurusan-kakitangan.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule, 
    RouterModule, 
    HubungiJpnComponent, 
    MaklumatCarianTidakWujudComponent,
    RekodBerjayaDihantarComponent,
    RekodBerjayaDisimpanComponent,
    TidakDijumpaiJpnComponent,
]

})
export class PengurusanKakitanganComponent {

  documentType: string = '';
  documentId: string = '';

  constructor(private router: Router) { }

   onRegister() {
    console.log('Register clicked');
    // Logic for register action
  }

  onSubmit() {
    console.log('Searching...');
    console.log('Type:', this.documentType);
    console.log('ID:', this.documentId);
    // Logic for search action
  }

  carianMaklumat(): void {
  // Add your navigation logic here
    this.router.navigate(['./adm/pendaftaran-kakitangan/masukkan-rekod-maklumat-kat/dokumen-sokongan']);
  }

  HantarHubungiJpn= false;
  HantarMaklumatCarian= false;
  HantarRekodDihantar= false;
  HantarRekodDisimpan= false;
  HantarJumpaiJpn= false;

  showHubungiJpn() {
  // Reset and reopen to ensure visibility
  this.HantarHubungiJpn = false;
  setTimeout(() => {
    this.HantarHubungiJpn = true;
  }, 0); // Short delay allows Angular change detection to register state change
}
  showMaklumatCarian() {
  // Reset and reopen to ensure visibility
  this.HantarMaklumatCarian = false;
  setTimeout(() => {
    this.HantarMaklumatCarian = true;
  }, 0); // Short delay allows Angular change detection to register state change
}

  showRekodDihantar() {
  // Reset and reopen to ensure visibility
  this.HantarRekodDihantar = false;
  setTimeout(() => {
    this.HantarRekodDihantar = true;
  }, 0); // Short delay allows Angular change detection to register state change
}

  showHubungidisimpan() {
  // Reset and reopen to ensure visibility
  this.HantarRekodDisimpan = false;
  setTimeout(() => {
    this.HantarRekodDisimpan = true;
  }, 0); // Short delay allows Angular change detection to register state change
}

  showDijumpaiJpn() {
  // Reset and reopen to ensure visibility
  this.HantarJumpaiJpn = false;
  setTimeout(() => {
    this.HantarJumpaiJpn = true;
  }, 0); // Short delay allows Angular change detection to register state change
}

    closeModal() {
    this.HantarHubungiJpn = false;
    this.HantarMaklumatCarian = false;
    this.HantarRekodDihantar= false;
    this.HantarRekodDisimpan= false;
    this.HantarJumpaiJpn= false;

  }

}
