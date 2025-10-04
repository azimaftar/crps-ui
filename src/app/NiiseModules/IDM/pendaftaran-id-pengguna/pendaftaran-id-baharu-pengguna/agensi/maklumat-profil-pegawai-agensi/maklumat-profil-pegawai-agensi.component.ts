import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule, GridModule, NavModule, ModalModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { BreadcrumbAgensiComponent } from '../breadcrumb-agensi.component';

@Component({
  selector: 'app-maklumat-profil-pegawai-agensi',
  templateUrl: './maklumat-profil-pegawai-agensi.component.html',
  styleUrl: './maklumat-profil-pegawai-agensi.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    BreadcrumbAgensiComponent,
  ],
})
export class MaklumatProfilPegawaiAgensiComponent {
  static title: string = 'Maklumat Profil Pegawai Agensi';
  isBreadcrumbOpen = false;
  activeStep = 1;

  showFingerprintModal = false;
  rightFingerprint: string | null = null;
  leftFingerprint: string | null = null;

  openBreadcrumb() {
    this.isBreadcrumbOpen = true;
  }

  closeBreadcrumb() {
    this.isBreadcrumbOpen = false;
  }

  openFingerprintModal() {
    this.showFingerprintModal = true;
  }

  scanFingerprint(side: 'right' | 'left') {
    console.log(`Scanning ${side} fingerprint...`);
  }

  saveFingerprints() {
    this.showFingerprintModal = false;
  }
}
