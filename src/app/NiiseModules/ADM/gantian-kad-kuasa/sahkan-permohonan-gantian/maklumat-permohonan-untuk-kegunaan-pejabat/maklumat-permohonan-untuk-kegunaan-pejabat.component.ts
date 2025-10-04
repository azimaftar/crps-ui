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
  selector: 'app-maklumat-permohonan-untuk-kegunaan-pejabat',
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
  ],
  templateUrl: './maklumat-permohonan-untuk-kegunaan-pejabat.component.html',
  styleUrl: './maklumat-permohonan-untuk-kegunaan-pejabat.component.scss'
})
export class MaklumatPermohonanUntukKegunaanPejabatComponent {

  currentMainStep = 4; // Main step (1,2,3,4)

  breadcrumbSections = [
    {
      mainStep: 1,
      mainLabel: 'Maklumat Pemohon',
      subSteps: [],
    },
    {
      mainStep: 2,
      mainLabel: 'Kemas Kini Nombor Warta',
      subSteps: [],
    },
    {
      mainStep: 3,
      mainLabel: 'Pengambilan FLC',
      subSteps: [],
    },
        {
      mainStep: 4,
      mainLabel: 'Sahkan Permohonan Kad Kuasa',
      subSteps: [],
    },
  ]

  constructor(private router: Router) { }

  next(): void {
  // Add your navigation logic here
    this.router.navigate(['./adm/gantian-kad-kuasa/sahkan-permohonan-gantian/pengesahan-gantian-kad-kuasa']);
  }

}