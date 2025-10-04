import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPermohonan3Component } from './maklumat-permohonan3.component';

describe('MaklumatPermohonan3Component', () => {
  let component: MaklumatPermohonan3Component;
  let fixture: ComponentFixture<MaklumatPermohonan3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPermohonan3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPermohonan3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
