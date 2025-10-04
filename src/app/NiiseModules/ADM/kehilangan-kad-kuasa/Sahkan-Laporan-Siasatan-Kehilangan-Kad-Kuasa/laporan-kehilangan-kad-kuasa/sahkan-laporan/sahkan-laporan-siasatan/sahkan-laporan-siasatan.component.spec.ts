import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahkanLaporanSiasatanComponent } from './sahkan-laporan-siasatan.component';

describe('SahkanLaporanKehilanganComponent', () => {
  let component: SahkanLaporanSiasatanComponent;
  let fixture: ComponentFixture<SahkanLaporanSiasatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SahkanLaporanSiasatanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SahkanLaporanSiasatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
