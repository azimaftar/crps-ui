import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultJariBiometrikComponent } from './result-jari-biometrik.component';

describe('ResultJariBiometrikComponent', () => {
  let component: ResultJariBiometrikComponent;
  let fixture: ComponentFixture<ResultJariBiometrikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultJariBiometrikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultJariBiometrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
