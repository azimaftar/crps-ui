import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturingFaceAndIrisMainComponent } from './capturing-face-and-iris-main.component';

describe('CapturingFaceAndIrisMainComponent', () => {
  let component: CapturingFaceAndIrisMainComponent;
  let fixture: ComponentFixture<CapturingFaceAndIrisMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapturingFaceAndIrisMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapturingFaceAndIrisMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
