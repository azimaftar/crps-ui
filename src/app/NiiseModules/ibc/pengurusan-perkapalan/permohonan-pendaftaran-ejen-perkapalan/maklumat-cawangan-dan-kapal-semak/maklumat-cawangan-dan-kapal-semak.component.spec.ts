import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatCawanganDanKapalSemakComponent } from './maklumat-cawangan-dan-kapal-semak.component';

describe('MaklumatCawanganDanKapalSemakComponent', () => {
  let component: MaklumatCawanganDanKapalSemakComponent;
  let fixture: ComponentFixture<MaklumatCawanganDanKapalSemakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatCawanganDanKapalSemakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatCawanganDanKapalSemakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
