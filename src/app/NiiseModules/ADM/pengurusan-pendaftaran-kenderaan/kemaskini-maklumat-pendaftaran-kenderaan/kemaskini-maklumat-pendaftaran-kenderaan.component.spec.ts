import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemaskiniMaklumatPendaftaranKenderaanComponent } from './kemaskini-maklumat-pendaftaran-kenderaan.component';

describe('KemaskiniMaklumatPendaftaranKenderaanComponent', () => {
  let component: KemaskiniMaklumatPendaftaranKenderaanComponent;
  let fixture: ComponentFixture<KemaskiniMaklumatPendaftaranKenderaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemaskiniMaklumatPendaftaranKenderaanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemaskiniMaklumatPendaftaranKenderaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
