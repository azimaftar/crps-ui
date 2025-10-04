import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahDataKonfigurasiComponent } from './tambah-data-konfigurasi.component';

describe('TambahDataKonfigurasiComponent', () => {
  let component: TambahDataKonfigurasiComponent;
  let fixture: ComponentFixture<TambahDataKonfigurasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TambahDataKonfigurasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambahDataKonfigurasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
