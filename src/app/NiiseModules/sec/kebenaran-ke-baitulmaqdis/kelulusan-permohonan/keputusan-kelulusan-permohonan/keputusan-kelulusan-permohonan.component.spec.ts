import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeputusanKelulusanPermohonanComponent } from './keputusan-kelulusan-permohonan.component';

describe('KeputusanKelulusanPermohonanComponent', () => {
  let component: KeputusanKelulusanPermohonanComponent;
  let fixture: ComponentFixture<KeputusanKelulusanPermohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeputusanKelulusanPermohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeputusanKelulusanPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
