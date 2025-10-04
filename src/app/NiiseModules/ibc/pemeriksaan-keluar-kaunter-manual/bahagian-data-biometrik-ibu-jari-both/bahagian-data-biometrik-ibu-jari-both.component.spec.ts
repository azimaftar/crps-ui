import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BahagianDataBiometrikIbuJariBothComponent } from './bahagian-data-biometrik-ibu-jari-both.component';

describe('BahagianDataBiometrikIbuJariBothComponent', () => {
  let component: BahagianDataBiometrikIbuJariBothComponent;
  let fixture: ComponentFixture<BahagianDataBiometrikIbuJariBothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BahagianDataBiometrikIbuJariBothComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BahagianDataBiometrikIbuJariBothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
