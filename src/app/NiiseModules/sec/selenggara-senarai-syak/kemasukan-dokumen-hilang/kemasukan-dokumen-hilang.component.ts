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
  selector: 'app-kemasukan-dokumen-hilang',
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
  templateUrl: './kemasukan-dokumen-hilang.component.html',
  styleUrl: './kemasukan-dokumen-hilang.component.scss'
})
export class KemasukanDokumenHilangComponent {

  noDokumen: string = '';  
  jenisDokumen: string = '';

  searchResults: any[] = [];
  noResultsFound: boolean = false;

  jenisDokumenList = [
    'Kad Pengenalan Malaysia',
    'Pasport',
    'Kad Pengenalan Polis',
    'Kad Pengenalan Tentera'
  ];

  step = 1;
  currentStep: number = 1;
  steps = [
    { number: 1, title: 'Carian Dokumen', route: '' },
    { number: 2, title: 'Maklumat Kehilangan Dokumen', route: '' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  tindakan(item:any): void {
    console.log('Passing value to Maklumat Kehilangan Dokumen:', item);
    this.router.navigate(['./maklumat-kehilanan-dokumen'], {
      relativeTo: this.route,
      state: {
        data: item,
        currentStep: this.currentStep,
      },
    });
  }

}
