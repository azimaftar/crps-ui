import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPenumpangRawatanHospitalComponent } from './maklumat-penumpang-rawatan-hospital.component';

describe('MaklumatPenumpangRawatanHospitalComponent', () => {
  let component: MaklumatPenumpangRawatanHospitalComponent;
  let fixture: ComponentFixture<MaklumatPenumpangRawatanHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPenumpangRawatanHospitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPenumpangRawatanHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
