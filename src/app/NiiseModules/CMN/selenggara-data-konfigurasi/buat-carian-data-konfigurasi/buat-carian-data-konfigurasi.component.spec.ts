import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuatCarianDataKonfigurasiComponent } from './buat-carian-data-konfigurasi.component';

describe('BuatCarianDataKonfigurasiComponent', () => {
  let component: BuatCarianDataKonfigurasiComponent;
  let fixture: ComponentFixture<BuatCarianDataKonfigurasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuatCarianDataKonfigurasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuatCarianDataKonfigurasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
