import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemeriksaanMasukVisaComponent } from './pemeriksaan-masuk-visa.component';

describe('PemeriksaanMasukVisaComponent', () => {
  let component: PemeriksaanMasukVisaComponent;
  let fixture: ComponentFixture<PemeriksaanMasukVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemeriksaanMasukVisaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemeriksaanMasukVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
