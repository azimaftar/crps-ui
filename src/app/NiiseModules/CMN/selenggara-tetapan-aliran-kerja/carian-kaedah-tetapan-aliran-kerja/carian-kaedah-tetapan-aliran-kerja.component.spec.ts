import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianKaedahTetapanAliranKerjaComponent } from './carian-kaedah-tetapan-aliran-kerja.component';

describe('CarianKaedahTetapanAliranKerjaComponent', () => {
  let component: CarianKaedahTetapanAliranKerjaComponent;
  let fixture: ComponentFixture<CarianKaedahTetapanAliranKerjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianKaedahTetapanAliranKerjaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianKaedahTetapanAliranKerjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
