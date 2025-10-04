import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelulusanPermohonanOtComponent } from './kelulusan-permohonan-ot.component';

describe('KelulusanPermohonanOtComponent', () => {
  let component: KelulusanPermohonanOtComponent;
  let fixture: ComponentFixture<KelulusanPermohonanOtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelulusanPermohonanOtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelulusanPermohonanOtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
