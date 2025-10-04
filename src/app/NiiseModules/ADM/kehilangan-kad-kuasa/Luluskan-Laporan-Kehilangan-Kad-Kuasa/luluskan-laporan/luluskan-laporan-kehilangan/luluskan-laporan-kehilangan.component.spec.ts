import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuluskanLaporanKehilanganComponent } from './luluskan-laporan-kehilangan.component';

describe('LuluskanLaporanKehilanganComponent', () => {
  let component: LuluskanLaporanKehilanganComponent;
  let fixture: ComponentFixture<LuluskanLaporanKehilanganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuluskanLaporanKehilanganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuluskanLaporanKehilanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
