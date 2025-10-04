import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanParameterAplikasiComponent } from './pengurusan-parameter-aplikasi.component';

describe('PengurusanParameterAplikasiComponent', () => {
  let component: PengurusanParameterAplikasiComponent;
  let fixture: ComponentFixture<PengurusanParameterAplikasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengurusanParameterAplikasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengurusanParameterAplikasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
