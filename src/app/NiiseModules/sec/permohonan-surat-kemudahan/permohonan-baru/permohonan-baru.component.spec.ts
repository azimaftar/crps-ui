import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PermohonanBaruComponent } from './permohonan-baru.component';

/**
 * STEP 1: Test suite setup
 * This file contains unit tests for the PermohonanBaruComponent
 */
describe('PermohonanBaruComponent', () => {
  let component: PermohonanBaruComponent;
  let fixture: ComponentFixture<PermohonanBaruComponent>;

  /**
   * STEP 2: Test bed configuration
   * Sets up the testing module with required dependencies
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermohonanBaruComponent ],
      imports: [ FormsModule ] // Required for ngModel binding
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermohonanBaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * STEP 3: Basic component creation test
   * Verifies that the component can be created successfully
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * STEP 4: Initial state tests
   * Tests the component's initial state after creation
   */
  it('should initialize with empty form fields', () => {
    expect(component.selectedCategory).toBe('');
    expect(component.searchTerm).toBe('');
    expect(component.searchResults).toEqual([]);
  });

  it('should initialize with step 1 as current step', () => {
    expect(component.currentStep).toBe(1);
    expect(component.totalSteps).toBe(3);
  });

  /**
   * STEP 5: Search functionality tests
   * Tests the search feature and data filtering
   */
  it('should perform search with valid criteria', () => {
    // Setup test data
    component.searchTerm = 'Ahmad';
    component.selectedCategory = 'aktif';

    // Execute search
    component.performSearch();

    // Wait for async operation
    setTimeout(() => {
      expect(component.searchResults.length).toBeGreaterThan(0);
    }, 1100);
  });

  it('should show alert when search criteria is empty', () => {
    spyOn(window, 'alert');
    
    component.searchTerm = '';
    component.selectedCategory = '';
    component.performSearch();

    expect(window.alert).toHaveBeenCalledWith('Sila masukkan kriteria carian');
  });

  /**
   * STEP 6: Data filtering tests
   * Tests the filtering logic for search results
   */
  it('should filter data by search term', () => {
    component.searchTerm = '123456';
    const results = component['filterData']();
    
    expect(results.length).toBe(1);
    expect(results[0].noKP).toContain('123456');
  });

  it('should filter data by category', () => {
    component.selectedCategory = 'aktif';
    const results = component['filterData']();
    
    results.forEach(item => {
      expect(item.status).toBe('aktif');
    });
  });

  /**
   * STEP 7: Action button tests
   * Tests the various action buttons in the component
   */
  it('should show alert when viewing details', () => {
    spyOn(window, 'alert');
    
    const testItem = {
      id: 1,
      nama: 'Test User',
      noKP: '123456-78-9012'
    };

    component.viewDetails(testItem);
    expect(window.alert).toHaveBeenCalled();
  });

  it('should delete item when confirmed', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(window, 'alert');
    
    // Setup test data
    component.searchResults = [
      { id: 1, nama: 'Test User 1' },
      { id: 2, nama: 'Test User 2' }
    ];

    const testItem = { id: 1, nama: 'Test User 1' };
    component.deleteItem(testItem);

    expect(component.searchResults.length).toBe(1);
    expect(component.searchResults[0].id).toBe(2);
    expect(window.alert).toHaveBeenCalledWith('Rekod berjaya dipadam');
  });

  it('should not delete item when cancelled', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    
    // Setup test data
    component.searchResults = [
      { id: 1, nama: 'Test User 1' },
      { id: 2, nama: 'Test User 2' }
    ];

    const testItem = { id: 1, nama: 'Test User 1' };
    component.deleteItem(testItem);

    expect(component.searchResults.length).toBe(2);
  });

  /**
   * STEP 8: Form reset tests
   * Tests the form reset functionality
   */
  it('should reset form to initial state', () => {
    // Setup some data first
    component.selectedCategory = 'aktif';
    component.searchTerm = 'test';
    component.searchResults = [{ id: 1, nama: 'Test' }];
    component.currentStep = 2;

    // Reset form
    component.resetForm();

    // Verify reset
    expect(component.selectedCategory).toBe('');
    expect(component.searchTerm).toBe('');
    expect(component.searchResults).toEqual([]);
    expect(component.currentStep).toBe(1);
  });

  /**
   * STEP 9: Stepper navigation tests
   * Tests the step navigation functionality
   */
  // it('should move to next step', () => {
  //   component.currentStep = 1;
  //   component.nextStep();
  //   expect(component.currentStep).toBe(2);
  // });

  // it('should not exceed total steps', () => {
  //   component.currentStep = 3;
  //   component.nextStep();
  //   expect(component.currentStep).toBe(3);
  // });

  // it('should move to previous step', () => {
  //   component.currentStep = 2;
  //   component.previousStep();
  //   expect(component.currentStep).toBe(1);
  // });

  // it('should not go below step 1', () => {
  //   component.currentStep = 1;
  //   component.previousStep();
  //   expect(component.currentStep).toBe(1);
  // });

  it('should jump to specific step', () => {
    component.goToStep(3);
    expect(component.currentStep).toBe(3);
  });

  it('should not jump to invalid step', () => {
    component.currentStep = 2;
    component.goToStep(5); // Invalid step
    expect(component.currentStep).toBe(2); // Should remain unchanged
  });

  /**
   * STEP 10: Utility method tests
   * Tests helper methods for step management
   */
  it('should correctly identify active step', () => {
    component.currentStep = 2;
    expect(component.isStepActive(2)).toBeTruthy();
    expect(component.isStepActive(1)).toBeFalsy();
  });

  it('should correctly identify completed step', () => {
    component.currentStep = 3;
    expect(component.isStepCompleted(1)).toBeTruthy();
    expect(component.isStepCompleted(2)).toBeTruthy();
    expect(component.isStepCompleted(3)).toBeFalsy();
  });

  /**
   * STEP 11: Surat Kemudahan tests
   * Tests the document generation functionality
   */
  it('should generate surat kemudahan with data', () => {
    spyOn(window, 'alert');
    
    component.searchResults = [{ id: 1, nama: 'Test User' }];
    component.generateSuratKemudahan();
    
    expect(window.alert).toHaveBeenCalledWith('Surat Kemudahan sedang dijana...');
  });

  it('should show alert when no data for surat kemudahan', () => {
    spyOn(window, 'alert');
    
    component.searchResults = [];
    component.generateSuratKemudahan();
    
    expect(window.alert).toHaveBeenCalledWith('Tiada data untuk dijana surat kemudahan');
  });

  /**
   * STEP 12: Loading state tests
   * Tests the loading state functionality
   */
  it('should set loading state during search', () => {
    component.searchTerm = 'test';
    expect(component.isLoading).toBeFalsy();
    
    component.performSearch();
    expect(component.isLoading).toBeTruthy();
    
    // Wait for search to complete
    setTimeout(() => {
      expect(component.isLoading).toBeFalsy();
    }, 1100);
  });

  /**
   * STEP 13: Component lifecycle tests
   * Tests Angular lifecycle methods
   */
  it('should initialize component on ngOnInit', () => {
    spyOn(component as any, 'initializeComponent');
    
    component.ngOnInit();
    
    expect(component['initializeComponent']).toHaveBeenCalled();
  });

});