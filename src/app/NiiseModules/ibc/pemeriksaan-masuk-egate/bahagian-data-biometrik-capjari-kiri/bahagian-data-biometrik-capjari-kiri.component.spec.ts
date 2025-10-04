import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BahagianDataBiometrikCapjariKiriComponent } from './bahagian-data-biometrik-capjari-kiri.component';

describe('BahagianDataBiometrikCapjariKiriComponent', () => {
  let component: BahagianDataBiometrikCapjariKiriComponent;
  let fixture: ComponentFixture<BahagianDataBiometrikCapjariKiriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BahagianDataBiometrikCapjariKiriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BahagianDataBiometrikCapjariKiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
