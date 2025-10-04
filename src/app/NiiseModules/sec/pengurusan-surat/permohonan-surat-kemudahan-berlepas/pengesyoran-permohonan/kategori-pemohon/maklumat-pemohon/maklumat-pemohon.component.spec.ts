import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPemohon2Component } from './maklumat-pemohon-2.component';

describe('PengesyoranPermohonanComponent', () => {
  let component: MaklumatPemohon2Component;
  let fixture: ComponentFixture<MaklumatPemohon2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPemohon2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPemohon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
