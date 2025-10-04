import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometrikWajahIrisComponent } from './biometrik-wajah-iris.component';

describe('BiometrikWajahIrisComponent', () => {
  let component: BiometrikWajahIrisComponent;
  let fixture: ComponentFixture<BiometrikWajahIrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiometrikWajahIrisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiometrikWajahIrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
