import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelulusanStatusComponent } from './kelulusan-status.component';

describe('KelulusanStatusComponent', () => {
  let component: KelulusanStatusComponent;
  let fixture: ComponentFixture<KelulusanStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelulusanStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelulusanStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
