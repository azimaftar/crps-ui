import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIbcComponent } from './dashboard-ibc.component';

describe('DashboardIbcComponent', () => {
  let component: DashboardIbcComponent;
  let fixture: ComponentFixture<DashboardIbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardIbcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardIbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
