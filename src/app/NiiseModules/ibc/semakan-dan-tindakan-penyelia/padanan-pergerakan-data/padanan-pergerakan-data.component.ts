import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// CoreUI Imports
import { 
  CardModule,
  GridModule,
  ButtonModule,
  BadgeModule,
  ButtonGroupModule,
  FormModule,
  // FormSelectModule,
  // FormControlModule,
  // RowModule,
  // ColModule
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

interface FilterCriteria {
  platMasukKeluar: string;
  noVessel: string;
  tarikhPergerakan: string;
  masaPergerakan: string;
  jenisPergerakan: string;
  noPassport: string;
  jadualPersinggahan: string;
  jenisPersinggahan: string;
  jadualPenerbangan: string;
  jadualPemeriksaan: string;
}

@Component({
  selector: 'app-padanan-pergerakan-data',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    GridModule,
    ButtonModule,
    BadgeModule,
    ButtonGroupModule,
    FormModule,
    // FormSelectModule,
    // FormControlModule,
    // RowModule,
    // ColModule
  ],
  templateUrl: './padanan-pergerakan-data.component.html',
  styleUrl: './padanan-pergerakan-data.component.scss'
})
export class PadananPergerakanDataComponent implements OnInit {
  maxDate: string = ''; // Initialize with empty string

ngOnInit() {
  this.setMaxDate();
}

setMaxDate() {
  const today = new Date();
  this.maxDate = today.toISOString().split('T')[0]; // YYYY-MM-DD
}

  selectedRow: number | null = null;
  currentPage = 1;
  itemsPerPage = 10;
  
  // Filter state
  showFilters = true;
  isSearching = false;
  
  // Filter form data
  filterCriteria: FilterCriteria = {
    platMasukKeluar: 'HLIA Terminal 1',
    noVessel: 'OD1007',
    tarikhPergerakan: '20 Januari 2024',
    masaPergerakan: '18:05:27',
    jenisPergerakan: 'Semua Pemeriksaan',
    noPassport: 'OD1007',
    jadualPersinggahan: 'Kebesan',
    jenisPersinggahan: 'Semua Pemeriksaan',
    jadualPenerbangan: 'Ketibaan',
    jadualPemeriksaan: 'Selesai Pemeriksaan',
  };

  // Dropdown options
  platMasukKeluarOptions = [
    'HLIA Terminal 1',
    'HLIA Terminal 2',
    'HLIA Terminal 3'
  ];

  noVesselOptions = [
    'OD1007',
    'OD1008',
    'OD1009'
  ];

  jadualPenerbanganOptions = [
    'Ketibaan',
    'Perlepasan',
  ];

  jadualPemeriksaanOptions = [
    'Selesai Pemeriksaan',
    'Belum Selesai Pemeriksaan',
  ];

  jenisPergerakanOptions = [
    'Semua Pemeriksaan',
    'Belum Selesai Pemeriksaan',
    'Selesai Pemeriksaan'
  ];

  jadualPersinggahanOptions = [
    'Kebesan',
    'Penerbangan',
    'Lain-lain'
  ];

  jenisPersinggahanOptions = [
    'Semua Pemeriksaan',
    'Belum Selesai Pemeriksaan', 
    'Selesai Pemeriksaan'
  ];
  
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
      this.selectedRow = null;
    }
  }

  /**
   * Navigate to next page
   */
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.selectedRow = null;
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
   * Handle search button click - hide filters and show disabled fields with table
   */
  onSemak(): void {
    // Simulate search/loading
    this.isSearching = true;
    
    // Hide filters after a brief delay to simulate processing
    setTimeout(() => {
      this.showFilters = false;
      this.isSearching = false;
    }, 500);
  }

  /**
   * Handle "Set Semula" (Reset) button click
   */
  onSetSemula(): void {
    // Reset filter criteria to default values
    this.filterCriteria = {
      platMasukKeluar: 'HLIA Terminal 1',
      noVessel: 'OD1007',
      tarikhPergerakan: '20 Januari 2024',
      masaPergerakan: '18:05:27',
      jenisPergerakan: 'Semua Pemeriksaan',
      noPassport: 'OD1007',
      jadualPersinggahan: 'Kebesan',
      jenisPersinggahan: 'Semua Pemeriksaan',
      jadualPenerbangan: 'Ketibaan',
      jadualPemeriksaan: 'Selesai Pemeriksaan'
    };
  }

  /**
   * Show filters again (for new search)
   */
  showFiltersAgain(): void {
    this.showFilters = true;
    this.selectedRow = null;
    this.currentPage = 1;
  }

  /**
   * Check if all required fields are filled
   */
  isFormValid(): boolean {
    return !!(
      this.filterCriteria.platMasukKeluar &&
      this.filterCriteria.noVessel &&
      this.filterCriteria.tarikhPergerakan &&
      this.filterCriteria.masaPergerakan &&
      this.filterCriteria.jenisPergerakan
    );
  }

  /**
   * Handle close button click
   */
  onClose(): void {
    console.log('Close button clicked');
    // You can emit an event or navigate away
  }
}