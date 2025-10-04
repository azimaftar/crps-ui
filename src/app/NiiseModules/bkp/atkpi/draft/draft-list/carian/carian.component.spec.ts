import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianComponent } from './carian.component';

describe('CarianComponent', () => {
  let component: CarianComponent;
  let fixture: ComponentFixture<CarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
