import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometrikWajahComponent } from './biometrik-wajah.component';

describe('BiometrikWajahComponent', () => {
  let component: BiometrikWajahComponent;
  let fixture: ComponentFixture<BiometrikWajahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiometrikWajahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiometrikWajahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
