import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPerjalananDanKetuaPemohonComponent } from './maklumat-perjalanan-dan-ketua-pemohon.component';

describe('MaklumatPerjalananDanKetuaPemohonComponent', () => {
  let component: MaklumatPerjalananDanKetuaPemohonComponent;
  let fixture: ComponentFixture<MaklumatPerjalananDanKetuaPemohonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPerjalananDanKetuaPemohonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPerjalananDanKetuaPemohonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
