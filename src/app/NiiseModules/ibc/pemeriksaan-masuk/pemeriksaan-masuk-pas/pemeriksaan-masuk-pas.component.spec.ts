import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemeriksaanMasukPasComponent } from './pemeriksaan-masuk-pas.component';

describe('PemeriksaanMasukPasComponent', () => {
  let component: PemeriksaanMasukPasComponent;
  let fixture: ComponentFixture<PemeriksaanMasukPasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemeriksaanMasukPasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemeriksaanMasukPasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
