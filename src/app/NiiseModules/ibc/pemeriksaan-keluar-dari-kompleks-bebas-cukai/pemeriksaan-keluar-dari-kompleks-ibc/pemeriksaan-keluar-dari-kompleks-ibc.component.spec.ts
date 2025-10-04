import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemeriksaanKeluarDariKompleksIbcComponent } from './pemeriksaan-keluar-dari-kompleks-ibc.component';

describe('PemeriksaanKeluarDariKompleksIbcComponent', () => {
  let component: PemeriksaanKeluarDariKompleksIbcComponent;
  let fixture: ComponentFixture<PemeriksaanKeluarDariKompleksIbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemeriksaanKeluarDariKompleksIbcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemeriksaanKeluarDariKompleksIbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
