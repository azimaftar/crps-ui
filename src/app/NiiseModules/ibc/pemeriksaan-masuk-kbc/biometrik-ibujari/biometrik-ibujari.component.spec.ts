import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometrikIbujariComponent } from './biometrik-ibujari.component';

describe('BiometrikIbujariComponent', () => {
  let component: BiometrikIbujariComponent;
  let fixture: ComponentFixture<BiometrikIbujariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiometrikIbujariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiometrikIbujariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
