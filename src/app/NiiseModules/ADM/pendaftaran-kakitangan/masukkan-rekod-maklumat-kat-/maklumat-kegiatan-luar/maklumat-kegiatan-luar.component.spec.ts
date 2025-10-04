import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatKegiatanLuarComponent } from './maklumat-kegiatan-luar.component';

describe('MaklumatKegiatanLuarComponent', () => {
  let component: MaklumatKegiatanLuarComponent;
  let fixture: ComponentFixture<MaklumatKegiatanLuarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatKegiatanLuarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatKegiatanLuarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
