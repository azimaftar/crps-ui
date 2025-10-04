import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDashboardV2Component } from './adm-dashboard-v2.component';

describe('AdmDashboardV2Component', () => {
  let component: AdmDashboardV2Component;
  let fixture: ComponentFixture<AdmDashboardV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmDashboardV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmDashboardV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
