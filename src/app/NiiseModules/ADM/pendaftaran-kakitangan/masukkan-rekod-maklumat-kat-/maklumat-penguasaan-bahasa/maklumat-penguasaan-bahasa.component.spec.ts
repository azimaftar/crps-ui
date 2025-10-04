import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPenguasaanBahasaComponent } from './maklumat-penguasaan-bahasa.component';

describe('MaklumatPenguasaanBahasaComponent', () => {
  let component: MaklumatPenguasaanBahasaComponent;
  let fixture: ComponentFixture<MaklumatPenguasaanBahasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPenguasaanBahasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPenguasaanBahasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
