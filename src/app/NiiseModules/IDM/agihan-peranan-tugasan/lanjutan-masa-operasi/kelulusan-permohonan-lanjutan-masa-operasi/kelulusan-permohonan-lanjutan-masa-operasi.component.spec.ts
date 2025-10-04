import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelulusanPermohonanLanjutanMasaOperasiComponent } from './kelulusan-permohonan-lanjutan-masa-operasi.component';

describe('PermohonanTambahPerananComponent', () => {
  let component: KelulusanPermohonanLanjutanMasaOperasiComponent;
  let fixture: ComponentFixture<KelulusanPermohonanLanjutanMasaOperasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelulusanPermohonanLanjutanMasaOperasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelulusanPermohonanLanjutanMasaOperasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
