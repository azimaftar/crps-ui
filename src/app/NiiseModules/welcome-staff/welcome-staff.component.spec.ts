import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeStaffComponent } from './welcome-staff.component';

describe('WelcomeStaffComponent', () => {
  let component: WelcomeStaffComponent;
  let fixture: ComponentFixture<WelcomeStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeStaffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
