import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPermohonanComponent } from './maklumat-permohonan.component';

describe('MaklumatPermohonanComponent', () => {
  let component: MaklumatPermohonanComponent;
  let fixture: ComponentFixture<MaklumatPermohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPermohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
