import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesahanPermohonanLanjutanMasaOperasiComponent } from './pengesahan-permohonan-lanjutan-masa-operasi.component';

describe('PermohonanTambahPerananComponent', () => {
  let component: PengesahanPermohonanLanjutanMasaOperasiComponent;
  let fixture: ComponentFixture<PengesahanPermohonanLanjutanMasaOperasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesahanPermohonanLanjutanMasaOperasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesahanPermohonanLanjutanMasaOperasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
