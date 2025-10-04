import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometrikModalComponent } from './biometrik-modal.component';

describe('BiometrikModalComponent', () => {
  let component: BiometrikModalComponent;
  let fixture: ComponentFixture<BiometrikModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiometrikModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiometrikModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
