import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftListTestComponent } from './draft-main.component';

describe('DraftListTestComponent', () => {
  let component: DraftListTestComponent;
  let fixture: ComponentFixture<DraftListTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftListTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftListTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
