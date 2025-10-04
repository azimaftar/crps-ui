import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatTanpaKebenaranComponent } from './maklumat-tanpa-kebenaran.component';

describe('MaklumatTanpaKebenaranComponent', () => {
  let component: MaklumatTanpaKebenaranComponent;
  let fixture: ComponentFixture<MaklumatTanpaKebenaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatTanpaKebenaranComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatTanpaKebenaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
