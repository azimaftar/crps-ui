import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationFlowComponent } from './navigation-flow.component';

describe('NavigationFlowComponent', () => {
  let component: NavigationFlowComponent;
  let fixture: ComponentFixture<NavigationFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
