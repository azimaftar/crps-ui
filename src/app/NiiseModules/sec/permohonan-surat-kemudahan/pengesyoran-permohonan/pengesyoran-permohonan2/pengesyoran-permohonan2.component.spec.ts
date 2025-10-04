import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesyoranPermohonan2Component } from './pengesyoran-permohonan2.component';

describe('PengesyoranPermohonan2Component', () => {
  let component: PengesyoranPermohonan2Component;
  let fixture: ComponentFixture<PengesyoranPermohonan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesyoranPermohonan2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesyoranPermohonan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
