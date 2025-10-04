import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemasKiniDataKonfigurasiComponent } from './kemas-kini-data-konfigurasi.component';

describe('KemasKiniDataKonfigurasiComponent', () => {
  let component: KemasKiniDataKonfigurasiComponent;
  let fixture: ComponentFixture<KemasKiniDataKonfigurasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemasKiniDataKonfigurasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemasKiniDataKonfigurasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
