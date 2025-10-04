import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BahagianDataBiometrikComponent } from './bahagian-data-biometrik.component';

describe('BahagianDataBiometrikComponent', () => {
  let component: BahagianDataBiometrikComponent;
  let fixture: ComponentFixture<BahagianDataBiometrikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BahagianDataBiometrikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BahagianDataBiometrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
