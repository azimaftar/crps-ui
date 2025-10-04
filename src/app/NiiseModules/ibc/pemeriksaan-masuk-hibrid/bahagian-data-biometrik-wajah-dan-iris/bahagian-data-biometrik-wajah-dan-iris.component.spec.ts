import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BahagianDataBiometrikWajahDanIrisComponent } from './bahagian-data-biometrik-wajah-dan-iris.component';

describe('BahagianDataBiometrikWajahDanIrisComponent', () => {
  let component: BahagianDataBiometrikWajahDanIrisComponent;
  let fixture: ComponentFixture<BahagianDataBiometrikWajahDanIrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BahagianDataBiometrikWajahDanIrisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BahagianDataBiometrikWajahDanIrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
