import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BahagianDataBiometrikWajahComponent } from './bahagian-data-biometrik-wajah.component';

describe('BahagianDataBiometrikWajahComponent', () => {
  let component: BahagianDataBiometrikWajahComponent;
  let fixture: ComponentFixture<BahagianDataBiometrikWajahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BahagianDataBiometrikWajahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BahagianDataBiometrikWajahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
