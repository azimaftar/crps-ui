import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemeriksaanMasuk2Component } from './pemeriksaan-masuk-2.component';

describe('PemeriksaanMasuk2Component', () => {
  let component: PemeriksaanMasuk2Component;
  let fixture: ComponentFixture<PemeriksaanMasuk2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemeriksaanMasuk2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemeriksaanMasuk2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
