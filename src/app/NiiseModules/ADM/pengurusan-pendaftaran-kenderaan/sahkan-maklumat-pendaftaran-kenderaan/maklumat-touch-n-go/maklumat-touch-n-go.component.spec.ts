import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatTouchNGoComponent } from './maklumat-touch-n-go.component';

describe('MaklumatTouchNGoComponent', () => {
  let component: MaklumatTouchNGoComponent;
  let fixture: ComponentFixture<MaklumatTouchNGoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatTouchNGoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatTouchNGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
