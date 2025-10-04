import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanAuditTrailComponent } from './pengurusan-audit-trail.component';

describe('PengurusanAuditTrailComponent', () => {
  let component: PengurusanAuditTrailComponent;
  let fixture: ComponentFixture<PengurusanAuditTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengurusanAuditTrailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengurusanAuditTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
