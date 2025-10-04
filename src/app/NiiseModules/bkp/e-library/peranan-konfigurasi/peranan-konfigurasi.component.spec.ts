import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerananKonfigurasiComponent } from './peranan-konfigurasi.component';

describe('PerananKonfigurasiComponent', () => {
  let component: PerananKonfigurasiComponent;
  let fixture: ComponentFixture<PerananKonfigurasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerananKonfigurasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerananKonfigurasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
