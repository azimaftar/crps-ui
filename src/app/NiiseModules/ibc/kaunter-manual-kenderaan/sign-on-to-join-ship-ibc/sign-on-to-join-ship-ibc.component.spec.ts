import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOnToJoinShipIbcComponent } from './sign-on-to-join-ship-ibc.component';

describe('SignOnToJoinShipIbcComponent', () => {
  let component: SignOnToJoinShipIbcComponent;
  let fixture: ComponentFixture<SignOnToJoinShipIbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignOnToJoinShipIbcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignOnToJoinShipIbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
