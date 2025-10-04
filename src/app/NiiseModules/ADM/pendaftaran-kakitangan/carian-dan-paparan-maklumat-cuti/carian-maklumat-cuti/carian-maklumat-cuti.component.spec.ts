import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianMaklumatCutiComponent } from './carian-maklumat-cuti.component';

describe('CarianMaklumatCutiComponent', () => {
  let component: CarianMaklumatCutiComponent;
  let fixture: ComponentFixture<CarianMaklumatCutiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianMaklumatCutiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianMaklumatCutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
