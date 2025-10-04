import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianPemerhatianComponent } from './carian-pemerhatian.component';

describe('CarianPemerhatianComponent', () => {
  let component: CarianPemerhatianComponent;
  let fixture: ComponentFixture<CarianPemerhatianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianPemerhatianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianPemerhatianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
