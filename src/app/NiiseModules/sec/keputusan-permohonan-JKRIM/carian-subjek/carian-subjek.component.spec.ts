import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianComponentJKRIM } from './carian-subjek.component';

describe('CarianComponent', () => {
  let component: CarianComponentJKRIM;
  let fixture: ComponentFixture<CarianComponentJKRIM>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianComponentJKRIM]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianComponentJKRIM);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
