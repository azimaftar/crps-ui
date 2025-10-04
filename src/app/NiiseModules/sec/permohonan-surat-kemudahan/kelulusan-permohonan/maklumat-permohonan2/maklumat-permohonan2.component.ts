// maklumat-permohonan.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
// CoreUI Imports
import {
   CardComponent,           
  CardBodyComponent,       
  RowComponent,            
  ColComponent,            
  ButtonDirective, 
  CardModule,
  GridModule,
  ModalComponent,
  ModalBodyComponent,
  ModalFooterComponent,
} from '@coreui/angular';

// Service for state management
interface ApplicationState {
  selectedItem: any;
  selectedCategory: string;
  formData: any;
  currentStep: number;
  viewMode?: boolean;
}

@Component({
  selector: 'app-maklumat-permohonan2',
  imports: [
  CommonModule,
      ReactiveFormsModule,
      RouterModule,
      CardComponent,
      CardBodyComponent,
      RowComponent,
      // TableDirective,
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
  templateUrl: './maklumat-permohonan2.component.html',
  styleUrls: [
  '../../permohonan-surat-kemudahan.component.scss'
]

  
})
export class MaklumatPermohonan2Component implements OnInit {

  selectedCategory: string = '';
  selectedItem: any = null;
  isViewMode: boolean = false; // Controls whether form is in view-only mode
  
  // Form data object
  formData = {
    noKP: '',
    warganegara: '',
    nama: '',
    alamat: ['', '', ''],
    poskod: '',
    bandar: '',
    negeri: '',
    tujuanPermohonan: '',
    email: ''
  };

  // State management key
  private readonly STATE_KEY = 'surat_kemudahan_state';

  // Enhanced sample data mapping for demonstration
  private sampleDataMapping: any = {
    // Warganegara data - using noKP as key
    '800211040991': {
      noKP: '800211-04-0991',
      warganegara: 'Malaysia',
      nama: 'Aiman Bin Kasim',
      alamat: ['No. 3 Jalan Kuantan', 'Taman Harlamas', 'Kawasan Presint 1'],
      poskod: '61250',
      bandar: 'Putrajaya',
      negeri: 'Putrajaya',
      tujuanPermohonan: 'Permohonan untuk mendapatkan surat kemudahan bagi urusan pentadbiran dan dokumentasi rasmi.',
      email: 'aimankasim@gmail.com'
    },
    '987654321098': {
      noKP: '987654-32-1098',
      warganegara: 'Malaysia',
      nama: 'Siti Binti Hassan',
      alamat: ['Lot 15, Jalan Merdeka', 'Taman Sejahtera', 'Seksyen 7'],
      poskod: '40000',
      bandar: 'Shah Alam',
      negeri: 'Selangor',
      tujuanPermohonan: 'Permohonan surat kemudahan untuk urusan perniagaan dan lesen operasi.',
      email: 'siti.hassan@email.com'
    },
    '456789123456': {
      noKP: '456789-12-3456',
      warganegara: 'Malaysia',
      nama: 'Kumar A/L Rajesh',
      alamat: ['Block A-3-7', 'Residensi Aman', 'Jalan Tun Razak'],
      poskod: '50400',
      bandar: 'Kuala Lumpur',
      negeri: 'Kuala Lumpur',
      tujuanPermohonan: 'Permohonan dokumen sokongan untuk urusan kerajaan dan aplikasi kerja.',
      email: 'kumar.rajesh@gmail.com'
    },
    // Warga Asing data - using passport number as key
    'A0991821': {
      noKP: 'A0991821',
      warganegara: 'Indonesia',
      nama: 'Mila Dilan',
      alamat: ['Jalan Bukit Bintang', 'Kuala Lumpur City Centre', 'Pavilion Area'],
      poskod: '50200',
      bandar: 'Kuala Lumpur',
      negeri: 'Kuala Lumpur',
      tujuanPermohonan: 'Permohonan surat kemudahan untuk tujuan bekerja dan tinggal sementara di Malaysia.',
      email: 'miladilan@email.com'
    },
    'P1234567': {
      noKP: 'P1234567',
      warganegara: 'United States',
      nama: 'John Smith',
      alamat: ['Suite 10-5', 'KLCC Tower', 'Jalan Ampang'],
      poskod: '50450',
      bandar: 'Kuala Lumpur',
      negeri: 'Kuala Lumpur',
      tujuanPermohonan: 'Application for convenience letter for business establishment and investment purposes.',
      email: 'john.smith@company.com'
    },
    'C9876543': {
      noKP: 'C9876543',
      warganegara: 'China',
      nama: 'Li Wei',
      alamat: ['No. 88, Jalan Sultan', 'Chinatown', 'Heritage District'],
      poskod: '50000',
      bandar: 'Kuala Lumpur',
      negeri: 'Kuala Lumpur',
      tujuanPermohonan: '申请便利信函用于商业运营和官方文件处理。',
      email: 'li.wei@business.com'
    }
  };

  public modalVisible = false;
  public modalMessage = 'Tiada rekod dijumpai';

  // Stepper configuration
  currentStep: number = 2;
  totalSteps: number = 3;
  steps = [
    { number: 1, title: 'Carian Permohonan', route: '/sec/permohonan-surat-kemudahan/kelulusan-permohonan' },
    { number: 2, title: 'Maklumat Pemohon', route: '/sec/permohonan-surat-kemudahan/maklumat-permohonan2' },
    { number: 3, title: 'Kelulusan Permohonan', route: '/sec/permohonan-surat-kemudahan/kelulusan' },
  ];

  
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeComponent();
    this.loadSelectedData();
  }

  private initializeComponent(): void {
    console.log('Maklumat Permohonan component initialized');
  }

  private loadSelectedData(): void {

    // Try to get data from router state first
    const navigation = this.router.getCurrentNavigation();
    const routerState = navigation?.extras?.state || history.state;
    
    // Check if this is view mode - this is the key change
    this.isViewMode = routerState?.viewMode === true;
    console.log('View mode detected:', this.isViewMode);
    
    if (routerState && routerState.selectedItem && routerState.selectedItem.id) {
      console.log('Loading from router state:', routerState);
      this.selectedItem = routerState.selectedItem;
      this.selectedCategory = routerState.category;
      
      // KEY FIX: Check if formData is already provided in router state
      if (routerState.formData && Object.keys(routerState.formData).length > 0) {
        console.log('Using existing form data from router state');
        this.formData = { ...routerState.formData };
      } else {
        console.log('Populating form data from sample data');
        this.populateFormData();
      }
      
      this.saveState(); // Save for future use
      return;
    }

    // Try to load from stored state
    const storedState = this.loadState();
    if (storedState && storedState.selectedItem) {
      console.log('Loading from stored state:', storedState);
      this.selectedItem = storedState.selectedItem;
      this.selectedCategory = storedState.selectedCategory;
      
      // KEY FIX: Use stored form data if available
      if (storedState.formData && Object.keys(storedState.formData).length > 0) {
        console.log('Using existing form data from stored state');
        this.formData = { ...storedState.formData };
      } else {
        console.log('Populating form data from sample data');
        this.populateFormData();
      }
      
      this.currentStep = storedState.currentStep || 2;
      this.isViewMode = storedState.viewMode === true;
      return;
    }

    // Fallback to redirect to first page
    console.log('No stored state found, loading default sample data');
    this.redirectToFirstPageImmediate();
  }

  private redirectToFirstPageImmediate(): void {
    console.log('Redirecting to first page immediately');
    this.clearState();
    this.router.navigate(['/sec/permohonan-surat-kemudahan/pengesyoran-permohonan']);
  } 

  private populateFormData(): void {
    if (!this.selectedItem) {
      console.log('No selected item found');
      return;
    }

    let mappingKey = '';
    
    if (this.selectedCategory === 'warganegara') {
      mappingKey = this.selectedItem.noKP;
      console.log('Warganegara mapping key:', mappingKey);
    } else if (this.selectedCategory === 'warga_asing') {
      mappingKey = this.selectedItem.noPassport;
      console.log('Warga Asing mapping key:', mappingKey);
    }

    const mappedData = this.sampleDataMapping[mappingKey];
    console.log('Mapped data found:', mappedData);

    if (mappedData) {
      this.formData = { ...mappedData };
      
      if (this.selectedCategory === 'warga_asing') {
        this.formData.noKP = mappingKey;
      }
      
      console.log('Form data populated:', this.formData);
    } else {
      console.log('No mapped data found, using fallback');
      this.populateFallbackData();
    }
  }

  private populateFallbackData(): void {
    if (this.selectedCategory === 'warganegara') {
      this.formData = {
        noKP: this.selectedItem.noKP || '',
        warganegara: 'Malaysia',
        nama: this.selectedItem.nama || '',
        alamat: ['Alamat tidak tersedia', '', ''],
        poskod: '00000',
        bandar: 'Tidak dinyatakan',
        negeri: 'Tidak dinyatakan',
        tujuanPermohonan: 'Permohonan surat kemudahan untuk urusan rasmi.',
        email: 'email@example.com'
      };
    } else if (this.selectedCategory === 'warga_asing') {
      this.formData = {
        noKP: this.selectedItem.noPassport || '',
        warganegara: this.selectedItem.warganegara || 'Unknown',
        nama: this.selectedItem.nama || '',
        alamat: ['Address not available', '', ''],
        poskod: '00000',
        bandar: 'Not specified',
        negeri: 'Not specified',
        tujuanPermohonan: 'Application for convenience letter for official purposes.',
        email: 'email@example.com'
      };
    }
  }

  /**
   * Save current state to memory - UPDATED to include current form data
   */
  private saveState(): void {
    const state: ApplicationState = {
      selectedItem: this.selectedItem,
      selectedCategory: this.selectedCategory,
      formData: { ...this.formData }, // KEY FIX: Always save current form data
      currentStep: this.currentStep,
      viewMode: this.isViewMode
    };
    
    try {
      // Using a simple in-memory storage approach that works in Claude.ai
      (window as any)[this.STATE_KEY] = state;
      console.log('State saved with form data:', state);
    } catch (error) {
      console.error('Error saving state:', error);
    }
  }

  /**
   * Load state from memory
   */
  private loadState(): ApplicationState | null {
    try {
      // Using a simple in-memory storage approach that works in Claude.ai
      const state = (window as any)[this.STATE_KEY];
      console.log('State loaded:', state);
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

  // Navigation methods - UPDATED to always save current form data
  goNext(): void {
    this.saveState(); // Save current state before navigation (including any form changes)
    
    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index !== -1 && index + 1 < this.steps.length) {
      this.router.navigate([this.steps[index + 1].route], {
        state: { 
          selectedItem: this.selectedItem, 
          category: this.selectedCategory,
          formData: { ...this.formData }, // KEY FIX: Always pass current form data
          currentStep: this.steps[index + 1].number,
          viewMode: this.isViewMode  // Pass view mode
        }
      });
    }
  }

  goBack(): void {
    this.saveState(); // Save current state before navigation (including any form changes)
    
    const index = this.steps.findIndex(s => s.number === this.currentStep);
    if (index > 0) {
      this.router.navigate([this.steps[index - 1].route], {
        state: { 
          selectedItem: this.selectedItem, 
          category: this.selectedCategory,
          formData: { ...this.formData }, // KEY FIX: Always pass current form data
          currentStep: this.steps[index - 1].number,
          viewMode: this.isViewMode  // Pass view mode
        }
      });
    }
  }

  // Stepper helper methods
  isStepActive(stepNumber: number): boolean {
    return this.currentStep === stepNumber;
  }

  isStepCompleted(stepNumber: number): boolean {
    return this.currentStep > stepNumber;
  }

  goToStep(stepNumber: number): void {
    if (stepNumber >= 1 && stepNumber <= this.totalSteps) {
      this.saveState(); // Save current state before navigation
      this.currentStep = stepNumber;
      this.router.navigate([this.steps[stepNumber - 1].route], {
        state: { 
          selectedItem: this.selectedItem, 
          category: this.selectedCategory,
          formData: { ...this.formData }, // KEY FIX: Always pass current form data
          currentStep: stepNumber,
          viewMode: this.isViewMode  // Pass view mode
        }
      });
    }
  }

  // Method to get formatted address display
  getFormattedAddress(): string {
    return this.formData.alamat.filter(addr => addr.trim() !== '').join(', ');
  }

  // Helper method to check if form data is loaded
  isFormDataLoaded(): boolean {
    return this.formData.nama !== '' || this.formData.noKP !== '';
  }

  // Method to refresh data (for debugging)
  refreshData(): void {
    console.log('Refreshing data...');
    this.loadSelectedData();
  }

  // Method to reset application state (useful for testing)
  resetApplicationState(): void {
    this.clearState();
    console.log('Application state reset');
  }

  // Component cleanup
  ngOnDestroy(): void {
    // Save state before component is destroyed
    this.saveState();
  }

  // Helper method to check if we're in edit mode
  isEditMode(): boolean {
    return !this.isViewMode;
  }

  // Helper method to get mode display text
  getModeText(): string {
    return this.isViewMode ? 'Paparan' : 'Kemaskini';
  }

  // NEW: Form field change handlers to update form data in real-time
  onFormFieldChange(): void {
    // This method can be called whenever form fields change
    // to ensure the state is updated with current form values
    this.saveState();
  }

  // NEW: Method to handle form data updates
  updateFormData(field: string, value: any): void {
    if (field.includes('.')) {
      // Handle nested properties like alamat[0]
      const parts = field.split('.');
      if (parts[0] === 'alamat' && parts[1]) {
        const index = parseInt(parts[1]);
        if (!isNaN(index) && index >= 0 && index < this.formData.alamat.length) {
          this.formData.alamat[index] = value;
        }
      }
    } else {
      // Handle direct properties
      (this.formData as any)[field] = value;
    }
    
    // Save state immediately when form data changes
    this.saveState();
  }
}