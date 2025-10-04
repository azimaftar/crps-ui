import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparanDanCetakanSuratArahanPemulanganKadKuasaComponent } from './paparan-dan-cetakan-surat-arahan-pemulangan-kad-kuasa.component';

describe('PaparanDanCetakanSuratArahanPemulanganKadKuasaComponent', () => {
  let component: PaparanDanCetakanSuratArahanPemulanganKadKuasaComponent;
  let fixture: ComponentFixture<PaparanDanCetakanSuratArahanPemulanganKadKuasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparanDanCetakanSuratArahanPemulanganKadKuasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparanDanCetakanSuratArahanPemulanganKadKuasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
