import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometrikCapjariBothComponent } from './biometrik-capjari-both.component';

describe('BiometrikCapjariBothComponent', () => {
  let component: BiometrikCapjariBothComponent;
  let fixture: ComponentFixture<BiometrikCapjariBothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiometrikCapjariBothComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiometrikCapjariBothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
