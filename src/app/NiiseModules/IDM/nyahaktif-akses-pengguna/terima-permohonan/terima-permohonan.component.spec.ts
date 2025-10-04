import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerimaPermohonanComponent } from './terima-permohonan.component';

describe('TerimaPermohonanComponent', () => {
  let component: TerimaPermohonanComponent;
  let fixture: ComponentFixture<TerimaPermohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerimaPermohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerimaPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
