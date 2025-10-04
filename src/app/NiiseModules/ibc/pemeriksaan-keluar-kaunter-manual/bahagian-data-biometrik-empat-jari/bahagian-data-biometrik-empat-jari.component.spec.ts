import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BahagianDataBiometrikEmpatJariComponent } from './bahagian-data-biometrik-empat-jari.component';

describe('BahagianDataBiometrikEmpatJariComponent', () => {
  let component: BahagianDataBiometrikEmpatJariComponent;
  let fixture: ComponentFixture<BahagianDataBiometrikEmpatJariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BahagianDataBiometrikEmpatJariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BahagianDataBiometrikEmpatJariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
