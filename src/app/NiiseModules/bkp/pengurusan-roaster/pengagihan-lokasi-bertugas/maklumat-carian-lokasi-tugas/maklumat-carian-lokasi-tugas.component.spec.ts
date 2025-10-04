import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatCarianLokasiTugasComponent } from './maklumat-carian-lokasi-tugas.component';

describe('MaklumatCarianLokasiTugasComponent', () => {
  let component: MaklumatCarianLokasiTugasComponent;
  let fixture: ComponentFixture<MaklumatCarianLokasiTugasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatCarianLokasiTugasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatCarianLokasiTugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
