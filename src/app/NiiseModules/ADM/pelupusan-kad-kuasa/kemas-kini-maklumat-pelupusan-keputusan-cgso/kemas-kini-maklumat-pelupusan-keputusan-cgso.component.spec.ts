import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemasKiniMaklumatPelupusanKeputusanCgsoComponent } from './kemas-kini-maklumat-pelupusan-keputusan-cgso.component';

describe('KemasKiniMaklumatPelupusanKeputusanCgsoComponent', () => {
  let component: KemasKiniMaklumatPelupusanKeputusanCgsoComponent;
  let fixture: ComponentFixture<KemasKiniMaklumatPelupusanKeputusanCgsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemasKiniMaklumatPelupusanKeputusanCgsoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemasKiniMaklumatPelupusanKeputusanCgsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
