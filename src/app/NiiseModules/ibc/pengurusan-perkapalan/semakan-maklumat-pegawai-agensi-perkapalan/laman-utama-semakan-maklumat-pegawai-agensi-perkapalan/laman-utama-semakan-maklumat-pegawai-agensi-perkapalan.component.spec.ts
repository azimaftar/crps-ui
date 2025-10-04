import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamanUtamaSemakanMaklumatPegawaiAgensiPerkapalanComponent } from './laman-utama-semakan-maklumat-pegawai-agensi-perkapalan.component';

describe('LamanUtamaSemakanMaklumatPegawaiAgensiPerkapalanComponent', () => {
  let component: LamanUtamaSemakanMaklumatPegawaiAgensiPerkapalanComponent;
  let fixture: ComponentFixture<LamanUtamaSemakanMaklumatPegawaiAgensiPerkapalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LamanUtamaSemakanMaklumatPegawaiAgensiPerkapalanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LamanUtamaSemakanMaklumatPegawaiAgensiPerkapalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
