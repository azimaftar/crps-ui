import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BahagianDataBiometrikStatusImbasComponent } from './bahagian-data-biometrik-status-imbas.component';

describe('BahagianDataBiometrikStatusImbasComponent', () => {
  let component: BahagianDataBiometrikStatusImbasComponent;
  let fixture: ComponentFixture<BahagianDataBiometrikStatusImbasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BahagianDataBiometrikStatusImbasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BahagianDataBiometrikStatusImbasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
