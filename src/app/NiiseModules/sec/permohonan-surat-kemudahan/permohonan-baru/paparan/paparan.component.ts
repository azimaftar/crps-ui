import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PermohonanService } from '../../../../../services/permohonan.service';

// CoreUI Imports (keep your imports as they are)
import {
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective
} from '@coreui/angular';

@Component({
  selector: 'app-paparan',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective
  ],
  templateUrl: './paparan.component.html',
  styleUrls: [
  '../../permohonan-surat-kemudahan.component.scss'
]

})
export class PaparanComponent implements OnInit {

  kpNo: string = '';
  mode: 'papar' | 'kemaskini' = 'papar';
  isEditable: boolean = false;

  // For template binding
  selectedCategory: string = '';
  currentStep: number = 2;
  steps: { number: number; title: string; route: string }[] = [
    { number: 1, title: 'Carian & Senarai Sabjek', route: '/sec/permohonan-surat-kemudahan/permohonan-baru' },
    { number: 2, title: 'Maklumat Pemohon', route: '/sec/permohonan-surat-kemudahan/paparan' },
    { number: 3, title: 'Dokumen Sokongan', route: '/sec/permohonan-surat-kemudahan/dokumen-sokongan' }
  ];

  formData: any = {
    noKP: '',
    warganegara: '',
    name: '',
    address1: '',
    address2: '',
    address3: '',
    postcode: '',
    city: '',
    state: '',
    purpose: '',
    email: '',
    docFile: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private permohonanService: PermohonanService
  ) { }

  ngOnInit(): void {
    // Get data passed from previous page
    const navState = history.state;
    if (navState.kpNo) {
      this.kpNo = navState.kpNo;
    }
    if (navState.mode) {
      this.mode = navState.mode;
    }
    if (navState.selectedCategory) {
      this.selectedCategory = navState.selectedCategory;
    }

    // Determine editability
    this.isEditable = this.mode === 'kemaskini';

    // Load data from backend
    if (this.kpNo) {
      this.loadData(this.kpNo);
    }
  }

  loadData(kpNo: string) {
    this.permohonanService.getPendingPermohonan(kpNo).subscribe({
      next: (res) => {
        this.formData = {
          noKP: res.kpNo || '',
          warganegara: res.nationality || '',
          name: res.name || '',
          address1: res.address1 || '',
          address2: res.address2 || '',
          address3: res.address3 || '',
          postcode: res.postcode || '',
          city: res.city || '',
          state: res.state || '',
          purpose: res.purpose || '',
          email: res.email || '',
          docFile: res.docFile || ''
        };
      },
      error: (err) => {
        console.error('Error fetching data', err);
      }
    });
  }


  getDocumentName(docId: number): string {
    if (docId === 1) return this.formData.docFile || 'Tiada fail';
    if (docId === 2) return this.formData.docFile || 'Tiada fail';
    return 'Tiada fail';
  }

  getDocumentFormat(docId: number): string {
    if (this.formData.docFile) {
      const parts = this.formData.docFile.split('.');
      return parts.length > 1 ? parts.pop()?.toUpperCase() || '' : '';
    }
    return '';
  }

  viewDocument(docId: number) {
    console.log('View document ID:', docId);
    // TODO: Implement document viewer / download
  }

  goBack(): void {
    this.router.navigate(['/sec/permohonan-surat-kemudahan/permohonan-baru']);
  }
}