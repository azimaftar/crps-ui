import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemakanStatusEgateComponent } from './semakan-status-egate.component';

describe('SemakanStatusEgateComponent', () => {
  let component: SemakanStatusEgateComponent;
  let fixture: ComponentFixture<SemakanStatusEgateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemakanStatusEgateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemakanStatusEgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
