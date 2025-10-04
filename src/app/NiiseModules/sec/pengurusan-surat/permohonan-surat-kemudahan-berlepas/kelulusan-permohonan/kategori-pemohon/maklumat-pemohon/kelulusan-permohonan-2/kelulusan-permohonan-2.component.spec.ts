import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelulusanPermohonan2Component } from './kelulusan-permohonan-2.component';

describe('KelulusanPermohonan2Component', () => {
  let component: KelulusanPermohonan2Component;
  let fixture: ComponentFixture<KelulusanPermohonan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelulusanPermohonan2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelulusanPermohonan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
