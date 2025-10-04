import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EReportingComponent } from './e-reporting.component';

describe('EReportingComponent', () => {
  let component: EReportingComponent;
  let fixture: ComponentFixture<EReportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EReportingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
