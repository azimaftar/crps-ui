import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LupusSubjekComponent } from './lupus-subjek.component';

describe('LupusSubjekComponent', () => {
  let component: LupusSubjekComponent;
  let fixture: ComponentFixture<LupusSubjekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LupusSubjekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LupusSubjekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
