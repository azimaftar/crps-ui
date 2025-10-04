import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesyoranPermohonanComponents } from './pengesyoran-permohonan.component';

describe('PengesyoranPermohonanComponents', () => {
  let component: PengesyoranPermohonanComponents;
  let fixture: ComponentFixture<PengesyoranPermohonanComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesyoranPermohonanComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesyoranPermohonanComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
