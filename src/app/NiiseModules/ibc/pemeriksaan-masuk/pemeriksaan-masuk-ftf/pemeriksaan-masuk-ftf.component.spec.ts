import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemeriksaanMasukFtfComponent } from './pemeriksaan-masuk-ftf.component';

describe('PemeriksaanMasukFtfComponent', () => {
  let component: PemeriksaanMasukFtfComponent;
  let fixture: ComponentFixture<PemeriksaanMasukFtfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemeriksaanMasukFtfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemeriksaanMasukFtfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
