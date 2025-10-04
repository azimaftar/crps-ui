import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPermohonan2Component } from './maklumat-permohonan2.component';

describe('MaklumatPermohonan2Component', () => {
  let component: MaklumatPermohonan2Component;
  let fixture: ComponentFixture<MaklumatPermohonan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPermohonan2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPermohonan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
