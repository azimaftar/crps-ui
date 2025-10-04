import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeputusanPengesyoranPermohonanComponent } from './keputusan-pengesyoran-permohonan.component';

describe('KeputusanPengesyoranPermohonanComponent', () => {
  let component: KeputusanPengesyoranPermohonanComponent;
  let fixture: ComponentFixture<KeputusanPengesyoranPermohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeputusanPengesyoranPermohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeputusanPengesyoranPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
