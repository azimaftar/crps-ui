import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeputusanPermohonanComponent } from './keputusan-permohonan.component';

describe('SemakanPermohonanComponent', () => {
  let component: KeputusanPermohonanComponent;
  let fixture: ComponentFixture<KeputusanPermohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeputusanPermohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeputusanPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
