import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatBayaranComponent } from './maklumat-bayaran.component';

describe('MaklumatPermohonan', () => {
  let component: MaklumatBayaranComponent;
  let fixture: ComponentFixture<MaklumatBayaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatBayaranComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatBayaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
