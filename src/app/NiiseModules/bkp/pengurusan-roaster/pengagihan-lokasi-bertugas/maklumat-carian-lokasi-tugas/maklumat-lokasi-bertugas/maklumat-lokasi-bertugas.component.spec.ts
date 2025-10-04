import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatLokasiBertugasComponent } from './maklumat-lokasi-bertugas.component';

describe('MaklumatLokasiBertugasComponent', () => {
  let component: MaklumatLokasiBertugasComponent;
  let fixture: ComponentFixture<MaklumatLokasiBertugasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatLokasiBertugasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatLokasiBertugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
