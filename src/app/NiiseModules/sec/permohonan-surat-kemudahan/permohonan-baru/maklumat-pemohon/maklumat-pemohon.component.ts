import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
// CoreUI Imports
import {
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  CardModule,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,
  GridModule
} from '@coreui/angular';
import {apiConfig} from "../../../../../api.config";

@Component({
  selector: 'app-dokumen-sokongan',
  imports: [CommonModule,
      ReactiveFormsModule,
      RouterModule,
      CardComponent,
      CardBodyComponent,
      RowComponent,
      ColComponent,
      ButtonDirective,
      CommonModule,
      FormsModule,
      CardModule,
      GridModule,
      ModalComponent,
      ModalBodyComponent,
      ModalFooterComponent,
      ],
  templateUrl: './maklumat-pemohon.component.html',
  styleUrls: [
  '../../permohonan-surat-kemudahan.component.scss'
]
})
export class MaklumatPemohonComponent implements OnInit {

  // --- UI / state ---
  selectedCategory: string = '';
  searchTerm: string = '';
  searchResults: any[] = []; // kept for compatibility, but the main data goes into formData
  isLoading: boolean = false;

  // Form data object (populated from API)
  formData = {
    nama: '',
    alamat: ['', '', ''],
    poskod: '',
    bandar: '',
    negeri: '',
    tujuanPermohonan: '',  // Added for validation
    emel: ''               // Added for validation
  };

  // Current selected index (kept for UI compatibility)
  searchIC: string = '';
  recordFound: boolean = false;
  selectedIndex: number = -1;

  public isModalVisible: boolean = false;
  public modalVisible = false;
  public modalMessage = 'Tiada rekod dijumpai';
  public searchNoKP = '';

  // Backend base URL - adjust if needed
  // MaklumatSL endpoint (use MaklumatSL_5_1 as discussed). If you want SemakStatusSL, change accordingly.
  private readonly MAKLUMAT_SL_URL = apiConfig.apiUrlSec+'/MaklumatSL_5_1';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.initializeComponent();
  }

  private initializeComponent(): void {
    this.searchResults = [];
    this.selectedCategory = '';
    this.searchTerm = '';
    console.log('Maklumat Pemohon component initialized');
  }

  // -------------------------
  // Modal helpers (unchanged)
  // -------------------------
  showModal(messageOrTitle: string, message?: string): void {
    if (message) {
      this.modalMessage = message;
    } else {
      this.modalMessage = messageOrTitle;
    }
    this.modalVisible = true;
  }

  closeModal(): void {
    this.modalVisible = false;
  }

  onModalOk(): void {
    this.closeModal();
    if (!this.recordFound) {
      this.searchIC = '';
    }
  }

  // -------------------------
  // API call: fetch Maklumat by IC (kpNo)
  // -------------------------
  private fetchMaklumatByKp(kpNo: string): Promise<any> {
    const params = new HttpParams()
      .set('searchCat', this.selectedCategory ?? '')
      .set('kpNo', kpNo);

    // return a Promise for easier handling from older code style
    return this.http.get(this.MAKLUMAT_SL_URL, { params }).toPromise();
  }

  // Method that triggers search and loads record (replaces sampleData logic)
  async searchByIC() {
    const cleanIC = this.searchIC?.trim();
    if (!cleanIC) {
      this.showModal('Medan mandatori diperlukan');
      return;
    }

    this.isLoading = true;
    this.recordFound = false;

    try {
      const response: any = await this.fetchMaklumatByKp(cleanIC);

      // If API returns 200 with object -> map to formData
      if (response) {
        this.mapApiResponseToForm(response);
        this.recordFound = true;
        this.selectedIndex = 0;
        this.searchResults = [response]; // keep for compatibility with any table UI
        console.log('Record loaded from API:', response);
      } else {
        // If API returned no body or null -> treat as not found
        this.showModal('Tiada rekod dijumpai');
        this.searchResults = [];
        this.recordFound = false;
      }
    } catch (err: any) {
      console.error('API error while fetching MaklumatSL:', err);
      // If server responded 404, show friendly message
      if (err && err.status === 404) {
        this.showModal('Tiada rekod dijumpai');
      } else {
        this.showModal('Ralat', err?.error?.message ?? 'An unexpected error occurred');
      }
      this.searchResults = [];
      this.recordFound = false;
    } finally {
      this.isLoading = false;
    }
  }

  // Map the backend fields to your frontend formData
  private mapApiResponseToForm(response: any): void {
    // The backend field names used here are: SLid, name, address1, address2, address3, postcode, city, state
    this.formData.nama = response.name ?? '';
    // ensure alamat array exists; split if address1 contains line breaks
    const address1 = response.address1 ?? '';
    const address2 = response.address2 ?? '';
    const address3 = response.address3 ?? '';
    this.formData.alamat = [address1, address2, address3];

    this.formData.poskod = response.postcode ?? '';
    this.formData.bandar = response.city ?? '';
    this.formData.negeri = response.state ?? '';
  }

  // Clear form helper
  clearForm() {
    this.formData = {
      nama: '',
      alamat: ['', '', ''],
      poskod: '',
      bandar: '',
      negeri: '',
      tujuanPermohonan: '',
      emel: ''
    };
    this.selectedIndex = -1;
    this.searchResults = [];
    this.recordFound = false;
  }

  // Navigation helpers (unchanged)
  navigateToMaklumat() {
    this.router.navigate(['/dokumen-sokongan']);
  }

  currentStep: number = 2;
  totalSteps: number = 3;
  steps = [
    { number: 1, title: 'Carian & Senarai Sabjek', route: '/sec/permohonan-surat-kemudahan/permohonan-baru' },
    { number: 2, title: 'Maklumat Pemohon', route: '/sec/permohonan-surat-kemudahan/maklumat-pemohon' },
    { number: 3, title: 'Dokumen Sokongan', route: '/sec/permohonan-surat-kemudahan/dokumen-sokongan' },
  ];

  goNext(): void {
    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index !== -1 && index + 1 < this.steps.length) {
      this.router.navigate([this.steps[index + 1].route]);
    }
  }

  goBack(): void {
    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index > 0) {
      this.router.navigate([this.steps[index - 1].route]);
    }
  }

  // View details — keep to show a quick alert (can be updated to use full object)
  viewDetails(item: any): void {
    alert(`Melihat butiran untuk: ${item.nama}\nNo K/P: ${item.noKP}`);
  }

  deleteItem(item: any): void {
    const confirmDelete = confirm(`Adakah anda pasti untuk memadam rekod untuk ${item.nama}?`);
    if (confirmDelete) {
      this.searchResults = this.searchResults.filter(result => result.id !== item.id);
      alert('Rekod berjaya dipadam');
    }
  }
submitted = false;
  // Save form with validation (keeps your original logic)
  saveForm() {
  this.submitted = true; // trigger validation state

  const tujuanPermohonan = this.formData.tujuanPermohonan?.trim();
  const emel = this.formData.emel?.trim();
  const nama = this.formData.nama?.trim();

  // Check mandatory fields
  if (!this.searchNoKP || !this.selectedCategory) {
    this.showModal('Sila isi No. Kad Pengenalan dan Warganegara.');
    return;
  }

  if (!nama) {
    this.showModal('Nama diperlukan.');
    return;
  }

  // Email validation
  if (emel && emel.length > 0) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emel)) {
      this.showModal('Format e-mel tidak sah');
      return;
    }
  }

  console.log('Form Data:', this.formData);
  this.showModal('Data berjaya disimpan');
  // Real save logic would go here...
}

  // When user clicks "Papar" / "Next" to go to the paparan page,
  // pass the full formData (and optionally other metadata) via router state.
  paparDetails(item?: any): void {
    // If caller provides an item use it; otherwise use current formData
    const payload = item ? item : {
      nama: this.formData.nama,
      alamat: this.formData.alamat,
      poskod: this.formData.poskod,
      bandar: this.formData.bandar,
      negeri: this.formData.negeri,
      tujuanPermohonan: this.formData.tujuanPermohonan,
      emel: this.formData.emel,
      fromSearch: true,
      kpNo: this.searchIC
    };

    this.router.navigate(['/sec/permohonan-surat-kemudahan/paparan'], {
      state: {
        selectedItem: payload,
        fromSearch: true,
        searchTerm: this.searchIC
      }
    });
  }

  // Helpers for record navigation if multiple results are used (kept for compatibility)
  nextRecord() {
    if (this.selectedIndex < this.searchResults.length - 1) {
      this.selectedIndex++;
      // If the next result came from API, map it
      const next = this.searchResults[this.selectedIndex];
      if (next) { this.mapApiResponseToForm(next); }
    }
  }

  previousRecord() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      const prev = this.searchResults[this.selectedIndex];
      if (prev) { this.mapApiResponseToForm(prev); }
    }
  }

  getAllRecords() {
    return this.searchResults.slice();
  }

  resetForm(): void {
    this.selectedCategory = '';
    this.searchTerm = '';
    this.searchIC = '';
    this.searchNoKP = '';
    this.searchResults = [];
    this.clearForm();
    this.modalVisible = false;
    this.currentStep = 2;
    console.log('Form reset completed');
  }

  nextStep(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
      console.log('Moved to step:', this.currentStep);
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      console.log('Moved to step:', this.currentStep);
    }
  }

  goToStep(stepNumber: number): void {
    if (stepNumber >= 1 && stepNumber <= this.totalSteps) {
      this.currentStep = stepNumber;
      console.log('Jumped to step:', this.currentStep);
    }
  }

  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }
}
