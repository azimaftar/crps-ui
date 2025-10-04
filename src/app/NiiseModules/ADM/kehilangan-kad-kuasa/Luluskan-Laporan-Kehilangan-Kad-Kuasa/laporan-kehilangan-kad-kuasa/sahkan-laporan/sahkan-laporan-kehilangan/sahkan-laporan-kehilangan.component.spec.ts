import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahkanLaporanKehilanganComponent } from './sahkan-laporan-kehilangan.component';

describe('SahkanLaporanKehilanganComponent', () => {
  let component: SahkanLaporanKehilanganComponent;
  let fixture: ComponentFixture<SahkanLaporanKehilanganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SahkanLaporanKehilanganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SahkanLaporanKehilanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
