import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPegawaiPemohonComponent } from './maklumat-pegawai-pemohon.component';

describe('MaklumatPegawaiPemohonComponent', () => {
  let component: MaklumatPegawaiPemohonComponent;
  let fixture: ComponentFixture<MaklumatPegawaiPemohonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPegawaiPemohonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaklumatPegawaiPemohonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
