import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturingFaceAndIrisIbcComponent } from './capturing-face-and-iris-ibc.component';

describe('CapturingFaceAndIrisIbcComponent', () => {
  let component: CapturingFaceAndIrisIbcComponent;
  let fixture: ComponentFixture<CapturingFaceAndIrisIbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapturingFaceAndIrisIbcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapturingFaceAndIrisIbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
