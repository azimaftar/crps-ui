import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportNtlComponent } from './passport-ntl.component';

describe('PassportNtlComponent', () => {
  let component: PassportNtlComponent;
  let fixture: ComponentFixture<PassportNtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassportNtlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassportNtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
