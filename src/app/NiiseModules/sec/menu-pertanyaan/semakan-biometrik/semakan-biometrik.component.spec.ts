import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemakanBiometrikComponent } from './semakan-biometrik.component';

describe('SemakanBiometrikComponent', () => {
  let component: SemakanBiometrikComponent;
  let fixture: ComponentFixture<SemakanBiometrikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemakanBiometrikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemakanBiometrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
