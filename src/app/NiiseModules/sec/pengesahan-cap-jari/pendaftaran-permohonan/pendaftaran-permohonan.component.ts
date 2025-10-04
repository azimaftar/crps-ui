import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  noRujukan: string;
  nama: string;
  warganegara: string;
  status: string;
  tindakan: string;
}

interface SearchCriteria {
  nama: string;
  noRujukan: string;
}

//CHILDREN
// import { MaklumatPemohonComponent } from './maklumat-pemohon/maklumat-pemohon.component';
// import { DokumenSokonganComponent } from './dokumen-sokongan/dokumen-sokongan.component';


@Component({
  selector: 'app-pendaftaran-permohonan',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Added for [(ngModel)]
    ContainerComponent,
    RowComponent,
    ColComponent,
    FormModule,
    ButtonModule,
    TableModule,
    TableDirective,
    ProgressFlowComponent,
    // MaklumatPemohonComponent,
    // DokumenSokonganComponent,

    // BreadcrumbPemerhatianComponent, 
  ],
  templateUrl: './pendaftaran-permohonan.component.html',
  styleUrls: ['./pendaftaran-permohonan.component.scss']

  
})

export class PendaftaranPermohonanComponent {

  show: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  private stepRoutes = [
    '/sec/pengesahan-cap-jari/pendaftaran-permohonan',
    '/sec/pengesahan-cap-jari/pendaftaran-permohonan/maklumat-pemohon',
    '/sec/pengesahan-cap-jari/pendaftaran-permohonan/dokumen-sokongan',
  ];

  step = 1;
  searchCriteria: SearchCriteria = {
    nama: '',
    noRujukan: '',
  };

  showTable = false;
  documents: DocumentData[] = [];
  currentPage = 1;
  totalPages = 1;

  // Mock data for demonstration
  private mockDocuments: DocumentData[] = [
    {
      noRujukan: '101',
      nama:  'Adib bin Fahmi',
      warganegara: 'Malaysia',
      status: 'Aktif',
      tindakan: 'Buka',
    },

  ];

  onSubmit(): void {
    // Simulate search functionality
    this.show = true;
  
  // Navigate to a new page (e.g., 'new-page')
  this.router.navigate(['/sec/pengesahan-cap-jari/pendaftaran-permohonan/maklumat-pemohon']);
  }

  onSearch(): void {
    // Simulate search functionality
    this.showTable = true;

    // Filter documents based on search criteria
    this.documents = this.mockDocuments.filter((doc) => {
      const matchesNama =
        !this.searchCriteria.nama ||
        doc.nama
          .toLowerCase()
          .includes(this.searchCriteria.nama.toLowerCase());
      const matchesNoRujukan =
        !this.searchCriteria.noRujukan ||
        doc.noRujukan
          .toLowerCase()
          .includes(this.searchCriteria.noRujukan.toLowerCase());

      return matchesNama && matchesNoRujukan;
    });

    // Reset pagination
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.documents.length / 10) || 1;
  }

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


