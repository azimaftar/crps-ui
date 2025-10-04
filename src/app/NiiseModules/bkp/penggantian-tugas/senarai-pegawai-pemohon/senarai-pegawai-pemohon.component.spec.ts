import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { SenaraiPegawaiPemohonComponent } from './senarai-pegawai-pemohon.component';

// CoreUI components
import { CardModule, BadgeModule, ButtonModule, FormModule, GridModule, ListGroupModule, ProgressModule, NavModule } from '@coreui/angular';

describe('PermohonanGantianTugasComponent', () => {
  let component: SenaraiPegawaiPemohonComponent;
  let fixture: ComponentFixture<SenaraiPegawaiPemohonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SenaraiPegawaiPemohonComponent,
        CommonModule,
        ReactiveFormsModule,
        RouterTestingModule,
        CardModule,
        BadgeModule,
        ButtonModule,
        FormModule,
        GridModule,
        ListGroupModule,
        ProgressModule,
        NavModule,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SenaraiPegawaiPemohonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.searchForm.get('kategori')?.value).toBe('');
    expect(component.searchForm.get('noPengenalan')?.value).toBe('');
  });

  it('should load initial sample data', () => {
    expect(component.subjects.length).toBeGreaterThan(0);
  });

  it('should validate No Pengenalan format', () => {
    const noPengenalanControl = component.searchForm.get('noPengenalan');
    
    // Test invalid format
    noPengenalanControl?.setValue('123456');
    noPengenalanControl?.markAsTouched();
    expect(noPengenalanControl?.hasError('pattern')).toBeTruthy();
    
    // Test valid format
    noPengenalanControl?.setValue('850123-08-5432');
    expect(noPengenalanControl?.hasError('pattern')).toBeFalsy();
  });

  it('should change active tab', () => {
    component.setActiveTab('maklumat');
    expect(component.activeTab).toBe('maklumat');
  });

  it('should perform search when form is valid', () => {
    spyOn(component, 'onSearch').and.callThrough();
    
    component.searchForm.get('noPengenalan')?.setValue('850123-08-5432');
    component.onSearch();
    
    expect(component.onSearch).toHaveBeenCalled();
  });

  it('should clear search form and reset subjects', () => {
    component.searchForm.get('noPengenalan')?.setValue('123456');
    component.selectedSubject = component.subjects[0];
    
    component.clearSearch();
    
    expect(component.searchForm.get('noPengenalan')?.value).toBe('');
    expect(component.selectedSubject).toBeNull();
  });

  it('should handle print report when subject is selected', () => {
    spyOn(window, 'print');
    component.selectedSubject = component.subjects[0];
    
    component.printReport();
    
    expect(window.print).toHaveBeenCalled();
  });

  it('should not allow actions when no subject is selected', () => {
    component.selectedSubject = null;
    
    spyOn(window, 'print');
    component.printReport();
    
    expect(window.print).not.toHaveBeenCalled();
  });

  it('should display correct number of table rows', () => {
    fixture.detectChanges();
    const tableRows = fixture.debugElement.queryAll(By.css('tbody tr'));
    
    if (component.subjects.length > 0) {
      expect(tableRows.length).toBe(component.subjects.length);
    } else {
      // Should show "Tiada data dijumpai" row
      expect(tableRows.length).toBe(1);
      expect(tableRows[0].nativeElement.textContent).toContain('Tiada data dijumpai');
    }
  });

  it('should mark form as touched when invalid', () => {
    component.searchForm.get('noPengenalan')?.setValue('invalid');
    component.onSearch();
    
    expect(component.searchForm.get('noPengenalan')?.touched).toBeTruthy();
  });

  it('should handle add new subject action', () => {
    spyOn(console, 'log');
    component.addNewSubject();
    
    expect(console.log).toHaveBeenCalledWith('Add new subject clicked');
  });
});