import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemeriksaanMasuk3Component } from './pemeriksaan-masuk-3.component';

describe('PemeriksaanMasuk3Component', () => {
  let component: PemeriksaanMasuk3Component;
  let fixture: ComponentFixture<PemeriksaanMasuk3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemeriksaanMasuk3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemeriksaanMasuk3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
