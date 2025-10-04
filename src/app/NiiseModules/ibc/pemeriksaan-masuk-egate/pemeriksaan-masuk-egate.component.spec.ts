import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemeriksaanMasukEgateComponent } from './pemeriksaan-masuk-egate.component';

describe('PemeriksaanMasukEgateComponent', () => {
  let component: PemeriksaanMasukEgateComponent;
  let fixture: ComponentFixture<PemeriksaanMasukEgateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemeriksaanMasukEgateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemeriksaanMasukEgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
