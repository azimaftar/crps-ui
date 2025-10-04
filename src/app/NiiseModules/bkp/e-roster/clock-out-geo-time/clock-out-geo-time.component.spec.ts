import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockOutGeoTimeComponent } from './clock-out-geo-time.component';

describe('ClockOutGeoTimeComponent', () => {
  let component: ClockOutGeoTimeComponent;
  let fixture: ComponentFixture<ClockOutGeoTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockOutGeoTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockOutGeoTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
