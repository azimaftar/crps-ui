import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanPemeriksaanArahanComponent } from './pengurusan-pemeriksaan-arahan.component';

describe('PengurusanPemeriksaanArahanComponent', () => {
  let component: PengurusanPemeriksaanArahanComponent;
  let fixture: ComponentFixture<PengurusanPemeriksaanArahanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengurusanPemeriksaanArahanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengurusanPemeriksaanArahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
