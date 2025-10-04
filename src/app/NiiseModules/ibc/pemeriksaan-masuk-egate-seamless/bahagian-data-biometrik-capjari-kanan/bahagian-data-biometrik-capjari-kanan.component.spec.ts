import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BahagianDataBiometrikCapjariKananComponent } from './bahagian-data-biometrik-capjari-kanan.component';

describe('BahagianDataBiometrikCapjariKananComponent', () => {
  let component: BahagianDataBiometrikCapjariKananComponent;
  let fixture: ComponentFixture<BahagianDataBiometrikCapjariKananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BahagianDataBiometrikCapjariKananComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BahagianDataBiometrikCapjariKananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
