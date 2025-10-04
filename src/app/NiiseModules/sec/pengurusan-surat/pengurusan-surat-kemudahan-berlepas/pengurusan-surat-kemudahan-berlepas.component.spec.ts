import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanSuratKemudahanBerlepasComponent } from './pengurusan-surat-kemudahan-berlepas.component';

describe('PermohonanSuratKemudahanBerlepasComponent', () => {
  let component: PengurusanSuratKemudahanBerlepasComponent;
  let fixture: ComponentFixture<PengurusanSuratKemudahanBerlepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengurusanSuratKemudahanBerlepasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengurusanSuratKemudahanBerlepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
