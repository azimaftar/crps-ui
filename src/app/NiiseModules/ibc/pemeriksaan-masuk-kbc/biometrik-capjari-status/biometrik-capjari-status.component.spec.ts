import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometrikCapjariStatusComponent } from './biometrik-capjari-status.component';

describe('BiometrikCapjariStatusComponent', () => {
  let component: BiometrikCapjariStatusComponent;
  let fixture: ComponentFixture<BiometrikCapjariStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiometrikCapjariStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiometrikCapjariStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
