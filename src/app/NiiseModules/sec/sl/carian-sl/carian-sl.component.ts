import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CardModule,
  GridModule,
  NavModule,
  ModalModule,
  ButtonModule,
  ColComponent,
  RowComponent,
  CardComponent,
} from '@coreui/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IconDirective } from '@coreui/icons-angular';
import { RouterModule } from '@angular/router';
import {apiConfig} from "../../../../api.config";
@Component({
  selector: 'app-carian-sl',
  templateUrl: './carian-sl.component.html',
  styleUrls: [
    '../sl.component.scss'
  ],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    GridModule,
    NavModule,
    ModalModule,
    ButtonModule,
    ColComponent,
    RowComponent,
    CardComponent,
    IconDirective,
    RouterModule,
  ],
})
export class CarianSlComponent implements OnInit {
  pageTitle = 'Carian Subjek';

  private _selectedCategory = '';

  kpno = '';
  name = '';
  birthDate = '';
  selectedNationality = '';
  noRujukanPermohonan = '';
  noDokumen = '';

  searchResults: any[] = [];
  noResultsFound: boolean = false;

  noDokumenDisabled = false;
  borderInputsDisabled = false;

  private apiUrl = apiConfig.apiUrlSec; // backend endpoint

  // Stepper props
  currentStep = 1;
  steps = [
    { number: 1, title: 'Carian & Senarai Subjek', route: '/sec/sl/carian-sl' },
    { number: 2, title: 'Maklumat Subjek', route: '' },
    { number: 3, title: 'Maklumat Terperinci', route: '' },
  ];

  categories = [
    'Warganegara/Penduduk Tetap',
    'Warga Asing',
    'No Rujukan Permohonan',
  ];

  nationalities = [
    'Malaysia', 'Bangladesh', 'Brunei', 'Cambodia', 'Filipina', 'India',
    'Indonesia', 'Laos', 'Maldives', 'Myanmar', 'Nepal', 'Pakistan',
    'Singapura', 'Sri Lanka', 'Thailand', 'Vietnam',
  ];

  onNoDokumenChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.borderInputsDisabled = !!value.trim();
  }

  onBorderInputChange() {
    // If any of the border inputs has a value, disable No Dokumen
    if (this.name?.trim() || this.birthDate || this.selectedNationality) {
      this.noDokumenDisabled = true;
    } else {
      this.noDokumenDisabled = false;
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  get selectedCategory(): string {
    return this._selectedCategory;
  }
  set selectedCategory(value: string) {
    this._selectedCategory = value;
    this.resetFormFields();
  }

  resetFormFields(): void {
    this.name = '';
    this.birthDate = '';
    this.selectedNationality = '';
    this.kpno = '';
    this.noDokumen = '';
    this.noRujukanPermohonan = '';
    this.searchResults = [];
    this.noResultsFound = false;
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }

  enforce12DigitLimit(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '').slice(0, 12);
    this.kpno = input.value;
  }

  onSearch(): void {
    if (!this.selectedCategory) {
      return this.showError('Sila pilih kategori carian.');
    }

    let payload: any = {};

    switch (this.selectedCategory) {
      case 'Warganegara/Penduduk Tetap':
        if (!this.kpno || this.kpno.length !== 12) {
          return this.showError('Sila masukkan No Pengenalan yang sah (12 digit).');
        }
        payload = { kpno: this.kpno };
        break;

      case 'Warga Asing':
        if (this.noDokumen) {
          payload = { noDokumen: this.noDokumen };
        } else if (this.name && this.selectedNationality && this.birthDate) {
          payload = {
            name: this.name,
            nationality: this.selectedNationality,
            birthDate: this.birthDate
          };
        } else {
          return this.showError('Sila masukkan No Dokumen atau Nama, Warganegara dan Tarikh Lahir lengkap.');
        }
        break;

      case 'No Rujukan Permohonan':
        if (!this.noRujukanPermohonan) {
          return this.showError('Sila masukkan No Rujukan Permohonan.');
        }
        payload = { noRujukanPermohonan: this.noRujukanPermohonan };
        break;

      default:
        return this.showError('Kategori carian tidak sah.');
    }

    const params = new HttpParams({ fromObject: payload });

    this.http.get<any[]>(this.apiUrl+'/getsemakSL', { params })
      .subscribe({
        next: (results) => {
          this.searchResults = results;
          this.currentStep = 2;
          this.noResultsFound = results.length === 0;
        },
        error: (err) => {
          console.error('Search API error:', err);
          this.showError('Ralat semasa mencari data.');
          this.searchResults = [];
          this.noResultsFound = true;
        }
      });
  }

  private showError(message: string): void {
    alert(message);
  }

  getApplicationTypeLabel(value: number): string {
    const map: { [key: number]: string } = {
      0: 'Baru',
      1: 'Aktif'
    };
    return map[value] ?? 'Unknown';
  }

  isActive(item: any): boolean {
    return Number(item.t011ApplicationType) === 1;
  }

  isNew(item: any): boolean {
    return Number(item.t011ApplicationType) === 0;
  }

  onRowAction(item: any): void {
    console.log('Selected Subject:', item);
    this.router.navigate(['/sec/sl/papar-sl'], {
      relativeTo: this.route,
      state: {
        data: item,
        currentStep: this.currentStep,
        pageTitle: this.pageTitle,
      },
    });
  }

  lupus(item:any): void {
    console.log('Passing value to Lupus:', item);
    this.router.navigate(['lupus-sl'], {
      relativeTo: this.route,
      state: {
        data: item,
        currentStep: this.currentStep,
        pageTitle: this.pageTitle,
      },
    });
  }
}
