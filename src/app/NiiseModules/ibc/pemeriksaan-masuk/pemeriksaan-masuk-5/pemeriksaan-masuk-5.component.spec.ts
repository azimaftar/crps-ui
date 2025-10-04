import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemeriksaanMasuk5Component } from './pemeriksaan-masuk-5.component';

describe('PemeriksaanMasuk5Component', () => {
  let component: PemeriksaanMasuk5Component;
  let fixture: ComponentFixture<PemeriksaanMasuk5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemeriksaanMasuk5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemeriksaanMasuk5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
