// UPDATED: keputusan-jkrim.component.ts - Based on your reference pattern

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
  selector: 'app-keputusan-jkrim',
  imports: [CommonModule,
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
  templateUrl: './keputusan-jkrim.component.html',
  styleUrls: [
  '../permohonan-surat-kemudahan.component.scss'
]

})
export class KeputusanJkrimComponent implements OnInit {

  selectedCategory: string = '';
  searchTerm: string = '';
  searchResults: any[] = [];
  searchNoRujukanValue: string = ''; // FIXED: Use consistent property name
  isLoading: boolean = false;
  showNoResults: boolean = false;
  
  // Search fields for Warganegara
  searchNoKP: string = '';
  
  // Search fields for Warga Asing
  searchNama: string = '';
  searchTarikhLahir: string = '';
  searchWarganegara: string = '';
  searchNoPassport: string = '';
  
  currentStep: number = 1;
  totalSteps: number = 3;

  // State management key
  private readonly STATE_KEY = 'surat_kemudahan_state';

  // Sample data for Warganegara - ENHANCED with dataType
  private sampleDataWarganegara = [
    {
      id: 1,
      noKP: '800211040991',
      noDokumen: 'A800211',
      warganegara: 'MYS',
      nama: 'Aiman Bin Kasim',
      status: 'aktif',
      dataType: 'warganegara'
    },
    {
      id: 2,
      noKP: '987654-32-1098',
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
    },
    {
      id: 4,
      noKP: '123456-78-9012',
      noDokumen: 'DOK004',
      warganegara: 'Malaysian',
      nama: 'Ahmad Bin Abdullah',
      status: 'aktif',
      dataType: 'warganegara'
    }
  ];

  // Sample data for Warga Asing - ENHANCED with dataType
  private sampleDataWargaAsing = [
    {
      id: 5,
      nama: 'Mila Dilan',
      noDokumen: 'IND900130',
      warganegara: 'Indonesia',
      tarikhLahir: '31/01/1990',
      noPassport: 'A0991821',
      status: 'aktif',
      dataType: 'warga_asing',
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
      dataType: 'warga_asing',
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
      dataType: 'warga_asing',
      noKP: null
    }
  ];

  // Combined data for No Rujukan search
  private get allSampleData() {
    return [...this.sampleDataWarganegara, ...this.sampleDataWargaAsing];
  }

  steps = [
    { number: 1, title: 'Carian Permohonan', route: '/sec/permohonan-surat-kemudahan/keputusan-jkrim' },
    { number: 2, title: 'Maklumat Pemohon', route: '/sec/permohonan-surat-kemudahan/maklumat-permohonan3' },
    { number: 3, title: 'Keputusan Permohonan JKRIM', route: '/sec/permohonan-surat-kemudahan/jkrim' },
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
      console.log('Previous state found:', state);
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
    this.searchNoKP = '';
    this.searchNama = '';
    this.searchTarikhLahir = '';
    this.searchWarganegara = '';
    this.searchNoPassport = '';
    this.searchNoRujukanValue = ''; // FIXED: Use consistent property
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

    const noKPPattern = /^(\d{6}-\d{2}-\d{4}|\d{12})$/;
    
    if (!noKPPattern.test(cleanNoKP)) {
      this.showModal('Maklumat yang dimasukkan tidak sah');
      return;
    }

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
   * Search for No Rujukan - FIXED METHOD
   */
  searchNoRujukan(): void {
    const cleanNoRujukan = this.searchNoRujukanValue.trim(); // FIXED: Use correct property
    
    if (!cleanNoRujukan) {
      this.showModal('Sila masukkan No. Rujukan');
      return;
    }

    if (cleanNoRujukan.length < 3) {
      this.showModal('No. Rujukan tidak sah');
      return;
    }

    this.performSearchNoRujukan(cleanNoRujukan);
  }

  /**
   * Perform search for Warganegara
   */
  private performSearchWarganegara(noKP: string): void {
    this.isLoading = true;
    this.showNoResults = false;

    setTimeout(() => {
      const normalizedSearchNoKP = noKP.replace(/-/g, '');
      
      const results = this.sampleDataWarganegara.filter(item => {
        const normalizedItemNoKP = item.noKP.replace(/-/g, '');
        return normalizedItemNoKP.includes(normalizedSearchNoKP);
      });

      // Normalize results
      const normalizedResults = results.map(item => ({
        ...item,
        noKP: item.noKP.replace(/-/g, ''),
        dataType: 'warganegara'
      }));

      this.searchResults = normalizedResults;
      this.showNoResults = true;
      this.isLoading = false;

      if (results.length === 0) {
        this.showModal('Tiada rekod dijumpai');
      }

      console.log('Warganegara search completed:', normalizedResults);
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

      if (this.searchNama.trim()) {
        results = results.filter(item =>
          item.nama.toLowerCase().includes(this.searchNama.toLowerCase().trim())
        );
      }

      if (this.searchTarikhLahir) {
        const searchDate = new Date(this.searchTarikhLahir);
        results = results.filter(item => {
          const [day, month, year] = item.tarikhLahir.split('/');
          const itemDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
          return itemDate.toDateString() === searchDate.toDateString();
        });
      }

      if (this.searchWarganegara) {
        results = results.filter(item =>
          item.warganegara.toLowerCase().includes(this.searchWarganegara.toLowerCase())
        );
      }

      if (this.searchNoPassport.trim()) {
        results = results.filter(item =>
          item.noPassport.toLowerCase().includes(this.searchNoPassport.toLowerCase().trim())
        );
      }

      const normalizedResults = results.map(item => ({
        ...item,
        dataType: 'warga_asing',
        noKP: null
      }));

      this.searchResults = normalizedResults;
      this.showNoResults = true;
      this.isLoading = false;

      if (results.length === 0) {
        this.showModal('Tiada rekod dijumpai berdasarkan kriteria carian');
      }

      console.log('Warga Asing search completed:', normalizedResults);
    }, 1000);
  }

  /**
   * Perform search for No Rujukan - ENHANCED LIKE YOUR REFERENCE
   */
  private performSearchNoRujukan(noRujukan: string): void {
    this.isLoading = true;
    this.showNoResults = false;

    setTimeout(() => {
      const results = this.allSampleData.filter(item => {
        return item.noDokumen.toLowerCase().includes(noRujukan.toLowerCase());
      });

      // Normalize results based on dataType
      const normalizedResults = results.map(item => {
        if (item.dataType === 'warganegara') {
          return {
            ...item,
            noKP: item.noKP ? item.noKP.replace(/-/g, '') : null,
            dataType: 'warganegara',
            tarikhLahir: null,
            noPassport: null
          };
        } else {
          return {
            ...item,
            dataType: 'warga_asing',
            noKP: null
          };
        }
      });

      this.searchResults = normalizedResults;
      this.showNoResults = true;
      this.isLoading = false;

      if (results.length === 0) {
        this.showModal('Tiada rekod dijumpai berdasarkan No. Rujukan');
      }

      console.log('No Rujukan search completed:', normalizedResults);
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
    console.log('Keputusan JKRIM component initialized');
  }

  /**
   * Navigate to maklumat permohonan page - ENHANCED LIKE YOUR REFERENCE
   */
  paparDetails(item: any): void {
    console.log('=== PAPAR DETAILS DEBUG ===');
    console.log('Original item:', item);
    console.log('Selected category:', this.selectedCategory);
    
    // Determine actual category
    let actualCategory = this.selectedCategory;
    
    if (this.selectedCategory === 'no_rujukan') {
      actualCategory = item.dataType || this.determineDataType(item);
    }
    
    console.log('Actual category determined:', actualCategory);
    
    // Normalize item data
    const normalizedItem = this.normalizeItemData(item, actualCategory);
    console.log('Normalized item:', normalizedItem);
    
    // Save state using multiple methods for reliability
    this.saveSelectedState(normalizedItem, actualCategory);
    
    // Store in sessionStorage as additional backup
    try {
      sessionStorage.setItem('jkrim_selectedItem', JSON.stringify(normalizedItem));
      sessionStorage.setItem('jkrim_category', actualCategory);
      sessionStorage.setItem('jkrim_originalSearch', this.selectedCategory);
      sessionStorage.setItem('jkrim_viewMode', 'true');
      console.log('Data stored in sessionStorage as backup');
    } catch (error) {
      console.error('Error storing in sessionStorage:', error);
    }
    
    // Navigate with multiple state passing methods
    console.log('Navigating to maklumat-permohonan3...');
    this.router.navigate(['/sec/permohonan-surat-kemudahan/maklumat-permohonan3'], {
      state: { 
        selectedItem: normalizedItem, 
        category: actualCategory,
        originalSearchCategory: this.selectedCategory,
        currentStep: 2,
        viewMode: true,
        timestamp: Date.now()
      }
    }).then(success => {
      console.log('Navigation success:', success);
    }).catch(error => {
      console.error('Navigation error:', error);
    });
  }

  /**
   * Navigate to edit mode - ENHANCED LIKE YOUR REFERENCE
   */
  kemaskiniItem(item: any): void {
    console.log('=== KEMASKINI ITEM DEBUG ===');
    console.log('Original item:', item);
    console.log('Selected category:', this.selectedCategory);
    
    // Determine actual category
    let actualCategory = this.selectedCategory;
    
    if (this.selectedCategory === 'no_rujukan') {
      actualCategory = item.dataType || this.determineDataType(item);
    }
    
    console.log('Actual category determined:', actualCategory);
    
    // Normalize item data
    const normalizedItem = this.normalizeItemData(item, actualCategory);
    console.log('Normalized item:', normalizedItem);
    
    // Save state using multiple methods
    this.saveSelectedState(normalizedItem, actualCategory);
    
    // Store in sessionStorage as backup
    try {
      sessionStorage.setItem('jkrim_selectedItem', JSON.stringify(normalizedItem));
      sessionStorage.setItem('jkrim_category', actualCategory);
      sessionStorage.setItem('jkrim_originalSearch', this.selectedCategory);
      sessionStorage.setItem('jkrim_viewMode', 'false');
      console.log('Data stored in sessionStorage as backup');
    } catch (error) {
      console.error('Error storing in sessionStorage:', error);
    }
    
    // Navigate
    console.log('Navigating to maklumat-permohonan3 for edit...');
    this.router.navigate(['/sec/permohonan-surat-kemudahan/maklumat-permohonan3'], {
      state: { 
        selectedItem: normalizedItem, 
        category: actualCategory,
        originalSearchCategory: this.selectedCategory,
        currentStep: 2,
        viewMode: false,
        timestamp: Date.now()
      }
    }).then(success => {
      console.log('Navigation success:', success);
    }).catch(error => {
      console.error('Navigation error:', error);
    });
  }

  /**
   * Determine data type based on item structure - FROM YOUR REFERENCE
   */
  private determineDataType(item: any): string {
    if (item.noKP && !item.noPassport && !item.tarikhLahir) {
      return 'warganegara';
    }
    if (item.noPassport && item.tarikhLahir && !item.noKP) {
      return 'warga_asing';
    }
    if (item.dataType) {
      return item.dataType;
    }
    return item.noKP ? 'warganegara' : 'warga_asing';
  }

  /**
   * Normalize item data based on category - FROM YOUR REFERENCE
   */
  private normalizeItemData(item: any, category: string): any {
    const baseItem = { ...item };
    
    if (category === 'warganegara') {
      return {
        ...baseItem,
        noKP: baseItem.noKP ? baseItem.noKP.replace(/-/g, '') : null,
        dataType: 'warganegara',
        tarikhLahir: baseItem.tarikhLahir || null,
        noPassport: baseItem.noPassport || null
      };
    } else if (category === 'warga_asing') {
      return {
        ...baseItem,
        noKP: null,
        dataType: 'warga_asing',
        tarikhLahir: baseItem.tarikhLahir || null,
        noPassport: baseItem.noPassport || null
      };
    } else {
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
    this.clearState();
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
    this.router.navigate(['/sec/permohonan-surat-kemudahan/maklumat-permohonan3']);
  }

  /**
   * Save selected item state - ENHANCED FROM YOUR REFERENCE
   */
  private saveSelectedState(selectedItem: any, category: string): void {
    const state = {
      selectedItem: selectedItem,
      selectedCategory: category,
      originalSearchCategory: this.selectedCategory,
      formData: null,
      currentStep: 1,
      searchResults: this.searchResults,
      searchCategory: this.selectedCategory,
      timestamp: Date.now()
    };
    
    try {
      (window as any)[this.STATE_KEY] = state;
      console.log('Selection state saved:', state);
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
      console.log('State loaded in keputusan-jkrim:', state);
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
      // Also clear sessionStorage backup
      sessionStorage.removeItem('jkrim_selectedItem');
      sessionStorage.removeItem('jkrim_category');
      sessionStorage.removeItem('jkrim_originalSearch');
      sessionStorage.removeItem('jkrim_viewMode');
      console.log('State cleared');
    } catch (error) {
      console.error('Error clearing state:', error);
    }
  }
}