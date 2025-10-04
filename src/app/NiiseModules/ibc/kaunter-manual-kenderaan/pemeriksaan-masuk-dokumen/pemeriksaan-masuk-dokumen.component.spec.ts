import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemeriksaanMasukDokumenComponent } from './pemeriksaan-masuk-dokumen.component';

describe('PemeriksaanMasukDokumenComponent', () => {
  let component: PemeriksaanMasukDokumenComponent;
  let fixture: ComponentFixture<PemeriksaanMasukDokumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemeriksaanMasukDokumenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemeriksaanMasukDokumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
