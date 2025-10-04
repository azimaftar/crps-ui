import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahkanLaporanPemulanganPerampasanKadKuasaComponent } from './sahkan-laporan-pemulangan-perampasan-kad-kuasa.component';

describe('SahkanLaporanPemulanganPerampasanKadKuasaComponent', () => {
  let component: SahkanLaporanPemulanganPerampasanKadKuasaComponent;
  let fixture: ComponentFixture<SahkanLaporanPemulanganPerampasanKadKuasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SahkanLaporanPemulanganPerampasanKadKuasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SahkanLaporanPemulanganPerampasanKadKuasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
