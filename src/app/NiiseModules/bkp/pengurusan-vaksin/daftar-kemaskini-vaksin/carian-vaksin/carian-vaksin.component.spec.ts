import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianVaksinComponent } from './carian-vaksin.component';

describe('CarianVaksinComponent', () => {
  let component: CarianVaksinComponent;
  let fixture: ComponentFixture<CarianVaksinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianVaksinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianVaksinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
