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
  selector: 'app-kemas-kini-nombor-siri-kad-kuasa',
  templateUrl: './kemas-kini-nombor-siri-kad-kuasa.component.html',
  styleUrl: './kemas-kini-nombor-siri-kad-kuasa.component.scss',
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
export class KemasKiniNomborSiriKadKuasaComponent {
 // Current active step tracking
  currentMainStep = 2; // Main step (1,2,3,4,5,6)
  currentSubStep = 1; // Sub step (1-15)

  // Structured breadcrumb data
  breadcrumbSections = [
    {
      mainStep: 1,
      mainLabel: 'Maklumat Pemohon',
      subSteps: [],
    },
    {
      mainStep: 2,
      mainLabel: 'Kemas Kini Nombor Siri Kad Kuasa',
      subSteps: [],
    },
  ];

  // Staff Profile Field
  readonlyField: boolean = false;

  maklumatKad = {
    tarikhSerahanKad: '',
    nomborSiriKad: '',
  };
hantarRekod() {
  // Jika ada logik untuk hantar ke backend, letak di sini.
  // Contoh: this.service.hantarMaklumat(this.maklumatKad).subscribe(() => {...});

  this.rekodDihantarVisible = true; // Paparkan modal
}

  //rekodDihantarVisible modal logic
  rekodDihantarVisible = false;

  rekodDihantarModalconfirm() {
    this.rekodDihantarVisible = false;
  }
  
}