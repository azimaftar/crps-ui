import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenilaianLaporanKejadianComponent } from './penilaian-laporan-kejadian.component';

describe('PenilaianLaporanKejadianComponent', () => {
  let component: PenilaianLaporanKejadianComponent;
  let fixture: ComponentFixture<PenilaianLaporanKejadianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PenilaianLaporanKejadianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenilaianLaporanKejadianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
