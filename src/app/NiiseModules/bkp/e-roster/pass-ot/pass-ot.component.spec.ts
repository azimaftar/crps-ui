import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassOtComponent } from './pass-ot.component';

describe('PassOtComponent', () => {
  let component: PassOtComponent;
  let fixture: ComponentFixture<PassOtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassOtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassOtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
