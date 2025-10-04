import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesyoranMaklumatAgensiComponent } from './pengesyoran-maklumat-agensi.component';

describe('PengesyoranMaklumatAgensiComponent', () => {
  let component: PengesyoranMaklumatAgensiComponent;
  let fixture: ComponentFixture<PengesyoranMaklumatAgensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesyoranMaklumatAgensiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesyoranMaklumatAgensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
