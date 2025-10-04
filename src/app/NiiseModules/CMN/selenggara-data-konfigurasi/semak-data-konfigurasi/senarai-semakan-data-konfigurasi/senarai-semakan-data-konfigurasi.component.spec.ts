import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaraiSemakanDataKonfigurasiComponent } from './senarai-semakan-data-konfigurasi.component';

describe('SenaraiSemakanDataKonfigurasiComponent', () => {
  let component: SenaraiSemakanDataKonfigurasiComponent;
  let fixture: ComponentFixture<SenaraiSemakanDataKonfigurasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenaraiSemakanDataKonfigurasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenaraiSemakanDataKonfigurasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
