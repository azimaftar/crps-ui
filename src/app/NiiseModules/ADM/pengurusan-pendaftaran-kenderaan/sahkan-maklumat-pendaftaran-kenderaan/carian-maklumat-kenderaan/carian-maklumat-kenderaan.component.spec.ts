import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianMaklumatKenderaanComponent } from './carian-maklumat-kenderaan.component';

describe('CarianMaklumatKenderaanComponent', () => {
  let component: CarianMaklumatKenderaanComponent;
  let fixture: ComponentFixture<CarianMaklumatKenderaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianMaklumatKenderaanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianMaklumatKenderaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
