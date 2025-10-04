import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesahanLaporanSiasatanComponent } from './pengesahan-laporan-siasatan.component';

describe('PengesahanLaporanSiasatanComponent', () => {
  let component: PengesahanLaporanSiasatanComponent;
  let fixture: ComponentFixture<PengesahanLaporanSiasatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesahanLaporanSiasatanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesahanLaporanSiasatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
