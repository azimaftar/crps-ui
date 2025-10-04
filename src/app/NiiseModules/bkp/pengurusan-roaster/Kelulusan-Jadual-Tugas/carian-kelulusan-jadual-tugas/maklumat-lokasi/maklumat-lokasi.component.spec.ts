import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatLokasiComponent } from './maklumat-lokasi.component';

describe('MaklumatLokasiComponent', () => {
  let component: MaklumatLokasiComponent;
  let fixture: ComponentFixture<MaklumatLokasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatLokasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatLokasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
