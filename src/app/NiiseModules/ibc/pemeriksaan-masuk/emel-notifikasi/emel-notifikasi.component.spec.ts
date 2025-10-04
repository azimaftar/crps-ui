import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmelNotifikasiComponent } from './emel-notifikasi.component';

describe('EmelNotifikasiComponent', () => {
  let component: EmelNotifikasiComponent;
  let fixture: ComponentFixture<EmelNotifikasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmelNotifikasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmelNotifikasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
