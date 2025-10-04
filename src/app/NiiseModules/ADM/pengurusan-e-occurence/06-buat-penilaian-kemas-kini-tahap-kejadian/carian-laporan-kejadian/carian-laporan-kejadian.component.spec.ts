import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianLaporanKejadianComponent } from './carian-laporan-kejadian.component';

describe('CarianLaporanKejadianComponent', () => {
  let component: CarianLaporanKejadianComponent;
  let fixture: ComponentFixture<CarianLaporanKejadianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianLaporanKejadianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianLaporanKejadianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
