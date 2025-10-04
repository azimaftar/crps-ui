import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianSemakanPermohonanComponent } from './carian-semakan-permohonan.component';

describe('CarianSemakanPermohonanComponent', () => {
  let component: CarianSemakanPermohonanComponent;
  let fixture: ComponentFixture<CarianSemakanPermohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianSemakanPermohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianSemakanPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
