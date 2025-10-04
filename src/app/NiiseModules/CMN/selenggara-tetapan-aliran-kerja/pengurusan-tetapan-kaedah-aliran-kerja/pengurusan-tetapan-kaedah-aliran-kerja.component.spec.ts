import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanTetapanKaedahAliranKerjaComponent } from './pengurusan-tetapan-kaedah-aliran-kerja.component';

describe('PengurusanTetapanKaedahAliranKerjaComponent', () => {
  let component: PengurusanTetapanKaedahAliranKerjaComponent;
  let fixture: ComponentFixture<PengurusanTetapanKaedahAliranKerjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengurusanTetapanKaedahAliranKerjaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengurusanTetapanKaedahAliranKerjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
