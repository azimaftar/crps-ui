import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianMaklumatPejabatComponent } from './carian-maklumat-pejabat.component';

describe('CarianMaklumatPejabatComponent', () => {
  let component: CarianMaklumatPejabatComponent;
  let fixture: ComponentFixture<CarianMaklumatPejabatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianMaklumatPejabatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianMaklumatPejabatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
