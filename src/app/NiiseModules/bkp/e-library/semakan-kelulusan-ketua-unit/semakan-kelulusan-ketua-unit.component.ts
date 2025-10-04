import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ELibraryService, CarianRequest, CarianResponse } from '../../../../services/e-library/eLibrary.service';
import {
  BorderDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  RowComponent,
  ContainerComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
} from '@coreui/angular';

interface Document {
  uid: string;          // Changed from id: number
  namaDokumen: string;
  nomborDokumen: string;
  tahun: string;
  status: string;       // from backend
  folderName: string;   // from backend
  staffId: string;      // from backend
  description?: string;
}

@Component({
  selector: 'app-semakan-kelulusan-ketua-unit',
  templateUrl: './semakan-kelulusan-ketua-unit.component.html',
  // styleUrls: ['./semakan-kelulusan-ketua-unit.component.scss'],
  styleUrls: ['../../bkp.scss'],
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    CardComponent,
    BorderDirective,
    CardHeaderComponent,
    CardBodyComponent,
    CardTitleDirective,
    CardTextDirective,
    ButtonDirective,
    ContainerComponent,
    DropdownComponent,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class SemakanKelulusanKetuaUnitComponent {
  searchForm: FormGroup;   // Reactive form
  searchResults: Document[] = [];
  showNoResults: boolean = false;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private eLibraryService: ELibraryService
  ) {
    // Initialize form
    this.searchForm = this.fb.group({
      namaDokumen: [''],
    });
  }

 // Stepper props
  currentStep = 1;
  steps = [
    { number: 1, title: 'Semak Kelulusan Ketua Unit', route: 'bkp/e-library/semakan-kelulusan-ketua-unit' },
    { number: 2, title: 'Status Kelulusan', route: 'bkp/e-library/semakan-kelulusan-ketua-unit/kelulusan-status' },
    // { number: 3, title: 'Maklumat Terperinci', route: '' },
  ];

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

    navigateTo(step: any) {
    this.currentStep = step.number;
    if (step.route) {
      this.router.navigate([step.route]);
    }
  }
  //end of stepper

  onSearch(): void {
  this.isLoading = true;
  this.showNoResults = false;
  this.searchResults = [];

  // Prepare search request
  const searchRequest: CarianRequest = {
    namaDokumen: this.searchForm.value.namaDokumen || undefined,
    nomborDokumen: this.searchForm.value.nomborDokumen || undefined,
    tahun: this.searchForm.value.tahun || undefined
  };

  // Call backend API
  this.eLibraryService.carianDokumen(searchRequest).subscribe({
    next: (response: CarianResponse[]) => {
      this.isLoading = false;
      
      // Map backend response to your Document interface
      this.searchResults = response.map(item => ({
        uid: item.uid,
        namaDokumen: item.namaDokumen,
        nomborDokumen: item.uid, // Using uid as nomborDokumen since backend dont have this field
        tahun: item.tahun,
        status: item.status,
        folderName: item.folderName,
        staffId: item.staffId,
        description: `Status: ${item.status}, Folder: ${item.folderName}`
      }));

      if (this.searchResults.length === 0) {
        this.showNoResults = true;
      }
    },
    error: (error) => {
      this.isLoading = false;
      this.showNoResults = true;
      console.error('Search error:', error);
      alert('Gagal untuk cari dokumen. Sila cuba lagi.');
    }
  });
}

  onPilih(uid: string): void {
  console.log('Navigating to kelulusan-status for document:', uid);
  
  // Navigate to kelulusan-status page with document ID as route parameter
  this.router.navigate(['bkp/e-library/semakan-kelulusan-ketua-unit/kelulusan-status', uid]);
}
  
  onReset(): void {
    this.searchForm.reset();
    this.searchResults = [];
    this.showNoResults = false;
  }
}
