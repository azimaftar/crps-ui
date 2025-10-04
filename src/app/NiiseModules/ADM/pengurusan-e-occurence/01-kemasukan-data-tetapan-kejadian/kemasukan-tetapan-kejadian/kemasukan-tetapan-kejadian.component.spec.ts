import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemasukanTetapanKejadianComponent } from './kemasukan-tetapan-kejadian.component';

describe('KemasukanTetapanKejadianComponent', () => {
  let component: KemasukanTetapanKejadianComponent;
  let fixture: ComponentFixture<KemasukanTetapanKejadianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemasukanTetapanKejadianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemasukanTetapanKejadianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
