import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatLaporanSiasatanComponent } from './maklumat-laporan-siasatan.component';

describe('MaklumatLaporanSiasatanComponent', () => {
  let component: MaklumatLaporanSiasatanComponent;
  let fixture: ComponentFixture<MaklumatLaporanSiasatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatLaporanSiasatanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatLaporanSiasatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
