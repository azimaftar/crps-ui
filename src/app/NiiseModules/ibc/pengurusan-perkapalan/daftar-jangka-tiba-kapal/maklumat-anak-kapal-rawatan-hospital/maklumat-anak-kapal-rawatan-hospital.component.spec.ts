import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatAnakKapalRawatanHospitalComponent } from './maklumat-anak-kapal-rawatan-hospital.component';

describe('MaklumatAnakKapalRawatanHospitalComponent', () => {
  let component: MaklumatAnakKapalRawatanHospitalComponent;
  let fixture: ComponentFixture<MaklumatAnakKapalRawatanHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatAnakKapalRawatanHospitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatAnakKapalRawatanHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
