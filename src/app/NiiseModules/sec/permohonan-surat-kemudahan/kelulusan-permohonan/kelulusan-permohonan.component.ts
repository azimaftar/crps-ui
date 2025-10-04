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
import { MenuContentComponent } from '../../../landing/menu-content/menu-content.component';

@Component({
  selector: 'app-kelulusan-permohonan',
  imports: [CommonModule,
    MenuContentComponent,
      ReactiveFormsModule,
      RouterModule,
      CardComponent,
      CardBodyComponent,
      RowComponent,
      TableDirective,
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
  templateUrl: './kelulusan-permohonan.component.html',
  styleUrls: [
  '../permohonan-surat-kemudahan.component.scss'
]

})
export class KelulusanPermohonanComponent implements OnInit {

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

  // Sample data for Warganegara
  private sampleDataWarganegara = [
    {
      id: 1,
      noKP: '800211040991',
      noDokumen: 'A800211',
      warganegara: 'MYS',
      nama: 'Aiman Bin Kasim',
      status: 'aktif',
      dataType: 'warganegara' // Add data type identifier
    },
    {
      id: 2,
      noKP: '987654321098',
      noDokumen: 'DOK002',
      warganegara: 'Malaysian',
      nama: 'Siti Binti Hassan',
      status: 'tidak_aktif',
      dataType: 'warganegara'
    },
    {
      id: 3,
      noKP: '456789123456',
      noDokumen: 'DOK003',
      warganegara: 'Malaysian',
      nama: 'Kumar A/L Rajesh',
      status: 'aktif',
      dataType: 'warganegara'
    }
  ];

  // Sample data for Warga Asing
  private sampleDataWargaAsing = [
    {
      id: 4,
      nama: 'Mila Dilan',
      noDokumen: 'IND900130',
      warganegara: 'Indonesia',
      tarikhLahir: '31/01/1990',
      noPassport: 'A0991821',
      status: 'aktif',
      dataType: 'warga_asing', // Add data type identifier
      noKP: null // Ensure noKP is explicitly null for warga asing
    },
    {
      id: 5,
      nama: 'John Smith',
      noDokumen: 'USA123456',
      warganegara: 'United States',
      tarikhLahir: '15/05/1985',
      noPassport: 'P1234567',
      status: 'aktif',
      dataType: 'warga_asing',
      noKP: null
    },
    {
      id: 6,
      nama: 'Li Wei',
      noDokumen: 'CHN789012',
      warganegara: 'China',
      tarikhLahir: '22/08/1992',
      noPassport: 'C9876543',
      status: 'tidak_aktif',
      dataType: 'warga_asing',
      noKP: null
    }
  ];

  // Combined data for No Rujukan search (includes both Warganegara and Warga Asing)
  private get allSampleData() {
    return [...this.sampleDataWarganegara, ...this.sampleDataWargaAsing];
  }

  steps = [
    { number: 1, title: 'Carian Permohonan', route: '/sec/permohonan-surat-kemudahan/kelulusan-permohonan' },
    { number: 2, title: 'Maklumat Pemohon', route: '/sec/permohonan-surat-kemudahan/maklumat-permohonan2' },
    { number: 3, title: 'Kelulusan Permohonan', route: '/sec/permohonan-surat-kemudahan/kelulusan' },
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
    
    if (!cleanNoKP) {
      this.showModal('Sila masukkan No. KP');
      return;
    }

    // Check if the input follows valid No KP format:
    // 1. Exactly 12 digits (e.g., 800211040991)
    // 2. Format with hyphens: XXXXXX-XX-XXXX (e.g., 800211-04-0991)
    const noKPPattern = /^(\d{12}|\d{6}-\d{2}-\d{4})$/;
    
    if (!noKPPattern.test(cleanNoKP)) {
      this.showModal('Maklumat yang dimasukkan tidak sah');
      return;
    }

    // Normalize the No KP by removing hyphens for consistent data handling
    const normalizedNoKP = cleanNoKP.replace(/-/g, '');
    
    this.performSearchWarganegara(normalizedNoKP);
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
      // Normalize both search input and database values for comparison
      const normalizedSearchNoKP = noKP.replace(/-/g, '');
      
      const results = this.sampleDataWarganegara.filter(item => {
        const normalizedItemNoKP = item.noKP.replace(/-/g, '');
        return normalizedItemNoKP.includes(normalizedSearchNoKP);
      });

      // Ensure the results maintain consistent format for passing to other pages
      const normalizedResults = results.map(item => ({
        ...item,
        noKP: item.noKP.replace(/-/g, ''), // Normalize for consistent data passing
        dataType: 'warganegara' // Ensure data type is set
      }));

      this.searchResults = normalizedResults;
      this.showNoResults = true;
      this.isLoading = false;

      if (normalizedResults.length === 0) {
        this.showModal('Tiada rekod dijumpai');
      }

      console.log('Warganegara search completed with normalized data:', normalizedResults);
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

      // Ensure consistent data structure
      const normalizedResults = results.map(item => ({
        ...item,
        dataType: 'warga_asing', // Ensure data type is set
        noKP: null // Explicitly set noKP to null for warga asing
      }));

      this.searchResults = normalizedResults;
      this.showNoResults = true;
      this.isLoading = false;

      if (normalizedResults.length === 0) {
        this.showModal('Tiada rekod dijumpai berdasarkan kriteria carian');
      }

      console.log('Warga Asing search completed:', normalizedResults);
    }, 1000);
  }

  /**
   * Perform search by No Rujukan (noDokumen) - Enhanced to handle mixed data properly
   */
  private performSearchByNoRujukan(noRujukan: string): void {
    this.isLoading = true;
    this.showNoResults = false;

    setTimeout(() => {
      // Search in both Warganegara and Warga Asing data using LIKE %% pattern
      const results = this.allSampleData.filter(item => {
        // Case-insensitive search using includes (similar to LIKE %%)
        return item.noDokumen.toLowerCase().includes(noRujukan.toLowerCase());
      });

      // Normalize results to ensure consistent data structure
      const normalizedResults = results.map(item => {
        if (item.dataType === 'warganegara') {
          return {
            ...item,
            noKP: item.noKP ? item.noKP.replace(/-/g, '') : null,
            dataType: 'warganegara',
            // Ensure all warga asing fields are null for warganegara records
            tarikhLahir: null,
            noPassport: null
          };
        } else {
          return {
            ...item,
            dataType: 'warga_asing',
            noKP: null // Explicitly set noKP to null for warga asing
          };
        }
      });

      this.searchResults = normalizedResults;
      this.showNoResults = true;
      this.isLoading = false;

      if (normalizedResults.length === 0) {
        this.showModal('Tiada rekod dijumpai berdasarkan No. Rujukan');
      }

      console.log('No Rujukan search completed with normalized data:', normalizedResults);
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

  private initializeComponent(): void {
    this.searchResults = [];
    this.selectedCategory = '';
    this.resetSearchFields();
    console.log('Permohonan component initialized');
  }

  /**
   * Navigate to maklumat permohonan page with proper state management - Enhanced for mixed data
   */
  paparDetails(item: any): void {
    console.log('Viewing item:', item);
    
    // Determine the actual category based on data structure or explicitly set dataType
    let actualCategory = this.selectedCategory;
    
    // If searching by "no rujukan", determine the actual category from the data
    if (this.selectedCategory === 'no_rujukan') {
      actualCategory = item.dataType || this.determineDataType(item);
    }
    
    // Ensure data consistency before passing to next page
    const normalizedItem = this.normalizeItemData(item, actualCategory);
    
    // Save the selection state with normalized data
    this.saveSelectedState(normalizedItem, actualCategory);
    
    // Navigate to maklumat permohonan page in view mode
    this.router.navigate(['/sec/permohonan-surat-kemudahan/maklumat-permohonan2'], {
      state: { 
        selectedItem: normalizedItem, 
        category: actualCategory, // Pass the actual category, not "no_rujukan"
        originalSearchCategory: this.selectedCategory, // Keep track of original search method
        currentStep: 2,
        viewMode: true  // Set to true for view-only mode
      }
    });
  }

  /**
   * Navigate to edit mode with proper data normalization - Enhanced for mixed data
   */
  kemaskiniItem(item: any): void {
    console.log('Navigating to maklumat with item:', item);
    
    // Determine the actual category based on data structure or explicitly set dataType
    let actualCategory = this.selectedCategory;
    
    // If searching by "no rujukan", determine the actual category from the data
    if (this.selectedCategory === 'no_rujukan') {
      actualCategory = item.dataType || this.determineDataType(item);
    }
    
    // Ensure data consistency before passing to next page
    const normalizedItem = this.normalizeItemData(item, actualCategory);
    
    // Save the selection state with normalized data
    this.saveSelectedState(normalizedItem, actualCategory);
    
    // Navigate to maklumat permohonan page with item data
    this.router.navigate(['/sec/permohonan-surat-kemudahan/maklumat-permohonan2'], {
      state: { 
        selectedItem: normalizedItem, 
        category: actualCategory, // Pass the actual category, not "no_rujukan"
        originalSearchCategory: this.selectedCategory, // Keep track of original search method
        currentStep: 2,
        viewMode: false  // Add this line for edit mode
      }
    });
  }

  /**
   * Determine data type based on item structure
   */
  private determineDataType(item: any): string {
    // If item has noKP and no passport info, it's warganegara
    if (item.noKP && !item.noPassport && !item.tarikhLahir) {
      return 'warganegara';
    }
    // If item has passport info and no noKP, it's warga asing
    if (item.noPassport && item.tarikhLahir && !item.noKP) {
      return 'warga_asing';
    }
    // If dataType is explicitly set, use it
    if (item.dataType) {
      return item.dataType;
    }
    // Default fallback - check for presence of typical warganegara fields
    return item.noKP ? 'warganegara' : 'warga_asing';
  }

  /**
   * Normalize item data based on category
   */
  private normalizeItemData(item: any, category: string): any {
    const baseItem = { ...item };
    
    if (category === 'warganegara') {
      return {
        ...baseItem,
        noKP: baseItem.noKP ? baseItem.noKP.replace(/-/g, '') : null,
        dataType: 'warganegara',
        // Ensure warga asing specific fields are handled properly
        tarikhLahir: baseItem.tarikhLahir || null,
        noPassport: baseItem.noPassport || null
      };
    } else if (category === 'warga_asing') {
      return {
        ...baseItem,
        noKP: null, // Explicitly set to null for warga asing
        dataType: 'warga_asing',
        tarikhLahir: baseItem.tarikhLahir || null,
        noPassport: baseItem.noPassport || null
      };
    } else {
      // For other categories or fallback
      return {
        ...baseItem,
        noKP: baseItem.noKP ? baseItem.noKP.replace(/-/g, '') : null
      };
    }
  }

  resetForm(): void {
    this.selectedCategory = '';
    this.resetSearchFields();
    this.searchResults = [];
    this.showNoResults = false;
    this.currentStep = 1;
    this.clearState(); // Clear saved state when resetting form
    console.log('Form reset completed');
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

  generateSuratKemudahan(): void {
    if (this.searchResults.length === 0) {
      alert('Tiada data untuk dijana surat kemudahan');
      return;
    }
    alert('Surat Kemudahan sedang dijana...');
  }

  navigateToMaklumat(): void {
    this.router.navigate(['/sec/permohonan-surat-kemudahan/maklumat-permohonan2']);
  }

  /**
   * Save selected item state - Enhanced to handle actual category
   */
  private saveSelectedState(selectedItem: any, category: string): void {
    const state = {
      selectedItem: selectedItem,
      selectedCategory: category, // This is now the actual category (warganegara/warga_asing)
      originalSearchCategory: this.selectedCategory, // Original search method (no_rujukan, etc.)
      formData: null, // Will be populated in maklumat component
      currentStep: 1,
      searchResults: this.searchResults,
      searchCategory: this.selectedCategory
    };
    
    try {
      (window as any)[this.STATE_KEY] = state;
      console.log('Selection state saved with enhanced data:', state);
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
      console.log('State loaded in kelulusan permohonan:', state);
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
}