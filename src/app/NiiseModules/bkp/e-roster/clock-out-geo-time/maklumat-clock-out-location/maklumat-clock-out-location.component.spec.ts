import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatClockOutComponent } from './maklumat-clock-out-location.component';

describe('MaklumatClockOutComponent', () => {
  let component: MaklumatClockOutComponent;
  let fixture: ComponentFixture<MaklumatClockOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatClockOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatClockOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
