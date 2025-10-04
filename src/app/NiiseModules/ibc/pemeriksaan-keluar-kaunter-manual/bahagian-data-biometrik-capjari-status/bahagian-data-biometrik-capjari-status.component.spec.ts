import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BahagianDataBiometrikCapjariStatusComponent } from './bahagian-data-biometrik-capjari-status.component';

describe('BahagianDataBiometrikCapjariStatusComponent', () => {
  let component: BahagianDataBiometrikCapjariStatusComponent;
  let fixture: ComponentFixture<BahagianDataBiometrikCapjariStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BahagianDataBiometrikCapjariStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BahagianDataBiometrikCapjariStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
