import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemeriksaanMasukJoinshipComponent } from './pemeriksaan-masuk-joinship.component';

describe('PemeriksaanMasukJoinshipComponent', () => {
  let component: PemeriksaanMasukJoinshipComponent;
  let fixture: ComponentFixture<PemeriksaanMasukJoinshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemeriksaanMasukJoinshipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemeriksaanMasukJoinshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
