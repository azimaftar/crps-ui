import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerimaNotifikasiComponent } from './terima-notifikasi.component';

describe('TerimaNotifikasiComponent', () => {
  let component: TerimaNotifikasiComponent;
  let fixture: ComponentFixture<TerimaNotifikasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerimaNotifikasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerimaNotifikasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
