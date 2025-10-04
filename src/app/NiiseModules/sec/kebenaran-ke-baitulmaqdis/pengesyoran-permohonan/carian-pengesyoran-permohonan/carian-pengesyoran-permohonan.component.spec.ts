import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianPengesyoranPermohonanComponent } from './carian-pengesyoran-permohonan.component';

describe('CarianPengesyoranPermohonanComponent', () => {
  let component: CarianPengesyoranPermohonanComponent;
  let fixture: ComponentFixture<CarianPengesyoranPermohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianPengesyoranPermohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianPengesyoranPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
