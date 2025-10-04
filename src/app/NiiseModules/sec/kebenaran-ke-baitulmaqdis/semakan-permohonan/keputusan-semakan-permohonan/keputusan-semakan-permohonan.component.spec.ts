import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeputusanSemakanPermohonanComponent } from './keputusan-semakan-permohonan.component';

describe('KeputusanSemakanPermohonanComponent', () => {
  let component: KeputusanSemakanPermohonanComponent;
  let fixture: ComponentFixture<KeputusanSemakanPermohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeputusanSemakanPermohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeputusanSemakanPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
