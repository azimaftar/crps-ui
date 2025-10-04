import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianMaklumatKakitanganComponent } from './carian-maklumat-kakitangan.component';

describe('CarianMaklumatKakitanganComponent', () => {
  let component: CarianMaklumatKakitanganComponent;
  let fixture: ComponentFixture<CarianMaklumatKakitanganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianMaklumatKakitanganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianMaklumatKakitanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
