import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatLaporanOTComponent } from './maklumat-laporan-ot.component';

describe('MaklumatLaporanOTComponent', () => {
  let component: MaklumatLaporanOTComponent;
  let fixture: ComponentFixture<MaklumatLaporanOTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatLaporanOTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatLaporanOTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
