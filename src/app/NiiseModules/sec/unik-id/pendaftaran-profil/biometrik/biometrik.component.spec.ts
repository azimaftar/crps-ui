import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometrikComponent } from './biometrik.component';

describe('BiometrikComponent', () => {
  let component: BiometrikComponent;
  let fixture: ComponentFixture<BiometrikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiometrikComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BiometrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
