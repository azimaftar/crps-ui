import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOnToJoinShipComponent } from './sign-on-to-join-ship.component';

describe('SignOnToJoinShipComponent', () => {
  let component: SignOnToJoinShipComponent;
  let fixture: ComponentFixture<SignOnToJoinShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignOnToJoinShipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignOnToJoinShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
