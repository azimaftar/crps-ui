import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftApprovalComponent } from './draft-approval.component';

describe('DraftApprovalComponent', () => {
  let component: DraftApprovalComponent;
  let fixture: ComponentFixture<DraftApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftApprovalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
