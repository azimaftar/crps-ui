import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometrikWajahIrisStatusComponent } from './biometrik-wajah-iris-status.component';

describe('BiometrikWajahIrisStatusComponent', () => {
  let component: BiometrikWajahIrisStatusComponent;
  let fixture: ComponentFixture<BiometrikWajahIrisStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiometrikWajahIrisStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiometrikWajahIrisStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
