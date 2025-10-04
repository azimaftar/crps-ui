import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// CoreUI Imports
import { 
  CardModule,
  GridModule,
  ButtonModule,
  BadgeModule,
  ButtonGroupModule
} from '@coreui/angular';

interface Traveler {
  id: number;
  nama: string;
  tarikh: string;
  noDokumen: string;
  tarikhLahir: string;
  jantina: string;
  status: string;
}

@Component({
  selector: 'app-padanan-data-apps',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    ButtonModule,
    BadgeModule,
    ButtonGroupModule
  ],
  templateUrl: './padanan-data-apps.component.html',
  styleUrl: './padanan-data-apps.component.scss'
})
export class PadananDataAppsComponent {
  selectedRow: number | null = null;
  currentPage = 1;
  itemsPerPage = 3; // Show 3 items per page like in the original design
  
  // All dummy data (15 people)
  allTravelers: Traveler[] = [
    {
      id: 1,
      nama: 'AHMAD FATHI BINTI AFENDI',
      tarikh: '22/04/2025',
      noDokumen: 'V457885',
      tarikhLahir: '14/11/1989',
      jantina: 'LELAKI',
      status: 'LELAKI'
    },
    {
      id: 2,
      nama: 'ROSLINA BINTI ALI',
      tarikh: '22/04/2025',
      noDokumen: 'V566766',
      tarikhLahir: '11/01/1990',
      jantina: 'PEREMPUAN',
      status: 'PEREMPUAN'
    },
    {
      id: 3,
      nama: 'AHMAD BIN ZUBIR',
      tarikh: '22/04/2025',
      noDokumen: 'A0000002',
      tarikhLahir: '30/03/1968',
      jantina: 'LELAKI',
      status: 'LELAKI'
    },
    {
      id: 4,
      nama: 'SITI AMINAH BINTI HASSAN',
      tarikh: '23/04/2025',
      noDokumen: 'V789123',
      tarikhLahir: '25/07/1985',
      jantina: 'PEREMPUAN',
      status: 'PEREMPUAN'
    },
    {
      id: 5,
      nama: 'MOHD RIZAL BIN ABDULLAH',
      tarikh: '23/04/2025',
      noDokumen: 'A1234567',
      tarikhLahir: '12/12/1992',
      jantina: 'LELAKI',
      status: 'LELAKI'
    },
    {
      id: 6,
      nama: 'FARIDAH BINTI OMAR',
      tarikh: '24/04/2025',
      noDokumen: 'V456789',
      tarikhLahir: '08/03/1987',
      jantina: 'PEREMPUAN',
      status: 'PEREMPUAN'
    },
    {
      id: 7,
      nama: 'HASSAN BIN MAHMUD',
      tarikh: '24/04/2025',
      noDokumen: 'A7654321',
      tarikhLahir: '19/09/1975',
      jantina: 'LELAKI',
      status: 'LELAKI'
    },
    {
      id: 8,
      nama: 'NORA BINTI IBRAHIM',
      tarikh: '25/04/2025',
      noDokumen: 'V987654',
      tarikhLahir: '03/01/1991',
      jantina: 'PEREMPUAN',
      status: 'PEREMPUAN'
    },
    {
      id: 9,
      nama: 'ZAINAL BIN ABIDIN',
      tarikh: '25/04/2025',
      noDokumen: 'A1111111',
      tarikhLahir: '28/11/1980',
      jantina: 'LELAKI',
      status: 'LELAKI'
    },
    {
      id: 10,
      nama: 'MARYAM BINTI AHMAD',
      tarikh: '26/04/2025',
      noDokumen: 'V333444',
      tarikhLahir: '15/05/1993',
      jantina: 'PEREMPUAN',
      status: 'PEREMPUAN'
    },
    {
      id: 11,
      nama: 'ISMAIL BIN RAHMAN',
      tarikh: '26/04/2025',
      noDokumen: 'A2222222',
      tarikhLahir: '07/08/1988',
      jantina: 'LELAKI',
      status: 'LELAKI'
    },
    {
      id: 12,
      nama: 'KHADIJAH BINTI YUSOF',
      tarikh: '27/04/2025',
      noDokumen: 'V555666',
      tarikhLahir: '22/02/1986',
      jantina: 'PEREMPUAN',
      status: 'PEREMPUAN'
    },
    {
      id: 13,
      nama: 'ABDUL RAHMAN BIN SAID',
      tarikh: '27/04/2025',
      noDokumen: 'A3333333',
      tarikhLahir: '13/10/1979',
      jantina: 'LELAKI',
      status: 'LELAKI'
    },
    {
      id: 14,
      nama: 'ROHANI BINTI MOHD',
      tarikh: '28/04/2025',
      noDokumen: 'V777888',
      tarikhLahir: '04/06/1994',
      jantina: 'PEREMPUAN',
      status: 'PEREMPUAN'
    },
    {
      id: 15,
      nama: 'AZMAN BIN HASHIM',
      tarikh: '28/04/2025',
      noDokumen: 'A4444444',
      tarikhLahir: '17/04/1983',
      jantina: 'LELAKI',
      status: 'LELAKI'
    }
  ];

  constructor() {}

  // Computed properties
  get totalPages(): number {
    return Math.ceil(this.allTravelers.length / this.itemsPerPage);
  }

  get travelers(): Traveler[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.allTravelers.slice(startIndex, endIndex);
  }

  get totalItems(): number {
    return this.allTravelers.length;
  }

  get startItem(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endItem(): number {
    const end = this.currentPage * this.itemsPerPage;
    return end > this.totalItems ? this.totalItems : end;
  }

  /**
   * Get status class for styling
   */
  getStatusClass(status: string): string {
    return status === 'LELAKI' ? 'status-male' : 'status-female';
  }

  /**
   * Get CoreUI badge color based on status
   */
  getStatusColor(status: string): string {
    return status === 'LELAKI' ? 'success' : 'warning';
  }

  /**
   * Navigate to previous page
   */
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.selectedRow = null; // Clear selection when changing pages
    }
  }

  /**
   * Navigate to next page
   */
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.selectedRow = null; // Clear selection when changing pages
    }
  }

  /**
   * Go to specific page
   */
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.selectedRow = null;
    }
  }

  /**
   * Select/deselect table row
   */
  selectRow(index: number): void {
    this.selectedRow = this.selectedRow === index ? null : index;
  }

  /**
   * Get selected traveler data
   */
  getSelectedTraveler(): Traveler | null {
    if (this.selectedRow !== null) {
      return this.travelers[this.selectedRow];
    }
    return null;
  }

  /**
   * Check if any row is selected
   */
  hasSelection(): boolean {
    return this.selectedRow !== null;
  }

  /**
   * Clear current selection
   */
  clearSelection(): void {
    this.selectedRow = null;
  }

  /**
   * Get pagination info string
   */
  getPaginationInfo(): string {
    return `Showing ${this.startItem} to ${this.endItem} of ${this.totalItems} entries`;
  }

  /**
   * Handle close button click
   */
  onClose(): void {
    // Implement close functionality
    console.log('Close button clicked');
    // You can emit an event or navigate away
  }
}