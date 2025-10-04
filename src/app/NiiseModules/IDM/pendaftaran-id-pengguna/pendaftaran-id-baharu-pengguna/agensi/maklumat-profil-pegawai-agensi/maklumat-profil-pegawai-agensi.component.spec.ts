import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilPegawaiAgensiComponent } from './maklumat-profil-pegawai-agensi.component';

describe('MaklumatProfilPegawaiAgensiComponent', () => {
  let component: MaklumatProfilPegawaiAgensiComponent;
  let fixture: ComponentFixture<MaklumatProfilPegawaiAgensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilPegawaiAgensiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilPegawaiAgensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
