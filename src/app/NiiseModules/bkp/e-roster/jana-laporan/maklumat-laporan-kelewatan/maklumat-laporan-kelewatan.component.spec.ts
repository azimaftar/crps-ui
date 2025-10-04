import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatLaporanLewatComponent } from './maklumat-laporan-kelewatan.component';

describe('MaklumatLaporanLewatComponent', () => {
  let component: MaklumatLaporanLewatComponent;
  let fixture: ComponentFixture<MaklumatLaporanLewatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatLaporanLewatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatLaporanLewatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
