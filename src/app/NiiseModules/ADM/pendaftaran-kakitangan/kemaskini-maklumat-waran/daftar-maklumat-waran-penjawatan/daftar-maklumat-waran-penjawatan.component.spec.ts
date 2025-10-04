import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarMaklumatWaranPenjawatanComponent } from './daftar-maklumat-waran-penjawatan.component';

describe('DaftarMaklumatWaranPenjawatanComponent', () => {
  let component: DaftarMaklumatWaranPenjawatanComponent;
  let fixture: ComponentFixture<DaftarMaklumatWaranPenjawatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaftarMaklumatWaranPenjawatanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaftarMaklumatWaranPenjawatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
