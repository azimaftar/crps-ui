import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbasanBiometrikWajahDanIrisComponent } from './imbasan-biometrik-wajah-dan-iris.component';

describe('ImbasanBiometrikWajahDanIrisComponent', () => {
  let component: ImbasanBiometrikWajahDanIrisComponent;
  let fixture: ComponentFixture<ImbasanBiometrikWajahDanIrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImbasanBiometrikWajahDanIrisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbasanBiometrikWajahDanIrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
