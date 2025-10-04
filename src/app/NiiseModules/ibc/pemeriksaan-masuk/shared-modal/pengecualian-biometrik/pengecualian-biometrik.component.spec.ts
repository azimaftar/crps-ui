import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengecualianBiometrikComponent } from './pengecualian-biometrik.component';

describe('PengecualianBiometrikComponent', () => {
  let component: PengecualianBiometrikComponent;
  let fixture: ComponentFixture<PengecualianBiometrikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengecualianBiometrikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengecualianBiometrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
