import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermohonanLanjutanMasaOperasiComponent } from './permohonan-lanjutan-masa-operasi.component';

describe('PermohonanTambahPerananComponent', () => {
  let component: PermohonanLanjutanMasaOperasiComponent;
  let fixture: ComponentFixture<PermohonanLanjutanMasaOperasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermohonanLanjutanMasaOperasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermohonanLanjutanMasaOperasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
