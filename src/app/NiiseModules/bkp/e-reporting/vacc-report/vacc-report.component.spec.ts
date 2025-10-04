import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccReportComponent } from './vacc-report.component';

describe('VaccReportComponent', () => {
  let component: VaccReportComponent;
  let fixture: ComponentFixture<VaccReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaccReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
