import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenetapanKoordinasiPegawaiComponent } from './penetapan-koordinasi-pegawai.component';

describe('PenetapanKoordinasiPegawaiComponent', () => {
  let component: PenetapanKoordinasiPegawaiComponent;
  let fixture: ComponentFixture<PenetapanKoordinasiPegawaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PenetapanKoordinasiPegawaiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PenetapanKoordinasiPegawaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
