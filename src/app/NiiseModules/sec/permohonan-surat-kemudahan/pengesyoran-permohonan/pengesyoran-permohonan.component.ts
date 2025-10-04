import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
// CoreUI Imports
import {
  CardComponent,
  CardBodyComponent,
  RowComponent,
  ColComponent,
  ButtonDirective,
  TableDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  CardModule,
  GridModule,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-pengesyoran-permohonan',
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
  templateUrl: './pengesyoran-permohonan.component.html',
  styleUrl: '../permohonan-surat-kemudahan.component.scss'
})
export class PengesyoranPermohonanComponent implements OnInit {

  selectedCategory: string = '';
  searchTerm: string = '';
  searchResults: any[] = [];
  isLoading: boolean = false;
  showNoResults: boolean = false;

  // Search fields for Warganegara
  searchNoKP: string = '';

  // Search fields for Warga Asing
  searchNama: string = '';
  searchTarikhLahir: string = '';
  searchWarganegara: string = '';
  searchNoPassport: string = '';

  // Search field for No Rujukan
  searchNoRujukan: string = '';

  currentStep: number = 1;
  totalSteps: number = 3;

  // State management key
  private readonly STATE_KEY = 'surat_kemudahan_state';

  // Enhanced sample data for Warganegara with sourceType
  private sampleDataWarganegara = [
    {
      id: 1,
      noKP: '800211040991',
      noDokumen: 'A800211',
      warganegara: 'MYS',
      nama: 'Aiman Bin Kasim',
      status: 'aktif',
      sourceType: 'warganegara',
      tarikhLahir: null,
      noPassport: null
    },
    {
      id: 2,
      noKP: '987654321098',
      noDokumen: 'DOK002',
      warganegara: 'Malaysian',
      nama: 'Siti Binti Hassan',
      status: 'tidak_aktif',
      sourceType: 'warganegara',
      tarikhLahir: null,
      noPassport: null
    },
    {
      id: 3,
      noKP: '456789123456',
      noDokumen: 'DOK003',
      warganegara: 'Malaysian',
      nama: 'Kumar A/L Rajesh',
      status: 'aktif',
      sourceType: 'warganegara',
      tarikhLahir: null,
      noPassport: null
    },
    {
      id: 4,
      noKP: '123456789012',
      noDokumen: 'DOK004',
      warganegara: 'Malaysian',
      nama: 'Test User',
      status: 'aktif',
      sourceType: 'warganegara',
      tarikhLahir: null,
      noPassport: null
    }
  ];

  // Enhanced sample data for Warga Asing with sourceType and noKP field
  private sampleDataWargaAsing = [
    {
      id: 5,
      nama: 'Mila Dilan',
      noDokumen: 'IND900130',
      warganegara: 'Indonesia',
      tarikhLahir: '31/01/1990',
      noPassport: 'A0991821',
      status: 'aktif',
      sourceType: 'warga_asing',
      noKP: null
    },
    {
      id: 6,
      nama: 'John Smith',
      noDokumen: 'USA123456',
      warganegara: 'United States',
      tarikhLahir: '15/05/1985',
      noPassport: 'P1234567',
      status: 'aktif',
      sourceType: 'warga_asing',
      noKP: null
    },
    {
      id: 7,
      nama: 'Li Wei',
      noDokumen: 'CHN789012',
      warganegara: 'China',
      tarikhLahir: '22/08/1992',
      noPassport: 'C9876543',
      status: 'tidak_aktif',
      sourceType: 'warga_asing',
      noKP: null
    }
  ];

  // Combined data for No Rujukan search (includes both Warganegara and Warga Asing)
  private get allSampleData() {
    return [...this.sampleDataWarganegara, ...this.sampleDataWargaAsing];
  }

  steps = [
    { number: 1, title: 'Carian Permohonan', route: '/sec/permohonan-surat-kemudahan/pengesyoran-permohonan' },
    { number: 2, title: 'Maklumat Pemohon', route: '/sec/permohonan-surat-kemudahan/maklumat-permohonan' },
    { number: 3, title: 'Pengesyoran Permohonan', route: '/sec/permohonan-surat-kemudahan/pengesyoran-permohonan2' },
  ];

  public modalVisible = false;
  public modalMessage = 'Tiada rekod dijumpai';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializeComponent();
    this.loadPreviousState();
  }

  /**
   * Load previous state if returning from another page
   */
  private loadPreviousState(): void {
    const state = this.loadState();
    if (state && state.selectedItem) {
      // If we have a previous state, we can optionally restore search results
      console.log('Previous state found:', state);
      // You can choose to restore the search results here if needed
    }
  }

  /**
   * Handle category change - reset form fields and results
   */
  onCategoryChange(): void {
    this.resetSearchFields();
    this.searchResults = [];
    this.showNoResults = false;
    console.log('Category changed to:', this.selectedCategory);
  }

  /**
   * Reset all search fields
   */
  private resetSearchFields(): void {
    // Warganegara fields
    this.searchNoKP = '';

    // Warga Asing fields
    this.searchNama = '';
    this.searchTarikhLahir = '';
    this.searchWarganegara = '';
    this.searchNoPassport = '';

    // No Rujukan field
    this.searchNoRujukan = '';
  }

  /**
   * Validate and search for Warganegara by NoKP
   */
  validateNoKP(noKP: string): void {
    const cleanNoKP = noKP.trim();

    // Check if input is empty
    if (!cleanNoKP) {
      this.showModal('Sila masukkan No. KP');
      return;
    }

    // Check for valid IC formats:
    // Format 1: XXXXXX-XX-XXXX (with hyphens)
    // Format 2: XXXXXXXXXXXX (12 consecutive digits)
    const icPatternWithHyphens = /^\d{6}-\d{2}-\d{4}$/;
    const icPatternWithoutHyphens = /^\d{12}$/;

    if (!icPatternWithHyphens.test(cleanNoKP) && !icPatternWithoutHyphens.test(cleanNoKP)) {
      this.showModal('Maklumat yang dimasukkan tidak sah');
      return;
    }

    // Pass the original input format to search (preserve user's input format)
    this.performSearchWarganegara(cleanNoKP);
  }

  /**
   * Search for Warga Asing
   */
  searchWargaAsing(): void {
    if (!this.searchNama.trim() && !this.searchTarikhLahir && !this.searchWarganegara && !this.searchNoPassport.trim()) {
      this.showModal('Sila masukkan sekurang-kurangnya satu kriteria carian');
      return;
    }

    this.performSearchWargaAsing();
  }

  /**
   * Search by No Rujukan
   */
  searchByNoRujukan(): void {
    const cleanNoRujukan = this.searchNoRujukan.trim();

    if (!cleanNoRujukan) {
      this.showModal('Sila masukkan No. Rujukan');
      return;
    }

    this.performSearchByNoRujukan(cleanNoRujukan);
  }

  /**
   * Perform search for Warganegara
   */
  private performSearchWarganegara(noKP: string): void {
    this.isLoading = true;
    this.showNoResults = false;

    setTimeout(() => {
      // Search by comparing normalized IC numbers (without hyphens)
      const results = this.sampleDataWarganegara.filter(item => {
        const normalizedItemNoKP = item.noKP.replace(/-/g, '');
        const normalizedSearchNoKP = noKP.replace(/-/g, '');
        return normalizedItemNoKP.includes(normalizedSearchNoKP);
      }).map(item => ({
        ...item,
        displayCategory: 'Warganegara',
        searchMethod: 'warganegara'
      }));

      this.searchResults = results;
      this.showNoResults = true;
      this.isLoading = false;

      if (results.length === 0) {
        this.showModal('Tiada rekod dijumpai');
      }

      console.log('Warganegara search completed:', results);
    }, 1000);
  }

  /**
   * Perform search for Warga Asing
   */
  private performSearchWargaAsing(): void {
    this.isLoading = true;
    this.showNoResults = false;

    setTimeout(() => {
      let results = [...this.sampleDataWargaAsing];

      // Filter by name
      if (this.searchNama.trim()) {
        results = results.filter(item =>
          item.nama.toLowerCase().includes(this.searchNama.toLowerCase().trim())
        );
      }

      // Filter by birth date
      if (this.searchTarikhLahir) {
        const searchDate = new Date(this.searchTarikhLahir);
        results = results.filter(item => {
          // Convert DD/MM/YYYY to Date for comparison
          const [day, month, year] = item.tarikhLahir.split('/');
          const itemDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

          // Compare dates (ignore time)
          return itemDate.toDateString() === searchDate.toDateString();
        });
      }

      // Filter by nationality
      if (this.searchWarganegara) {
        results = results.filter(item =>
          item.warganegara.toLowerCase().includes(this.searchWarganegara.toLowerCase())
        );
      }

      // Filter by passport number
      if (this.searchNoPassport.trim()) {
        results = results.filter(item =>
          item.noPassport.toLowerCase().includes(this.searchNoPassport.toLowerCase().trim())
        );
      }

      // Add display metadata
      results = results.map(item => ({
        ...item,
        displayCategory: 'Warga Asing',
        searchMethod: 'warga_asing'
      }));

      this.searchResults = results;
      this.showNoResults = true;
      this.isLoading = false;

      if (results.length === 0) {
        this.showModal('Tiada rekod dijumpai berdasarkan kriteria carian');
      }

      console.log('Warga Asing search completed:', results);
    }, 1000);
  }

  /**
   * Enhanced search by No Rujukan with proper data normalization
   */
  private performSearchByNoRujukan(noRujukan: string): void {
    this.isLoading = true;
    this.showNoResults = false;

    setTimeout(() => {
      // Search in both Warganegara and Warga Asing data using LIKE %% pattern
      const results = this.allSampleData.filter(item => {
        // Case-insensitive search using includes (similar to LIKE %%)
        return item.noDokumen.toLowerCase().includes(noRujukan.toLowerCase());
      }).map(item => {
        // Normalize the data structure for consistent handling
        return {
          ...item,
          // Ensure all required fields are present with proper defaults
          displayCategory: item.sourceType === 'warganegara' ? 'Warganegara' : 'Warga Asing',
          searchMethod: 'no_rujukan',
          effectiveCategory: item.sourceType,
          // Ensure consistent field presence
          noKP: item.noKP || null,
          tarikhLahir: item.tarikhLahir || null,
          noPassport: item.noPassport || null,
          // Add search context
          foundViaNoRujukan: true,
          originalSearchInput: noRujukan
        };
      });

      this.searchResults = results;
      this.showNoResults = true;
      this.isLoading = false;

      if (results.length === 0) {
        this.showModal('Tiada rekod dijumpai berdasarkan No. Rujukan');
      }

      console.log('No Rujukan search completed:', results);
    }, 1000);
  }

  /**
   * Show modal with message
   */
  showModal(message: string): void {
    this.modalMessage = message;
    this.modalVisible = true;
  }

  /**
   * Close modal
   */
  closeModal(): void {
    this.modalVisible = false;
  }

  /**
   * Handle modal OK button click
   */
  onModalOk(): void {
    this.closeModal();
  }

  /**
   * Initialize component with clean state
   */
  private initializeComponent(): void {
    this.searchResults = [];
    this.selectedCategory = '';
    this.resetSearchFields();
    console.log('Permohonan component initialized');
  }

  /**
   * Enhanced navigation to maklumat permohonan page with proper data context
   */
  paparDetails(item: any): void {
    console.log('Viewing item:', item);

    // Determine effective category based on search method or item source
    const effectiveCategory = this.selectedCategory === 'no_rujukan'
      ? item.sourceType || item.effectiveCategory || 'unknown'
      : this.selectedCategory;

    // Save the selection state with enhanced data
    this.saveSelectedState(item, effectiveCategory);

    // Navigate to maklumat permohonan page in view mode
    this.router.navigate(['/sec/permohonan-surat-kemudahan/maklumat-permohonan'], {
      state: {
        selectedItem: {
          ...item,
          // Ensure proper data mapping with fallbacks
          displayNoKP: item.noKP || 'N/A',
          normalizedNoKP: item.noKP ? item.noKP.replace(/-/g, '') : '',
          searchInput: this.getSearchInput(),
          // Enhanced categorization
          originalCategory: effectiveCategory,
          searchMethod: this.selectedCategory,
          dataSource: item.sourceType || 'unknown',
          isFromNoRujukan: this.selectedCategory === 'no_rujukan',
          // Add all possible fields with proper defaults
          displayTarikhLahir: item.tarikhLahir || 'N/A',
          displayNoPassport: item.noPassport || 'N/A',
          displayWarganegara: item.warganegara || 'N/A'
        },
        category: effectiveCategory, // Use effective category for form handling
        originalSearchCategory: this.selectedCategory, // Keep original search method
        currentStep: 2,
        viewMode: true,  // Set to true for view-only mode
        // Enhanced navigation context
        navigationContext: {
          fromPage: 'pengesyoran-permohonan',
          timestamp: new Date().toISOString(),
          searchMethod: this.selectedCategory,
          effectiveCategory: effectiveCategory,
          isMultiSourceSearch: this.selectedCategory === 'no_rujukan',
          searchCriteria: this.getSearchCriteria(),
          resultIndex: this.searchResults.indexOf(item)
        }
      }
    });
  }

  /**
   * Enhanced navigation to edit mode with proper data context
   */
  kemaskiniItem(item: any): void {
    console.log('Navigating to maklumat with item:', item);

    // Determine effective category based on search method or item source
    const effectiveCategory = this.selectedCategory === 'no_rujukan'
      ? item.sourceType || item.effectiveCategory || 'unknown'
      : this.selectedCategory;

    // Save the selection state with enhanced data
    this.saveSelectedState(item, effectiveCategory);

    // Navigate to maklumat permohonan page with item data
    this.router.navigate(['/sec/permohonan-surat-kemudahan/maklumat-permohonan'], {
      state: {
        selectedItem: {
          ...item,
          // Ensure proper data mapping with fallbacks
          displayNoKP: item.noKP || 'N/A',
          normalizedNoKP: item.noKP ? item.noKP.replace(/-/g, '') : '',
          searchInput: this.getSearchInput(),
          // Enhanced categorization
          originalCategory: effectiveCategory,
          searchMethod: this.selectedCategory,
          dataSource: item.sourceType || 'unknown',
          isFromNoRujukan: this.selectedCategory === 'no_rujukan',
          // Add all possible fields with proper defaults
          displayTarikhLahir: item.tarikhLahir || 'N/A',
          displayNoPassport: item.noPassport || 'N/A',
          displayWarganegara: item.warganegara || 'N/A'
        },
        category: effectiveCategory, // Use effective category for form handling
        originalSearchCategory: this.selectedCategory, // Keep original search method
        currentStep: 2,
        viewMode: false,  // Set to false for edit mode
        // Enhanced navigation context
        navigationContext: {
          fromPage: 'pengesyoran-permohonan',
          timestamp: new Date().toISOString(),
          searchMethod: this.selectedCategory,
          effectiveCategory: effectiveCategory,
          isMultiSourceSearch: this.selectedCategory === 'no_rujukan',
          searchCriteria: this.getSearchCriteria(),
          resultIndex: this.searchResults.indexOf(item)
        }
      }
    });
  }

  /**
   * Reset form and clear all states
   */
  resetForm(): void {
    this.selectedCategory = '';
    this.resetSearchFields();
    this.searchResults = [];
    this.showNoResults = false;
    this.currentStep = 1;
    this.clearState(); // Clear saved state when resetting form
    console.log('Form reset completed');
  }

  /**
   * Navigate to specific step
   */
  goToStep(stepNumber: number): void {
    if (stepNumber >= 1 && stepNumber <= this.totalSteps) {
      this.currentStep = stepNumber;
      console.log('Jumped to step:', this.currentStep);
    }
  }

  /**
   * Check if step is currently active
   */
  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  /**
   * Check if step is completed
   */
  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }

  /**
   * Generate surat kemudahan document
   */
  generateSuratKemudahan(): void {
    if (this.searchResults.length === 0) {
      alert('Tiada data untuk dijana surat kemudahan');
      return;
    }
    alert('Surat Kemudahan sedang dijana...');
  }

  /**
   * Navigate to maklumat page
   */
  navigateToMaklumat(): void {
    this.router.navigate(['/sec/permohonan-surat-kemudahan/maklumat-permohonan']);
  }

  /**
   * Get current search input based on selected category
   */
  private getSearchInput(): string {
    switch(this.selectedCategory) {
      case 'warganegara':
        return this.searchNoKP;
      case 'warga_asing':
        return this.searchNama || this.searchNoPassport || this.searchWarganegara;
      case 'no_rujukan':
        return this.searchNoRujukan;
      default:
        return '';
    }
  }

  /**
   * Get comprehensive search criteria object
   */
  private getSearchCriteria(): any {
    return {
      category: this.selectedCategory,
      searchNoKP: this.searchNoKP,
      searchNama: this.searchNama,
      searchTarikhLahir: this.searchTarikhLahir,
      searchWarganegara: this.searchWarganegara,
      searchNoPassport: this.searchNoPassport,
      searchNoRujukan: this.searchNoRujukan,
      hasResults: this.searchResults.length > 0,
      resultCount: this.searchResults.length
    };
  }

  /**
   * Enhanced state saving with comprehensive data preservation
   */
  private saveSelectedState(selectedItem: any, category: string): void {
    const state = {
      selectedItem: {
        ...selectedItem,
        // Preserve original data format
        originalNoKP: selectedItem.noKP,
        searchCategory: category,
        timestamp: new Date().toISOString(),
        // Enhanced data source tracking
        sourceType: selectedItem.sourceType || 'unknown',
        searchMethod: this.selectedCategory,
        effectiveCategory: category,
        isFromNoRujukan: this.selectedCategory === 'no_rujukan',
        // Preserve all search context
        searchContext: {
          originalQuery: this.getSearchInput(),
          searchCategory: this.selectedCategory,
          resultPosition: this.searchResults.indexOf(selectedItem)
        }
      },
      selectedCategory: category,
      originalSearchCategory: this.selectedCategory, // Track original search method
      formData: null, // Will be populated in maklumat component
      currentStep: 1,
      searchResults: this.searchResults,
      searchCategory: this.selectedCategory,
      // Enhanced search context for debugging and restoration
      searchContext: {
        ...this.getSearchCriteria(),
        timestamp: new Date().toISOString(),
        isNoRujukanSearch: this.selectedCategory === 'no_rujukan'
      }
    };

    try {
      (window as any)[this.STATE_KEY] = state;
      console.log('Enhanced selection state saved:', state);
    } catch (error) {
      console.error('Error saving selection state:', error);
    }
  }

  /**
   * Load state from memory
   */
  private loadState(): any {
    try {
      const state = (window as any)[this.STATE_KEY];
      console.log('State loaded in pengesyoran:', state);
      return state || null;
    } catch (error) {
      console.error('Error loading state:', error);
      return null;
    }
  }

  /**
   * Clear saved state
   */
  private clearState(): void {
    try {
      delete (window as any)[this.STATE_KEY];
      console.log('State cleared');
    } catch (error) {
      console.error('Error clearing state:', error);
    }
  }

  /**
   * Utility method to get display text for category
   */
  getCategoryDisplayText(category: string): string {
    switch(category) {
      case 'warganegara': return 'Warganegara';
      case 'warga_asing': return 'Warga Asing';
      case 'no_rujukan': return 'No. Rujukan';
      default: return category;
    }
  }

  /**
   * Check if item has specific field based on source type
   */
  hasField(item: any, fieldName: string): boolean {
    switch(fieldName) {
      case 'noKP':
        return item.sourceType === 'warganegara' && item.noKP;
      case 'noPassport':
        return item.sourceType === 'warga_asing' && item.noPassport;
      case 'tarikhLahir':
        return item.sourceType === 'warga_asing' && item.tarikhLahir;
      default:
        return item[fieldName] != null && item[fieldName] !== '';
    }
  }

  /**
   * Get safe display value for any field
   */
  getDisplayValue(item: any, fieldName: string): string {
    const value = item[fieldName];
    if (value === null || value === undefined || value === '') {
      return 'N/A';
    }
    return value.toString();
  }
}
