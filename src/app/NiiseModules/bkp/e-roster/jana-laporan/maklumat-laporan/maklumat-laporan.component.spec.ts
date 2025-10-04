import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatLaporanComponent } from './maklumat-laporan.component';

describe('MaklumatLaporanComponent', () => {
  let component: MaklumatLaporanComponent;
  let fixture: ComponentFixture<MaklumatLaporanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatLaporanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatLaporanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
