import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBiometrikComponent } from './status-biometrik.component';

describe('StatusBiometrikComponent', () => {
  let component: StatusBiometrikComponent;
  let fixture: ComponentFixture<StatusBiometrikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusBiometrikComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusBiometrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
