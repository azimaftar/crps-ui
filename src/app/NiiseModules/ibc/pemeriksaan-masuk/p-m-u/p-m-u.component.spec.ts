import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMUComponent } from './p-m-u.component';

describe('PMUComponent', () => {
  let component: PMUComponent;
  let fixture: ComponentFixture<PMUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PMUComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PMUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
