import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamanUtamaPermohonanPendaftaranEjenComponent } from './laman-utama-permohonan-pendaftaran-ejen.component';

describe('LamanUtamaPermohonanPendaftaranEjenComponent', () => {
  let component: LamanUtamaPermohonanPendaftaranEjenComponent;
  let fixture: ComponentFixture<LamanUtamaPermohonanPendaftaranEjenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LamanUtamaPermohonanPendaftaranEjenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LamanUtamaPermohonanPendaftaranEjenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
