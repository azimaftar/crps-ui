import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemeriksaanMasukEgateSeamlessComponent } from './pemeriksaan-masuk-egate-seamless.component';

describe('PemeriksaanMasukEgateSeamlessComponent', () => {
  let component: PemeriksaanMasukEgateSeamlessComponent;
  let fixture: ComponentFixture<PemeriksaanMasukEgateSeamlessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemeriksaanMasukEgateSeamlessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemeriksaanMasukEgateSeamlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
