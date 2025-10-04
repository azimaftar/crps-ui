
import { Component, inject, Pipe, PipeTransform } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarianVaksinService } from './carian-vaksin.service';
import { NgForOf, NgIf } from '@angular/common';
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
import { NavigationFlowComponent } from '../navigation-flow/navigation-flow.component';
import { DaftarVaksinComponent } from '../daftar-vaksin/daftar-vaksin.component';
@Component({
  selector: 'app-carian-vaksin',
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
    NavigationFlowComponent,
    DaftarVaksinComponent,
    NgIf,
    NgForOf,
    NgFor,
  ],
  templateUrl: './carian-vaksin.component.html',
  styleUrls: [
    '../../../bkp.scss'
  ],
})
export class CarianVaksinComponent {

  // step = 1;
  // stepsLength = 2;    // total steps (just a number)
  

  constructor(
  private iconSet: IconSetService,
  private vaksinService: CarianVaksinService,
  private router: Router
) {
  this.iconSet.icons = { cilEnvelopeClosed };
}

  //For Kemaskini with Vaksin Name
  goToUpdate(vaccName: string) {
    this.router.navigate(['bkp/pengurusan-vaksin/daftar-kemaskini-vaksin/carian-vaksin/kemaskini-vaksin', vaccName]);
  }

  formatPrice(value: number): string {
    if (value == null) return '';
    // Separate integer and decimal parts
    const parts = value.toFixed(2).split('.');
    const integerPart = Number(parts[0]).toLocaleString('fr-FR'); // gives space separator
    const decimalPart = parts[1];
    // Only show decimal if it's not "00"
    return decimalPart === '00' ? integerPart : `${integerPart}.${decimalPart}`;
  }



  // nextStep() {
  // if (this.step < 2) {
  //   this.step++;
  // }
  // }

  // prevStep() {
  //   if (this.step > 1) {
  //     this.step--;
  //   }
  // }

  filters = {
    namaVaksin: '',
    tahunVaksin: '',
  
  };

  // Search results
  searchResults: any[] = [];
  hasSearched = false; // Track if search has been performed
  isModalVisible = false;

  onSearch() {
    console.log('Search triggered with filters:', this.filters);

    const noFiltersApplied =
      !this.filters.namaVaksin && !this.filters.tahunVaksin;

    if (noFiltersApplied) {
      this.searchResults = [];
      this.hasSearched = false;
      this.showNoDataModal();
      return;
    }

    this.hasSearched = true;
    this.performSearch();
  }


  private performSearch() {
  this.vaksinService.getMaklumatCarianRekod(
    this.filters.namaVaksin,
    this.filters.tahunVaksin
  ).subscribe({
    next: (res) => {
      this.searchResults = res.data; 
      console.log('Search results:', this.searchResults);

      if (this.searchResults.length === 0) {
        this.showNoDataModal();
      }
    },
    error: (err) => {
      console.error('Error fetching data:', err);
      this.searchResults = [];
      this.showNoDataModal();
    }
  });
  }

  resetSearch() {
    this.filters = {
      namaVaksin: '',
      tahunVaksin: '',
    };
    this.searchResults = [];
    this.hasSearched = false;
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

  onSuccessModalOk() {
    this.closeModal();
  }
  
}
