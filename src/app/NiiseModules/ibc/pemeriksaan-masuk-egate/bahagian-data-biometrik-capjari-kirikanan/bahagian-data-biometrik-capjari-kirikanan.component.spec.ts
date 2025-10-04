import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BahagianDataBiometrikCapjariKirikananComponent } from './bahagian-data-biometrik-capjari-kirikanan.component';

describe('BahagianDataBiometrikCapjariKirikananComponent', () => {
  let component: BahagianDataBiometrikCapjariKirikananComponent;
  let fixture: ComponentFixture<BahagianDataBiometrikCapjariKirikananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BahagianDataBiometrikCapjariKirikananComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BahagianDataBiometrikCapjariKirikananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
