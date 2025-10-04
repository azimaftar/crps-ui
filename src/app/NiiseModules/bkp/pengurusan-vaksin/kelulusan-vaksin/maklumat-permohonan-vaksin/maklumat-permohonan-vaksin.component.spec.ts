import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPermohonanVaksinComponent } from './maklumat-permohonan-vaksin.component';

describe('MaklumatPermohonanVaksinComponent', () => {
  let component: MaklumatPermohonanVaksinComponent;
  let fixture: ComponentFixture<MaklumatPermohonanVaksinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPermohonanVaksinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPermohonanVaksinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
