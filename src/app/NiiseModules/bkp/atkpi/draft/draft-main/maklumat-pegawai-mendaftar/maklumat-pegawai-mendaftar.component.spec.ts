import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPegawaiMendaftarComponent } from './maklumat-pegawai-mendaftar.component';

describe('MaklumatPegawaiMendaftarComponent', () => {
  let component: MaklumatPegawaiMendaftarComponent;
  let fixture: ComponentFixture<MaklumatPegawaiMendaftarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPegawaiMendaftarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPegawaiMendaftarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
