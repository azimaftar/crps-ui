import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometrikCapjariComponent } from './biometrik-capjari.component';

describe('BiometrikCapjariComponent', () => {
  let component: BiometrikCapjariComponent;
  let fixture: ComponentFixture<BiometrikCapjariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiometrikCapjariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiometrikCapjariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
