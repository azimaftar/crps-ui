import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LupusSlComponent } from './lupus-sl.component';

describe('LupusSlComponent', () => {
  let component: LupusSlComponent;
  let fixture: ComponentFixture<LupusSlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LupusSlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LupusSlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
