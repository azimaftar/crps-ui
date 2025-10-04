import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarKemasKiniLaporanComponent } from './daftar-kemas-kini-laporan.component';

describe('DaftarKemasKiniLaporanComponent', () => {
  let component: DaftarKemasKiniLaporanComponent;
  let fixture: ComponentFixture<DaftarKemasKiniLaporanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaftarKemasKiniLaporanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaftarKemasKiniLaporanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
