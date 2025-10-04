import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanKenderaanDashboardComponent } from './pengurusan-kenderaan-dashboard.component';

describe('PengurusanKenderaanDashboardComponent', () => {
  let component: PengurusanKenderaanDashboardComponent;
  let fixture: ComponentFixture<PengurusanKenderaanDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengurusanKenderaanDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengurusanKenderaanDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
