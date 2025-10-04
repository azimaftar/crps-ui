import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPegawaiAgensiPerkapalanComponent } from './maklumat-pegawai-agensi-perkapalan.component';

describe('MaklumatPegawaiAgensiPerkapalanComponent', () => {
  let component: MaklumatPegawaiAgensiPerkapalanComponent;
  let fixture: ComponentFixture<MaklumatPegawaiAgensiPerkapalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPegawaiAgensiPerkapalanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPegawaiAgensiPerkapalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
