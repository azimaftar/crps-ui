import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpatJariBiometrikComponent } from './empat-jari-biometrik.component';

describe('EmpatJariBiometrikComponent', () => {
  let component: EmpatJariBiometrikComponent;
  let fixture: ComponentFixture<EmpatJariBiometrikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpatJariBiometrikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpatJariBiometrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
