import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetapanEDigitalStampingComponent } from './tetapan-e-digital-stamping.component';

describe('TetapanEDigitalStampingComponent', () => {
  let component: TetapanEDigitalStampingComponent;
  let fixture: ComponentFixture<TetapanEDigitalStampingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TetapanEDigitalStampingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TetapanEDigitalStampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
