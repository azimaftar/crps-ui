import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemeriksaanMasuk1Component } from './pemeriksaan-masuk-1.component';

describe('PemeriksaanMasuk1Component', () => {
  let component: PemeriksaanMasuk1Component;
  let fixture: ComponentFixture<PemeriksaanMasuk1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemeriksaanMasuk1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemeriksaanMasuk1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
