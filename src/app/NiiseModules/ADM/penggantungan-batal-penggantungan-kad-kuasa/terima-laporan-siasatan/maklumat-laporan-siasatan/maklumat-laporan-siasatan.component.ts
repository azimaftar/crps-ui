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

@Component({
  selector: 'app-maklumat-laporan-siasatan',
  templateUrl: './maklumat-laporan-siasatan.component.html',
  styleUrl: './maklumat-laporan-siasatan.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    FormsModule,
    // SidebarBrandComponent,
    // NgOptimizedImage,
    // <-- Correctly import only NavModule
  ],
})

export class MaklumatLaporanSiasatanComponent {
  // Current active step tracking
  currentMainStep = 1; // Main step (1,2,3,4,5,6)
  currentSubStep = 1; // Sub step (1-15)

  // Structured breadcrumb data
  breadcrumbSections = [
    {
      mainStep: 1,
      mainLabel: 'Maklumat Laporan Siasatan',
      subSteps: [],
    },
    {
      mainStep: 2,
      mainLabel: 'Pengesahan Laporan Siasatan',
      subSteps: [],
    },
  ];
}
