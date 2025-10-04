import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesahanMaklumatPejabatComponent } from './pengesahan-maklumat-pejabat.component';

describe('PengesahanMaklumatPejabatComponent', () => {
  let component: PengesahanMaklumatPejabatComponent;
  let fixture: ComponentFixture<PengesahanMaklumatPejabatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesahanMaklumatPejabatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesahanMaklumatPejabatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
