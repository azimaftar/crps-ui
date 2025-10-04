import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemeriksaanKeluarKaunterManualPilihDokumenComponent } from './pemeriksaan-keluar-kaunter-manual-pilih-dokumen.component';

describe('PemeriksaanKeluarKaunterManualPilihDokumenComponent', () => {
  let component: PemeriksaanKeluarKaunterManualPilihDokumenComponent;
  let fixture: ComponentFixture<PemeriksaanKeluarKaunterManualPilihDokumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemeriksaanKeluarKaunterManualPilihDokumenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemeriksaanKeluarKaunterManualPilihDokumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
