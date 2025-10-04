import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemeriksaanMasukComponent } from './pemeriksaan-masuk.component';

describe('PemeriksaanMasukComponent', () => {
  let component: PemeriksaanMasukComponent;
  let fixture: ComponentFixture<PemeriksaanMasukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemeriksaanMasukComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemeriksaanMasukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
