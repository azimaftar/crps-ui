import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPemohonComponent } from './maklumat-pemohon.component';

describe('MaklumatPemohonComponent', () => {
  let component: MaklumatPemohonComponent;
  let fixture: ComponentFixture<MaklumatPemohonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPemohonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPemohonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
