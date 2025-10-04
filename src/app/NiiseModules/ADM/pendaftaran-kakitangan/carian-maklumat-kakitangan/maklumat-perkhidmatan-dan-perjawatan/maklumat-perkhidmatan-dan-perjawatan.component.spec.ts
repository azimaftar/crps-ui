import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPerkhidmatanDanPerjawatanComponent } from './maklumat-perkhidmatan-dan-perjawatan.component';

describe('MaklumatPerkhidmatanDanPerjawatanComponent', () => {
  let component: MaklumatPerkhidmatanDanPerjawatanComponent;
  let fixture: ComponentFixture<MaklumatPerkhidmatanDanPerjawatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPerkhidmatanDanPerjawatanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPerkhidmatanDanPerjawatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
