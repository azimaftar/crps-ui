import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesahanLaporanKejadianComponent } from './pengesahan-laporan-kejadian.component';

describe('PengesahanLaporanKejadianComponent', () => {
  let component: PengesahanLaporanKejadianComponent;
  let fixture: ComponentFixture<PengesahanLaporanKejadianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesahanLaporanKejadianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesahanLaporanKejadianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
