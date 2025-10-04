import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  FormModule,
  ButtonModule,
  TableModule,
  TableDirective,
} from '@coreui/angular';
import { Router } from '@angular/router';
import { ProgressFlowComponent } from './progress-flow/progress-flow.component';

interface DocumentData {
  noDokumen: string;
  negaraPengeluar: string;
  tarikhTamat: string;
  jenisDokumen: string;
  namaPemohon: string;
  tarikhLahir: string;
  noPengenalan: string;
  tindakan: string;
}

interface SearchCriteria {
  noDokumen: string;
  jenisDokumen: string;
}

@Component({
  selector: 'app-kemasukan-dokumen-hilang',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ContainerComponent,
    RowComponent,
    ColComponent,
    FormModule,
    ButtonModule,
    TableModule,
    TableDirective,
    ProgressFlowComponent,
  ],
  templateUrl: './kemasukan-dokumen-hilang.component.html',
  styleUrls: ['../keputusan-permohonan-jkrim.component.scss']
})
export class KemasukanDokumenHilangComponent {
  private stepRoutes = [
    '/sec/sl/kemasukan-dokumen-hilang',
    '/sec/sl/kemasukan-dokumen-hilang/maklumat-kehilangan-dokumen',
  ];

  step = 1;
  searchCriteria: SearchCriteria = {
    noDokumen: '',
    jenisDokumen: '',
  };

  showTable = false;
  documents: DocumentData[] = [];
  currentPage = 1;
  totalPages = 1;

  // Mock data for demonstration
  private mockDocuments: DocumentData[] = [
    {
      noDokumen: 'DOC001',
      negaraPengeluar: 'Malaysia',
      tarikhTamat: '2025-12-31',
      jenisDokumen: 'Passport',
      namaPemohon: 'Ahmad Bin Ali',
      tarikhLahir: '1990-01-15',
      noPengenalan: '900115-01-1234',
      tindakan: 'Aktif',
    },
    {
      noDokumen: 'DOC002',
      negaraPengeluar: 'Singapore',
      tarikhTamat: '2026-06-30',
      jenisDokumen: 'Visa',
      namaPemohon: 'Siti Binti Rahman',
      tarikhLahir: '1985-03-22',
      noPengenalan: '850322-05-5678',
      tindakan: 'Pending',
    },
    {
      noDokumen: 'DOC003',
      negaraPengeluar: 'Indonesia',
      tarikhTamat: '2024-09-15',
      jenisDokumen: 'Work Permit',
      namaPemohon: 'Muhammad Bin Hassan',
      tarikhLahir: '1988-07-10',
      noPengenalan: '880710-03-9012',
      tindakan: 'Expired',
    },
  ];

  onSearch(): void {
    // Simulate search functionality
    this.showTable = true;

    // Filter documents based on search criteria
    this.documents = this.mockDocuments.filter((doc) => {
      const matchesNoDokumen =
        !this.searchCriteria.noDokumen ||
        doc.noDokumen
          .toLowerCase()
          .includes(this.searchCriteria.noDokumen.toLowerCase());
      const matchesJenisDokumen =
        !this.searchCriteria.jenisDokumen ||
        doc.jenisDokumen
          .toLowerCase()
          .includes(this.searchCriteria.jenisDokumen.toLowerCase());

      return matchesNoDokumen && matchesJenisDokumen;
    });

    // Reset pagination
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.documents.length / 10) || 1;
  }

  constructor(private router: Router) {}

  onPageChange(page: number): void {
    this.currentPage = page;
    // Here you would typically fetch new data based on the page
    console.log(`Page changed to: ${page}`);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  resetForm(): void {}

  ngOnInit() {
    this.syncStepWithRoute();
  }

  onStepChange(newStep: number) {
    this.step = newStep;
    this.navigateToStep();
  }

  private navigateToStep(): void {
    this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
      window.scrollTo(0, 0);
    });
  }

  previousStep(): void {
    if (this.step > 1) {
      this.step--;
      this.router.navigate([this.stepRoutes[this.step - 1]]).then(() => {
        window.scrollTo(0, 0);
      });
    }
  }

  nextStep(): void {
    if (this.step < this.stepRoutes.length) {
      this.router.navigate([this.stepRoutes[this.step]]).then(() => {
        this.step++;
      });
    }
  }

  private syncStepWithRoute(): void {
    const currentPath = this.router.url.split('?')[0]; // Ignore query params
    const currentStep = this.stepRoutes.indexOf(currentPath);
    this.step = currentStep >= 0 ? currentStep + 1 : 1;
  }
}
