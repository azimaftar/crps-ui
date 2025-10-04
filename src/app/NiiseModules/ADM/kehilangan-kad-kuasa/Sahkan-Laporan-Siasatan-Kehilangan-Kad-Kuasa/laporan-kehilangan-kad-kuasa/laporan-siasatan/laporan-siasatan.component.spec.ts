import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporanSiasatanComponent } from './laporan-siasatan.component';

describe('MaklumatLaporanSiasatanComponent', () => {
  let component: LaporanSiasatanComponent;
  let fixture: ComponentFixture<LaporanSiasatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaporanSiasatanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaporanSiasatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
