import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparanMaklumatPegawaiBagiPelupusanKadKuasaComponent } from './paparan-maklumat-pegawai-bagi-pelupusan-kad-kuasa.component';

describe('PaparanMaklumatPegawaiBagiPelupusanKadKuasaComponent', () => {
  let component: PaparanMaklumatPegawaiBagiPelupusanKadKuasaComponent;
  let fixture: ComponentFixture<PaparanMaklumatPegawaiBagiPelupusanKadKuasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparanMaklumatPegawaiBagiPelupusanKadKuasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparanMaklumatPegawaiBagiPelupusanKadKuasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
