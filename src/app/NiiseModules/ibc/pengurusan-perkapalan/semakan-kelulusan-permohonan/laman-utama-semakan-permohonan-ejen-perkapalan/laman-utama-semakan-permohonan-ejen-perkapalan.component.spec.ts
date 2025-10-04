import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamanUtamaSemakanPermohonanEjenPerkapalanComponent } from './laman-utama-semakan-permohonan-ejen-perkapalan.component';

describe('LamanUtamaSemakanPermohonanEjenPerkapalanComponent', () => {
  let component: LamanUtamaSemakanPermohonanEjenPerkapalanComponent;
  let fixture: ComponentFixture<LamanUtamaSemakanPermohonanEjenPerkapalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LamanUtamaSemakanPermohonanEjenPerkapalanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LamanUtamaSemakanPermohonanEjenPerkapalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
