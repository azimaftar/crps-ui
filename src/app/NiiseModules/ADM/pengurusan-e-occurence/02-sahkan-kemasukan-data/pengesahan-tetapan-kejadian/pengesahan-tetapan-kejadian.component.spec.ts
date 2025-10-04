import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesahanTetapanKejadianComponent } from './pengesahan-tetapan-kejadian.component';

describe('PengesahanTetapanKejadianComponent', () => {
  let component: PengesahanTetapanKejadianComponent;
  let fixture: ComponentFixture<PengesahanTetapanKejadianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesahanTetapanKejadianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesahanTetapanKejadianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
