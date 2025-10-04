import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesyoranPermohonanComponent } from './pengesyoran-permohonan.component';

describe('PengesyoranPermohonanComponent', () => {
  let component: PengesyoranPermohonanComponent;
  let fixture: ComponentFixture<PengesyoranPermohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesyoranPermohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesyoranPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
