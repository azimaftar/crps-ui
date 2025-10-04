import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERosterComponent } from './e-roster.component';

describe('ERosterComponent', () => {
  let component: ERosterComponent;
  let fixture: ComponentFixture<ERosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ERosterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ERosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
