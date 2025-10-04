import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

// Simplified CoreUI imports - only the essential ones that exist
import {
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  CardFooterComponent,
  ButtonDirective,
  BadgeComponent,
  AlertComponent,
  ContainerComponent,
  RowComponent,
  ColComponent,
  TableDirective,
  PaginationComponent,
  PageItemComponent,
  PageLinkDirective
} from '@coreui/angular';

interface RecordData {
  id: number;
  employee: string;
  date: string;
  time: string;
  docNumber: string;
  clientName: string;
  birthDate: string;
  gender: string;
}

@Component({
  selector: 'app-senarai-semakan-dan-tindakan-penyelia',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    ButtonDirective,
    BadgeComponent,
    AlertComponent,
    ContainerComponent,
    RowComponent,
    ColComponent,
    TableDirective,
    PaginationComponent,
    PageItemComponent,
    PageLinkDirective
  ],
  templateUrl: './senarai-semakan-dan-tindakan-penyelia.component.html',
  styleUrls: ['./senarai-semakan-dan-tindakan-penyelia.component.scss']
})
export class SenaraiSemakanDanTindakanPenyeliaComponent {
  
  // Form data
  selectedDocumentType: string = 'Pasport';
  searchQuery: string = 'Kad ABTC';
  
  // Pagination data
  currentPage: number = 1;
  totalPages: number = 3;
  totalRecords: number = 9;
  itemsPerPage: number = 3;
  
  // Selected record
  selectedRecordId: number | null = null;
  
  // All data for pagination
  private allData: RecordData[][] = [
    // Page 1
    [
      {
        id: 1,
        employee: "ILHAM FATINI BINTI AFENDI",
        date: "22/04/2025",
        time: "10:20:36",
        docNumber: "V457885",
        clientName: "DSILVA ROHAN BENEDICT",
        birthDate: "14/11/1980",
        gender: "LELAKI"
      },
      {
        id: 2,
        employee: "ROSLINA BINTI ALI",
        date: "22/04/2025",
        time: "09:42:36",
        docNumber: "V566766",
        clientName: "LIM KE YING",
        birthDate: "11/01/1990",
        gender: "PEREMPUAN"
      },
      {
        id: 3,
        employee: "AHMAD BIN ZUBIR",
        date: "22/04/2025",
        time: "09:20:45",
        docNumber: "A0000002",
        clientName: "MUHD RUSSAINI BIN IDRUS",
        birthDate: "30/03/1998",
        gender: "LELAKI"
      }
    ],
    // Page 2
    [
      {
        id: 4,
        employee: "SITI AMINAH BINTI HASSAN",
        date: "23/04/2025",
        time: "08:15:22",
        docNumber: "V789123",
        clientName: "CHAN WEI MING",
        birthDate: "25/07/1985",
        gender: "PEREMPUAN"
      },
      {
        id: 5,
        employee: "MOHD RIZAL BIN ABDULLAH",
        date: "23/04/2025",
        time: "11:30:15",
        docNumber: "A1234567",
        clientName: "RAJESH KUMAR",
        birthDate: "12/12/1992",
        gender: "LELAKI"
      },
      {
        id: 6,
        employee: "FARIDAH BINTI OMAR",
        date: "23/04/2025",
        time: "14:45:30",
        docNumber: "V456789",
        clientName: "SARAH JOHNSON",
        birthDate: "08/03/1987",
        gender: "PEREMPUAN"
      }
    ],
    // Page 3
    [
      {
        id: 7,
        employee: "HASSAN BIN MAHMUD",
        date: "24/04/2025",
        time: "09:10:45",
        docNumber: "A7654321",
        clientName: "DAVID WONG",
        birthDate: "19/09/1975",
        gender: "LELAKI"
      },
      {
        id: 8,
        employee: "NORA BINTI IBRAHIM",
        date: "24/04/2025",
        time: "13:25:18",
        docNumber: "V987654",
        clientName: "MARIA GONZALEZ",
        birthDate: "03/01/1991",
        gender: "PEREMPUAN"
      },
      {
        id: 9,
        employee: "ZAINAL BIN ABIDIN",
        date: "24/04/2025",
        time: "16:40:12",
        docNumber: "A1111111",
        clientName: "ALEX TAN",
        birthDate: "28/11/1980",
        gender: "LELAKI"
      }
    ]
  ];
  
  // Current page data
  get currentPageData(): RecordData[] {
    return this.allData[this.currentPage - 1] || [];
  }
  
  // Pagination info
  get startRecord(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }
  
  get endRecord(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalRecords);
  }
  
  get isPreviousDisabled(): boolean {
    return this.currentPage === 1;
  }
  
  get isNextDisabled(): boolean {
    return this.currentPage === this.totalPages;
  }
  
  // Document type options
  documentTypes = [
    { value: 'Pasport', label: 'Pasport' },
    { value: 'MyKad', label: 'MyKad' },
    { value: 'Lesen', label: 'Lesen' },
    { value: 'Kad ABTC', label: 'Kad ABTC' }
  ];
  
  constructor(private router: Router,
    private route: ActivatedRoute
  ) {}
  
  // Search functionality
  onSearch(): void {
    console.log('Searching for:', this.searchQuery, 'with document type:', this.selectedDocumentType);
    this.currentPage = 1;
    this.selectedRecordId = null;
  }
  
  onCetakPas(): void {
  // This should work with your lazy loading setup
  this.router.navigate(['../cetak-pas-maklumat'], { relativeTo: this.route });
}

  // Scan document functionality
  onImbasDokumen(): void {
    this.router.navigate(['../imbasan-dokumen-perjalanan'], { relativeTo: this.route });
  }
  
  // Radio button selection
  onRecordSelect(recordId: number): void {
    this.selectedRecordId = recordId;
    console.log('Selected record ID:', recordId);
  }
  
  // Pagination methods
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.selectedRecordId = null;
      console.log('Navigated to page:', page);
    }
  }
  
  goToPreviousPage(): void {
    if (!this.isPreviousDisabled) {
      this.goToPage(this.currentPage - 1);
    }
  }
  
  goToNextPage(): void {
    if (!this.isNextDisabled) {
      this.goToPage(this.currentPage + 1);
    }
  }
  
  // Helper methods
  isPageActive(page: number): boolean {
    return this.currentPage === page;
  }
  
  getGenderDisplayText(gender: string): string {
    return gender === 'LELAKI' ? 'Lelaki' : 'Perempuan';
  }
  
  isRecordSelected(recordId: number): boolean {
    return this.selectedRecordId === recordId;
  }
  
  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  
  getSelectedRecord(): RecordData | null {
    if (!this.selectedRecordId) return null;
    return this.currentPageData.find(record => record.id === this.selectedRecordId) || null;
  }
}