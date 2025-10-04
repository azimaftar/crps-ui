import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianPermohonanComponent } from './carian-permohonan.component';

describe('CarianPermohonanComponent', () => {
  let component: CarianPermohonanComponent;
  let fixture: ComponentFixture<CarianPermohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianPermohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
