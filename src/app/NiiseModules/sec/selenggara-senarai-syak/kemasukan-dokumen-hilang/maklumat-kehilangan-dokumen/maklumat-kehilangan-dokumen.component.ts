import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IconDirective } from '@coreui/icons-angular';
import {
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  CardModule,
  GridModule,
  Tabs2Module,
} from '@coreui/angular';

@Component({
  selector: 'app-maklumat-kehilangan-dokumen',
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    CardModule,
    GridModule,
    IconDirective,
    Tabs2Module,
  ],
  templateUrl: './maklumat-kehilangan-dokumen.component.html',
  styleUrl: './maklumat-kehilangan-dokumen.component.scss'
})
export class MaklumatKehilanganDokumenComponent {
  jenisPengenalan: string = '';
  noDokumen: string = '';
  noFailJIM: string = '';
  tarikhHilang: string = '';
  sebabHilang: string = '';
  tarikhTamatDokumen: string = '';
  agensiPelapor: string = '';
  kodNap: string = '';
  noNap: string = '';
  kodTindakan: string = '';
  sahkan: boolean = false;

  step = 2;
  currentStep: number = 2;
  steps = [
    { number: 1, title: 'Carian Dokumen', route: '' },
    { number: 2, title: 'Maklumat Kehilangan Dokumen', route: '' },
  ];

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  resetForm(): void {

  }

  submitForm(): void {

  }

  previousStep(): void {

  }

}
