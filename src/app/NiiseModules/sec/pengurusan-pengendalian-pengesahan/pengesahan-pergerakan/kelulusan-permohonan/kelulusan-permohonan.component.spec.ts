import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelulusanPermohonanComponent } from './kelulusan-permohonan.component';

describe('SemakanPermohonanComponent', () => {
  let component: KelulusanPermohonanComponent;
  let fixture: ComponentFixture<KelulusanPermohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelulusanPermohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelulusanPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
