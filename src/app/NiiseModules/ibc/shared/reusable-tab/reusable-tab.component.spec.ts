import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableTabComponent } from './reusable-tab.component';

describe('ReusableTabComponent', () => {
  let component: ReusableTabComponent;
  let fixture: ComponentFixture<ReusableTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
