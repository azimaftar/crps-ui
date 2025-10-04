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
  selector: 'app-kemas-kini-status-penggantungan-kad-kuasa',
  templateUrl: './kemas-kini-status-penggantungan-kad-kuasa.component.html',
  styleUrl: './kemas-kini-status-penggantungan-kad-kuasa.component.scss',
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
export class KemasKiniStatusPenggantunganKadKuasaComponent {
 // Current active step tracking
  currentMainStep = 2; // Main step (1,2,3,4,5,6)
  currentSubStep = 0; // Sub step (1-15)

  // Structured breadcrumb data
  breadcrumbSections = [
    {
      mainStep: 1,
      mainLabel: 'Maklumat Pemohon',
      subSteps: [],
    },
    {
      mainStep: 2,
      mainLabel: 'Kemas Kini Status Penggantungan Kad Kuasa',
      subSteps: [],
    },
        {
      mainStep: 3,
      mainLabel: 'Terimaan Kad Kuasa',
      subSteps: [],
    },
        {
      mainStep: 4,
      mainLabel: 'Batal Penggantungan Kad Kuasa',
      subSteps: [],
    },
  ];

  // Input Field
  readonlyField: boolean = false;

}