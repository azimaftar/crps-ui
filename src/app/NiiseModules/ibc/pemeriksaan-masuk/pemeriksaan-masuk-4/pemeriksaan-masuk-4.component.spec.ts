import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemeriksaanMasuk4Component } from './pemeriksaan-masuk-4.component';

describe('PemeriksaanMasuk4Component', () => {
  let component: PemeriksaanMasuk4Component;
  let fixture: ComponentFixture<PemeriksaanMasuk4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemeriksaanMasuk4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemeriksaanMasuk4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
