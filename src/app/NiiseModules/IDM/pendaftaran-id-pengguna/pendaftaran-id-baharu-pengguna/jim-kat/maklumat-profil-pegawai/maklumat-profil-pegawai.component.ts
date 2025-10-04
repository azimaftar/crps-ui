import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule, GridModule, NavModule } from '@coreui/angular';
import { BreadcrumbComponent } from '../breadcrumb.component';

@Component({
  selector: 'app-maklumat-profil-pegawai',
  templateUrl: './maklumat-profil-pegawai.component.html',
  styleUrl: './maklumat-profil-pegawai.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    BreadcrumbComponent,
  ],
})
export class MaklumatProfilPegawaiComponent {
  static title: string = 'Maklumat Profil Pegawai';
  isBreadcrumbOpen = false;
  activeStep = 1;

  openBreadcrumb() {
    this.isBreadcrumbOpen = true;
  }

  closeBreadcrumb() {
    this.isBreadcrumbOpen = false;
  }
}
