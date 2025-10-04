import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPermohonanGantianComponent } from './maklumat-permohonan-gantian.component';

describe('MaklumatPermohonanGantianComponent', () => {
  let component: MaklumatPermohonanGantianComponent;
  let fixture: ComponentFixture<MaklumatPermohonanGantianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPermohonanGantianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPermohonanGantianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
