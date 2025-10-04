import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparanDanCetakanSuratPermohonanPelupusanKeCgsoComponent } from './paparan-dan-cetakan-surat-permohonan-pelupusan-ke-cgso.component';

describe('PaparanDanCetakanSuratPermohonanPelupusanKeCgsoComponent', () => {
  let component: PaparanDanCetakanSuratPermohonanPelupusanKeCgsoComponent;
  let fixture: ComponentFixture<PaparanDanCetakanSuratPermohonanPelupusanKeCgsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparanDanCetakanSuratPermohonanPelupusanKeCgsoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparanDanCetakanSuratPermohonanPelupusanKeCgsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
