import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPegawaiPenggantiComponent } from './maklumat-pegawai-pengganti.component';

describe('MaklumatPegawaiPenggantiComponent', () => {
  let component: MaklumatPegawaiPenggantiComponent;
  let fixture: ComponentFixture<MaklumatPegawaiPenggantiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPegawaiPenggantiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaklumatPegawaiPenggantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
