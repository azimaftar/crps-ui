import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemakanDataKonfigurasiComponent } from './semakan-data-konfigurasi.component';

describe('SemakanDataKonfigurasiComponent', () => {
  let component: SemakanDataKonfigurasiComponent;
  let fixture: ComponentFixture<SemakanDataKonfigurasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemakanDataKonfigurasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemakanDataKonfigurasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
