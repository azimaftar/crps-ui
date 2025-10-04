import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import {
  CardModule,
  ButtonModule,
  TableModule,
  ButtonDirective,
  TableDirective,
  ModalModule,
} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilEnvelopeClosed } from '@coreui/icons';
import { ContainerComponent, CardBodyComponent } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import {
  CarianPenjanaanSuratPertukaranService,
  ReqPenjanaanSuratPertukaran,
  RespPenjanaanSuratPertukaran,
} from '../../../../../services/PengurusanRoster/PenjanaanSuratPertukaran/CarianPenjanaanSuratPertukaranService';

@Component({
  selector: 'app-maklumat-carian',
  standalone: true,
  imports: [
    RouterModule,
    ContainerComponent,
    ModalModule,
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    ButtonDirective,
    TableModule,
    TableDirective,
    IconModule,
    CardBodyComponent,
  ],
  templateUrl: './maklumat-carian.component.html',
  styleUrls: [
    '../../../bkp.scss'
  ],
})
export class MaklumatCarianComponent {
  isModalVisible = false;
  private router = inject(Router);
  errorMessage: string = '';
  hasSearched = false;
  searchResults: (RespPenjanaanSuratPertukaran & { bil: number })[] = [];

  constructor(
    private iconSet: IconSetService,
    private carianService: CarianPenjanaanSuratPertukaranService
  ) {
    this.iconSet.icons = { cilEnvelopeClosed };
    this.restoreSearchState();
  }

  private restoreSearchState() {
    const savedFilters = sessionStorage.getItem('searchFilters');
    const savedResults = sessionStorage.getItem('searchResults');
    const savedHasSearched = sessionStorage.getItem('hasSearched');

  if (savedFilters) {
      const parsed = JSON.parse(savedFilters);
      if (parsed.namaPegawai !== undefined && parsed.nomborPerkhidmatan !== undefined) {
        this.filters = parsed;
        // Re-run search if filters exist
        if (parsed.namaPegawai || parsed.nomborPerkhidmatan) {
          this.performSearch();
        }
      }
    }

    if (savedResults) {
      const parsed = JSON.parse(savedResults);
      if (
        Array.isArray(parsed) &&
        parsed.every(
          (item) =>
            item.namaPegawai &&
            item.nomborPerkhidmatan &&
            item.gredJawatan &&
            item.Jawatan &&
            item.bil !== undefined
        )
      ) {
        this.searchResults = parsed.map((item, index) => ({
          ...item,
          bil: item.bil ?? index + 1, // Fallback for bil if not present
        }));
      }
    }

    if (savedHasSearched) {
      this.hasSearched = JSON.parse(savedHasSearched);
    }
  }

  private saveSearchState() {
    sessionStorage.setItem('searchFilters', JSON.stringify(this.filters));
    sessionStorage.setItem('searchResults', JSON.stringify(this.searchResults));
    sessionStorage.setItem('hasSearched', JSON.stringify(this.hasSearched));
  }

  filters: ReqPenjanaanSuratPertukaran = {
    namaPegawai: '',
    nomborPerkhidmatan: '',
  };

  onSearch(form: NgForm) {
    console.log('Search triggered with filters:', this.filters);

    if (form.invalid) {
      form.control.markAllAsTouched();
      this.errorMessage = 'Sila isi semua medan yang diperlukan.';
      this.hasSearched = true;
      this.saveSearchState();
      return;
    }

    this.hasSearched = true;
    this.errorMessage = ''; // Clear error message before making the API call

    const noFiltersApplied =
      !this.filters.namaPegawai && !this.filters.nomborPerkhidmatan;
    if (noFiltersApplied) {
      this.searchResults = [];
      this.showNoDataModal();
      this.saveSearchState();
      return;
    }
    this.performSearch();
  }

  private performSearch() {
    this.carianService.getDataSuratPertukaran(this.filters).subscribe({
      next: (data) => {
        // Add bil field client-side for table display
        this.searchResults = data.map((item, index) => ({
          ...item,
          bil: index + 1,
        }));
        console.log('Search results:', this.searchResults);

        if (this.searchResults.length === 0) {
          this.showNoDataModal();
        }
        this.saveSearchState();
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        this.errorMessage =
          err.status === 500
            ? 'Pelayan mengalami ralat dalaman. Sila cuba lagi kemudian.'
            : 'Gagal mendapatkan data dari pelayan. Sila cuba lagi.';
        this.searchResults = [];
        this.showNoDataModal();
        this.saveSearchState(); // Save state even on error
      },
    });
  }

  onJana(pegawai: any) {
    console.log('Jana for pegawai:', pegawai);
    // Add your jana logic here
  }

  // Reset search
  resetSearch() {
    this.filters = {
      namaPegawai: '',
      nomborPerkhidmatan: '',
    };
    this.searchResults = [];
    this.hasSearched = false;
    this.errorMessage = '';
  }

  // Show modal when no data found
  showNoDataModal() {
    this.isModalVisible = true;
    // Optional: scroll to top if needed
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Close modal
  closeModal() {
    this.isModalVisible = false;
  }

  // Handle modal OK button click
  onModalOk() {
    this.closeModal();
  }

  onDaftar(): void {
    this.router.navigate([
      '/bkp/pengurusan-roaster/penjanaan-surat-pertukaran/maklumat-carian/maklumat-surat-pertukaran',
    ]);
  }
}
