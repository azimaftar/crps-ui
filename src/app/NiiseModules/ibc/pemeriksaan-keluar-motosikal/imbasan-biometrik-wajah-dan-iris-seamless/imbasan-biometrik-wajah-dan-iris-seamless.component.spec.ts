import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbasanBiometrikWajahDanIrisSeamlessComponent } from './imbasan-biometrik-wajah-dan-iris-seamless.component';

describe('ImbasanBiometrikWajahDanIrisSeamlessComponent', () => {
  let component: ImbasanBiometrikWajahDanIrisSeamlessComponent;
  let fixture: ComponentFixture<ImbasanBiometrikWajahDanIrisSeamlessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImbasanBiometrikWajahDanIrisSeamlessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbasanBiometrikWajahDanIrisSeamlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
