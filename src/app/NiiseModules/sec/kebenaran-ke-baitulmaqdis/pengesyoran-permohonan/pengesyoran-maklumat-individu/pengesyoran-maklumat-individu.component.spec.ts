import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPengesyoranPermohonanComponent } from './pengesyoran-maklumat-individu.component';

describe('MaklumatPengesyoranPermohonanComponent', () => {
  let component: MaklumatPengesyoranPermohonanComponent;
  let fixture: ComponentFixture<MaklumatPengesyoranPermohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPengesyoranPermohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPengesyoranPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
