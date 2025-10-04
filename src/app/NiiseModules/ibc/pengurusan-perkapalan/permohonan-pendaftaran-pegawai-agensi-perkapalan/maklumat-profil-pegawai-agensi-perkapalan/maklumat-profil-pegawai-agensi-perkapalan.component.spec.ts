import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilPegawaiAgensiPerkapalanComponent } from './maklumat-profil-pegawai-agensi-perkapalan.component';

describe('MaklumatProfilPegawaiAgensiPerkapalanComponent', () => {
  let component: MaklumatProfilPegawaiAgensiPerkapalanComponent;
  let fixture: ComponentFixture<MaklumatProfilPegawaiAgensiPerkapalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilPegawaiAgensiPerkapalanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilPegawaiAgensiPerkapalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
