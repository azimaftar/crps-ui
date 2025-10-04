import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilPegawaiComponent } from './maklumat-profil-pegawai.component';

describe('MaklumatProfilPegawaiComponent', () => {
  let component: MaklumatProfilPegawaiComponent;
  let fixture: ComponentFixture<MaklumatProfilPegawaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilPegawaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilPegawaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
