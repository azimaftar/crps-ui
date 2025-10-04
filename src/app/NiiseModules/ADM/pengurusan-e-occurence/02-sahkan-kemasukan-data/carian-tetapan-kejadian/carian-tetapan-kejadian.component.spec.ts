import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianTetapanKejadianComponent } from './carian-tetapan-kejadian.component';

describe('CarianTetapanKejadianComponent', () => {
  let component: CarianTetapanKejadianComponent;
  let fixture: ComponentFixture<CarianTetapanKejadianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianTetapanKejadianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianTetapanKejadianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
