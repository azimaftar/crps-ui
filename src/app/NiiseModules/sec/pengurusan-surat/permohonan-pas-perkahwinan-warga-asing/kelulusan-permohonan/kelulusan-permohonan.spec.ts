import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelulusanPermohonanComponents } from './kelulusan-permohonan.component';

describe('KelulusanPermohonanComponents', () => {
  let component: KelulusanPermohonanComponents;
  let fixture: ComponentFixture<KelulusanPermohonanComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelulusanPermohonanComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelulusanPermohonanComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
