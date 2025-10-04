import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamanUtamaSemakanComponent } from './laman-utama-semakan.component';

describe('LamanUtamaSemakanComponent', () => {
  let component: LamanUtamaSemakanComponent;
  let fixture: ComponentFixture<LamanUtamaSemakanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LamanUtamaSemakanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LamanUtamaSemakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
