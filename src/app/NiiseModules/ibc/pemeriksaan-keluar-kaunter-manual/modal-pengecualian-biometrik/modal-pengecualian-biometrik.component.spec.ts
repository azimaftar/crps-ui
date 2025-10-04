import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPengecualianBiometrikComponent } from './modal-pengecualian-biometrik.component';

describe('ModalPengecualianBiometrikComponent', () => {
  let component: ModalPengecualianBiometrikComponent;
  let fixture: ComponentFixture<ModalPengecualianBiometrikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPengecualianBiometrikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPengecualianBiometrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
