import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelulusanLaporanKejadianComponent } from './kelulusan-laporan-kejadian.component';

describe('KelulusanLaporanKejadianComponent', () => {
  let component: KelulusanLaporanKejadianComponent;
  let fixture: ComponentFixture<KelulusanLaporanKejadianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelulusanLaporanKejadianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelulusanLaporanKejadianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
