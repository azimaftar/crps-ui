import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOnToJoinShipMainComponent } from './sign-on-to-join-ship-main.component';

describe('SignOnToJoinShipMainComponent', () => {
  let component: SignOnToJoinShipMainComponent;
  let fixture: ComponentFixture<SignOnToJoinShipMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignOnToJoinShipMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignOnToJoinShipMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
