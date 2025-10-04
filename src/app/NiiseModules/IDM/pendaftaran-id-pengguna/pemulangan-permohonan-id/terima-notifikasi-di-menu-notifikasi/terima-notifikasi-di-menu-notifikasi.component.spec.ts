import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerimaNotifikasiDiMenuNotifikasiComponent } from './terima-notifikasi-di-menu-notifikasi.component';

describe('TerimaNotifikasiDiMenuNotifikasiComponent', () => {
  let component: TerimaNotifikasiDiMenuNotifikasiComponent;
  let fixture: ComponentFixture<TerimaNotifikasiDiMenuNotifikasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerimaNotifikasiDiMenuNotifikasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerimaNotifikasiDiMenuNotifikasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
