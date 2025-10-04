import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianComponentKP } from './carian-subjek.component';

describe('CarianComponentKP', () => {
  let component: CarianComponentKP;
  let fixture: ComponentFixture<CarianComponentKP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianComponentKP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianComponentKP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
