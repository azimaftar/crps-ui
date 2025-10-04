import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemohonanOtComponent } from './permohonan-ot.component';

describe('PemohonanOtComponent', () => {
  let component: PemohonanOtComponent;
  let fixture: ComponentFixture<PemohonanOtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemohonanOtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemohonanOtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
