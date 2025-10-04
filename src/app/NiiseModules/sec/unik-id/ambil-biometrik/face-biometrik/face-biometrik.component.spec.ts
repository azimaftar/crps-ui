import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceBiometrikComponent } from './face-biometrik.component';

describe('FaceBiometrikComponent', () => {
  let component: FaceBiometrikComponent;
  let fixture: ComponentFixture<FaceBiometrikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceBiometrikComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FaceBiometrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
